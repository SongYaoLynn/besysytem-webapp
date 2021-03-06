export default {
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 30,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   */
  // baseUrl: {
  //   // dev: 'http://localhost:8000/',
  //   // pro: 'http://localhost:8000/'
  //   dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
  //   pro: 'https://produce.com'
  //   // dev: '',
  //   // pro: ''
  // }
  baseUrl: "http://10.193.7.111:8080/",
  // 主页名称
  homeName: "home"
};
