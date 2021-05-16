<?php

$start = $_GET['start'];
$length= $_GET['length'];

// 链接数据库
$con = mysqli_connect("localhost","root","123456","gshopper");

// 设置sql语句
$sql = "SELECT * FROM `test-img` LIMIT $start,$length";

// 操作数据库

$res = mysqli_query($con,$sql);

// 处理结果
$row = mysqli_fetch_assoc($res);

print_r(json_encode($row));


?>