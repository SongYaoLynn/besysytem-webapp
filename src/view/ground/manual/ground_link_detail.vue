<template>
  <div>
    <Card >
      <div class="search-con search-con-top">
        <h3>{{currentDepartment}}-{{currentLink}} 详细信息</h3>
      </div>
      <i-table :columns="linkDetailHeader" :data="linkDetailContent" height="500" size="small" ref="table"></i-table>
      <br>
      <i-button type="primary" size="large" @click="exportData(1)"><icon type="ios-download-outline"></icon> 导出到csv文件</i-button>
    </Card>

    <Modal v-model="modalVisible">
      <p slot="header">{{modalTitle}}</p>
      <i-form>
        <form-item label="部门:" style="font-size: 15em">{{labelText}}</form-item>
        <form-item>
          <i-table border :columns="columns1" :data="data1" ></i-table>
        </form-item>
      </i-form>
    </Modal>
  </div>
</template>

<script>
import "_c/tables/index.less";
import { getManualLinkDetailData } from "@/api/data";
import { dealDataBeforeToCsv } from "@/libs/table";

export default {
  name: "ground_link_detail",
  data() {
    return {
      currentDepartment: "",
      currentLink: "",
      linkDetailData: {},
      linkDetailHeader: [],
      linkDetailContent: [],
      linkDetailHeaderTemp: [
        {
          title: "身份证号码",
          key: "身份证号码"
        },
        {
          title: "姓名",
          key: "姓名"
        },
        {
          title: "本环节分摊成本",
          key: "本环节分摊成本",
          render: (h, params) => {
            return h(
              "div",
              parseFloat(params.row["本环节分摊成本"]).toFixed(2)
            );
          }
        },
        {
          title: "总成本",
          key: "总成本",
          render: (h, params) => {
            return h("div", parseFloat(params.row["总成本"]).toFixed(2));
          }
        }
      ],
      // 缓存数据
      dataList: [],

      // test
      modalVisible: false,
      modalTitle: "test",
      labelText: "陆侧作业区",

      // modal data test
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methods: {
    showModal(params) {
      this.modalTitle = params.row.name + "分摊明细";
      this.modalVisible = true;
    },
    getData() {
      if (Object.keys(this.$route.params).length) {
        getManualLinkDetailData({
          startTime: this.$route.params.startTime,
          endTime: this.$route.params.endTime,
          department: "陆侧责任中心",
          link: this.$route.params.link
        })
          .then(res => {
            this.updateData(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    updateData(data) {
      this.linkDetailData = {};
      this.linkDetailHeader = [];
      this.linkDetailContent = [];
      this.currentDepartment = this.$route.params.department;
      this.currentLink = this.$route.params.link;
      this.linkDetailData = data;
      this.linkDetailHeader = this.linkDetailHeaderTemp;
      this.linkDetailContent = this.linkDetailData.detail;
    },
    //可以删掉
    saveData(data, name) {
      let dataSave = Object.assign(data);
      this.dataList[name] = dataSave;
    },
    //==================
    exportData(type) {
      if (type === 1) {
        dealDataBeforeToCsv(this.$refs.table.data);
        this.$refs.table.exportCsv({
          filename: this.$route.params.id
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
      this.saveData(this.data1, this.$route.params.id);
      console.log(this.dataList);
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    $route: "getData"
  }
};
</script>

<style scoped>
</style>
