<template>
  <div>
    <Card >
      <div class="search-con search-con-top">
        <div style="margin: 10px">
          时间：<date-picker type="month" placeholder="Select month" style="width: 200px" @on-change="getSelectedTime" ></date-picker>
          <i-button type="primary"  @click="searchByTime"><Icon type="ios-search" size="15"/></i-button>
        </div>
        <collapse>
          <panel name="options">
            筛选
            <div slot="content">
              <collapse simple>
                <panel name="center-panel">
                  部门
                  <div slot="content">
                    <checkbox
                      :indeterminate="checkGroup.departments.indeterminate"
                      :value="checkGroup.departments.checkAll"
                      @click.prevent.native="handleCheckAll(checkGroup.departments)">全选</checkbox>
                    <checkbox-group v-model="checkGroup.departments.checkAllGroup"
                                    @on-change="checkAllGroupChange(checkGroup.departments.checkAllGroup,checkGroup.departments)">
                      <checkbox v-for="item in departments" :value="item" :key="item" :label="item"></checkbox>
                    </checkbox-group>

                  </div>
                </panel>
                <panel name="costDetail-panel">
                  费用项目
                  <div slot="content">
                    <checkbox
                      :indeterminate="checkGroup.costDetail.indeterminate"
                      :value="checkGroup.costDetail.checkAll"
                      @click.prevent.native="handleCheckAll(checkGroup.costDetail)">全选</checkbox>
                    <checkbox-group v-model="checkGroup.costDetail.checkAllGroup"
                                    @on-change="checkAllGroupChange(checkGroup.costDetail.checkAllGroup,checkGroup.costDetail)">
                      <checkbox v-for="item in costDetail" :value="item" :key="item" :label="item"></checkbox>
                    </checkbox-group>
                  </div>
                </panel>
              </collapse>
              <br>
              <div style="text-align: center;">
                <button-group >
                  <i-button type="primary" size="small"
                            @click="reLoadData(checkGroup.costDetail.checkAllGroup)">筛选</i-button>
                </button-group>
              </div>
            </div>
          </panel>
        </collapse>
      </div>

        <i-table  :columns="statisticsHeader" :data="statisticsContent" size="small" height="500" ref="table"></i-table>
        <br>
        <i-button type="primary" size="large" @click="exportData(1)"><icon type="ios-download-outline"></icon> 导出到csv文件</i-button>
    </Card>
    <!--<i-button @click="test">test</i-button>-->

  </div>
</template>

<script>
// import Table from '_c/tables'
import "_c/tables/index.less";
import { manualData } from "@/data/manual";
import { statisticsData } from "@/data/statistics";
import { handleCheckAll, checkAllGroupChange } from "@/libs/table";
import { getStatisticsCostDepartment } from "@/api/data";
// test
// import { statisticsDataTest, statisticDepartmentTest } from '@/api/testData'

