import { getParams } from "@/libs/util";
const USER_MAP = {
  super_admin: {
    name: "super_admin",
    user_id: "1",
    access: ["super_admin", "admin"],
    token: "super_admin",
    avator: "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"
  },
  admin: {
    name: "admin",
    user_id: "2",
    access: ["admin"],
    token: "admin",
    avator: "https://avatars0.githubusercontent.com/u/20942571?s=460&v=4"
  }
};

export const login = req => {
  console.log("login");
  console.log(req);
  const keyValueArr = req.body.split("&");
  let paramObj = {};
  keyValueArr.forEach(item => {
    const keyValue = item.split("=");
    paramObj[keyValue[0]] = keyValue[1];
  });
  console.log(paramObj);
  // 此处写的不严谨，应该先判断USER_MAP[paramObj.userName].token是否有效，否则会返回奇怪的值
  return { token: USER_MAP[paramObj.userName].token };
};
//
export const getUserInfo = req => {
  console.log("getUserInfo");
  console.log(req.url);
  const params = getParams(req.url);
  console.log(params);
  return USER_MAP[params.token];
};
//
export const logout = req => {
  return null;
};
