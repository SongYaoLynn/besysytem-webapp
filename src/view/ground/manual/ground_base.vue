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
      <i-table  :columns="baseHeader" :data="baseContent" size="small" height="500" ref="table"></i-table>
      <br>
      <!--{{currentPage}} {{ pageSize}}-->
      <!--<page :total="50" @on-change="getCurrentPage" @on-page-size-change="getPageSize" show-total show-sizer  show-elevator />-->
      <i-button type="primary" size="large" @click="exportData(1)"><icon type="ios-download-outline"></icon> 导出到csv文件</i-button>
      <!--<i-button @click="test">test</i-button>-->
      <!--{{ 'test:'+ testchange}}-->

      <!--<i-button @click="getHeader(baseData.header)">getHeader</i-button>-->
    </Card>

  </div>
</template>

<script>
// import Table from '_c/tables'
import "_c/tables/index.less";
import { manualData } from "@/data/manual";
import { getBaseGroupData, getBaseDataByName } from "@/api/data";
import {
  getStatistics,
  handleCheckAll,
  checkAllGroupChange,
  dealDataBeforeToCsv
} from "@/libs/table";

export default {
  name: "ground_base",

  data() {
    return {
      // 筛选分类原始数据
      group: manualData.ground,
      // 多选组合
      checkGroup: {
        group: {
          indeterminate: false,
          checkAll: true,
          sectionAll: ["转运班", "人工处理班", "封发班", "综合班", "借调"],
          checkAllGroup: ["转运班", "人工处理班", "封发班", "综合班", "借调"]
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
      // 页面切换
      currentPage: 1,
      pageSize: 10
      // test
    };
  },
  methods: {
    getHeader(data) {
      // this.baseHeader.clea
      for (let i = 0; i < data.length; i++) {
        let temp = {
          title: "",
          key: "",
          fixed: "",
          width: 100,
          ellipsis: true,
          tooltip: true
        };
        temp.title = data[i];
        temp.key = data[i];
        if (
          data[i] === "身份证号码" ||
          data[i] === "姓名" ||
          data[i] === "应发合计" ||
          data[i] === "人工成本"
        ) {
          temp.fixed = "left";
          if (data[i] === "身份证号码") {
            temp.width = 170;
          }
        }
        if (manualData.nonNumberHeader.indexOf(data[i]) < 0) {
          temp.render = (h, params) => {
            return h("div", params.row[data[i]].toFixed(2));
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
      console.log(
        "before" + this.baseData.records.length + " " + result.length
      );
      if (result.length < this.baseData.records.length + 2) {
        result.push(getStatistics(average, "身份证号码", "平均"));
        result.push(getStatistics(sum, "身份证号码", "总计"));
      }
      console.log("after" + this.baseData.records.length + " " + result.length);
      return result;
    },
    updateData(data) {
      this.baseData = {};
      this.baseHeader = [];
      this.baseContent = [];
      if (data.records.length) {
        this.baseData = data;
        this.baseHeader = this.getHeader(this.baseData.header);
        this.baseContent = this.getAllResult(
          this.baseData.records,
          this.baseData.average,
          this.baseData.statistics
        );
      }
    },
    getCurrentPage(page) {
      this.currentPage = page;
    },
    getPageSize(size) {
      console.log(size);
      this.pageSize = size;
    },

    searchByGroup() {
      console.log("searchByGroup");
      getBaseGroupData({
        startTime: this.timeStart,
        endTime: this.timeEnd,
        department: ["陆侧责任中心"].toString(),
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
        center: "陆侧责任中心"
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
    exportData(type) {
      if (type === 1) {
        dealDataBeforeToCsv(this.$refs.table.data);
        this.$refs.table.exportCsv({
          filename: "陆侧人工"
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
      this.baseData = [];
      this.baseHeader = [];
      this.baseContent = [];
    }
  },
  mounted() {
    // 初始化操作
    console.log("init ground");
    getBaseGroupData({
      startTime: "",
      endTime: "",
      department: ["陆侧责任中心"].toString(),
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
