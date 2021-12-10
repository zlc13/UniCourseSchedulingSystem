package mapper;

import Model.BJ;
import Model.Bjks;
import Model.JS;

import java.util.List;

public interface AdminMapper {

    //查找所有班级合集
    public List<BJ> findAllClass();

    //查找该班级课程合集
    public List<Bjks> findAllClassTime();

    //查找该班级课程合集
    public List<JS> findAllJS();

    //更新排完课后的数据
    public void updateCourse(Bjks bjks);

}
