

<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<!DOCTYPE html>
<html lang="en" class="loading">
<!-- BEGIN : Head-->
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>管理员端</title>

    <link rel="shortcut icon" type="image/png" href="picture/xmlg.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <link href="css/css.css" rel="stylesheet">
    <!-- BEGIN VENDOR CSS-->
    <!-- font icons-->

    <link rel="stylesheet" type="text/css" href="css/style.min.css">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/perfect-scrollbar.min.css">
    <link rel="stylesheet" type="text/css" href="css/prism.min.css">
    <link rel="stylesheet" type="text/css" href="css/datatables.min.css">
    <link rel="stylesheet" type="text/css" href="css/responsive.dataTables.min.css">
    <!-- END VENDOR CSS-->
    <!-- BEGIN APEX CSS-->
    <link rel="stylesheet" type="text/css" href="css/app.css">
    <!-- END APEX CSS-->
    <!-- BEGIN Page Level CSS-->
    <!-- END Page Level CSS-->
</head>
<!-- END : Head-->

<%
    String id= (String) session.getAttribute("id");
%>

<!-- BEGIN : Body-->
<body data-col="2-columns" class=" 2-columns ">
<!-- ////////////////////////////////////////////////////////////////////////////-->
<div class="wrapper">


    <!-- main menu-->
    <%--      <!--.main-menu(class="#{menuColor} #{menuOpenType}", class=(menuShadow == true ? 'menu-shadow' : ''))-->--%>
    <div data-active-color="black" data-background-color="white" data-image="" class="app-sidebar">
        <!-- main menu header-->
        <!-- Sidebar Header starts-->
        <div class="sidebar-header">
            <div class="logo clearfix"><a href="index.jsp" class="logo-text float-left">
                <div class="logo-img"><img  width="30px" height="30px" src="picture/xmlg.png"></div><span class="text align-middle">管理员端</span></a><a id="sidebarToggle" href="javascript:;" class="nav-toggle d-none d-sm-none d-md-none d-lg-block"><i data-toggle="expanded" class="toggle-icon ft-toggle-left"></i></a><a id="sidebarClose" href="javascript:;" class="nav-close d-block d-md-block d-lg-none d-xl-none"><i class="ft-x"></i></a></div>
        </div>
        <!-- Sidebar Header Ends-->
        <!-- / main menu header-->
        <!-- main menu content-->
        <div class="sidebar-content">
            <div class="nav-container">
                <ul id="main-menu-navigation" data-menu="menu-navigation" data-scroll-to-active="true" class="navigation navigation-main">
                    <li class=" nav-item"><a target="iframeMain" href="AddJsData.jsp"><i class="ft-home"></i><span data-i18n="" class="menu-title">增加教室</span></a>

                    </li>
                    <li class=" nav-item"><a  target="iframeMain" href="AddStudent.jsp"><i class="ft-check-square"></i><span data-i18n="" class="menu-title">增加学生</span></a>
                    </li>
                    <li class=" nav-item"><a  target="iframeMain" href="AddTeacher.jsp"><i class="ft-droplet"></i><span data-i18n="" class="menu-title">增加老师</span></a>
                    </li>
                    <li class=" nav-item"><a target="iframeMain" href="AddBjData.jsp"><i class="ft-mail"></i><span data-i18n="" class="menu-title">增加班级</span></a>
                    </li>
                    <li class=" nav-item"><a target="iframeMain" href="AddClassCourse.jsp"><i class="ft-file-minus"></i><span data-i18n="" class="menu-title">增加班级课程</span></a>
                    </li>
                    <li class=" nav-item"><a target="iframeMain" href="JsData"><i class="ft-file-text"></i><span data-i18n="" class="menu-title">手动排课</span></a>
                    </li>
                    <li class=" nav-item"><a target="iframeMain" href="wizard-forms"><i class="ft-calendar"></i><span data-i18n="" class="menu-title">自动排课</span></a>
                    </li>

                </ul>
            </div>
        </div>
        <!-- main menu content-->
        <div class="sidebar-background"></div>
        <!-- main menu footer-->
        <!-- include includes/menu-footer-->
        <!-- main menu footer-->
    </div>
    <!-- / main menu-->


    <!-- Navbar (Header) Starts-->
    <nav class="navbar navbar-expand-lg navbar-light bg-faded header-navbar">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" data-toggle="collapse" class="navbar-toggle d-lg-none float-left"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><span class="d-lg-none navbar-right navbar-collapse-toggle"><a aria-controls="navbarSupportedContent" href="javascript:;" class="open-navbar-container black"><i class="ft-more-vertical"></i></a></span>

            </div>
            <div class="navbar-container">
                <div id="navbarSupportedContent" class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item mr-2 d-none d-lg-block"><a id="navbar-fullscreen" href="javascript:;" class="nav-link apptogglefullscreen"><i class="ft-maximize font-medium-3 blue-grey darken-4"></i>
                            <p class="d-none">全屏</p>全屏</a></li>
                        <li class="dropdown nav-item"><a id="dropdownBasic3" href="#" data-toggle="dropdown" class="nav-link position-relative "><i class="ft-user font-medium-3 blue-grey darken-4"></i>
                            <p class="d-none">用户设置</p><%=id%>个人资料</a>

                        </li>
                        <li class="nav-item d-none d-lg-block"><a href="javascript:;" class="nav-link position-relative notification-sidebar-toggle"><i class="ft-align-left font-medium-3 blue-grey darken-4"></i>
                            <p class="d-none">提示框</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- Navbar (Header) Ends-->

    <div class="main-panel">
        <!-- BEGIN : Main Content-->
        <div class="main-content">
            <div class="content-wrapper"><div class="row">
                <div class="col-sm-12">
                    <div class="content-header">管理员功能</div>
                    <p class="content-sub-header"></p>
                </div>
            </div>

                <iframe name="iframeMain" src="" frameborder=0 style= "width: 100%"; height="600px";></iframe>





            </div>
        <!-- END : End Main Content-->



    </div>
