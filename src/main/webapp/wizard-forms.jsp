<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<!DOCTYPE html>
<html lang="en" class="loading">
<!-- BEGIN : Head-->
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <meta name="description" content="Apex admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
  <meta name="keywords" content="admin template, Apex admin template, dashboard template, flat admin template, responsive admin template, web app">
  <meta name="author" content="工作室">
  <title>管理员端</title>

  <link rel="shortcut icon" type="image/png" href="images/Course.png">
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
<!-- ////////////////////////////////////////////////////////////////////////////-->

  <!-- / main menu-->



  <!-- Navbar (Header) Ends-->

      <div class="main-panel">
        <!-- BEGIN : Main Content-->
        <div class="main-content">
          <div class="content-wrapper"><!-- Wizard Starts -->
<div class="row">
  <div class="col-sm-12">
    <div class="content-header">自动排课</div>
  </div>
</div>
<section id="icon-tabs">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">选择你要自动排课的班级</h4>
        </div>
        <div class="card-content">
          <div class="card-body">
            <form class="icons-tab-steps wizard-circle" #f="ngForm" action="/auto">
              <!-- Step 3 -->
              <h6>Step 3</h6>
              <fieldset>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="eventType2">选择班级</label>
                      <select class="custom-select form-control" id="eventType2" data-placeholder="Type to search cities" name="banji">
                        <c:forEach items="${bjList}" var="bj">
                        <option value="${bj.bj_nb}">${bj.bj_na}</option>
                        </c:forEach>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                        <button  class="btn btn-primary " type="submit">&nbsp; 提交</button>
                    <%--<label for="eventStatus2">选择班级</label>
                      <select class="custom-select form-control" id="eventStatus2" name="grade">
                        <option value="Planning1">Planning</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Finished">Finished</option>--%>
<%--                      </select>--%>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Wizard Ends -->

          </div>
        </div>
        <!-- END : End Main Content-->



      </div>
    </div>
    <!-- ////////////////////////////////////////////////////////////////////////////-->


<!-- Theme customizer Starts-->
</div>
</div>
    <!-- Theme customizer Ends-->

<!-- BEGIN VENDOR JS-->
<script src="/js/jquery.min.js" type="text/javascript"></script>
<script src="/js/popper.min.js" type="text/javascript"></script>
<script src="/js/bootstrap.js" type="text/javascript"></script>
<script src="/js/perfect-scrollbar.jquery.min.js" type="text/javascript"></script>
<script src="/js/prism.min.js" type="text/javascript"></script>
<script src="/js/jquery.matchHeight-min.js" type="text/javascript"></script>
<script src="/js/screenfull.min.js" type="text/javascript"></script>
<script src="/js/pace.min.js" type="text/javascript"></script>
<!-- BEGIN VENDOR JS-->
<!-- BEGIN PAGE VENDOR JS-->
<script src="/js/datatables.min.js" type="text/javascript"></script>
<script src="/js/dataTables.responsive.min.js" type="text/javascript"></script>
<!-- END PAGE VENDOR JS-->
<!-- BEGIN APEX JS-->
<script src="/js/app-sidebar.js" type="text/javascript"></script>
<script src="/js/notification-sidebar.js" type="text/javascript"></script>
<script src="/js/customizer.js" type="text/javascript"></script>
<!-- END APEX JS-->
<!-- BEGIN PAGE LEVEL JS-->
<script src="/js/datatable-api.js" type="text/javascript"></script>
<!-- END PAGE LEVEL JS-->
  </body>
  <!-- END : Body-->
</html>