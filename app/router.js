"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.post("/", controller.home.index);
  router.post("/api/v1/users/login", controller.user.login);
  router.post("/api/v1/users/userinfo", controller.user.userinfo);

  /*--------  后台  --------*/
  //文件上传
  router.post("/api/v1/upload", controller.upload.uploadFile);

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

  /*--------  前台  --------*/
  router.post("/api/v1/news/list", controller.news.list);
  router.post("/api/v1/news/content", controller.news.content);
};
