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
                            @click="updateData">筛选</i-button>
                </button-group>
              </div>
            </div>
          </panel>
        </collapse>
      </div>
      <div class="test">
        <!--<spin fix v-if="isLoading">加载中...</spin>-->
        <v-table
          is-vertical-resize
          is-horizontal-resize
          column-width-drag
          style="width:100%"
          :height='400'
          :min-height='100'
          :vertical-resize-offset='5'
          :title-rows="statisticsTitleRows"
          :columns="statisticsHeader"
          :table-data="statisticsTableData"
          row-hover-color="#eee"
          row-click-color="#edf7ff"
          ref="table"
        ></v-table>
      </div>
        <i-button type="primary" size="large" @click="exportData" v-show="exportViewState">
          <icon type="ios-download-outline"></icon> 导出到csv文件</i-button>
      <i-button type="primary" size="large" @click="test">test</i-button>
    </Card>
  </div>
</template>

<script>
import "_c/tables/index.less";
// 引入样式
import "vue-easytable/libs/themes-base/index.css";
// 导入 table 和 分页组件
import { VTable, VPagination } from "vue-easytable";
// 导出到excel
import XLSX from "xlsx";

import { exportMergeTable, tableToSheet } from "@/libs/excel";
import { manualData } from "@/data/manual";
import { statisticsData } from "@/data/statistics";
import { tableHeader } from "@/data/statisticsTable";
import { handleCheckAll, checkAllGroupChange } from "@/libs/table";
import { getStatisticsCostLink } from "@/api/data";
// test
import { costLinkTest } from "../../data/testData";
// import { statisticsDataTest, statisticsLinkTest, testHeader, testContent } from '@/api/testData'

