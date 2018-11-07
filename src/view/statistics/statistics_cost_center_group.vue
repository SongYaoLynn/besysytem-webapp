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
                  责任中心
                  <div slot="content">
                    <checkbox
                      :indeterminate="checkGroup.centersAll.indeterminate"
                      :value="checkGroup.centersAll.checkAll"
                      @click.prevent.native="handleCheckAll(checkGroup.centersAll)">全选</checkbox>
                    <span style="color: #001529; margin-left: 10px">是否按班组展开：</span><checkbox v-model="unfold">展开</checkbox>
                    <checkbox-group v-model="checkGroup.centersAll.checkAllGroup"
                                    @on-change="checkAllGroupChange(checkGroup.centersAll.checkAllGroup,checkGroup.centersAll)">
                      <checkbox v-for="item in centersAll" :value="item" :key="item" :label="item"></checkbox>
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
    <!--<i-button @click="test2">test2</i-button>-->

  </div>
</template>

<script>
// import Table from '_c/tables'
import "_c/tables/index.less";
import { manualData } from "@/data/manual";
import { statisticsData } from "@/data/statistics";
import { handleCheckAll, checkAllGroupChange } from "@/libs/table";
import { getStatisticsCostCenterGroup } from "@/api/data";
// test
// import { statisticsDataTest } from '@/api/testData'

export default {
  name: "statistics_cost_center_group",

  data() {
    return {
      // 筛选分类原始数据
      // 多选组合
      checkGroup: {
        centersAll: {
          indeterminate: false,
          checkAll: true,
          sectionAll: [
            "空侧责任中心",
            "陆侧责任中心",
            "扁平件责任中心",
            "设备责任中心",
            "运输责任中心",
            "综合责任中心",
            "邮航",
            "战略责任中心"
          ],
          checkAllGroup: [
            "空侧责任中心",
            "陆侧责任中心",
            "扁平件责任中心",
            "设备责任中心",
            "运输责任中心",
            "综合责任中心",
            "邮航",
            "战略责任中心"
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
      centersCurrent: statisticsData.centers, // 责任中心及其下分支组合
      timeSelected: "",
      centersAll: [], // 所有责任中心
      costDetail: [], // 费用项目
      // 是否展开
      unfold: true
    };
  },
  methods: {
    // 搜索后刷新表格
    updateData(data) {
      this.statisticsContent = [];
      this.statisticsHeader = [];
      this.statisticsContent = this.getStatisticsTableData(
        data,
        this.unfold,
        this.checkGroup.centersAll.checkAllGroup
      );
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
          this.unfold,
          this.checkGroup.centersAll.checkAllGroup
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
    getAllCenters() {
      for (let center in statisticsData.centers) {
        this.centersAll.push(center);
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
        getStatisticsCostCenterGroup({
          time: this.timeSelected
        })
          .then(res => {
            this.statisticsOriginal = res.data;
            this.updateData(res.data);
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
    getStatisticsTableData(data, state, selectedCenters) {
      let result = [];
      let sumRow = [];
      // 不展开时
      if (state) {
        // 当前所选责任中心下的分组
        let selectedGroup = [];
        for (let trg in this.centersCurrent) {
          if (selectedCenters.indexOf(trg) > -1) {
            selectedGroup = selectedGroup.concat(this.centersCurrent[trg]);
          }
        }
        for (let i = 0; i <= this.costItems.length; i++) {
          sumRow[i] = 0;
          result.push({
            费用项目: this.costItems[i]
          });
          for (let item in data) {
            if (selectedGroup.indexOf(item) > -1) {
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
      } else {
        for (let i = 0; i <= this.costItems.length; i++) {
          sumRow[i] = 0;
          result.push({
            费用项目: this.costItems[i]
          });
          for (let item in this.centersCurrent) {
            if (selectedCenters.indexOf(item) > -1) {
              if (i === this.costItems.length) {
                result[i]["费用项目"] = "小计";
                result[i][item] = 0;
                for (let m = 0; m < this.costItems.length; m++) {
                  result[i][item] += result[m][item];
                }
                sumRow[i] += result[i][item];
              } else {
                let centerSum = [];
                for (let j = 0; j < this.centersCurrent[item].length; j++) {
                  centerSum.push(data[this.centersCurrent[item][j]][i]);
                }
                result[i][item] = this.getSum(centerSum);
                sumRow[i] += result[i][item];
              }
            }
          }
          result[i]["合计"] = sumRow[i];
        }
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
          filename: "成本费用明细"
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
      // console.log(this.getFilters(this.costItemsGroup))
      console.log("test");
      // console.log(this.getStatisticsTableData(this.statisticsOriginal, this.unfold, this.checkGroup.centersAll.checkAllGroup))
      // this.testC = testContent
      // this.updateData(this.statisticsOriginal)
    },
    test2() {}
  },
  mounted() {
    this.getAllCenters();
    this.getCostDetail();
    // this.statisticsOriginal = statisticsDataTest
  }
};
</script>

<style scoped>
</style>
