<%--
  Created by IntelliJ IDEA.
  User: 10127
  Date: 2021/7/6
  Time: 21:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSS -->
    <link rel="stylesheet" href="/css/bootstrap-table.min.css">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/owl.carousel.min.css">
    <!--	<link rel="stylesheet" href="css/magnific-popup.css">-->
    <!--	<link rel="stylesheet" href="css/nouislider.min.css">-->
    <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css">
    <!--	<link rel="stylesheet" href="css/paymentfont.min.css">-->
    <link rel="stylesheet" href="/css/main copy.css">

    <!-- Favicons -->



    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <title>Course Scheduing</title>

</head>
<body>
<!-- sign in -->
<%
    request.setCharacterEncoding("utf-8");
    String m= (String) request.getAttribute("data");
    System.out.println("进入方法了123"+m);
    if (m!=null&&m.equals("1")){  %>
    <script  type="text/javascript">
        alert("您输入的账号或密码有误，请重新输入");</script>
<%}%>





<div class="sign section--full-bg" data-bg="img/bg2.jpg">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="sign__content">
                    <!-- authorization form -->
                    <form action="/login" class="sign__form" method="post">
                        <a href="signin.jsp" class="sign__logo">
                            <img src="${pageContext.request.contextPath}/images/Course.png" alt="">
                        </a>

                        <div class="sign__group">
                            <input type="text" class="sign__input" placeholder="账号" name="student_num">
                        </div>

                        <div class="sign__group">
                            <input type="password" class="sign__input" placeholder="密码" name="password">
                        </div>


                        <!-- <div class="sign__group sign__group--checkbox">
                            <input id="remember" name="remember" type="checkbox" checked="checked">
                            <label for="remember">Remember Me</label>
                        </div> -->

                        <button class="sign__btn" type="submit">登录</button>

<%--                        <span class="sign__text">还没有账号？ <a href="signup.jsp">注册!</a></span>--%>

<%--                        <span class="sign__text"><a href="forgot.jsp">忘记密码?</a></span>--%>
                    </form>
                    <!-- end authorization form -->
                </div>
            </div>
        </div>
    </div>
</div>

<!-- end sign in -->

<!-- JS -->
<!-- <script src="static/js/jquery-3.5.1.min.js"></script>
<script src="static/js/bootstrap.bundle.min.js"></script>
<script src="static/js/owl.carousel.min.js"></script>
<script src="static/js/jquery.magnific-popup.min.js"></script>
<script src="static/js/wNumb.js"></script>
<script src="static/js/nouislider.min.js"></script>
<script src="static/js/jquery.mousewheel.min.js"></script>
<script src="static/js/jquery.mCustomScrollbar.min.js"></script>
<script src="static/js/main.js"></script> -->
</body>
</html>