export default {
  name: "statistics_cost_link_easytable",
  components: {
    VTable,
    VPagination
  },
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
      statisticsHeader: [],
      statisticsTitleRows: [],
      statisticsTableData: [],

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
      isLoading: false,
      exportViewState: false,

      // test
      testData: costLinkTest
    };
  },
  methods: {
    // 初始化
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
    //搜索
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
            // to do
            this.statisticsOriginal = res.data;
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
    // 列筛选
    getColTableData(data, selectedCenters) {
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
              if (i < this.costItems.length) {
                result[i][center + centerItem] = data[center][centerItem][i];
              }
            }
          }
        }
        // result[i]["合计"] = sumRow[i];
        result[i]["合计"] = 0;
      }
      return result;
    },
    //行筛选
    getRowTableData(colData, selectedItems) {
      if (colData.length) {
        let result = [];
        if (selectedItems.length) {
          // 行筛选项
          let filterSelected = [];
          for (let item in this.costItemsGroup) {
            if (selectedItems.indexOf(item) > -1) {
              filterSelected.push(item);
              filterSelected = filterSelected.concat(this.costItemsGroup[item]);
            }
          }
          // 行筛选项的数据
          let j = 0;
          for (let i = 0; i < filterSelected.length; i++) {
            for (; j < colData.length; j++) {
              if (colData[j]["费用项目"].indexOf(filterSelected[i]) > -1) {
                result.push(colData[j]);
                break;
              }
            }
          }
          // 列值和 /小计
          let colSum = {};
          for (let trg in result[0]) {
            colSum["费用项目"] = "小计";
            colSum[trg] = 0;
            for (let i = 0; i < result.length; i++) {
              colSum[trg] += result[i][trg];
            }
          }
          result.push(colSum);
        }
        this.exportViewState = true;
        return result;
      } else {
        this.exportViewState = false;
        this.$Message.info("未找到数据，请先搜索");
        return [];
      }
    },
    // 生成多表头
    getHeader() {
      this.tempHeader = [];
      this.tempHeader.push({
        title: "费用项目",
        field: "费用项目",
        columnAlign: "left",
        isFrozen: true,
        width: 100
      });
      this.tempTitleRows = [[], []];
      this.tempTitleRows[0].push({
        title: "费用项目",
        fields: ["费用项目"],
        titleAlign: "center",
        rowspan: 2
      });
      for (let linkChecked in this.linksGroup) {
        if (this.checkGroup.workArea.checkAllGroup.indexOf(linkChecked) > -1) {
          let temp = {
            title: "",
            fields: [],
            titleAlign: "center"
          };
          temp.title = linkChecked;
          for (let i = 0; i < this.linksGroup[linkChecked].length; i++) {
            temp.fields.push(linkChecked + this.linksGroup[linkChecked][i]);
          }
          temp.colspan = this.linksGroup[linkChecked].length;
          this.tempTitleRows[0].push(temp);
          for (let i = 0; i < this.linksGroup[linkChecked].length; i++) {
            let tempTwo = {
              title: "",
              fields: [],
              titleAlign: "center"
            };
            tempTwo.title = this.linksGroup[linkChecked][i];
            // tempTwo.key = linkChecked + this.linksGroup[linkChecked][i];
            tempTwo.fields.push(linkChecked + this.linksGroup[linkChecked][i]);
            this.tempTitleRows[1].push(tempTwo);
            // columns
            let tempThree = {
              title: "",
              field: "",
              columnAlign: "left",
              width: 100
            };
            tempThree.title = this.linksGroup[linkChecked][i];
            // tempThree.key = linkChecked + this.linksGroup[linkChecked][i];
            tempThree.field = linkChecked + this.linksGroup[linkChecked][i];
            tempThree.formatter = function(
              rowData,
              rowIndex,
              pagingIndex,
              field
            ) {
              return rowData[field].toFixed(2);
            };
            this.tempHeader.push(tempThree);
          }
        }
      }
      this.tempTitleRows[0].push({
        title: "合计",
        fields: ["合计"],
        titleAlign: "center",
        rowspan: 2
      });
      // let global = this;
      this.tempHeader.push({
        title: "合计",
        field: "合计",
        columnAlign: "left",
        width: 100,
        formatter: function(rowData, rowIndex, pagingIndex, field) {
          let sum = 0;
          if (Object.keys(rowData).length) {
            for (let key in rowData) {
              if (key !== "费用项目") {
                sum += rowData[key];
              }
            }
          }
          return sum.toFixed(2);
        }
      });
      this.statisticsHeader = [];
      this.statisticsTitleRows = [];
      this.statisticsHeader = this.tempHeader;
      this.statisticsTitleRows = this.tempTitleRows;
    },
    // 多选框设置
    handleCheckAll(current) {
      handleCheckAll(current);
    },
    checkAllGroupChange(data, current) {
      checkAllGroupChange(data, current);
    },
    // 搜索后刷新表格
    updateData() {
      this.isLoading = true;
      this.statisticsTableData = this.getRowTableData(
        this.getColTableData(
          this.testData,
          this.checkGroup.workArea.checkAllGroup
        ),
        this.checkGroup.costDetail.checkAllGroup
      );
      this.getHeader();
      this.isLoading = false;
    },
    // 导出到excel

    saveAs(obj, fileName) {
      let tmpa = document.createElement("a");
      tmpa.download = fileName || "下载";
      tmpa.href = URL.createObjectURL(obj);
      tmpa.click();
      setTimeout(function() {
        URL.revokeObjectURL(obj);
      }, 100);
    },
    s2ab(s) {
      if (typeof ArrayBuffer !== "undefined") {
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
      } else {
        let buf = new Array(s.length);
        for (let i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xff;
        return buf;
      }
    },
    exportData() {
      let wopts = {
        bookType: "xlsx",
        bookSST: false,
        type: "binary"
      };
      let wb = {
        SheetNames: ["Sheet1"],
        Sheets: {},
        Props: {}
      };
      // let data = XLSX.utils.table_to_sheet(document.getElementsByClassName('v-table-views')[0]);
      // let data = XLSX.utils.table_to_sheet(
      //   document.getElementsByClassName("v-table-views")[0]
      // );
      let data = tableToSheet("v-table-views");
      let index = 0;
      let length = this.$refs.table.tableData.length + 2;
      for (let key in data) {
        index++;
        if (index >= length && key !== "!merges" && key !== "!ref") {
          let letter = key.match(/^[a-z|A-Z]+/gi).toString();
          let number = key.match(/\d+$/gi) - length;
          let letterChange = [];
          for (let i = 0; i < letter.length; i++) {
            letterChange.push(letter.charAt(i));
          }
          letterChange[letter.length - 1] = String.fromCharCode(
            letter.charCodeAt(letter.length - 1) + 1
          );
          letter = letterChange.join("");
          data[letter + number] = data[key];
          delete data[key];
        }
      }
      let refTemp = data["!ref"].split(":");
      refTemp[refTemp.length - 1] = Object.keys(data)[
        Object.keys(data).length - 1
      ];
      data["!ref"] = refTemp.join(":");
      data["!merges"] = [];
      data["!merges"].push(this.getMerge(0, 0, 1, 0));
      let checkedLinks = {};
      for (let link in this.linksGroup) {
        if (this.checkGroup.workArea.checkAllGroup.indexOf(link) > -1) {
          checkedLinks[link] = this.linksGroup[link].length;
        }
      }
      if (Object.keys(checkedLinks).length) {
        let startCol = 1;
        for (let link in checkedLinks) {
          data["!merges"].push(
            this.getMerge(0, startCol, 0, startCol + checkedLinks[link] - 1)
          );
          startCol += checkedLinks[link];
        }
        data["!merges"].push(this.getMerge(0, startCol, 1, startCol));
      }
      wb.Sheets["Sheet1"] = data; //通过json_to_sheet转成单页(Sheet)数据
      console.log(wb.Sheets["Sheet1"]);

      exportMergeTable(wopts, wb, "filename");
      // this.saveAs(
      //   new Blob([this.s2ab(XLSX.write(wb, wopts))], {
      //     type: "application/octet-stream"
      //   }),
      //   "excel表名称" +
      //     "." +
      //     (wopts.bookType === "biff2" ? "xls" : wopts.bookType)
      // );
    },
    getMerge(s1, s2, e1, e2) {
      return {
        s: {
          r: s1,
          c: s2
        },
        e: {
          r: e1,
          c: e2
        }
      };
    },
    //test
    test2() {
      this.statisticsTableData = this.getRowTableData(
        this.getColTableData(
          this.testData,
          this.checkGroup.workArea.checkAllGroup
        ),
        this.checkGroup.costDetail.checkAllGroup
      );
    },
    test() {
      this.test2();
      this.getHeader();
    }
  },
  mounted() {
    this.getWorkArea();
    this.getAllCenters();
    this.getCostDetail();
  }
};
</script>

<style scoped>
</style>
