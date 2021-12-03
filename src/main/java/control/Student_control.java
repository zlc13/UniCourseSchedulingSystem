package control;


import Model.Student;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import service.StudentService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
public class Student_control {

    @Autowired
    private StudentService studentService;


    //加载登录是否符合规范
    @RequestMapping("/login")
       public String Selectaccount(String student_num, String password ,HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
           System.out.println("进入方法了");
           req.setCharacterEncoding("utf-8");
           System.out.println(student_num+password);
           Student stu=studentService.LgUserItem(student_num, password);
           

           if(stu!=null){
               System.out.println("进入方法了");
            resp.setContentType("text/html;charset=utf-8");

            req.setAttribute("account_num",student_num);
//            req.getRequestDispatcher("/servlet_head").forward(req,resp);
            return "dt-api";
           }else{
               req.setAttribute("data","1");
//
               return "signin";
           }
       }
       //加载班级数据方法   `
    @RequestMapping("/urclass")
    public ModelAndView Selectaccount(String student_num, HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        ModelAndView modelAndView=new ModelAndView();

        System.out.println(student_num+"账号");
        List<Student> studentList=studentService.ClassUserItem(student_num);

        System.out.println("学生合集"+studentList);

        modelAndView.addObject("studentList",studentList);

        modelAndView.setViewName("dt-api");

        return modelAndView;
    }
}
