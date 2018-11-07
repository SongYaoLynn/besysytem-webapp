import axios from "@/libs/api.request";

export const getTableData = () => {
  return axios.request({
    // 这里返回的是一个Promise，request方法传入一个配置对象，配置项可参考axios
    url: "get_table_data",
    method: "get"
  });
};