</div>
<!-- ////////////////////////////////////////////////////////////////////////////-->

<!-- START Notification Sidebar-->
<aside id="notification-sidebar" class="notification-sidebar d-none d-sm-none d-md-block"><a class="notification-sidebar-close"><i class="ft-x font-medium-3"></i></a>
    <div class="side-nav notification-sidebar-content">
        <div class="row">
            <div class="col-12 mt-1">
                <ul class="nav nav-tabs">
                    <li class="nav-item"><a id="base-tab1" data-toggle="tab" aria-controls="tab1" href="#activity-tab" aria-expanded="true" class="nav-link active">动态</a></li>
                    <li class="nav-item"><a id="base-tab2" data-toggle="tab" aria-controls="tab2" href="#chat-tab" aria-expanded="false" class="nav-link">切换</a></li>

                </ul>
                <div class="tab-content px-1 pt-1">


                    <div id="chat-tab" aria-labelledby="base-tab2" class="tab-pane">
                        <div id="chatapp" class="col-12">
                            <h6 class="mt-1 mb-3 text-bold-400">切换账号</h6>
                            <div class="collection border-none">
                                <div class="media mb-1"><a href="adminSignin.jsp"><img  alt="96x96" src="images/SwitchAccount.png" ></a>
                                    <div class="media-body">
                                        <div class="clearfix">
                                            <h4 class="font-medium-1 primary mt-1 mb-0 mr-auto float-left">状态</h4><span class="medium-small float-right blue-grey-text text-lighten-3">5.00 AM</span>
                                        </div>
                                        <p class="text-muted font-small-3" href="adminSignin.jsp">退出</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
