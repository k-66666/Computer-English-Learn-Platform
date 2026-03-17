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

//-------------------------------上传---------------------------------------
// 上传图片
export const uploadImage = (params) => post("/common/uploadImage",params)
// 上传文件
export const uploadFile = (params) => post("/common/uploadFile",params)

//-------------------------------部门---------------------------------------
// 查询部门
export const getDeptList = (params) => post('/dept/getDeptList',params)
// 新增部门
export const saveDept = (params) => post('/dept/saveDept',params)
// 根据id查询部门
export const getById = (params) => get('/dept/getById',params)
//更新部门
export const editDept = (params) => post("/dept/editDept",params)
//删除部门
export const removeDept = (params) => get("/dept/removeDept",params)

//-------------------------------菜单---------------------------------------
// 查询菜单
export const getMenuList = (params) => post("/menu/getMenuList",params)
//保存菜单
export const saveMenu = (params) => post("/menu/saveMenu",params)
//更新菜单
export const editMenu = (params) => post("/menu/editMenu",params)
//删除菜单
export const removeMenu = (params) => get("/menu/removeMenu",params)
//根据id查询菜单
export const getMenuById = (params) => get("/menu/getById",params)
//根据用户获取菜单权限
export const getMenuByUser = () => get("/menu/getMenuByUser")

//-------------------------------岗位---------------------------------------
// 查询岗位
export const getPostPage = (params) => post("/post/getPostPage",params)
//岗位列表
export const getPostList = (params) => post("/post/getPostList",params)
//保存岗位
export const savePost = (params) => post("/post/savePost",params)
//更新岗位
export const editPost = (params) => post("/post/editPost",params)
//删除岗位
export const removePost = (params) => get("/post/removePost",params)
//根据id查询岗位
export const getPostById = (params) => get("/post/getPostById",params)

//-------------------------------角色---------------------------------------
// 查询角色
export const getRolePage = (params) => post("/role/getRolePage",params)
//查询角色列表
export const getRoleList = (params) => post("/role/getRoleList",params)
//根据id获取角色
export const getRoleById = (params) => get("/role/getRoleById",params)
//保存角色
export const saveRole = (params) => post("/role/saveRole",params)
//更新角色
export const editRole = (params) => post("/role/editRole",params)
//删除角色
export const removeRole = (params) => get("/role/removeRole",params)

//-------------------------------用户---------------------------------------
// 查询用户
export const getUserPage = (params) => post("/user/getUserPage",params)
//根据id查询用户
export const getUserById = (params) => get("/user/getUserById",params)
//保存用户
export const saveUser = (params) => post("/user/saveUser",params)
//更新用户
export const editUser = (params) => post("/user/editUser",params)
//删除用户
export const removeUser = (params) => get("/user/removeUser",params)
//重置密码
export const resetPassword = (params) => post("/user/resetPassword",params)
//获取登陆用户信息
export const getUser = () => get("/user/getUserInfo")
//修改个人信息
export const setUserInfo = (params) => post("/user/setUserInfo",params)
//修改个人头像
export const setUserAvatar = (params) => get("/user/setUserAvatar",params)
//验证密码
export const verPassword = (params) => get("/login/verPassword",params)

//-------------------------------参数---------------------------------------
// 查询参数
export const getParamPage = (params) => post("/param/getParamPage",params)
// 根据id查询参数
export const getParamById = (params) => get("/param/getById",params)
//保存参数
export const saveParam = (params) => post("/param/saveParam",params)
//更新参数
export const editParam = (params) => post("/param/editParam",params)
//删除参数
export const removeParam = (params) => get("/param/removeParam",params)

//-------------------------------公告---------------------------------------
// 查询公告
export const getAccountPage = (params) => post("/account/getAccountPage",params)
// 根据id查询公告
export const getAccountById = (params) => get("/account/getById",params)
// 保存公告
export const saveAccount = (params) => post("/account/saveAccount",params)
// 编辑公告
export const editAccount = (params) => post("/account/editAccount",params)
//删除公告
export const removeAccount = (params) => get("/account/removeAccount",params)

