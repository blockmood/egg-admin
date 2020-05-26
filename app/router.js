"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  console.log(app.middleware);
  const { router, controller } = app;
  router.post("/", controller.home.index);
  router.post("/api/v1/users/login", controller.user.login);
  router.post("/api/v1/users/userinfo", controller.user.userinfo);

  //主题curd
  router.post("/api/v1/cate/list", controller.cate.list);
  router.post("/api/v1/cate/create", controller.cate.create);
  router.post("/api/v1/cate/update", controller.cate.update);
  router.post("/api/v1/cate/delete", controller.cate.delete);

  //详情curd
  router.post("/api/v1/content/list", controller.content.list);
  router.post("/api/v1/content/create", controller.content.create);
  router.post("/api/v1/content/update", controller.content.update);
  router.post("/api/v1/content/delete", controller.content.delete);
};
