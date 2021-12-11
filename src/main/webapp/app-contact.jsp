<%@ page import="java.util.ArrayList" %>
<%@page isELIgnored="false" %>
<!Doctype html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">

<head>
    <title>好友列表</title>
    <meta charset="utf-8">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>



    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/fonts.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">



    <link rel="stylesheet" href="assets/css/site.min.css" >
    <style>
        .container-fluid{
            background: #FFFFFF;
            box-shadow: 0 2px 10px 0 rgba(237,238,240,0.50);
            border-radius: 8px;
            margin: 30px;
        }
        .c:hover{
            background-color: rgba(93, 120, 138, 0.58);
        }
    </style>
</head>
<body class="theme-blue">

<!-- Page Loader -->
<div class="container-fluid">

    <div class="col-md-6 col-sm-12">
            <form action="SearchJsData" method="get">
                <input type="text" placeholder="Day" name="day" >
                <input type="text" placeholder="Class Hour" name="time">
                <input type="text" placeholder="Classroom Name" name="js_name">
                <button type="submit" class="btn btn-primary">搜索</button>
            </form>
    </div>
    <%--<div class="col-md-6 col-sm-12 text-right hidden-xs">
        <a href="addpage.jsp?goodtype=best01" class="btn btn-sm btn-primary btn-round" title="">添加商品</a>
    </div>--%>


    <div class="col-lg-12">
        <div class="table-responsive">
            <table class="table  " >
                <tbody>
               <%-- <jsp:useBean id="good" class="Model.Goods"></jsp:useBean>
                <jsp:useBean id="gooddao" class="Dao.impl.GoodsDaoimpl"></jsp:useBean>
                <%ArrayList<Goods> goodlist = gooddao.getByAll();%>
                <% for(Goods goodsingle : goodlist){
                    String str = goodsingle.getGood_imgurl();
                    String price = goodsingle.getGood_price();
                    String playname = goodsingle.getGood_chinesename();
                    String playEnglish = goodsingle.getGood_name();
                    String goodtype = goodsingle.getSend_name();
                %>--%>
               <c:forEach items="${jslist}" var="jsdata">
                <tr class="c">
                    <td width="70px">
                        <img src="picture/xmlg.png" width="60px" height="50px"   alt="头像"  class="w35 rounded" >
                    </td>
                    <td width="30px">
                        <a href="" title="">${jsdata.js_nb}</a>
                    </td>
                    <td >
                        <span style="color: red">${jsdata.js_name}</span>
                    </td>
                    <td ><code>星期${jsdata.day}&nbsp;第${jsdata.time}节</code></td>
                    <td>
                        <span id="id">${jsdata.status}</span>
                    </td>
                </tr>
               <tr>
                   <td>
                       <a href="BjksInsert?js_nb=${jsdata.js_nb}&js_name=${jsdata.js_name}&day=${jsdata.day}&time=${jsdata.time}"><button class="btn btn-primary btn-sm" id="btdelete" >增加至课表</button></a>
                   </td>
                   <td>
                       <a href=""><button class="btn btn-success btn-sm" id="btupdate">返回首页</button></a>
                   </td>
               </tr>
              <%--  <%}%>--%>
               </c:forEach>
                </tbody>
            </table>
        </div>
        <!--导航条 -->
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item active"><a class="page-link" href="">1</a></li>
                <li class="page-item"><a class="page-link" href="">^</a></li>
                <li class="page-item">
                    <a class="page-link" href="" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>

    </div>
</div>
</div>
</body>
</html>
