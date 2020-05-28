/*
 Navicat MySQL Data Transfer

 Source Server         : 111
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : xingzuoData

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 20/05/2020 17:43:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for xz_admin
-- ----------------------------
DROP TABLE IF EXISTS `xz_admin`;
CREATE TABLE `xz_admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `avator` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for xz_cate
-- ----------------------------
DROP TABLE IF EXISTS `xz_cate`;
CREATE TABLE `xz_cate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cate_name` varchar(255) DEFAULT NULL,
  `create_time` char(100) DEFAULT NULL,
  `update_time` char(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for xz_content
-- ----------------------------
DROP TABLE IF EXISTS `xz_content`;
CREATE TABLE `xz_content` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `sub_content` varchar(255) DEFAULT NULL,
  `content` text,
  `cate_id` int NOT NULL,
  `cover_img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `is_recommend` smallint NOT NULL DEFAULT '1',
  `create_time` varchar(30) DEFAULT NULL,
  `update_time` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for xz_user
-- ----------------------------
DROP TABLE IF EXISTS `xz_user`;
CREATE TABLE `xz_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` char(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
