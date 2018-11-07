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
                      <date-picker type="month" placeholder="Select month" style="width: 200px"  @on-change="getTimeStart"></date-picker>
                    </i-col>
                    <i-col style="margin-left: 27px;">结束时间：
                      <date-picker type="month"  placeholder="Select month" style="width: 200px;" @on-change="getTimeEnd"></date-picker>
                    </i-col>
                    <!--</row>-->
                  </div>

                </panel>

                <panel name="link-panel" >
                  环节
                  <div slot="content">
                    <checkbox
                      :indeterminate="checkGroup.flat.indeterminate"
                      :value="checkGroup.flat.checkAll"
                      @click.prevent.native="handleCheckAll(checkGroup.flat)">全选</checkbox>
                    <checkbox-group v-model="checkGroup.flat.checkAllGroup"
                                    @on-change="checkAllGroupChange(checkGroup.flat.checkAllGroup,checkGroup.flat)">
                      <checkbox v-for="item in flat" :value="item" :key="item" :label="item"></checkbox>
                    </checkbox-group>
                  </div>
                </panel>

              </collapse>
              <br>
              <div style="text-align: center;">
                <button-group size="small">
                  <i-button type="primary" @click="searchByLink">确定</i-button>
                  <i-button>取消</i-button>
                </button-group>
              </div>
            </div>
          </panel>
        </collapse>
      </div>
      <i-table :columns="linkHeader" :data="linkContent" size="small" height="500" ref="table"></i-table>
      <br>
      <i-button type="primary" size="large" @click="exportData(1)"><icon type="ios-download-outline"></icon> 导出到csv文件</i-button>
      <!--<i-button @click="test">test</i-button>-->
    </Card>

  </div>
</template>

<script>
import "_c/tables/index.less";
import { manualData } from "@/data/manual";
import { getManualLinkData } from "@/api/data";
import {
  handleCheckAll,
  checkAllGroupChange,
  dealDataBeforeToCsv
} from "@/libs/table";

export default {
  name: "flat_link",
  data() {
    return {
      // 筛选分类原始数据
      group: manualData.group,
      process: manualData.process,
      flat: manualData.department[0].process,
      // 多选组合
      checkGroup: {
        flat: {
          indeterminate: false,
          checkAll: true,
          sectionAll: [
            "信盒传输线巡视",
            "非标件收集",
            "供件",
            "辅助分拣",
            "分拣机巡视",
            "塑封操作",
            "空盒收集",
            "塑封机错包处理",
            "拒识邮件处理",
            "收容邮件处理",
            "分拣封发专项邮件处理",
            "接发",
            "牵引车驾驶",
            "质检",
            "白班",
            "综合"
          ],
          checkAllGroup: [
            "信盒传输线巡视",
            "非标件收集",
            "供件",
            "辅助分拣",
            "分拣机巡视",
            "塑封操作",
            "空盒收集",
            "塑封机错包处理",
            "拒识邮件处理",
            "收容邮件处理",
            "分拣封发专项邮件处理",
            "接发",
            "牵引车驾驶",
            "质检",
            "白班",
            "综合"
          ]
        }
      },
      // 表格
      linkData: {},
      linkHeaderTemp: [
        {
          title: "责任中心",
          key: "责任中心"
        },
        {
          title: "生产环节",
          key: "生产环节"
        },
        {
          title: "人数",
          key: "人数"
        },
        {
          title: "总成本",
          key: "总成本",
          render: (h, params) => {
            return h("div", params.row["总成本"].toFixed(2));
          }
        },
        {
          title: "",
          key: "",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.viewLinkDetail(params);
                    }
                  }
                },
                "查看"
              )
            ]);
          }
        }
      ],
      linkHeader: [],
      linkContent: [],
      // 缓存数据
      detailDataList: [],

      // 筛选项
      // 时间
      timeStart: "",
      timeEnd: "",
      timeStartTemp: "",
      timeEndTemp: ""
    };
  },
  methods: {
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
    // 更新
    updateData(data) {
      this.linkData = {};
      this.linkHeader = [];
      this.linkContent = [];
      if (data.statistics.length) {
        this.linkData = data;
        this.linkHeader = this.linkHeaderTemp;
        this.linkContent = data.statistics;
      }
    },
    // 搜索
    searchByLink() {
      console.log("searchLink");
      this.timeStartTemp = this.timeStart;
      this.timeEndTemp = this.timeEnd;
      getManualLinkData({
        startTime: this.timeStart,
        endTime: this.timeEnd,
        department: "扁平件责任中心",
        link: this.checkGroup.flat.checkAllGroup.toString()
      })
        .then(res => {
          // this.baseData = res.data
          // 错误判断
          console.log(res);
          if (!res.data.statistics.length) {
            this.$Message.info("未找到数据");
            console.log("未找到数据");
          }
          this.updateData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    saveData(data, name) {
      let dataSave = Object.assign(data);
      this.detailDataList[name] = dataSave;
    },
    // 查看单个详细信息
    viewLinkDetail(params) {
      const startTime = this.timeStartTemp;
      const endTime = this.timeEndTemp;
      const department = params.row["责任中心"];
      const link = params.row["生产环节"];
      const id = params.row["责任中心"] + link;
      const route = {
        name: "flat_manual_detail",
        params: {
          startTime,
          endTime,
          department,
          link,
          id
        },
        meta: {
          title: `动态路由-${id}`
        }
      };
      this.$router.push(route);
    },
    exportData(type) {
      if (type === 1) {
        dealDataBeforeToCsv(this.$refs.table.data);
        this.$refs.table.exportCsv({
          filename: "扁平件环节分摊"
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
    test() {}
  },
  mounted() {
    console.log("flat_link init");
    getManualLinkData({
      startTime: "",
      endTime: "",
      department: "扁平件责任中心",
      link: this.checkGroup.flat.sectionAll.toString()
    })
      .then(res => {
        // 错误判断
        console.log(res.data);
        if (!res.data.statistics.length) {
          this.$Message.info("未找到数据");
          console.log("未找到数据");
        }
        this.updateData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    // this.updateData(productionLinkTest)
  }
};
</script>

<style scoped>
</style>
