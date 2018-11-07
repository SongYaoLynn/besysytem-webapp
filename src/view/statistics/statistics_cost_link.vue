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
                  作业区
                  <div slot="content">
                    <checkbox
                      :indeterminate="checkGroup.workArea.indeterminate"
                      :value="checkGroup.workArea.checkAll"
                      @click.prevent.native="handleCheckAll(checkGroup.workArea)">全选</checkbox>
                    <checkbox-group v-model="checkGroup.workArea.checkAllGroup"
                                    @on-change="checkAllGroupChange(checkGroup.workArea.checkAllGroup,checkGroup.workArea)">
                      <checkbox v-for="item in workArea" :value="item" :key="item" :label="item"></checkbox>
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
        <i-table border :columns="statisticsHeader.air" :data="statisticsContent.air" size="small" height="500" ref="air" v-show="tableViewState['air']"></i-table>
        <i-table border :columns="statisticsHeader.ground" :data="statisticsContent.ground" size="small" height="500" ref="ground" v-show="tableViewState['ground']"></i-table>
        <i-table border :columns="statisticsHeader.flat" :data="statisticsContent.flat" size="small" height="500" ref="flat" v-show="tableViewState['flat']"></i-table>
        <i-table border :columns="statisticsHeader.air_ground" :data="statisticsContent.air_ground" size="small" height="500" ref="air_ground" v-show="tableViewState['air_ground']"></i-table>
        <i-table border :columns="statisticsHeader.air_flat" :data="statisticsContent.air_flat" size="small" height="500" ref="air_flat" v-show="tableViewState['air_flat']"></i-table>
        <i-table border :columns="statisticsHeader.ground_flat" :data="statisticsContent.ground_flat" size="small" height="500" ref="ground_flat" v-show="tableViewState['ground_flat']"></i-table>
        <i-table border :columns="statisticsHeader.all" :data="statisticsContent.all" size="small" height="500" ref="all" v-show="tableViewState['all']"></i-table>
        <br>
        <i-button type="primary" size="large" @click="exportData" v-show="exportViewState">
          <icon type="ios-download-outline"></icon> 导出到csv文件</i-button>
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
import { tableHeader } from "@/data/statisticsTable";
import { handleCheckAll, checkAllGroupChange } from "@/libs/table";
import { getStatisticsCostLink } from "@/api/data";
// test
// import { statisticsDataTest, statisticsLinkTest, testHeader, testContent } from '@/api/testData'

