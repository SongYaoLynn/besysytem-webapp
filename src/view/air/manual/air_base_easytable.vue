<template>
  <div>
    <Card >
      <div class="search-con search-con-top">
        <collapse>
          <panel name="options">
            筛选：
            <div slot="content">
              <collapse simple>
                <panel name="time-panel">
                  时间
                  <div slot="content" style="display: -webkit-inline-box" >
                    <!--<row>-->
                      <i-col >开始时间：
                        <date-picker type="month" placeholder="Select month" style="width: 200px" @on-change="getTimeStart" ></date-picker>
                      </i-col>
                      <i-col style="margin-left: 27px;">结束时间：
                        <date-picker type="month"  placeholder="Select month" style="width: 200px;" @on-change="getTimeEnd" ></date-picker>
                      </i-col>
                    <!--</row>-->
                  </div>
                </panel>
                <panel name="group-panel">
                  班组
                  <div slot="content">
                    <checkbox
                      :indeterminate="checkGroup.group.indeterminate"
                      :value="checkGroup.group.checkAll"
                      @click.prevent.native="handleCheckAll(checkGroup.group)">全选</checkbox>
                    <checkbox-group v-model="checkGroup.group.checkAllGroup" @on-change="checkAllGroupChange(checkGroup.group.checkAllGroup,checkGroup.group)">
                      <checkbox v-for="item in group" :value="item" :key="item" :label="item"></checkbox>
                    </checkbox-group>
                  </div>
                </panel>

              </collapse>
              <br>
              <div style="text-align: center;">
                <button-group size="small">
                  <i-button type="primary"
                            @click="searchByGroup">确定</i-button>
                  <i-button>取消</i-button>
                </button-group>
              </div>
            </div>

          </panel>

        </collapse>
        <div style="text-align: right">
          <i-input search placeholder="请输入姓名..." style="width: 200px" @on-search="searchByName">
            <icon type="ios-search" slot="suffix" />
          </i-input>
        </div>
      </div>
      <div>
        <!--<spin fix v-if="spinShow">加载中...</spin>-->
        <!--<i-table  :columns="baseHeader" :data="baseContent" size="small" height="500" ref="table"></i-table>-->
        <v-table
          is-vertical-resize
          is-horizontal-resize
          column-width-drag
          style="width:100%"
          :height='400'
          :min-height='100'
          :vertical-resize-offset='5'
          :columns="baseHeader"
          :table-data="baseContentCurrent"
          row-hover-color="#eee"
          row-click-color="#edf7ff"
          :paging-index="(pageIndex-1)*pageSize"
          ref="table"
        ></v-table>
        <br>
        <div class="mt20 mb20 bold"></div>
        <v-pagination @page-change="pageChange" @page-size-change="pageSizeChange" :total="baseContent.length" :page-size="pageSize" :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"></v-pagination>
      </div>
        <br>
        <i-button type="primary" size="large" @click="exportData(1)"><icon type="ios-download-outline"></icon> 导出到csv文件</i-button>
      <!--</div>-->


      <!--<i-button @click="test">test</i-button>-->
      <!--{{ 'test:'+ testchange}}-->

      <!--<i-button @click="getHeader(baseData.header)">getHeader</i-button>-->
    </Card>

  </div>
</template>

<script>
// import Table from '_c/tables'
import "_c/tables/index.less";
// 引入样式
import "vue-easytable/libs/themes-base/index.css";
// 导入 table 和 分页组件
import { VTable, VPagination } from "vue-easytable";
import Csv from "iview/src/utils/csv";
import ExportCsv from "iview/src/components/table/export-csv";
import { manualData } from "@/data/manual";
import { getBaseGroupData, getBaseDataByName } from "@/api/data";
import {
  getStatistics,
  handleCheckAll,
  checkAllGroupChange,
  dealDataBeforeToCsv
} from "@/libs/table";
// test
// import { employeeTest } from '@/api/testData'

