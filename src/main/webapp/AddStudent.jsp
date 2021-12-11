<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>添加学生 </title>
    <link rel="icon" href="favicon.ico" type="image/ico">
    <meta name="keywords" content="后台模板,后台管理系统,HTML模板">
    <meta name="description" content="基于Bootstrap的后台管理系统模板">
    <meta name="author" content="ftsucai.com">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/fonts.css" rel="stylesheet">
    <!--标签插件-->
    <link rel="stylesheet" href="js/jquery-tags-input/jquery.tagsinput.min.css">
    <link href="css/style.css" rel="stylesheet">
</head>
  
<body>
    
    <!--页面主要内容-->
    <script type="text/javascript">
        function clickmsg(){
            alert("添加成功");
        }
    </script>

    <main class="">
      
      <div class="">
        
        <div class="row" style="margin-top:15px;">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                  <script type="text/javascript">
                      $(function (){
                          $("#filehead").hide();
                          $("#sure").hide();
                          $("#head01").click(function (){
                              $("#filehead").show();
                              $("#sure").show();
                          });
                          $("#sure").click(function (){
                              var url = $("#filehead").val();
                              $("#hidgo").val(url);
                              $.ajax({
                                  url : "http://localhost:8080/userhead",
                                  data : {"hid01":url},
                                  type : "GET",
                                  success : function (msg){
                                      alert("修改成功啦!");
                                      window.location.reload();
                                  },
                                  dataType : "text"
                              });
                          });
                      });
                  </script>

                <div class="">
                  <img src="picture/xmlg.png" alt="..." class="img-avatar">
                </div>
                <hr>
                <form  class="site-form" action="AddStudentSuccess" method="get">
                    <div class="form-group">
                    <label >学生编号</label>
                    <input type="text" name="student_num" class="form-control"  value=""  />
                  </div>
                  <div class="form-group">
                    <label >学生姓名</label>
                    <input type="text" name="student_name" class="form-control" placeholder="" value=""/>
                  </div>
                    <div class="form-group">
                        <label >年级</label>
                        <input type="text" name="grade" class="form-control" placeholder="" value="">
                    </div>
                    <div class="form-group">
                        <label >专业</label>
                        <input type="text" name="major" class="form-control" placeholder="" value="" >
                    </div>
                    <div class="form-group">
                        <label >院系</label>
                        <input type="text" name="student_academy" class="form-control" placeholder="" value="" >
                    </div>
                    <div class="form-group">
                        <label >学生邮箱</label>
                        <input type="text" name="student_email" class="form-control" placeholder="" value="">
                    </div>
                    <div class="form-group">
                        <label >户籍</label>
                        <input type="text" name="student_registration" class="form-control" placeholder="" value="">
                    </div>
                    <div class="form-group">
                        <label >班级编号</label>
                        <input type="text" name="bj_nb" class="form-control" placeholder="" value="">
                    </div>
                    <div class="form-group">
                        <label >班级名</label>
                        <input type="text" name="bj_na" class="form-control" placeholder="" value="">
                    </div>
                    <div class="form-group">
                        <label >密码</label>
                        <input type="text" name="password" class="form-control" placeholder="" value="">
                    </div>
                  <button type="submit" class="btn btn-primary" onclick="clickmsg()">保存</button>
                </form>
       
              </div>
            </div>
          </div>
          
        </div>

      </div>
      
    </main>
<!--    &lt;!&ndash;End 页面主要内容&ndash;&gt;-->
<!--    <script type="text/javascript" src="js/jquery.min.js"></script>-->
<!--    &lt;!&ndash;标签插件&ndash;&gt;-->
<!--    <script src="js/jquery-tags-input/jquery.tagsinput.min.js"></script>-->
<!--    <script type="text/javascript" src="js/main.min.js"></script>-->
</body>
</html>