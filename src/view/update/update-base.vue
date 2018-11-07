<template>
  <Card>
    <divider orientation="left">EXCEL文件上传</divider>
    <i-form ref="formItem" :model="formItem" :rules="ruleValidate">
      <form-item label="时间" prop="timeSelected">
        <date-picker type="month" placeholder="Select month" style="width: 200px"
                     v-model="formItem.timeSelected"></date-picker>
      </form-item>
      <form-item label="部门" prop="departmentSelected">
        <radio-group v-model="formItem.departmentSelected">
          <radio v-for="item in department" :value="item" :key="item" :label="item"></radio>
        </radio-group>
      </form-item>
      <form-item label="描述">
        <i-input v-model="formItem.description"
                 type="textarea"
                 :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="Enter something..." style="width: 400px"></i-input>
      </form-item>
      <form-item >
        <!--文件上传-->
        <div style="display: inline-flex;">
          <upload action="http://10.193.7.132:8080/update/update_single/update_file "
                  accept=".xls, .xlsx, .csv"
                  :before-upload="beforeUpload"
                  :data="formItem"
                  :show-upload-list="false"
                  style="margin-right: 10px;">
            <i-button icon="ios-cloud-upload-outline">上传文件</i-button>
          </upload>
          <tag style="width: 300px;height: 32px;">{{filename}}</tag>
        </div>
      </form-item>
    </i-form>
    <modal
      v-model="updateDealModel"
      title="提示" style="padding: 30px">
      <div style="text-align:center" >
        <h2>文件已存在</h2>
      </div>
      <div slot="footer">
        <i-button @click="coverUpdate" type="primary">上传(覆盖更新)</i-button>
        <i-button @click="cancelUpdate" type="primary">上传(删除旧数据)</i-button>
        <i-button @click="cancel">取消</i-button>
      </div>
    </modal>
    <!--<i-button @click="testUp">test</i-button>-->
  </Card>

</template>

<script>
import axios from "axios";
import { manualData } from "@/data/manual";
import { validateFile } from "@/api/data";

export default {
  name: "update-base",
  data() {
    return {
      department: manualData.allDepartment,
      formItem: {
        departmentSelected: "",
        timeSelected: "",
        description: ""
      },
      ruleValidate: {
        timeSelected: [
          {
            required: true,
            type: "date",
            message: "请选择时间",
            trigger: "change"
          }
        ],
        departmentSelected: [
          { required: true, message: "请选择部门", trigger: "change" }
        ]
      },
      filename: "",
      validState: false,
      updateFormData: {},
      file: "",
      updateDealModel: false,
      closable: false
    };
  },
  methods: {
    success(info) {
      this.$Message.success(info);
    },
    warning(info) {
      this.$Message.warning(info);
    },
    error(info) {
      this.$Message.error(info);
    },
    coverUpdate() {
      this.updateFormData.set("deal", "update");
      let current = this;
      axios
        .post(
          "http://10.193.7.132:8080/update/update_single/update_file",
          this.updateFormData
        )
        .then(function(res) {
          console.log("response");
          console.log(res);
          switch (res.data.upload) {
            case "success":
              current.success("上传成功");
              break;
            case "parse fail":
              current.error("解析失败");
              break;
            default:
              current.error("上传失败");
              break;
          }
        })
        .catch(function(error) {
          current.error("上传失败");
          console.log(error);
        });
      this.updateDealModel = false;
    },
    cancelUpdate() {
      this.updateFormData.set("deal", "delete");
      let current = this;
      axios
        .post(
          "http://10.193.7.132:8080/update/update_single/update_file",
          this.updateFormData
        )
        .then(function(res) {
          console.log("response");
          console.log(res);
          switch (res.data.upload) {
            case "success":
              console.log("success");
              current.success("上传成功");
              break;
            case "parse fail":
              current.error("解析失败");
              break;
            default:
              current.error("上传失败");
              break;
          }
        })
        .catch(function(error) {
          current.error("上传失败");
          console.log(error);
        });
      this.updateDealModel = false;
    },
    cancel() {
      this.updateDealModel = false;
    },
    // 表单验证
    handleSubmit(name) {
      console.log(this);
      this.$refs[name].validate(valid => {
        if (valid) {
          console.log("success");
          return true;
        } else {
          console.log("fail");
          return false;
        }
      });
    },
    beforeUpload(file) {
      this.$refs["formItem"].validate(valid => {
        if (valid) {
          console.log("表单校验成功");
          this.updateFormData = {};
          let month = this.formItem.timeSelected.getMonth() + 1;
          let time = this.formItem.timeSelected.getFullYear() + "-" + month;
          this.filename = file.name;
          this.validState = true;
          validateFile({
            time: time,
            file_type: this.formItem.departmentSelected
          })
            .then(res => {
              let current = this;
              let formData = new FormData();
              formData.set("time", time);
              formData.set("file_type", this.formItem.departmentSelected);
              formData.set("description", this.formItem.description);
              formData.set("file", file);
              formData.set("deal", "update");
              this.updateFormData = formData;
              console.log(this.updateFormData);
              if (res.data.verify === "ok") {
                console.log("ok state");
                axios
                  .post(
                    "http://10.193.7.132:8080/update/update_single/update_file",
                    this.updateFormData
                  )
                  .then(function(res) {
                    console.log("response");
                    console.log(res);
                    switch (res.data.upload) {
                      case "success":
                        console.log("上传成功");
                        current.success("上传成功");
                        break;
                      case "parse fail":
                        console.log("解析失败");
                        current.error("解析失败");
                        break;
                      default:
                        console.log("上传失败1");
                        current.error("上传失败");
                        break;
                    }
                  })
                  .catch(function(error) {
                    console.log("上传失败2");
                    current.error("上传失败");
                    console.log(error);
                  });
              } else {
                this.updateDealModel = true;
                console.log("文件已存在");
              }
            })
            .catch(err => {
              console.log(err);
              this.$Message.error("上传失败3");
            });
        } else {
          console.log("表单校验失败");
          this.validState = false;
          this.$Message.error("表单信息不完整，无法上传");
        }
      });
      return false;
    },
    testUp() {
      // this.error('上传失败')
      this.updateDealModel = true;
    }
  }
};
</script>

<style scoped>
</style>
