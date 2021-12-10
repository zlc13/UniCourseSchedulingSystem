package control.Teacher;

import Model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import service.StudentService;
import service.TeacherService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
public class Teacher_control {
    @Autowired
    private TeacherService teacherService;


    //加载登录是否符合规范
    @RequestMapping("/Teacherlogin")
    public ModelAndView Selectaccount(String tr_nb, String tr_password , HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {

        System.out.println("进入方法了");
        req.setCharacterEncoding("utf-8");
        System.out.println(tr_nb+tr_password);
        Teacher teacher=teacherService.LgTeacherItem(tr_nb, tr_password);

        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("Teacher",teacher);
        if(teacher!=null){
            System.out.println("进入方法了");
            resp.setContentType("text/html;charset=utf-8");

            req.setAttribute("account_num",tr_nb);
            modelAndView.setViewName("index1");
//            req.getRequestDispatcher("/servlet_head").forward(req,resp);
            return modelAndView;
        }else{
            req.setAttribute("data","1");
//
            modelAndView.setViewName("TeacherSignin");
            return modelAndView;
        }
    }

    //加载该老师所教班级
    @RequestMapping("/TeachingClass")
    public ModelAndView profile(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException {
        String tr_nb = (String) session.getAttribute("id");
        System.out.println("老师Id:"+tr_nb);

        List<BJ> bjList=teacherService.TeachingClass(tr_nb);

        System.out.println(bjList+"所教的所有班级");
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("bjList",bjList);
        modelAndView.setViewName("/TeachingClass");
        return modelAndView;
    }

    //教师授课
    @RequestMapping("/teachergrids")
    public ModelAndView teachergrids(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException {
        String teacher_num = (String)session.getAttribute("id");
        System.out.println("teachergrids,学生账号:"+teacher_num);
        List<Trjs> trjsList = teacherService.CourseByTeacher(teacher_num);
        System.out.println("teachergrids,授课数据为:"+trjsList);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("TrjsList",trjsList);
        modelAndView.setViewName("teachergrids");
        return modelAndView;
    }

    //教师授课
    @RequestMapping("/TeachingcourseSpot")
    public ModelAndView teachingcoursespot(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException {
        String teacher_num = (String)session.getAttribute("id");

        System.out.println("teacher,账号:"+teacher_num);
        List<Trjs> trjsList = teacherService.CourseByTeacher(teacher_num);
        for(Trjs value:trjsList) {
            JS js=teacherService.FindClasspot(value.getJs_nb());
            value.setJs_name(js.getJs_name());
        }

        System.out.println("teacher,授课地点为:"+trjsList);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("TrjsList",trjsList);
        modelAndView.setViewName("TeachingcourseSpot");
        return modelAndView;
    }
    @RequestMapping("/TeacherProfile")
    public ModelAndView TeacherProfile(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException {
        String teacher_num = (String)session.getAttribute("id");
        Teacher teacher = new Teacher();
        teacher = teacherService.ThroughIdTeacher(teacher_num);
        System.out.println("TeacherProfile,教师信息:"+teacher);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("Teacher",teacher);
        modelAndView.setViewName("TeacherProfile");
        return modelAndView;
    }

    @RequestMapping("/TeacherUpdate")
    public ModelAndView showprofile(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException {
        String teacher_num = (String) session.getAttribute("id");

        Teacher teacher = teacherService.ThroughIdTeacher(teacher_num);
        System.out.println(teacher);
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("teacherdata",teacher);
        modelAndView.setViewName("/TeacherUpdate");
        return modelAndView;
    }

    //修改后返回个人信息页面
    @RequestMapping("/success")
    public ModelAndView success(HttpServletRequest request, HttpServletResponse response, HttpSession session,Teacher teacher) throws IOException{
        System.out.println("updatesuccess"+teacher);
        System.out.println(teacher);
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("Teacher",teacher);
        teacherService.Teacherupdate(teacher);
        modelAndView.setViewName("/TeacherProfile");
        return modelAndView;
    }

    //修改后返回个人信息页面
    @RequestMapping("/classinfo")
    public ModelAndView classinfo(String bj_nb,HttpServletRequest request, HttpServletResponse response) throws IOException{
        System.out.println("classinfo"+bj_nb);

        List<Student> studentList=teacherService.ClassInfo(bj_nb);

        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("studentList",studentList);
        System.out.println(studentList+"学生合集");
        modelAndView.setViewName("/TeachingClassInfo");
        return modelAndView;
    }



}