</aside>
<!-- END Notification Sidebar-->
<!-- Theme customizer Starts-->
<div class="customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block"><a class="customizer-close"><i class="ft-x font-medium-3"></i></a><a id="customizer-toggle-icon" class="customizer-toggle bg-danger"><i class="ft-settings font-medium-4 fa fa-spin white align-middle"></i></a>
    <div data-ps-id="df6a5ce4-a175-9172-4402-dabd98fc9c0a" class="customizer-content p-3 ps-container ps-theme-dark">
        <h4 class="text-uppercase mb-0 text-bold-400">主题模式</h4>
        <p>立即更换</p>
        <hr>
        <!-- Layout Options-->
        <h6 class="text-center text-bold-500 mb-3 text-uppercase">模式选择</h6>
        <div class="layout-switch ml-4">
            <div class="custom-control custom-radio d-inline-block custom-control-inline light-layout">
                <input id="ll-switch" type="radio" name="layout-switch" checked="" class="custom-control-input">
                <label for="ll-switch" class="custom-control-label">白天</label>
            </div>
            <div class="custom-control custom-radio d-inline-block custom-control-inline dark-layout">
                <input id="dl-switch" type="radio" name="layout-switch" class="custom-control-input">
                <label for="dl-switch" class="custom-control-label">深夜</label>
            </div>
            <div class="custom-control custom-radio d-inline-block custom-control-inline transparent-layout">
                <input id="tl-switch" type="radio" name="layout-switch" class="custom-control-input">
                <label for="tl-switch" class="custom-control-label">彩色</label>
            </div>
        </div>
        <hr>
        <!-- Sidebar Options Starts-->
        <h6 class="text-center text-bold-500 mb-3 text-uppercase sb-options">侧边框颜色</h6>
        <div class="cz-bg-color sb-color-options">
            <div class="row p-1">
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="pomegranate" class="gradient-pomegranate d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="king-yna" class="gradient-king-yna d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="ibiza-sunset" class="gradient-ibiza-sunset d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="flickr" class="gradient-flickr d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="purple-bliss" class="gradient-purple-bliss d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="man-of-steel" class="gradient-man-of-steel d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="purple-love" class="gradient-purple-love d-block rounded-circle"></span></div>
            </div>
            <div class="row p-1">
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="black" class="bg-black d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="white" class="bg-grey d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="primary" class="bg-primary d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="success" class="bg-success d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="warning" class="bg-warning d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="info" class="bg-info d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="danger" class="bg-danger d-block rounded-circle"></span></div>
            </div>
        </div>
        <!-- Sidebar Options Ends-->
        <!-- Transparent Layout Bg color Options-->
        <h6 class="text-center text-bold-500 mb-3 text-uppercase tl-color-options d-none">背景色</h6>
        <div class="cz-tl-bg-color d-none">
            <div class="row p-1">
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="hibiscus" class="bg-hibiscus d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="bg-purple-pizzazz" class="bg-purple-pizzazz d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="bg-blue-lagoon" class="bg-blue-lagoon d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="bg-electric-viloet" class="bg-electric-violet d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="bg-protage" class="bg-portage d-block rounded-circle"></span></div>
                <div class="col"><span style="width:20px; height:20px;" data-bg-color="bg-tundora" class="bg-tundora d-block rounded-circle"></span></div>
            </div>
        </div>
        <!-- Transparent Layout Bg color Ends-->
        <hr>
        <!-- Sidebar BG Image Starts-->
        <h6 class="text-center text-bold-500 mb-3 text-uppercase sb-bg-img">侧边框图片</h6>
        <div class="cz-bg-image row sb-bg-img">
            <div class="col-sm-2 mb-3"><img src="image/tech.jpg" width="90" class="rounded sb-bg-01"></div>

        </div>
        <!-- Transparent BG Image Ends-->
        <div class="tl-bg-img d-none">
            <h6 class="text-center text-bold-500 text-uppercase">背景图</h6>
            <div class="cz-tl-bg-image row">
                <div class="col-sm-3"><img src="image/bg-glass-1.jpg" width="90" class="rounded bg-glass-1 selected"></div>
                <div class="col-sm-3"><img src="image/bg-glass-2.jpg" width="90" class="rounded bg-glass-2"></div>
                <div class="col-sm-3"><img src="image/bg-glass-3.jpg" width="90" class="rounded bg-glass-3"></div>
                <div class="col-sm-3"><img src="image/bg-glass-4.jpg" width="90" class="rounded bg-glass-4"></div>
            </div>
        </div>
        <!-- Transparent BG Image Ends    -->
        <hr>
        <!-- Sidebar BG Image Toggle Starts-->
        <div class="togglebutton toggle-sb-bg-img">
            <div class="switch"><span>侧边框图片</span>
                <div class="float-right">
                    <div class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                        <input id="sidebar-bg-img" type="checkbox" checked="" class="custom-control-input cz-bg-image-display">
                        <label for="sidebar-bg-img" class="custom-control-label"></label>
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <!-- Sidebar BG Image Toggle Ends-->
        <!-- Compact Menu Starts-->
        <div class="togglebutton">
            <div class="switch"><span>缩小侧边框</span>
                <div class="float-right">
                    <div class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                        <input id="cz-compact-menu" type="checkbox" class="custom-control-input cz-compact-menu">
                        <label for="cz-compact-menu" class="custom-control-label"></label>
                    </div>
                </div>
            </div>
        </div>
        <!-- Compact Menu Ends-->
        <hr>
        <!-- Sidebar Width Starts-->
        <div>
            <label for="cz-sidebar-width">侧边框宽度</label>
            <select id="cz-sidebar-width" class="custom-select cz-sidebar-width float-right">
                <option value="small">小</option>
                <option value="medium" selected="">中</option>
                <option value="large">大</option>
            </select>
        </div>
        <!-- Sidebar Width Ends-->
    </div>
</div>
<!-- Theme customizer Ends-->
<!-- BEGIN VENDOR JS-->
<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/popper.min.js" type="text/javascript"></script>
<script src="js/bootstrap.js" type="text/javascript"></script>
<script src="js/perfect-scrollbar.jquery.min.js" type="text/javascript"></script>
<script src="js/prism.min.js" type="text/javascript"></script>
<script src="js/jquery.matchHeight-min.js" type="text/javascript"></script>
<script src="js/screenfull.min.js" type="text/javascript"></script>
<script src="js/pace.min.js" type="text/javascript"></script>
<!-- BEGIN VENDOR JS-->
<!-- BEGIN PAGE VENDOR JS-->
<script src="js/jquery.table2excel.js" type="text/javascript"></script>
<!-- END PAGE VENDOR JS-->
<!-- BEGIN APEX JS-->
<script src="js/app-sidebar.js" type="text/javascript"></script>
<script src="js/notification-sidebar.js" type="text/javascript"></script>
<script src="js/customizer.js" type="text/javascript"></script>
<!-- END APEX JS-->
<!-- BEGIN PAGE LEVEL JS-->
<!-- END PAGE LEVEL JS-->
<script src="js/CoureseTable.js" type="text/javascript"></script>

</body>
<!-- END : Body-->
</html>