export default {
  name: "statistics_cost_department",

  data() {
    return {
      // 筛选分类原始数据
      // 多选组合
      checkGroup: {
        departments: {
          indeterminate: false,
          checkAll: true,
          sectionAll: [
            "空侧邮件作业区",
            "陆侧邮件作业区",
            "扁平件邮件作业区",
            "技术保障部",
            "生产指挥调度中心",
            "综合办公室",
            "计划财务部",
            "人力资源部",
            "安全保卫部",
            "工会",
            "邮航",
            "战略"
          ],
          checkAllGroup: [
            "空侧邮件作业区",
            "陆侧邮件作业区",
            "扁平件邮件作业区",
            "技术保障部",
            "生产指挥调度中心",
            "综合办公室",
            "计划财务部",
            "人力资源部",
            "安全保卫部",
            "工会",
            "邮航",
            "战略"
          ]
        },
        costDetail: {
          indeterminate: false,
          checkAll: true,
          sectionAll: [
            "人工成本",
            "折旧、摊销",
            "运输费",
            "修理费",
            "低值易耗品",
            "业务费",
            "各项税费",
            "纯管理费"
          ],
          checkAllGroup: [
            "人工成本",
            "折旧、摊销",
            "运输费",
            "修理费",
            "低值易耗品",
            "业务费",
            "各项税费",
            "纯管理费"
          ]
        }
      },
      // 当前表格数据
      statisticsOriginal: {},
      statisticsData: {},
      statisticsHeader: [],
      statisticsContent: [],

      // test

      //  筛选项
      costItems: statisticsData.costItems, // 费用项目所有 明细
      costItemsGroup: statisticsData.costItemsGroup, // 费用项目组合
      departments: statisticsData.department, // 部门
      timeSelected: "",
      centersAll: [], // 所有责任中心
      costDetail: [] // 费用项目
    };
  },
  methods: {
    // 搜索后刷新表格
    updateData(data, selectedItems) {
      this.statisticsContent = [];
      this.statisticsHeader = [];
      this.statisticsContent = this.getStatisticsTableData(data, selectedItems);
      if (this.statisticsContent.length) {
        this.statisticsHeader = this.getHeader(this.statisticsContent[0]);
      } else {
        this.statisticsHeader = [];
      }
    },
    // 筛选之后刷新表格，增加最后一行的统计
    reLoadData(selectedItems) {
      if (Object.keys(this.statisticsOriginal).length) {
        this.statisticsContent = [];
        this.statisticsHeader = [];
        let data = this.getStatisticsTableData(
          this.statisticsOriginal,
          this.checkGroup.departments.checkAllGroup
        );
        if (selectedItems.length) {
          let result = {};
          let resultContent = [];
          let filterSelected = [];
          for (let item in this.costItemsGroup) {
            if (selectedItems.indexOf(item) > -1) {
              filterSelected.push(item);
              filterSelected = filterSelected.concat(this.costItemsGroup[item]);
            }
          }
          let j = 0;
          for (let i = 0; i < filterSelected.length; i++) {
            for (; j < data.length; j++) {
              if (data[j]["费用项目"].indexOf(filterSelected[i]) > -1) {
                resultContent.push(data[j]);
                break;
              }
            }
          }
          for (let trg in resultContent[0]) {
            result["费用项目"] = "小计";
            result[trg] = 0;
            for (let i = 0; i < resultContent.length; i++) {
              result[trg] += resultContent[i][trg];
            }
          }
          resultContent.push(result);
          this.statisticsContent = resultContent;
          this.statisticsHeader = this.getHeader(this.statisticsContent[0]);
        } else {
          this.statisticsContent = [];
          this.$Message.info("未找到数据");
        }
      } else {
        this.statisticsHeader = [];
        this.$Message.info("未找到数据，请先搜索");
      }
    },
    getCostDetail() {
      for (let total in this.costItemsGroup) {
        this.costDetail.push(total);
      }
    },
    getSelectedTime(msg) {
      this.timeSelected = msg;
    },
    searchByTime() {
      console.log("searchByTime");
      if (this.timeSelected) {
        getStatisticsCostDepartment({
          time: this.timeSelected
        })
          .then(res => {
            this.statisticsOriginal = res.data;
            this.updateData(res.data, this.checkGroup.departments.sectionAll);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$Message.warning("请选择时间");
      }
    },
    getSum(arr) {
      return arr.reduce(function(prev, curr, idx, arr) {
        return prev + curr;
      });
    },
    getStatisticsTableData(data, selectedCenters) {
      console.log("data");
      console.log(data);
      console.log("selectedCenters");
      console.log(selectedCenters);

      let result = [];
      let sumRow = [];
      for (let i = 0; i <= this.costItems.length; i++) {
        sumRow[i] = 0;
        result.push({
          费用项目: this.costItems[i]
        });
        for (let item in data) {
          if (selectedCenters.indexOf(item) > -1) {
            if (i === this.costItems.length) {
              result[i]["费用项目"] = "小计";
              result[i][item] = this.getSum(data[item]);
              sumRow[i] += this.getSum(data[item]);
            } else {
              result[i][item] = data[item][i];
              sumRow[i] += data[item][i];
            }
          }
        }
        result[i]["合计"] = sumRow[i];
      }
      return result;
    },

    getHeader(data) {
      this.statisticsHeader = [];
      for (let item in data) {
        let temp = {
          title: "",
          key: "",
          fixed: "",
          ellipsis: true,
          tooltip: true
        };
        temp.title = item;
        temp.key = item;
        if (item === "费用项目") {
          temp.fixed = "left";
        } else {
          temp.render = (h, params) => {
            return h("div", params.row[item].toFixed(2));
          };
        }
        if (Object.keys(data).length > 9) {
          temp.width = 130;
        }
        this.statisticsHeader.push(temp);
      }
      return this.statisticsHeader;
    },

    getCurrentPageData(data, start, end) {
      return data.slice(start, end);
    },

    getCurrentPage(page) {
      this.currentPage = page;
    },
    getPageSize(size) {
      console.log(size);
      this.pageSize = size;
    },

    // 多选框设置
    handleCheckAll(current) {
      handleCheckAll(current);
    },
    checkAllGroupChange(data, current) {
      checkAllGroupChange(data, current);
    },
    exportData(type) {
      if (type === 1) {
        this.$refs.table.exportCsv({
          filename: "成本费用明细报表（部门）"
        });
      } else if (type === 2) {
        this.$refs.table.exportCsv({
          filename: "Sorting and filtering data",
          original: false
        });
      } else if (type === 3) {
        this.$refs.table.exportCsv({
          filename: "Custom data",
          columns: this.columns8.filter((col, index) => index < 4),
          data: this.data7.filter((data, index) => index < 4)
        });
      }
    },
    test() {
      console.log("test");
      this.updateData(
        this.statisticsOriginal,
        this.checkGroup.departments.sectionAll
      );
      // this.getStatisticsTableData(this.statisticsOriginal, this.checkGroup.departments.checkAllGroup)
    }
  },
  mounted() {
    this.getCostDetail();
    // this.statisticsOriginal = statisticDepartmentTest
  }
};
</script>

<style scoped>
</style>
