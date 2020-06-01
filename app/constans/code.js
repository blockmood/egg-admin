const CODE = {
  SUCCESS: 200,
  ERROR: 403,
  AUTO_ERROR: 401,
};

const TABLE_PRE = {
  name: "xz",
};

const ERROR_INFO = {
  USERNAME: "用户名不存在",
  PASSWORD: "密码错误",
  AUTO_INFO: "权限不足",
};

const DATABASES_TABLE = {
  USER: `${TABLE_PRE.name}_user`,
  CATE: `${TABLE_PRE.name}_cate`,
  CONTENT: `${TABLE_PRE.name}_content`,
  USER_INFO: `${TABLE_PRE.name}_admin`,
};

const KEY = {
  access_key: "wJuyp2Qzvm8F5aa5Sx60s8gUREJJ6yEwJ2JmEXFV",
  secret_key: "NNGkTwvMj8S9ftpocEfSBpSaxvVa-DTqI4CnoU3k",
};

module.exports = {
  CODE,
  ERROR_INFO,
  DATABASES_TABLE,
  KEY,
};
