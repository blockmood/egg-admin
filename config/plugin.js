"use strict";

/** @type Egg.EggPlugin */
exports.mysql = {
  enable: true,
  package: "egg-mysql",
};

exports.validate = {
  enable: true,
  package: "egg-validate",
};

exports.jwt = {
  enable: true,
  package: "egg-jwt",
};

exports.redis = {
  enable: true,
  package: "egg-redis",
};

// exports.cors = {
//   enable: true,
//   package: 'egg-cors',
// }
