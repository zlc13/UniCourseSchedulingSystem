package service.impl;

import Model.*;
import mapper.AdminMapper;
import mapper.StudentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.AdminService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ForkJoinPool;

@Service("adminService")
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminMapper adminMapper;//mapper映射类

    @Override
    public List<BJ> searchAllClass() {

        List<BJ> bjList = adminMapper.findAllClass();

        return bjList;
    }

    @Override
    public List<Bjks> autoScheduling(String bj_nb) {
        boolean isok = true;//判断循环是否结束
        Random rand = new Random();//随机生成上课时间
        String day;//星期几
        String time;//第几节课
        int js_nb;//哪间教室

        List<JS> jsList = adminMapper.findAllJS();
        int jssize = jsList.size();
        System.out.println(jssize + "教室个数");
        System.out.println(jsList + "所有教室数据");

        BJ bj = new BJ();
        bj.setBj_nb(bj_nb);
        List<Bjks> bjksList = adminMapper.findAllClassTime();

        //其他教室有第几节课(time)或星期几(day)或教室地点的存放
        List<Bjks> bjksList1 = new ArrayList<>();
        //该班级排课中没有第几节课(time)和星期几(day)和教室地点的存放
        List<Bjks> bjksList2 = new ArrayList<>();
        //其他班级时间天数空余的的存放
        List<Bjks> bjksList3 = new ArrayList<>();

        System.out.println(bjksList + "该班级课时情况");

        //循环加入条件对应的List中
        for (Bjks value : bjksList) {
            if (value.getBj_nb().equals(bj_nb) && value.getTime() == null && value.getDay() == null && value.getJs_nb() == 0 || value.getBj_nb().equals(bj_nb) && value.getTime().equals("") && value.getDay().equals("") && value.getJs_nb() == 0) {
                bjksList2.add(value);
            }else if (value.getTime() == null && value.getDay() == null && value.getJs_nb() == 0 || value.getTime().equals("") && value.getDay().equals("") && value.getJs_nb() == 0)  {
                bjksList3.add(value);
            }

            else {
                bjksList1.add(value);
            }

        }

        System.out.println(bjksList2 + "该班级排课中没有第几节课(time)和星期几(day)和教室地点的存放");
        System.out.println(bjksList1 + "其他教室有第几节课(time)或星期几(day)或教室地点的存放");

        //如果已经排好课了就不排了
        if (bjksList2.size() == 0) {
            return bjksList2;
        } else {

            int scheduling = bjksList2.size();//需要自动排课的数量

            //有需要排课的才排
            if (scheduling!=0){

                while (isok) {
                    int i = 1;

                    day = String.valueOf(rand.nextInt(7) + 1);
                    time = String.valueOf(rand.nextInt(12) + 1);
                    js_nb = rand.nextInt(jssize) + 1;
                    System.out.println(day + "时间" + time + "第几节课" + js_nb + "教室编号");
                    for (Bjks value : bjksList1) {
                        //时间地点星期几全一样就不行
                        System.out.println(value);
                        if (value.getDay().equals(day) && value.getTime().equals(time) && value.getJs_nb() == js_nb) {
                            i = 0;
                            break;
                        } else {
                            i = 1;
                        }
                        System.out.println("循环结束");
                    }

                    //插入合法数据到需要排课的班级中
                    if (i == 1 && scheduling != 0) {
                        for (Bjks value : bjksList2) {
                            if (value.getDay() == null && value.getJs_nb() == 0 && value.getTime() == null || value.getDay().equals("") && value.getJs_nb() == 0 && value.getTime().equals("")) {
                                value.setDay(day);
                                value.setTime(time);
                                value.setJs_nb(js_nb);
                                break;
                            }
                        }
                        scheduling = scheduling - 1;
                    } else if (scheduling == 0) {
                        isok = false;
                    }
                }
                System.out.println("排好课后的情况" + bjksList2);
                //插入更新后的数据到数据库
                for (Bjks value : bjksList2) {
                    adminMapper.updateCourse(value);
                }

            }

            return bjksList2;
        }

    }

    @Override
    public Admin LgUserItem(String admin_num, String admin_password) throws IOException {
        Admin admin = new Admin();
        admin.setAdmin_num(admin_num);
        admin.setAdmin_password(admin_password);
        Admin admin1 = adminMapper.findAdmin(admin);
        return admin1;
    }
    @Override
    public List<JsStatus> FindAllJsStatus() {
        List<JsStatus> jsStatusList = adminMapper.FindAllJs();
        return  jsStatusList;
    }

    @Override
    public List<JsStatus> FindIdJsStatus(String js_nb) {
        JsStatus jsStatus = new JsStatus();
        jsStatus.setJs_name(js_nb);

        List<JsStatus> jsStatusList = adminMapper.IdJsStatus(jsStatus);
        return jsStatusList;
    }
    //通过day和time查询教室

    @Override
    public List<JsStatus> FindDayandTimeJs(String week, String time,String js_name) {
        JsStatus jsStatus = new JsStatus();
        jsStatus.setDay(week);
        jsStatus.setTime(time);
        jsStatus.setJs_name(js_name);
        List<JsStatus> jsStatusList = adminMapper.DayandTimeJsStatus(jsStatus);
        return jsStatusList;
    }

    //插入学生课表信息
    @Override
    public void InsertintoStudent(Bjks bjks) {
        adminMapper.InsertBjks(bjks);
    }

    //插入老师课表信息

    @Override
    public void InsertintoTeacher(Trjs trjs) {
        adminMapper.InsertTrks(trjs);
    }

    //修改教室状态

    @Override
    public void JsStatusupdate(JsStatus jsStatus) {
        adminMapper.updateJsStatus(jsStatus);
    }

    //添加学生信息

    @Override
    public void AddStudentData(Student student) {
        adminMapper.AddStudent(student);
    }

    //添加教师信息

    @Override
    public void AddTeachertData(Teacher teacher) {
        adminMapper.AddTeacher(teacher);
    }

    //添加班级

    @Override
    public void AddClass(BjData bjData) {
        adminMapper.AddBjData(bjData);
    }

    //添加教室

    @Override
    public void AddDataJs(JS js) {
        adminMapper.AddJsDta(js);
    }

    @Override
    public boolean AddClassCourse(String bj_nb, String c_nb, String tr_nb, String bjks_nb) {
        Bjks bjks=new Bjks();
        bjks.setBj_nb(bj_nb);
        bjks.setC_nb(c_nb);
        bjks.setTr_nb(tr_nb);
        bjks.setBjks_nb(bjks_nb);

        List<Bjks> bjksList=adminMapper.findAllClassTime();
        for (Bjks value : bjksList) {
            if (value.getBj_nb().equals(bj_nb) && value.getC_nb().equals(c_nb) ) {
                System.out.println("改班级已有该课程");
               return false;
            }
        }

        adminMapper.AddClassCourse(bjks);


        return true;
    }

    //通过Id查找班级课时表

    @Override
    public List<Bjks> FindIdCourse(Bjks bjks) {
        List<Bjks> bjksList = adminMapper.IdfindCourse(bjks);
        return bjksList;
    }

    //通过Id查找教师课时表

    @Override
    public List<Trjs> FindIdTeacherCourse(Trjs trjs) {
        List<Trjs> trjsList = adminMapper.IdfindTeacherCourse(trjs);
        return trjsList;
    }

    @Override
    public List<Course> CourseNameandNumber(Course course) {
        List<Course> courseList = adminMapper.NumberAndNameCourse(course);
        return courseList;
    }

    @Override
    public List<Student> IdStudent(Student student) {
        List<Student> studentList = adminMapper.ThroughIdStudent(student);
        return studentList;
    }

    @Override
    public List<Teacher> IdTeacher(Teacher teacher) {
        List<Teacher> teacherList = adminMapper.ThroughIdTeacher(teacher);
        return teacherList;
    }

    @Override
    public List<BjData> IdBjData(BjData bjData) {
        List<BjData> bjDataList = adminMapper.ThroughIdBjData(bjData);
        return bjDataList;
    }

    @Override
    public List<JS> IdJs(JS js) {
       List<JS> jsList = adminMapper.ThroughIdJsStatus(js);
        return null;
    }
}
