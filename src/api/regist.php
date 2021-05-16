<?php

  $username = $_GET['username'];

  $password = $_GET['password'];

  
  $con = mysqli_connect("localhost","root","123456","gshopper");

  $sql = "INSERT INTO `user` VALUES(null,'$username','$password',null)";

  $res = mysqli_query($con,$sql);

  if($res){
      echo "注册成功！！"  ;
  }else{ 
      echo "注册失败！！" ;
  }



?>