/**
 * @api {Get} /user/get getUserInfo
 * @apiGroup User
 *
 * @apiParam {String} username 用户名
 * @apiParamExample {json} Request-Example
 * {
 *  "userName": "Eve"
 * }
 *
 * @apiSuccessExample  {json} Response-Example
 * {
 *   "userName": "Eve",
 *   "createTime": "1568901681"
 *   "updateTime": "1568901681"
 * }
 */
function getUserInfo (username) {
  // 假如这个函数是根据用户名返回用户信息的
}