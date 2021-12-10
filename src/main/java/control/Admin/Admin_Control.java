package control.Admin;


import Model.BJ;
import Model.Bjks;
import Model.Student;
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

        System.out.println(banji+"班级id");

        List<Bjks> bjksList=adminService.autoScheduling(banji);

        if (bjksList!=null){
            System.out.println("课表更新完成");
        }else {
            System.out.println("您所选的班级已经排好课了");
        }
        System.out.println(bjksList+"更新后的情况");


        modelAndView.setViewName("dt-api");

        return modelAndView;
    }
}
