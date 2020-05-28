USE mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;


INSERT INTO `xz_user` VALUES (1, 'yuexing', '3f0506ab14f6a2a6ca12d8623bb97c32');

INSERT INTO `xz_admin` VALUES (1, 'yuexing', '');