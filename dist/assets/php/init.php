<?php

require "entry.php";

//названия таблиц
$tableUser = $prefix.'users';
$tableArticle = $prefix.'article';

// подключаемся к серверу
$link = mysql_connect($host, $user, $password) or die("MySQL сервер недоступен!".mysql_error());
mysql_select_db($db) or die("Нет соединения с БД".mysql_error());

// Проверяем на наличие таблиц в базе данных, и в случае отсутствия создаем новые
mysql_query("CREATE TABLE IF NOT EXISTS `$tableUser`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `user` TEXT(1000) NOT NULL,
    `password` TEXT(1000) NOT NULL,
    PRIMARY KEY(`id`)
)") or die(mysql_error());

// Проверяем на наличие таблиц в базе данных, и в случае отсутствия создаем новые
mysql_query("CREATE TABLE IF NOT EXISTS `$tableArticle`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `dateCreature` TEXT(1000) NOT NULL,
    `dateModification` TEXT(1000) NOT NULL,
    `title` TEXT(1000) NOT NULL,
    `articleShort` TEXT(1000) NOT NULL,
    `articleFull` TEXT(1000) NOT NULL,
    `author` TEXT(1000) NOT NULL,
    PRIMARY KEY(`id`)
)") or die(mysql_error());

/* закрываем подключение */
//mysqli_close($link);

echo "dsf";

?>
