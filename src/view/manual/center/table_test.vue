<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
    <modal
      v-model="modal1"
      title="Common Modal dialog box title"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </modal>
  </div>
</template>

<script>
import Tables from "_c/tables";
import { getTableData } from "@/api/data";
export default {
  name: "tables_page",
  components: {
    Tables
  },
  data() {
    return {
      modal1: false,
      columns: [
        { title: "Name", key: "name", sortable: true },
        { title: "Email", key: "email", editable: true },
        { title: "Create-Time", key: "createTime" },
        {
          title: "Handle",
          key: "handle",
          options: ["delete"],
          button: [
            (h, params, vm) => {
              return h(
                "Poptip",
                {
                  props: {
                    confirm: true,
                    title: "你确定要删除吗?"
                  },
                  on: {
                    "on-ok": () => {
                      vm.$emit("on-delete", params);
                      vm.$emit(
                        "input",
                        params.tableData.filter(
                          (item, index) => index !== params.row.initRowIndex
                        )
                      );
                    }
                  }
                },
                [h("Button", "自定义删除")]
              );
            }
          ]
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",
                    modal1: true
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(this.props);
                    }
                  }
                },
                "View"
              )
            ]);
          }
        }
      ],
      tableData: []
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：test`
      });
      console.log(index);
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
    handleDelete(params) {
      console.log(params);
    },
    exportExcel() {
      this.$refs.tables.exportCsv({
        filename: `table-${new Date().valueOf()}.csv`
      });
    }
  },
  mounted() {
    getTableData().then(res => {
      this.tableData = res.data;
    });
  }
};
</script>

<style>
</style>
