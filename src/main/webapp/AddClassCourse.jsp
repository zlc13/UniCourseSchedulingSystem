<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>添加教室 </title>
    <link rel="icon" href="favicon.ico" type="image/ico">

    <meta name="author" content="ftsucai.com">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/fonts.css" rel="stylesheet">
    <!--标签插件-->
    <link rel="stylesheet" href="js/jquery-tags-input/jquery.tagsinput.min.css">
    <link href="css/style.css" rel="stylesheet">
</head>
  
<body>


<%
    request.setCharacterEncoding("utf-8");

    String id= (String) session.getAttribute("id");
%>



<%
    request.setCharacterEncoding("utf-8");

    String m= (String) request.getAttribute("classcourse");
    if (m==null){
        m="";
    }
    System.out.println("进入修改密码是否成功方法");
    if (m!=null){
        System.out.printf(m);%>
<script  type="text/javascript">
        alert("<%=m%>");
    </script>
<%}%>



<%--     <% if (success!=null && success.equals("2")){%>--%>
<%--    <script type="text/javascript">--%>
<%--     function clickmsg(){--%>
<%--          alert("添加失败");--%>
<%--     }--%>
<%--     window.reload;--%>
<%--    </script>--%>

<%--    <%}%>--%>


    <!--页面主要内容-->

    <main class="">
      
      <div class="">
        
        <div class="row" style="margin-top:15px;">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                  <script type="text/javascript">

                  </script>

                <div class="">
                  <img src="picture/xmlg.png" alt="..." class="img-avatar">
                </div>
                <hr>
                <form  class="site-form" action="AddClassCourse" method="get">
                    <div class="form-group">
                    <label >班级编号</label>
                    <input type="text" name="bj_nb" class="form-control"  value=""/>
                  </div>
                  <div class="form-group">
                    <label >课程名</label>
                    <input type="text" name="c_nb" class="form-control" placeholder="" value="" >
                  </div>
                    <div class="form-group">
                        <label >任课老师</label>
                        <input type="text" name="tr_nb" class="form-control" placeholder="" value="" >
                    </div>
                    <div class="form-group">
                        <label >课时编号</label>
                        <input type="text" name="bjks_nb" class="form-control" placeholder="" value="">
                    </div>
                  <button type="submit" class="btn btn-primary" >保存</button>
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