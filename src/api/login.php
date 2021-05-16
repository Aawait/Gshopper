<?php

 $username = $_GET['username'];
 $password = $_GET['password'];

 $con = mysqli_connect("localhost","root","123456","gshopper");

 $sql = "SELECT * FROM `user` WHERE `username` = '$username' AND `password` = '$password' ";

 $res = mysqli_query($con,$sql);

 $row = mysqli_fetch_assoc($res);

 if($row){
     echo "登录成功！！";
 }else{
     echo "账号密码错误登录失败！！";
 }















?>