export default {
  name: "statistics_cost_link",

  data() {
    return {
      // 筛选分类原始数据
      // 多选组合
      checkGroup: {
        workArea: {
          indeterminate: false,
          checkAll: true,
          sectionAll: ["陆侧邮件作业区", "空侧邮件作业区", "扁平件邮件作业区"],
          checkAllGroup: [
            "陆侧邮件作业区",
            "空侧邮件作业区",
            "扁平件邮件作业区"
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
      statisticsHeader: tableHeader,
      statisticsContent: {
        air: [],
        ground: [],
        flat: [],
        air_ground: [],
        air_flat: [],
        ground_flat: [],
        all: []
      },

      //  筛选项
      costItems: statisticsData.costItems, // 费用项目所有 明细
      costItemsGroup: statisticsData.costItemsGroup, // 费用项目组合
      centersCurrent: statisticsData.centers, // 责任中心及其下分支组合
      linksGroup: statisticsData.link, // 生产环节组
      workArea: [], // 所有作业区
      timeSelected: "",
      centersAll: [], // 所有责任中心
      costDetail: [], // 费用项目
      // 表格显示
      tableViewState: {
        air: false,
        ground: false,
        flat: false,
        air_ground: false,
        air_flat: false,
        ground_flat: false,
        all: false
      },
      exportViewState: false

      // test
    };
  },
  methods: {
    clearRestTable(current) {
      for (let tab in this.statisticsContent) {
        if (tab !== current) {
          this.statisticsContent[tab] = [];
          this.tableViewState[tab] = false;
        } else {
          this.tableViewState[tab] = true;
          this.exportViewState = true;
        }
      }
    },
    setCurrentTableInfo(data, selectedItems) {
      if (selectedItems.length === 1) {
        if (selectedItems.indexOf("空侧邮件作业区") > -1) {
          this.clearRestTable("air");
          this.statisticsContent["air"] = this.getStatisticsTableData(
            data,
            selectedItems
          );
          return this.statisticsContent["air"];
        } else if (selectedItems.indexOf("陆侧邮件作业区") > -1) {
          this.clearRestTable("ground");
          this.statisticsContent["ground"] = this.getStatisticsTableData(
            data,
            selectedItems
          );
          return this.statisticsContent["ground"];
        } else {
          this.clearRestTable("flat");
          this.statisticsContent["flat"] = this.getStatisticsTableData(
            data,
            selectedItems
          );
          return this.statisticsContent["flat"];
        }
      } else if (selectedItems.length === 2) {
        if (
          selectedItems.indexOf("空侧邮件作业区") > -1 &&
          selectedItems.indexOf("陆侧邮件作业区") > -1
        ) {
          this.clearRestTable("air_ground");
          this.statisticsContent["air_ground"] = this.getStatisticsTableData(
            data,
            selectedItems
          );
          return this.statisticsContent["air_ground"];
        } else if (
          selectedItems.indexOf("空侧邮件作业区") > -1 &&
          selectedItems.indexOf("扁平件邮件作业区") > -1
        ) {
          this.clearRestTable("air_flat");
          this.statisticsContent["air_flat"] = this.getStatisticsTableData(
            data,
            selectedItems
          );
          return this.statisticsContent["air_flat"];
        } else {
          this.clearRestTable("ground_flat");
          this.statisticsContent["ground_flat"] = this.getStatisticsTableData(
            data,
            selectedItems
          );
          return this.statisticsContent["ground_flat"];
        }
      } else if (selectedItems.length === 3) {
        this.clearRestTable("all");
        this.statisticsContent["all"] = this.getStatisticsTableData(
          data,
          selectedItems
        );
        return this.statisticsContent["all"];
      } else {
        this.clearRestTable("");
        this.exportViewState = false;
        return [];
      }
    },
    // 搜索后刷新表格
    updateData(data, selectedItems) {
      this.setCurrentTableInfo(data, selectedItems);
    },
    // 筛选之后刷新表格，增加最后一行的统计
    reLoadData(selectedItems) {
      if (Object.keys(this.statisticsOriginal).length) {
        if (selectedItems.length) {
          let data = this.setCurrentTableInfo(
            this.statisticsOriginal,
            this.checkGroup.workArea.checkAllGroup
          );
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
          for (let state in this.tableViewState) {
            if (this.tableViewState[state]) {
              this.statisticsContent[state] = resultContent;
            }
          }
        } else {
          this.statisticsContent = [];
          this.$Message.info("未找到数据");
        }
      } else {
        this.statisticsHeader = [];
        this.$Message.info("未找到数据，请先搜索");
      }
    },
    getWorkArea() {
      for (let link in statisticsData.link) {
        this.workArea.push(link);
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
        getStatisticsCostLink({
          time: this.timeSelected
        })
          .then(res => {
            this.statisticsOriginal = res.data;
            this.updateData(
              this.statisticsOriginal,
              this.checkGroup.workArea.sectionAll
            );
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
      let result = [];
      let sumRow = [];
      for (let i = 0; i <= this.costItems.length; i++) {
        sumRow[i] = 0;
        result.push({
          费用项目: this.costItems[i]
        });
        for (let center in data) {
          if (selectedCenters.indexOf(center) > -1) {
            for (let centerItem in data[center]) {
              if (i === this.costItems.length) {
                result[i]["费用项目"] = "小计";
                result[i][center + centerItem] = this.getSum(
                  data[center][centerItem]
                );
                sumRow[i] += this.getSum(data[center][centerItem]);
                // sumRow[i] += result[i][center + centerItem]
              } else {
                result[i][center + centerItem] = data[center][centerItem][i];
                sumRow[i] += data[center][centerItem][i];
              }
            }
          }
        }
        result[i]["合计"] = sumRow[i];
      }
      return result;
    },

    getHeader(data) {
      // console.log(data)
      let headerTemp = [];
      let temp = {
        title: "费用项目",
        key: "费用项目",
        fixed: "left",
        align: "center",
        ellipsis: true,
        tooltip: true
      };
      if (Object.keys(data).length > 9) {
        temp.width = 130;
      }
      headerTemp.push(temp);

      let tempNew = {};
      tempNew.children = [];
      let count = 0;
      for (let center in this.linksGroup) {
        for (let item in data) {
          if (item !== "费用项目" && item !== "合计") {
            if (item.indexOf(center) > -1) {
              tempNew.title = center;
              tempNew.align = "center";
              tempNew.children.push({
                key: item,
                title: item.replace(center, ""),
                width: 130,
                ellipsis: true,
                tooltip: true,
                render: (h, params) => {
                  return h("div", params.row[item].toFixed(2));
                }
              });
              count = count + 1;
            }
          }
          if (count === this.linksGroup[center].length) {
            headerTemp.push(tempNew);
            tempNew = {};
            tempNew.children = [];
            count = 0;
            break;
          }
        }
      }
      let tempEnd = {
        title: "合计",
        key: "合计",
        align: "center",
        ellipsis: true,
        tooltip: true,
        render: (h, params) => {
          return h("div", params.row[item].toFixed(2));
        }
      };
      if (Object.keys(data).length > 9) {
        tempEnd.width = 130;
      }
      headerTemp.push(tempEnd);
      return headerTemp;
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
    exportData() {
      for (let state in this.tableViewState) {
        if (this.tableViewState[state]) {
          this.$refs[state].exportCsv({
            filename: "成本费用明细报表（环节）"
          });
        }
      }
    },
    test() {
      this.updateData(
        this.statisticsOriginal,
        this.checkGroup.workArea.checkAllGroup
      );
    },
    test2() {
      this.setCurrentTableInfo(this.checkGroup.workArea.checkAllGroup);
    }
  },
  mounted() {
    this.getWorkArea();
    this.getAllCenters();
    this.getCostDetail();
    // this.statisticsOriginal = statisticsLinkTest
  }
};
</script>

<style scoped>
</style>
