package control.Student;


import Model.Bjks;
import Model.JS;
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
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
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

    //加载上课地点
    @RequestMapping("/classpot")
    public ModelAndView SearchSpot(String student_num, HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {

        ModelAndView modelAndView=new ModelAndView();

        List<Bjks> bjksList = studentService.FindClass(student_num);
        modelAndView.addObject("bjksList",bjksList);
        List<JS> jsList = new ArrayList<JS>();
        for(Bjks value:bjksList) {
            JS js=studentService.FindClasspot(value.getJs_nb());
//            System.out.println(js.getJs_name()+"遍历地点");
            value.setJs_name(js.getJs_name());
//            System.out.println(value+"课");

        }

        System.out.println(jsList+"班级详细信息");

        modelAndView.addObject("bjksList",bjksList);

        modelAndView.setViewName("courseSpot");

        System.out.println("班级课表"+bjksList);

        return modelAndView;
    }

    @RequestMapping("/grids")
    public ModelAndView grids(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException {
        ModelAndView modelAndView=new ModelAndView();
        String student_num = (String) session.getAttribute("id");
        List<Bjks> bjksList = studentService.FindClass(student_num);
        modelAndView.addObject("bjksList",bjksList);
        modelAndView.setViewName("grids");
        return modelAndView;
    }

    @RequestMapping("/userprofile")
    public ModelAndView userprofile(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException{
        String student_num = (String) session.getAttribute("id");
        System.out.println("userprofile controller,学生Id:"+student_num);
        Student student = studentService.StudentId(student_num);
        System.out.println(student);
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("studentdata",student);
        modelAndView.setViewName("/userprofile");
        return modelAndView;
    }
    //访问修改个人信息页面
    @RequestMapping("/profile")
    public ModelAndView profile(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException {
        String student_num = (String) session.getAttribute("id");
        System.out.println("userprofile controller,学生Id:"+student_num);
        Student student = studentService.StudentId(student_num);
        System.out.println(student);
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("studentdata",student);
        modelAndView.setViewName("/pages_profile");
        return modelAndView;
    }
    //修改后返回个人信息页面
    @RequestMapping("updatesuccess")
    public ModelAndView updatesuccess(HttpServletRequest request, HttpServletResponse response, HttpSession session,Student student) throws IOException{
        System.out.println("updatesuccess"+student);
        System.out.println(student);
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("studentdata",student);
        studentService.Studentupdate(student);
        modelAndView.setViewName("/userprofile");
        return modelAndView;
    }


}