//-------------------------------日志---------------------------------------
// 查询登陆日志
export const getLogPage = (params) => post("/loginLog/getLogPage",params)
// 删除登陆日志
export const removeLog = (params) => get("/loginLog/removeLog",params)
// 清空登陆日志
export const clearLog = () => get("/loginLog/clearLog")
// 查询操作日志
export const getOperLogPage = (params) => post("/operLog/getLogPage",params)
// 删除操作日志
export const removeOperLog = (params) => get("/operLog/removeLog",params)
// 清空操作日志
export const clearOperLog = () => get("/operLog/clearLog")

//-------------------------------字典---------------------------------------
// 查询字典
export const getDictPage = (params) => post("/dict/getDictPage",params)
// 根据id获取字典
export const getDictById = (params) => get("/dict/getDictById",params)
// 保存字典
export const saveDict = (params) => post("/dict/saveDict",params)
// 编辑字典
export const editDict = (params) => post("/dict/editDict",params)
// 删除字典
export const removeDict = (params) => get("/dict/removeDict",params)
// 根据编码获取字典数据
export const getDictByCode = (params) => get("/dict/getDictByCode",params)
// 根据编码获取字典数据和标签获取值
export const getDictByCodeAndLabel = (params) => get("/dict/getDictByCodeAndLabel",params)
// 查询全部字典类型
export const getDictTypeList = () => get("/dict/getDictTypeList")

//-------------------------------代码生成---------------------------------------
// 查询代码生成列表
export const getGenPage = (params) => post("/genTable/getGenPage",params)
// 根据id获取代码生成
export const getGenById = (params) => get("/genTable/getGenById",params)
// 保存代码生成
export const saveGen = (params) => get("/genTable/saveGen",params)
// 编辑代码生成
export const editGen = (params) => post("/genTable/editGen",params)
// 删除代码生成
export const removeGen = (params) => get("/genTable/removeGen",params)
// 获取数据库表
export const getTables = (params) => post("/genTable/getTables",params)
// 同步生成表和字段
export const syncTableAndColumns = (params) => get("/genTable/syncTableAndColumns",params)
//预览
export const preview = (params) => get("/genTable/preview",params)

//-------------------------------词汇---------------------------------------
//查询词汇
export const getApeVocabularyPage = (params) => post("/vocabulary/getApeVocabularyPage",params)
//根据id查询词汇
export const getApeVocabularyById = (params) => get("/vocabulary/getApeVocabularyById",params)
//保存词汇
export const saveApeVocabulary = (params) => post("/vocabulary/saveApeVocabulary",params)
//更新词汇
export const editApeVocabulary = (params) => post("/vocabulary/editApeVocabulary",params)
//删除ApeVocabulary
export const removeApeVocabulary = (params) => get("/vocabulary/removeApeVocabulary",params)

//-------------------------------语法---------------------------------------
//查询语法
export const getApeSyntaxPage = (params) => post("/syntax/getApeSyntaxPage",params)
//根据id查询语法
export const getApeSyntaxById = (params) => get("/syntax/getApeSyntaxById",params)
//保存语法
export const saveApeSyntax = (params) => post("/syntax/saveApeSyntax",params)
//更新语法
export const editApeSyntax = (params) => post("/syntax/editApeSyntax",params)
//删除ApeSyntax
export const removeApeSyntax = (params) => get("/syntax/removeApeSyntax",params)

//-------------------------------语法分类---------------------------------------
//查询语法分类
export const getApeSyntaxTypePage = (params) => post("/type/getApeSyntaxTypePage",params)
//根据id查询语法分类
export const getApeSyntaxTypeById = (params) => get("/type/getApeSyntaxTypeById",params)
//保存语法分类
export const saveApeSyntaxType = (params) => post("/type/saveApeSyntaxType",params)
//更新语法分类
export const editApeSyntaxType = (params) => post("/type/editApeSyntaxType",params)
//删除ApeSyntaxType
export const removeApeSyntaxType = (params) => get("/type/removeApeSyntaxType",params)

export const getApeSyntaxTypeList = (params) => get("/type/getApeSyntaxTypeList",params)

