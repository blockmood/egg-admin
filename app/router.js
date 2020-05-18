'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app
  router.post('/', controller.home.index)
  router.post('/api/v1/users/login', controller.user.login)

  //主题curd
  router.post('/api/v1/cate/list', controller.cate.list)
  router.post('/api/v1/cate/create', controller.cate.create)
  router.post('/api/v1/cate/update', controller.cate.update)
  router.post('/api/v1/cate/delete', controller.cate.delete)

  //详情curd
  router.post('/api/v1/cate/list', controller.content.list)
}
