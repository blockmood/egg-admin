const jwt = require("jsonwebtoken");

function getParamName(attr, str) {
  let match = RegExp(`[?&]${attr}=([^&]*)`).exec(str);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}

module.exports = (options, app) => {
  return async (ctx, next) => {
    const url = ctx.req.url;
    if (url.indexOf("login") != -1) {
      await next();
      return;
    }
    try {
      let decoded = jwt.decode(
        getParamName("token", url),
        app.config.jwt.secret
      );
      if (decoded && decoded.foo) {
        await next();
      } else {
        ctx.body = {
          code: 401,
          message: "权限不足",
        };
      }
    } catch (e) {
      ctx.body = {
        code: 401,
        message: "权限不足",
      };
    }
  };
};
