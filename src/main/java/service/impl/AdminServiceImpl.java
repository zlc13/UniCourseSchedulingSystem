package service.impl;

import Model.BJ;
import Model.Bjks;
import Model.JS;
import mapper.AdminMapper;
import mapper.StudentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.AdminService;

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

        List<BJ> bjList=adminMapper.findAllClass();

        return bjList;
    }

    @Override
    public List<Bjks> autoScheduling(String bj_nb) {
        boolean isok=true;//判断循环是否结束
        Random rand = new Random();//随机生成上课时间
        String day;//星期几
        String time;//第几节课
        String js_nb;//哪间教室

        List<JS> jsList=adminMapper.findAllJS();
        int jssize=jsList.size();
        System.out.println(jssize+"教室个数");
        System.out.println(jsList+"所有教室数据");

          BJ bj=new BJ();
          bj.setBj_nb(bj_nb);
          List<Bjks> bjksList= adminMapper.findAllClassTime();

          //其他教室有第几节课(time)或星期几(day)或教室地点的存放
          List<Bjks> bjksList1=new ArrayList<>();
          //该班级排课中没有第几节课(time)和星期几(day)和教室地点的存放
          List<Bjks> bjksList2=new ArrayList<>();

          System.out.println(bjksList+"该班级课时情况");

          //循环加入条件对应的List中
          for(Bjks value:bjksList) {
              if (value.getBj_nb().equals(bj_nb) && value.getTime()==null && value.getDay()==null &&value.getJs_nb()==null){
                  bjksList2.add(value);
              }else{
                  bjksList1.add(value);
              }

          }

        System.out.println(bjksList2+"该班级排课中没有第几节课(time)和星期几(day)和教室地点的存放");
        System.out.println(bjksList1+"其他教室有第几节课(time)或星期几(day)或教室地点的存放");

        //如果已经排好课了就不排了
        if(bjksList2.size()==0){
            return bjksList2;
        }else {

            int scheduling=bjksList2.size();//需要自动排课的数量



            while (isok){
                int i=1;

                day= String.valueOf(rand.nextInt(7) + 1);
                time= String.valueOf(rand.nextInt(12) + 1);
                js_nb=String.valueOf(rand.nextInt(jssize) + 1);
                System.out.println(day+"时间"+time+"第几节课"+js_nb+"教室编号");
                for(Bjks value:bjksList1) {
                    //时间地点星期几全一样就不行
                    if (value.getDay().equals(day) && value.getTime().equals(time) && value.getJs_nb().equals(js_nb)){
                        i=0;
                        break;
                    }else{
                        i=1;
                    }
                    System.out.println("循环结束");
                }

                //插入合法数据到需要排课的班级中
                if (i==1 && scheduling!=0){
                    for (Bjks value:bjksList2){
                        if (value.getDay()==null && value.getJs_nb()==null && value.getTime()==null){
                            value.setDay(day);
                            value.setTime(time);
                            value.setJs_nb(js_nb);
                            break;
                        }
                    }
                    scheduling=scheduling-1;
                }else if (scheduling==0){
                    isok=false;
                }
            }

            System.out.println("排好课后的情况"+bjksList2);

            //插入更新后的数据到数据库
            for (Bjks value:bjksList2){
                adminMapper.updateCourse(value);
            }

            return bjksList2;
        }

    }
}
