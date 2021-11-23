$(document).ready(function() {

    /*****************************
     *       js of 导出表格为excel       *
     ******************************/

    $('#coursetable').click(function () {
        $("#yourcourse").table2excel({ //这里要选择table标签 我这里是用id选择 也可$('table').table2excel()
            exclude:'.not',   //不被导出表格行的class类
            name:'你的课表',     //文档名称
            filename:'excel', //文件名称
            exclude_img:false, //是否导出图片
            exclude_links:false,//是否导出超链接
            exclude_inputs:false//是否导出input框中的内容
        });
    });

} )