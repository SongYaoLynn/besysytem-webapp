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
                      :indeterminate="checkGroup.air.indeterminate"
                      :value="checkGroup.air.checkAll"
                      @click.prevent.native="handleCheckAll(checkGroup.air)">全选</checkbox>
                    <checkbox-group v-model="checkGroup.air.checkAllGroup"
                                    @on-change="checkAllGroupChange(checkGroup.air.checkAllGroup,checkGroup.air)">
                      <checkbox v-for="item in air" :value="item" :key="item" :label="item"></checkbox>
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
import { getManualLinkData, getManualLinkDetailData } from "@/api/data";
import {
  handleCheckAll,
  checkAllGroupChange,
  dealDataBeforeToCsv
} from "@/libs/table";

export default {
  name: "air_link",
  data() {
    return {
      // 筛选分类原始数据
      group: manualData.group,
      process: manualData.process,
      air: manualData.department[1].process,
      // 多选组合
      checkGroup: {
        air: {
          indeterminate: false,
          checkAll: true,
          sectionAll: [
            "交接门洞接收集装箱",
            "掏箱",
            "安检机后分类传输",
            "空侧供件",
            "拒识邮件处理",
            "空侧封发装箱称重",
            "交邮",
            "收容处理",
            "人工处理",
            "信息处理",
            "运保",
            "综合",
            "白班"
          ],
          checkAllGroup: [
            "交接门洞接收集装箱",
            "掏箱",
            "安检机后分类传输",
            "空侧供件",
            "拒识邮件处理",
            "空侧封发装箱称重",
            "交邮",
            "收容处理",
            "人工处理",
            "信息处理",
            "运保",
            "综合",
            "白班"
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
      // detailDataList: [],

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
        department: "空侧责任中心",
        link: this.checkGroup.air.checkAllGroup.toString()
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
    // saveData(data, name) {
    //   let dataSave = Object.assign(data);
    //   this.detailDataList[name] = dataSave;
    // },
    // 查看单个详细信息
    viewLinkDetail(params) {
      const startTime = this.timeStartTemp;
      const endTime = this.timeEndTemp;
      const department = params.row["责任中心"];
      const link = params.row["生产环节"];
      const id = params.row["责任中心"] + link;
      const route = {
        name: "air_manual_detail",
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
          filename: "空侧环节分摊"
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
    console.log("air_link init");
    getManualLinkData({
      startTime: "",
      endTime: "",
      department: "空侧责任中心",
      link: this.checkGroup.air.sectionAll.toString()
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
