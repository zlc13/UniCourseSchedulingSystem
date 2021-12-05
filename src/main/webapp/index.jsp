<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<h1><%= "Hello World!" %>
</h1>
<br/>
<!-- Navbar (Header) Starts-->
<nav class="navbar navbar-expand-lg navbar-light bg-faded header-navbar">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" data-toggle="collapse" class="navbar-toggle d-lg-none float-left"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><span class="d-lg-none navbar-right navbar-collapse-toggle"><a aria-controls="navbarSupportedContent" href="javascript:;" class="open-navbar-container black"><i class="ft-more-vertical"></i></a></span>
            <form role="search" class="navbar-form navbar-right mt-1">
                <div class="position-relative has-icon-right">
                    <input type="text" placeholder="Search" class="form-control round">
                    <div class="form-control-position"><i class="ft-search"></i></div>
                </div>
            </form>
        </div>
        <div class="navbar-container">
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item mr-2 d-none d-lg-block"><a id="navbar-fullscreen" href="javascript:;" class="nav-link apptogglefullscreen"><i class="ft-maximize font-medium-3 blue-grey darken-4"></i>
                        <p class="d-none">fullscreen</p></a></li>
                    <li class="dropdown nav-item"><a id="dropdownBasic3" href="#" data-toggle="dropdown" class="nav-link position-relative dropdown-toggle"><i class="ft-flag font-medium-3 blue-grey darken-4"></i><span class="selected-language d-none"></span></a>
                        <div class="dropdown-menu dropdown-menu-right text-left"><a href="javascript:;" class="dropdown-item py-1"><img src="static/picture/us.png" class="langimg"><span> English</span></a><a href="javascript:;" class="dropdown-item py-1"><img src="static/picture/es.png" class="langimg"><span> Spanish</span></a><a href="javascript:;" class="dropdown-item py-1"><img src="static/picture/br.png" class="langimg"><span> Portuguese</span></a><a href="javascript:;" class="dropdown-item"><img src="static/picture/de.png" class="langimg"><span> French</span></a></div>
                    </li>
                    <li class="dropdown nav-item"><a id="dropdownBasic2" href="#" data-toggle="dropdown" class="nav-link position-relative dropdown-toggle"><i class="ft-bell font-medium-3 blue-grey darken-4"></i><span class="notification badge badge-pill badge-danger">4</span>
                        <p class="d-none">Notifications</p></a>
                        <div class="notification-dropdown dropdown-menu dropdown-menu-right">
                            <div class="noti-list"><a class="dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4"><i class="ft-bell info float-left d-block font-large-1 mt-1 mr-2"></i><span class="noti-wrapper"><span class="noti-title line-height-1 d-block text-bold-400 info">New Order Received</span><span class="noti-text">Lorem ipsum dolor sit ametitaque in, et!</span></span></a><a class="dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4"><i class="ft-bell warning float-left d-block font-large-1 mt-1 mr-2"></i><span class="noti-wrapper"><span class="noti-title line-height-1 d-block text-bold-400 warning">New User Registered</span><span class="noti-text">Lorem ipsum dolor sit ametitaque in </span></span></a><a class="dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4"><i class="ft-bell danger float-left d-block font-large-1 mt-1 mr-2"></i><span class="noti-wrapper"><span class="noti-title line-height-1 d-block text-bold-400 danger">New Order Received</span><span class="noti-text">Lorem ipsum dolor sit ametest?</span></span></a><a class="dropdown-item noti-container py-3"><i class="ft-bell success float-left d-block font-large-1 mt-1 mr-2"></i><span class="noti-wrapper"><span class="noti-title line-height-1 d-block text-bold-400 success">New User Registered</span><span class="noti-text">Lorem ipsum dolor sit ametnatus aut.</span></span></a></div><a class="noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1">Read All Notifications</a>
                        </div>
                    </li>
                    <li class="dropdown nav-item"><a id="dropdownBasic3" href="#" data-toggle="dropdown" class="nav-link position-relative dropdown-toggle"><i class="ft-user font-medium-3 blue-grey darken-4"></i>
                        <p class="d-none">User Settings</p></a>
                        <div ngbdropdownmenu="" aria-labelledby="dropdownBasic3" class="dropdown-menu text-left dropdown-menu-right"><a href="javascript:;" class="dropdown-item py-1"><i class="ft-message-square mr-2"></i><span>Chat</span></a><a href="javascript:;" class="dropdown-item py-1"><i class="ft-edit mr-2"></i><span>Edit Profile</span></a><a href="javascript:;" class="dropdown-item py-1"><i class="ft-mail mr-2"></i><span>My Inbox</span></a>
                            <div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item"><i class="ft-power mr-2"></i><span>Logout</span></a>
                        </div>
                    </li>
                    <li class="nav-item d-none d-lg-block"><a href="javascript:;" class="nav-link position-relative notification-sidebar-toggle"><i class="ft-align-left font-medium-3 blue-grey darken-4"></i>
                        <p class="d-none">Notifications Sidebar</p></a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>
