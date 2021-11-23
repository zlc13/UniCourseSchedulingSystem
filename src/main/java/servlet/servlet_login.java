package servlet;

import control.login_control;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = "/servlet_login",name = "servlet_login")
public class servlet_login extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doPost(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        String id=req.getParameter("student_num");
        String password=req.getParameter("password");
        login_control c=new login_control();
//        System.out.println(c.Selectaccount(id,password));
        if (c.Selectaccount(id,password)){
            System.out.println("进入方法了");
            //resp.setContentType("text/html;charset=utf-8");

            req.setAttribute("account_num",id);
//            req.getRequestDispatcher("/servlet_head").forward(req,resp);
            req.getRequestDispatcher("signin.jsp").forward(req,resp);

        }else {
            System.out.println("servlet为null");
           // resp.sendRedirect("signin.html?op=1");
//            resp.setContentType("text/html;charset=utf-8");
//            resp.getWriter().write("登录失败"+id+"，欢迎你");
            req.setAttribute("data","1");
            req.getRequestDispatcher("signin.jsp").forward(req,resp);


        }

        System.out.println(id+password);
      //  System.out.println(123);
    }
}
