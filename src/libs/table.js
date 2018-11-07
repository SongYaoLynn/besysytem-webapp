/**
 * @Description: 得到表格数据的统计项
 * @author Sonya
 * @date 2018/10/11
 */
const getStatistics = (data, key, show) => {
  if (!data[key]) {
    data[key] = show;
  }
  return data;
};

// 多选框设置
const handleCheckAll = current => {
  if (current.indeterminate) {
    current.checkAll = false;
  } else {
    current.checkAll = !current.checkAll;
  }
  current.indeterminate = false;

  if (current.checkAll) {
    // this.addCurrentLink(link)
    current.checkAllGroup = current.sectionAll;
  } else {
    // this.removeCurrentLink(link)
    current.checkAllGroup = [];
  }
};
const checkAllGroupChange = (data, current) => {
  if (data.length === current.sectionAll.length) {
    current.indeterminate = false;
    current.checkAll = true;
    // this.addCurrentLink(link)
  } else if (data.length > 0) {
    current.indeterminate = true;
    current.checkAll = false;
    // this.addCurrentLink(link)
  } else {
    current.indeterminate = false;
    current.checkAll = false;
    // this.removeCurrentLink(link)
  }
};

/**
 * @Description: 导出到csv文件时表格数据的处理--身份证号
 * @author Sonya
 * @date 2018/10/14
 */
const dealDataBeforeToCsv = data => {
  for (let i = 0; i < data.length; i++) {
    data[i]["身份证号码"] = "\t" + data[i]["身份证号码"];
  }
  return data;
};

export {
  getStatistics,
  handleCheckAll,
  checkAllGroupChange,
  dealDataBeforeToCsv
};
