package control.Admin;


import Model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import service.AdminService;
import service.StudentService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
public class Admin_Control {
    @Autowired
    private AdminService adminService;


    //加载登录是否符合规范
    @RequestMapping("/adminlogin")
    public String Adminaccount(String admin_num, String admin_password ,HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {

        System.out.println("进入方法了");
        req.setCharacterEncoding("utf-8");
        System.out.println(admin_num+admin_password);
        Admin admin=adminService.LgUserItem(admin_num, admin_password);


        if(admin!=null){
            System.out.println("进入方法了");
            resp.setContentType("text/html;charset=utf-8");

            req.setAttribute("account_num",admin_num);
//            req.getRequestDispatcher("/servlet_head").forward(req,resp);
            return "adminIndex";
        }else{
            req.setAttribute("data","1");
//
            return "adminSignin";
        }
    }

    @RequestMapping("/wizard-forms")
    public ModelAndView wizardforms(String grade,String banji,  HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        ModelAndView modelAndView=new ModelAndView();

        List<BJ> bjList=adminService.searchAllClass();

        System.out.println(bjList+"班级合集");

        modelAndView.addObject("bjList",bjList);

        System.out.println(grade+"年级");
        System.out.println(banji+"班级");

        modelAndView.setViewName("wizard-forms");

        return modelAndView;
    }

    @RequestMapping("/auto")
    public ModelAndView Selectaccount(String banji,String grade,  HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        ModelAndView modelAndView=new ModelAndView();
        req.setCharacterEncoding("utf-8");
        System.out.println(banji+"班级id");

        List<Bjks> bjksList=adminService.autoScheduling(banji);

        if (bjksList.size() ==0 || bjksList==null){
            req.setAttribute("classaddcourse","增加失败,您所选定班级已经全部排好课了或已在手动排课中");
            System.out.println("您所选的班级已经排好课了");

        }else {
            req.setAttribute("classaddcourse","增加成功");
            System.out.println("课表更新完成");
        }
        System.out.println(bjksList+"更新后的情况");


        modelAndView.setViewName("wizard-forms");

        return modelAndView;
    }

    //访问所有教室信息
    @RequestMapping("/JsData")
    public ModelAndView JsData(){
        ModelAndView modelAndView = new ModelAndView();
        System.out.println("进入所有显示");
        List<JsStatus> jsStatusList = adminService.FindAllJsStatus();
        modelAndView.addObject("jslist",jsStatusList);
        modelAndView.setViewName("app-contact");
        return modelAndView;
    }

    //插入教室
    @RequestMapping("/SearchJsData")
    public ModelAndView SearchJsData(Bjks bjks, Trjs trjs,Course course,JsStatus jsStatus){
        ModelAndView modelAndView = new ModelAndView();
        List<JsStatus> jsStatusList = adminService.FindAllJsStatus();
        List<JsStatus> AddjsStatusList=adminService.FindDayandTimeJs(jsStatus.getDay(),jsStatus.getTime(), jsStatus.getJs_name());
        System.out.println("Addjs"+" "+AddjsStatusList);
        int js_nb=0;
        if(AddjsStatusList.size()==0){
            js_nb=0;
            modelAndView.addObject("jslist",jsStatusList);
            modelAndView.addObject("result","nono");
            modelAndView.setViewName("app-contact");
            return modelAndView;
        }else{
            if(AddjsStatusList.get(0).getStatus().equals("false")){
                modelAndView.addObject("jslist",jsStatusList);
                modelAndView.addObject("result","false");
                modelAndView.setViewName("app-contact");
                return modelAndView;
            }else{
                List<Bjks> bjksList = adminService.FindIdCourse(bjks);
                List<Trjs> trjsList = adminService.FindIdTeacherCourse(trjs);
                List<Course> courseList = adminService.CourseNameandNumber(course);
                if(bjksList!=null&&!bjksList.isEmpty()){
                    System.out.println("班级课表已有此数据");
                    modelAndView.addObject("jslist",jsStatusList);
                    modelAndView.addObject("result","bjkstrue");
                    modelAndView.setViewName("app-contact");
                    return modelAndView;
                }
                if(trjsList!=null&&!trjsList.isEmpty()){
                    System.out.println("教师课表已有此数据");
                    modelAndView.addObject("jslist",jsStatusList);
                    modelAndView.addObject("result","trjstrue");
                    modelAndView.setViewName("app-contact");
                    return modelAndView;
                }

                if(courseList!=null&&!courseList.isEmpty())
                {
                    System.out.println(courseList);
                    System.out.println("课程编号和课程名不符");
                }else{
                    System.out.println("课程编号和课程名不符");
                    modelAndView.addObject("jslist",jsStatusList);
                    modelAndView.addObject("result","coursetrue");
                    modelAndView.setViewName("app-contact");
                    return modelAndView;
                }
                js_nb=AddjsStatusList.get(0).getJs_nb();
                jsStatus=AddjsStatusList.get(0);
                bjks.setJs_nb(js_nb);
                trjs.setJs_nb(js_nb);
                System.out.println("Bjks"+" "+bjks);
                System.out.println("Trjs"+" "+trjs);
                System.out.println("JsStatus"+" "+jsStatus);
                jsStatus.setStatus("false");
                adminService.InsertintoStudent(bjks);
                adminService.InsertintoTeacher(trjs);
                adminService.JsStatusupdate(jsStatus);
                modelAndView.addObject("jslist",jsStatusList);
                modelAndView.addObject("result","true");
                modelAndView.setViewName("app-contact");
                return modelAndView;
            }
        }
    }

/*    //访问增加学生课表页面
    @RequestMapping("/BjksInsert")
    public ModelAndView BjksInsert(JsStatus jsStatus){
        ModelAndView modelAndView = new ModelAndView();
        System.out.println(jsStatus.getJs_nb()+" "+jsStatus.getJs_name()+" "+jsStatus.getDay()+" "+jsStatus.getTime());
        modelAndView.addObject("Bjksdata",jsStatus);
        modelAndView.setViewName("AddBjks");
        return modelAndView;
    }*/

    //插入课表成功
    @RequestMapping("/successbjks")
    public ModelAndView successbjks(Bjks bjks, Trjs trjs,JsStatus jsStatus){
        ModelAndView modelAndView = new ModelAndView();
        System.out.println("successbjks"+" "+bjks);
        System.out.println("successtrks"+" "+trjs);
        System.out.println("successjsStatus"+" "+jsStatus);
        jsStatus.setStatus("false");
        adminService.InsertintoStudent(bjks);
        adminService.InsertintoTeacher(trjs);
        adminService.JsStatusupdate(jsStatus);
        List<JsStatus> jsStatusList = adminService.FindAllJsStatus();
        modelAndView.addObject("jslist",jsStatusList);
        modelAndView.setViewName("app-contact");
        return modelAndView;
    }

    //添加学生
    @RequestMapping("/AddStudentSuccess")
    public ModelAndView AddStudent(Student student){
            ModelAndView modelAndView = new ModelAndView();
            adminService.AddStudentData(student);
            modelAndView.addObject("result","true");
            modelAndView.setViewName("AddStudent");
            return modelAndView;
    }

    //添加教师
    @RequestMapping("/AddTeacherSuccess")
    public ModelAndView AddSTeacher(Teacher teacher){
        List<Teacher> teacherList = adminService.IdTeacher(teacher);
        if(teacherList!=null&&!teacherList.isEmpty()){
            ModelAndView modelAndView = new ModelAndView();
            modelAndView.addObject("teacherresult","false");
            modelAndView.setViewName("AddTeacher");
            return modelAndView;
        }
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("teacherresult","true");
        adminService.AddTeachertData(teacher);
        modelAndView.setViewName("AddTeacher");
        return modelAndView;
    }

    //添加班级
    @RequestMapping("/AddBjSuccess")
    public ModelAndView AddBjData(BjData bjData){
        ModelAndView modelAndView = new ModelAndView();
        adminService.AddClass(bjData);
        modelAndView.setViewName("AddBjData");
        return modelAndView;
    }

    //添加教室
    @RequestMapping("/AddJsSuccess")
    public ModelAndView AddJsData(JS js){
        ModelAndView modelAndView = new ModelAndView();
        adminService.AddDataJs(js);
        modelAndView.setViewName("AddJsData");
        return modelAndView;
    }

    //添加教室
    @RequestMapping("/AddClassCourse")
    public String AddClassCourse(String bj_nb,String c_nb, String tr_nb,String bjks_nb, HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        ModelAndView modelAndView = new ModelAndView();
        req.setCharacterEncoding("utf-8");

        if (adminService.AddClassCourse(bj_nb,c_nb,tr_nb,bjks_nb)){
            req.setAttribute("classcourse","增加成功");
            System.out.println("增加成功");
            return "AddClassCourse";
        }else{
            req.setAttribute("classcourse","增加失败");
            System.out.println("增加失败");
            return "AddClassCourse";
        }
    }

    //通过查询教室显示所有课时这间教室状态
    @RequestMapping("/SearchJs")
    public ModelAndView SearchJs(String js_name){
        ModelAndView modelAndView = new ModelAndView();
        List<JsStatus> jsStatusList = adminService.FindIdJsStatus(js_name);
        System.out.println("SearchJs:"+jsStatusList);
        modelAndView.addObject("jslist",jsStatusList);
        modelAndView.setViewName("JsGrids");
        return modelAndView;
    }
}
