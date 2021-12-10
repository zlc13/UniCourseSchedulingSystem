package service;

import Model.BJ;
import Model.Bjks;

import java.util.List;

public interface AdminService {
    //查询所有班级
    public List<BJ> searchAllClass();
    //自动排课
    public List<Bjks> autoScheduling(String bj_nb);



}
