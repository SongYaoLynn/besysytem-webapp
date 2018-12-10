import axios from "@/libs/api.request";


export const getTableData = () => {
  return axios.request({
    url: "get_table_data",
    method: "get"
  });
};

export const getDragList = () => {
  return axios.request({
    url: "get_drag_list",
    method: "get"
  });
};

/**
 * @Description: 人工 基本数据页面
 * @author Sonya
 * @date 2018/10/15
 */

// 人工 基本数据页，班组查询
export const getBaseGroupData = data => {
  return axios.request({
    url: "/manual/base/get_base_group_data",
    data,
    method: "post"
  });
};

// 人工 基本数据页，姓名查询
export const getBaseDataByName = data => {
  return axios.request({
    url: "/manual/base/get_base_name_data",
    data,
    method: "post"
  });
};

/**
 * @Description: 人工 环节分摊页面
 * @author Sonya
 * @date 2018/10/15
 */
// 人工 环节分摊页，生产环节统计信息查询
export const getManualLinkData = data => {
  return axios.request({
    url: "/manual/link/get_link_data",
    data,
    method: "post"
  });
};

// 环节分摊页，生产环节详细信息查询
export const getManualLinkDetailData = data => {
  return axios.request({
    url: "/manual/link/get_link_detail_data",
    data,
    method: "post"
  });
};

// 环节分摊详细页，姓名查询
export const getLinkDetailByName = data => {
  return axios.request({
    url: "/manual/detail/get_detail_name",
    data,
    method: "post"
  });
};

/**
 * @Description: 统计信息页面
 * @author Sonya
 * @date 2018/10/15
 */
// 统计信息页面 环节分摊整体查询
export const getStatisticsLinkData = data => {
  return axios.request({
    url: "/statistics/get_link_data",
    data,
    method: "post"
  });
};

// 统计信息页面 环节分摊详细信息查询
export const getStatisticsLinkDetailData = data => {
  return axios.request({
    url: "/statistics/get_link_detail_data",
    data,
    method: "post"
  });
};

// 统计信息页面 成本费用明细 按照责任中心/班组
export const getStatisticsCostCenterGroup = data => {
  return axios.request({
    url: "/statistics/cost/get_cost_center_group",
    data,
    method: "post"
  });
};

// 统计信息页面 成本费用明细 按照部门
export const getStatisticsCostDepartment = data => {
  return axios.request({
    url: "/statistics/cost/get_cost_department",
    data,
    method: "post"
  });
};

// 统计信息页面 成本费用明细 按照环节
export const getStatisticsCostLink = data => {
  return axios.request({
    url: "/statistics/cost/get_cost_link",
    data,
    method: "post"
  });
};

/**
 * @Description: 上传页面
 * @author Sonya
 * @date 2018/10/15
 */

// 根据选择的文件名称判断文件是不是已经存在
export const validateFile = data => {
  return axios.request({
    url: "/update/update_single/validate_file",
    data,
    method: "post"
  });
};

// 上传文件
export const updateFile = data => {
  return axios.request({
    url: "/update/update_single/update_file",
    data,
    method: "post"
  });
};
