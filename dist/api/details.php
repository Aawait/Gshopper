<?php

 $start = $_GET['start'];
 $length = $_GET['length'];

 $con = mysqli_connect("localhost","root","123456","gshopper");

 $sql = "SELECT * FROM `details` LIMIT $start,$length";

 $res = mysqli_query($con,$sql);

 $row = mysqli_fetch_assoc($res);
 
 $arr = array();
 
 // mysqli_fetch_assoc 只会返回第一条数据
 // 如果查询到还有数据返回，那么就把它添加到数组里，返回整个数组
 while($row){

   array_push($arr,$row);
   // 添加完成后继续执行处理查询的数据结果
   $row = mysqli_fetch_assoc($res);
 }
 print_r(json_encode($arr));

?>