export default {
  name: "air_base_easytable",
  components: {
    VTable,
    VPagination
  },
  data() {
    return {
      // isLoading: true,
      // 筛选分类原始数据
      group: manualData.air,
      // 多选组合
      checkGroup: {
        group: {
          indeterminate: false,
          checkAll: true,
          sectionAll: [
            "接发联班",
            "人工处理班",
            "封发联班",
            "运行安保组",
            "白班",
            "综合班",
            "借调"
          ],
          checkAllGroup: [
            "接发联班",
            "人工处理班",
            "封发联班",
            "运行安保组",
            "白班",
            "综合班",
            "借调"
          ]
        }
      },
      // 筛选项
      // 时间
      timeStart: "",
      timeEnd: "",

      // 当前表格数据
      baseData: {},
      baseHeader: [],
      baseContent: [],
      //当前分页的数据
      baseContentCurrent: [],
      pageIndex: 1,
      pageSize: 20,
      // 加载中
      spinShow: true,
      // 页面切换
      currentPage: 1
      // pageSize: 10
      // test
    };
  },
  methods: {
    getHeader(data) {
      for (let i = 0; i < data.length; i++) {
        let temp = {
          title: "",
          field: "",
          isFrozen: false,
          width: 100
        };
        temp.title = data[i];
        temp.field = data[i];
        temp.key = data[i];

        if (
          data[i] === "身份证号码" ||
          data[i] === "姓名" ||
          data[i] === "应发合计" ||
          data[i] === "人工成本"
        ) {
          temp.isFrozen = true;
          if (data[i] === "身份证号码") {
            temp.width = 170;
          }
        }
        if (manualData.nonNumberHeader.indexOf(data[i]) < 0) {
          temp.formatter = function(rowData, rowIndex, pagingIndex, field) {
            return rowData[data[i]].toFixed(2);
          };
        }
        this.baseHeader.push(temp);
      }
      return this.baseHeader;
    },
    getCurrentPageData(data, start, end) {
      return data.slice(start, end);
    },
    // 表格内容整合
    getAllResult(data, average, sum) {
      let result = data.slice();
      if (result.length < this.baseData.records.length + 2) {
        result.push(getStatistics(average, "身份证号码", "平均"));
        result.push(getStatistics(sum, "身份证号码", "总计"));
      }
      return result;
    },
    updateData(data) {
      this.baseData = {};
      this.baseHeader = [];
      this.baseContent = [];
      this.baseData = data;
      this.baseHeader = this.getHeader(this.baseData.header);
      console.log(this.baseHeader);
      this.baseContent = this.getAllResult(
        this.baseData.records,
        this.baseData.average,
        this.baseData.statistics
      );
      this.getCurrentTableData();

      this.spinShow = false;
    },
    // getCurrentPage(page) {
    //   this.currentPage = page;
    // },
    // getPageSize(size) {
    //   console.log(size);
    //   this.pageSize = size;
    // },

    searchByGroup() {
      console.log("searchByGroup");
      getBaseGroupData({
        startTime: this.timeStart,
        endTime: this.timeEnd,
        department: ["空侧责任中心"].toString(),
        group: this.checkGroup.group.checkAllGroup.toString()
      })
        .then(res => {
          // 错误判断
          console.log(res.data);
          if (!res.data.records.length) {
            this.$Message.info("未找到数据");
            console.log("未找到数据");
          }
          this.updateData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    searchByName(value) {
      console.log(value);
      getBaseDataByName({
        name: value,
        center: "空侧责任中心"
      })
        .then(res => {
          if (!res.data.records.length) {
            this.$Message.info("未找到数据");
            console.log("未找到数据");
          }
          this.updateData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getTimeStart(msg) {
      this.timeStart = msg;
    },
    getTimeEnd(msg) {
      this.timeEnd = msg;
    },
    // 多选框设置
    handleCheckAll(current) {
      handleCheckAll(current);
    },
    checkAllGroupChange(data, current) {
      checkAllGroupChange(data, current);
    },
    //分页
    getCurrentTableData() {
      this.baseContentCurrent = this.baseContent.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
      console.log("baseContentCurrent");
      console.log(this.baseContentCurrent);
    },
    pageChange(pageIndex) {
      this.pageIndex = pageIndex;
      this.getCurrentTableData();
      console.log(pageIndex);
    },
    pageSizeChange(pageSize) {
      this.pageIndex = 1;
      this.pageSize = pageSize;
      this.getCurrentTableData();
    },
    //导出
    exportCsv(params) {
      if (params.filename) {
        if (params.filename.indexOf(".csv") === -1) {
          params.filename += ".csv";
        }
      } else {
        params.filename = "table.csv";
      }

      let columns = [];
      let datas = [];
      if (params.columns && params.data) {
        columns = params.columns;
        datas = params.data;
      } else {
        columns = this.allColumns;
        if (!("original" in params)) params.original = true;
        datas = params.original ? this.data : this.rebuildData;
      }

      let noHeader = false;
      if ("noHeader" in params) noHeader = params.noHeader;

      const data = Csv(columns, datas, params, noHeader);
      if (params.callback) params.callback(data);
      else ExportCsv.download(params.filename, data);
    },
    exportData(type) {
      if (type === 1) {
        let table = {};
        table.data = this.baseContent;
        table.columns = this.baseHeader;
        table.filename = "空侧人工";
        dealDataBeforeToCsv(table.data);
        this.exportCsv(table);
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
      this.baseData = [];
      this.baseHeader = [];
      this.baseContent = [];
    }
  },
  mounted() {
    // 初始化操作
    this.spinShow = true;
    console.log("init air");
    getBaseGroupData({
      startTime: "",
      endTime: "",
      department: ["空侧责任中心"].toString(),
      group: this.checkGroup.group.sectionAll.toString()
    })
      .then(res => {
        // 错误判断
        console.log(res.data);
        if (!res.data.records.length) {
          this.$Message.info("未找到数据");
          console.log("未找到数据");
        }
        this.updateData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    // this.updateData(employeeTest)
  }
};
</script>

<style scoped>
</style>