//-------------------------------文献---------------------------------------
//查询文献
export const getApeLiteraturePage = (params) => post("/literature/getApeLiteraturePage",params)
//根据id查询文献
export const getApeLiteratureById = (params) => get("/literature/getApeLiteratureById",params)
//保存文献
export const saveApeLiterature = (params) => post("/literature/saveApeLiterature",params)
//更新文献
export const editApeLiterature = (params) => post("/literature/editApeLiterature",params)
//删除ApeLiterature
export const removeApeLiterature = (params) => get("/literature/removeApeLiterature",params)

//-------------------------------文献章节---------------------------------------
//查询文献章节
export const getApeLiteratureItemPage = (params) => post("/item/getApeLiteratureItemPage",params)
//根据id查询文献章节
export const getApeLiteratureItemById = (params) => get("/item/getApeLiteratureItemById",params)
//保存文献章节
export const saveApeLiteratureItem = (params) => post("/item/saveApeLiteratureItem",params)
//更新文献章节
export const editApeLiteratureItem = (params) => post("/item/editApeLiteratureItem",params)
//删除ApeLiteratureItem
export const removeApeLiteratureItem = (params) => get("/item/removeApeLiteratureItem",params)

//-------------------------------口语---------------------------------------
//查询口语
export const getApeSpokenPage = (params) => post("/spoken/getApeSpokenPage",params)
//根据id查询口语
export const getApeSpokenById = (params) => get("/spoken/getApeSpokenById",params)
//保存口语
export const saveApeSpoken = (params) => post("/spoken/saveApeSpoken",params)
//更新口语
export const editApeSpoken = (params) => post("/spoken/editApeSpoken",params)
//删除ApeSpoken
export const removeApeSpoken = (params) => get("/spoken/removeApeSpoken",params)

//-------------------------------讨论---------------------------------------
//查询讨论
export const getApeDiscussPage = (params) => post("/discuss/getApeDiscussPage",params)
//根据id查询讨论
export const getApeDiscussById = (params) => get("/discuss/getApeDiscussById",params)
//保存讨论
export const saveApeDiscuss = (params) => post("/discuss/saveApeDiscuss",params)
//更新讨论
export const editApeDiscuss = (params) => post("/discuss/editApeDiscuss",params)
//删除ApeDiscuss
export const removeApeDiscuss = (params) => get("/discuss/removeApeDiscuss",params)

//-------------------------------评论---------------------------------------
//查询评论
export const getApeDiscussItemPage = (params) => post("/item/getApeDiscussItemPage",params)
//根据id查询评论
export const getApeDiscussItemById = (params) => get("/item/getApeDiscussItemById",params)
//保存评论
export const saveApeDiscussItem = (params) => post("/item/saveApeDiscussItem",params)
//更新评论
export const editApeDiscussItem = (params) => post("/item/editApeDiscussItem",params)
//删除ApeDiscussItem
export const removeApeDiscussItem = (params) => get("/item/removeApeDiscussItem",params)

//-------------------------------自测---------------------------------------
//查询自测
export const getApeExaminePage = (params) => post("/examine/getApeExaminePage",params)
//根据id查询自测
export const getApeExamineById = (params) => get("/examine/getApeExamineById",params)
//保存自测
export const saveApeExamine = (params) => post("/examine/saveApeExamine",params)
//更新自测
export const editApeExamine = (params) => post("/examine/editApeExamine",params)
//删除ApeExamine
export const removeApeExamine = (params) => get("/examine/removeApeExamine",params)

//-------------------------------题目---------------------------------------
//查询题目
export const getApeExamineItemPage = (params) => post("/item/getApeExamineItemPage",params)
//根据id查询题目
export const getApeExamineItemById = (params) => get("/item/getApeExamineItemById",params)
//保存题目
export const saveApeExamineItem = (params) => post("/item/saveApeExamineItem",params)
//更新题目
export const editApeExamineItem = (params) => post("/item/editApeExamineItem",params)
//删除ApeExamineItem
export const removeApeExamineItem = (params) => get("/item/removeApeExamineItem",params)

export const getIndexData = (params) => get("/common/getIndexData",params)