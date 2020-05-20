'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app
  router.post('/', controller.home.index)
  router.post('/api/v1/users/login', controller.user.login)
  router.post('/api/v1/users/userinfo', app.jwt, controller.user.userinfo)

  //主题curd
  router.post('/api/v1/cate/list', app.jwt, controller.cate.list)
  router.post('/api/v1/cate/create', app.jwt, controller.cate.create)
  router.post('/api/v1/cate/update', app.jwt, controller.cate.update)
  router.post('/api/v1/cate/delete', app.jwt, controller.cate.delete)

  //详情curd
  router.post('/api/v1/content/list', app.jwt, controller.content.list)
  router.post('/api/v1/content/create', app.jwt, controller.content.create)
  router.post('/api/v1/content/update', app.jwt, controller.content.update)
  router.post('/api/v1/content/delete', app.jwt, controller.content.delete)
}
