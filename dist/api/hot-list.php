<?php
  // 请求热搜列表的数据
  $start = $_POST['start'];
  $length= $_POST['length'];
 // 1.链接数据库
 $con = mysqli_connect("localhost","root","123456","gshopper");
 

 // 2.设置sql语句，查询哪张表
  $sql = "SELECT * FROM `hot-list` LIMIT $start,$length";
  
  // 3. 操作数据库，查询这个数据库下的哪个表
  // mysqli_query($con,"你要执行的sql语句");
  $res = mysqli_query($con,$sql);
 
  // 4.处理返回的结果
  $row = mysqli_fetch_assoc($res);

  // 5. 定义一个数组，用来存放查询到的每一个数据
  $arr = array();
  
  // 6.使用while循环，如果有数据就把他添加进数组
  while($row){
    array_push($arr,$row);
    $row = mysqli_fetch_assoc($res);
  };
  
  print_r(json_encode($arr));

?>