<!-- Navbar (Header) Ends-->

<div class="main-panel">
    <!-- BEGIN : Main Content-->
    <div class="main-content">
        <div class="content-wrapper"><!--Horizontal Timeline Starts-->
            <div class="row">
                <div class="col-sm-12">
                    <div class="content-header">Horizontal Timeline</div>
                    <p class="content-sub-header">This horizontal timeline contain date based post timeline.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <section class="cd-horizontal-timeline">
                            <div class="timeline">
                                <div class="events-wrapper">
                                    <div class="events">
                                        <ol>
                                            <li><a data-date="16/01/2014" class="selected">16 Jan</a></li>
                                            <li><a data-date="28/02/2014">28 Feb</a></li>
                                            <li><a data-date="20/04/2014">20 Mar</a></li>
                                            <li><a data-date="20/05/2014">20 May</a></li>
                                            <li><a data-date="09/07/2014">09 Jul</a></li>
                                            <li><a data-date="30/08/2014" class="mr-5">30 Aug</a></li>
                                            <li><a data-date="15/09/2014" class="ml-5">15 Sep</a></li>
                                            <li><a data-date="01/11/2014">01 Nov</a></li>
                                            <li><a data-date="10/12/2014">10 Dec</a></li>
                                            <li><a data-date="19/01/2015">29 Jan</a></li>
                                            <li><a data-date="03/03/2015">3 Mar</a></li>
                                        </ol>

                                        <span class="filling-line" aria-hidden="true"></span>
                                    </div>
                                    <!-- .events -->
                                </div>
                                <!-- .events-wrapper -->

                                <ul class="cd-timeline-navigation">
                                    <li><a href="#0" class="prev inactive">Prev</a></li>
                                    <li><a href="#0" class="next">Next</a></li>
                                </ul>
                                <!-- .cd-timeline-navigation -->
                            </div>
                            <!-- .timeline -->

                            <div class="events-content">
                                <ol>
                                    <li class="selected" data-date="16/01/2014">
                                        <h2 class="text-bold-500">Horizontal Timeline</h2>
                                        <h4 class="text-bold-500 mb-2">January 16th, 2014</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
                                            ipsa, quia velit nulla
                                            adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam
                                            molestias maxime
                                            non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae,
                                            temporibus dolores porro
                                            doloribus.
                                        </p>
                                    </li>

                                    <li data-date="28/02/2014">
                                        <h2 class="text-bold-500">Event title here</h2>
                                        <h4 class="text-bold-500 mb-2">February 28th, 2014</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
                                            ipsa, quia velit nulla
                                            adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam
                                            molestias maxime
                                            non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae,
                                            temporibus dolores porro
                                            doloribus.
                                        </p>
                                    </li>

                                    <li data-date="20/04/2014">
                                        <h2 class="text-bold-500">Event title here</h2>
                                        <h4 class="text-bold-500 mb-2">March 20th, 2014</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
                                            ipsa, quia velit nulla
                                            adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam
                                            molestias maxime
                                            non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae,
                                            temporibus dolores porro
                                            doloribus.
                                        </p>
                                    </li>

                                    <li data-date="20/05/2014">
                                        <h2 class="text-bold-500">Event title here</h2>
                                        <h4 class="text-bold-500 mb-2">May 20th, 2014</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
                                            ipsa, quia velit nulla
                                            adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam
                                            molestias maxime
                                            non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae,
                                            temporibus dolores porro
                                            doloribus.
                                        </p>
                                    </li>

                                    <li data-date="09/07/2014">
                                        <h2 class="text-bold-500">Event title here</h2>
                                        <h4 class="text-bold-500 mb-2">July 9th, 2014</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
                                            ipsa, quia velit nulla
                                            adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam
                                            molestias maxime
                                            non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae,
                                            temporibus dolores porro
                                            doloribus.
                                        </p>
                                    </li>

                                    <li data-date="30/08/2014">
                                        <h2 class="text-bold-500">Event title here</h2>
                                        <h4 class="text-bold-500 mb-2">August 30th, 2014</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
                                            ipsa, quia velit nulla
                                            adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam
                                            molestias maxime
                                            non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae,
                                            temporibus dolores porro
                                            doloribus.
                                        </p>
                                    </li>

                                    <li data-date="15/09/2014">
                                        <h2 class="text-bold-500">Event title here</h2>
                                        <h4 class="text-bold-500 mb-2">September 15th, 2014</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
                                            ipsa, quia velit nulla
                                            adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam
                                            molestias maxime
                                            non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae,
                                            temporibus dolores porro
                                            doloribus.
                                        </p>
                                    </li>

                                    <li data-date="01/11/2014">
                                        <h2 class="text-bold-500">Event title here</h2>
                                        <h4 class="text-bold-500 mb-2">November 1st, 2014</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
                                            ipsa, quia velit nulla
                                            adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam
                                            molestias maxime
                                            non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae,
                                            temporibus dolores porro
                                            doloribus.
                                        </p>
                                    </li>

                                    <li data-date="10/12/2014">
                                        <h2 class="text-bold-500">Event title here</h2>
                                        <h4 class="text-bold-500 mb-2">December 10th, 2014</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
                                            ipsa, quia velit nulla
                                            adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam
                                            molestias maxime
                                            non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae,
                                            temporibus dolores porro
                                            doloribus.
                                        </p>
                                    </li>

                                    <li data-date="19/01/2015">
                                        <h2 class="text-bold-500">Event title here</h2>
                                        <h4 class="text-bold-500 mb-2">January 19th, 2015</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
                                            ipsa, quia velit nulla
                                            adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam
                                            molestias maxime
                                            non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae,
                                            temporibus dolores porro
                                            doloribus.
                                        </p>
                                    </li>

                                    <li data-date="03/03/2015">
                                        <h2 class="text-bold-500">Event title here</h2>
                                        <h4 class="text-bold-500 mb-2">March 3rd, 2015</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
                                            ipsa, quia velit nulla
                                            adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam
                                            molestias maxime
                                            non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae,
                                            temporibus dolores porro
                                            doloribus.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <!-- .events-content -->
                        </section>
                    </div>
                </div>
            </div>
            <!--Horizontal Timeline Starts-->

        </div>
    </div>
    <!-- END : End Main Content-->

    <!-- BEGIN : Footer-->
    <footer class="footer footer-static footer-light">
        <p class="clearfix text-muted text-sm-center px-2"><span>Copyright  &copy; 2019 <a href="javascript:;" id="pixinventLink" target="_blank" class="text-bold-800 primary darken-2">PIXINVENT </a>, All rights reserved. </span></p>
    </footer>
    <!-- End : Footer-->

</div>
</div>
<!-- ////////////////////////////////////////////////////////////////////////////-->
</body>
</html>