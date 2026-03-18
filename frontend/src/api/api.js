import request, { post, get } from "@/utils/request";

// export function products(params) {
//     return request({
//       url: "/api/v1/products",  //接口路径
//       method: "get",  //接口方法
//       headers: { 'Content-Type': 'multipart/form-data' }, //给接口添加请求头
//       params  //接口参数
//     });
// }

//-------------------------------登陆---------------------------------------
// 登陆
export const login = (params) => post("/login",params)
//登出
export const logout = () => get("/login/logout")
//获取登陆用户信息
export const getUser = () => get("/user/getUserInfo")
//注册
export const saveUser = (params) => post("/user/saveUser",params)

export const getEmailReg = (params) => get("/login/getEmailReg",params)

export const forgetPassword = (params) => post("/user/forgetPassword",params)
//查询词汇
export const getApeVocabularyPage = (params) => post("/vocabulary/getApeVocabularyPage",params)
//根据id查询词汇
export const getApeVocabularyById = (params) => get("/vocabulary/getApeVocabularyById",params)
//查询用户词汇
export const getApeVocabularyUserPage = (params) => post("/user/getApeVocabularyUserPage",params)
//根据id查询用户词汇
export const getApeVocabularyUserById = (params) => get("/user/getApeVocabularyUserById",params)
//保存用户词汇
export const saveApeVocabularyUser = (params) => post("/user/saveApeVocabularyUser",params)
//更新用户词汇
export const editApeVocabularyUser = (params) => post("/user/editApeVocabularyUser",params)
//删除ApeVocabularyUser
export const removeApeVocabularyUser = (params) => get("/user/removeApeVocabularyUser",params)

export const getCountByUserAndV = (params) => get("/user/getCountByUserAndV",params)
//查询语法
export const getApeSyntaxPage = (params) => post("/syntax/getApeSyntaxPage",params)

export const getApeSyntaxTypeList = (params) => get("/type/getApeSyntaxTypeList",params)
//根据id查询语法
export const getApeSyntaxById = (params) => get("/syntax/getApeSyntaxById",params)
//查询用户语法
export const getApeSyntaxUserPage = (params) => post("/user/getApeSyntaxUserPage",params)
//根据id查询用户语法
export const getApeSyntaxUserById = (params) => get("/user/getApeSyntaxUserById",params)
//保存用户语法
export const saveApeSyntaxUser = (params) => post("/user/saveApeSyntaxUser",params)
//更新用户语法
export const editApeSyntaxUser = (params) => post("/user/editApeSyntaxUser",params)
//删除ApeSyntaxUser
export const removeApeSyntaxUser = (params) => get("/user/removeApeSyntaxUser",params)

export const getSyntaxCountByUserAndV = (params) => get("/user/getSyntaxCountByUserAndV",params)
//查询文献
export const getApeLiteraturePage = (params) => post("/literature/getApeLiteraturePage",params)
//根据id查询文献
export const getApeLiteratureById = (params) => get("/literature/getApeLiteratureById",params)

export const getApeLiteratureItemByLid = (params) => get("/item/getApeLiteratureItemByLid",params)
//-------------------------------用户文献---------------------------------------
//查询用户文献
export const getApeLiteratureUserPage = (params) => post("/user/getApeLiteratureUserPage",params)
//根据id查询用户文献
export const getApeLiteratureUserById = (params) => get("/user/getApeLiteratureUserById",params)
//保存用户文献
export const saveApeLiteratureUser = (params) => post("/user/saveApeLiteratureUser",params)
//更新用户文献
export const editApeLiteratureUser = (params) => post("/user/editApeLiteratureUser",params)
//删除ApeLiteratureUser
export const removeApeLiteratureUser = (params) => get("/user/removeApeLiteratureUser",params)

export const getLCountByUserAndV = (params) => get("/user/getLCountByUserAndV",params)
//查询口语
export const getApeSpokenPage = (params) => post("/spoken/getApeSpokenPage",params)
//查询用户口语
export const getApeSpokenUserPage = (params) => post("/user/getApeSpokenUserPage",params)
//根据id查询用户口语
export const getApeSpokenUserById = (params) => get("/user/getApeSpokenUserById",params)
//保存用户口语
export const saveApeSpokenUser = (params) => post("/user/saveApeSpokenUser",params)
//更新用户口语
export const editApeSpokenUser = (params) => post("/user/editApeSpokenUser",params)
//删除ApeSpokenUser
export const removeApeSpokenUser = (params) => get("/user/removeApeSpokenUser",params)

export const getSpokenCountByUserAndV = (params) => get("/user/getSpokenCountByUserAndV",params)
//查询自测
export const getApeExaminePage = (params) => post("/examine/getApeExaminePage",params)
//根据id查询自测
export const getApeExamineById = (params) => get("/examine/getApeExamineById",params)

export const getApeExamineItemByIdE = (params) => get("/item/getApeExamineItemByIdE",params)
//查询用户自测
export const getApeExamineUserPage = (params) => post("/user/getApeExamineUserPage",params)
//根据id查询用户自测
export const getApeExamineUserById = (params) => get("/user/getApeExamineUserById",params)
//保存用户自测
export const saveApeExamineUser = (params) => post("/user/saveApeExamineUser",params)
//更新用户自测
export const editApeExamineUser = (params) => post("/user/editApeExamineUser",params)
//删除ApeExamineUser
export const removeApeExamineUser = (params) => get("/user/removeApeExamineUser",params)
//查询用户自测题目
export const getApeExamineItemUserPage = (params) => post("/user/getApeExamineItemUserPage",params)
//根据id查询用户自测题目
export const getApeExamineItemUserById = (params) => get("/user/getApeExamineItemUserById",params)
//保存用户自测题目
export const saveApeExamineItemUser = (params) => post("/user/saveApeExamineItemUser",params)
//更新用户自测题目
export const editApeExamineItemUser = (params) => post("/user/editApeExamineItemUser",params)
//删除ApeExamineItemUser
export const removeApeExamineItemUser = (params) => get("/user/removeApeExamineItemUser",params)
//查询讨论
export const getApeDiscussPage = (params) => post("/discuss/getApeDiscussPage",params)
//保存讨论
export const saveApeDiscuss = (params) => post("/discuss/saveApeDiscuss",params)
//查询评论
export const getApeDiscussItemPage = (params) => post("/item/getApeDiscussItemPage",params)
//保存评论
export const saveApeDiscussItem = (params) => post("/item/saveApeDiscussItem",params)

export const getRecord = (params) => get("/common/getRecord",params)

export const getApeSpokenById = (params) => get("/spoken/getApeSpokenById",params)
//更新用户
export const editUser = (params) => post("/user/editUser",params)
//根据id查询用户
export const getUserById = (params) => get("/user/getUserById",params)
//根据id查询用户
export const changePassword = (params) => get("/user/changePassword",params)
//根据id查询用户
export const changeAvatar = (params) => get("/user/changeAvatar",params)

export const getApeExamineItemUserByIdE = (params) => get("/user/getApeExamineItemUserByIdE",params)
