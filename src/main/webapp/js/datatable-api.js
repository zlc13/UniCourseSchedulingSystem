/*=========================================================================================
    File Name: datatable-api.js
    Description: API Datatable 
    ----------------------------------------------------------------------------------------
    Item Name: Apex - Responsive Admin Theme
    Version: 2.1
    Author: Pixinvent
    Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function() {


    /*****************************
     *       js of 导出表格为excel       *
     ******************************/

    $("#datatable-buttonss").DataTable({


        // /*汉化开始*/
        // "oPaginate": {
        //     "sFirst": "首页",
        //     "sPrevious": "前一页",
        //     "sNext": "后一页",
        //     "sLast": "尾页"
        // },
        "sPaginationType": "full_numbers",

        "oLanguage": {
            "sSearch": "搜索:",
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "抱歉， 没有找到",
            "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
            "sInfoEmpty": "没有数据",
            "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "尾页"
            },
            "sZeroRecords": "没有检索到数据",
        },
        /*汉化结束*/

        // "ajax":"load",
        "bDestroy":true,
        "bRetrieve": true,
        "sDom": '<"x_content"B><"top"lf>rt<"bottom"ip><"clear">', //定义处理范围
        "bom":true,
        "pageLength": 1,
        "lengthMenu": [ 1,10, 25, 50, 75, 100 ],
//    dom: "Blfrtip", //定义按钮的位置
        buttons: [          // 定义各按钮
            {
                extend: "copy",
                text: '复制',
                className: "btn-sm"
            },
            {
                extend: "csv",
                text: '导出',
                bom:true,
                className: "btn-sm"
            },
            {
                extend: "print",
                text: '打印',
                className: "btn-sm"
            },

        ],

        // "ajax":({
        //     type:"POST",
        //     dataType:"json",
        //     url: "/urclass", // 要访问的地址，这里访问的是servlet映射地址
        //     // // cache: false,  // 是否缓存,
        //     data: {"student_num":num}, // 相当于地址栏后面的参数
        //     // contentType: "application/x-www-form-urlencoded",
        //     success: function(data)
        //     {
        //
        //         var o = eval(data);
        //
        //         $("table").DataTable({
        //
        //             data: row,
        //             columns: [{o: 'name'},
        //                 {data: 'address'},
        //                 {data: 'phone'},
        //                 {data: 'age'},
        //                 {data: 'job'},
        //                 {data: 'like'},
        //                 {data: 'sex'}],
        //         })
        //
        //
        //
        //
        //             // alert(result.rows);
        //         // var $data = $(result);
        //         // fnCallback($data.rows);
        //         // if(result =="ok"){
        //         //     alert("添加成功");
        //         // }else{
        //         //     alert("添加失败");
        //         // }
        //         // window.location.reload();
        //     }
        // }),

        "columnDefs": [
            {

                "targets": [ 0 ],
                "width": "10%",
            },
            {
                "targets": [ 1 ],
                //    "sorting": false,
                //    "render": function (data, type, full, meta) {
                //        // return '<a href="/task_mgm/task" >'+ data +'</a>'
                //        AA = function js_method() {
                //            $.get("/task_mgm/taskinfo_comment")
                //        };
                //        return '<a href="javascript:void(0);" onclick="AA()">'+ data +'</a>'
                //    }

            },
            {
                "targets": [ 2 ],
                "width": "15%",
            },
            {
                "targets": [ 3 ],
                //    "data": null,
                "width": "10%",
                //    "sorting": false,
                //    "defaultContent": "<i class=\"fa fa-edit\" id=\"edit\">编辑</i>",
                // "render": function (data, type, row, meta) {
                //     if([row[4] == "0"]){
                //         return  "<i class=\"fa fa-edit\" id=\"edit\">编辑</i>";
                //     }
                // }
            }],
    });

    $("#datatable-button").DataTable({


        // /*汉化开始*/
        // "oPaginate": {
        //     "sFirst": "首页",
        //     "sPrevious": "前一页",
        //     "sNext": "后一页",
        //     "sLast": "尾页"
        // },
        "sPaginationType": "full_numbers",

        "oLanguage": {
            "sSearch": "搜索:",
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "抱歉， 没有找到",
            "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
            "sInfoEmpty": "没有数据",
            "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "尾页"
            },
            "sZeroRecords": "没有检索到数据",
        },
        /*汉化结束*/

        // "ajax":"load",
        "bDestroy":true,
        "bRetrieve": true,
        "sDom": '<"x_content"B><"top"lf>rt<"bottom"ip><"clear">', //定义处理范围
        "bom":true,
        "pageLength": 1,
        "lengthMenu": [ 1,10, 25, 50, 75, 100 ],
//    dom: "Blfrtip", //定义按钮的位置
        buttons: [          // 定义各按钮
            {
                extend: "copy",
                text: '复制',
                className: "btn-sm"
            },
            {
                extend: "csv",
                text: '导出',
                bom:true,
                className: "btn-sm"
            },
            {
                extend: "print",
                text: '打印',
                className: "btn-sm"
            },

        ],

        // "ajax":({
        //     type:"POST",
        //     dataType:"json",
        //     url: "/urclass", // 要访问的地址，这里访问的是servlet映射地址
        //     // // cache: false,  // 是否缓存,
        //     data: {"student_num":num}, // 相当于地址栏后面的参数
        //     // contentType: "application/x-www-form-urlencoded",
        //     success: function(data)
        //     {
        //
        //         var o = eval(data);
        //
        //         $("table").DataTable({
        //
        //             data: row,
        //             columns: [{o: 'name'},
        //                 {data: 'address'},
        //                 {data: 'phone'},
        //                 {data: 'age'},
        //                 {data: 'job'},
        //                 {data: 'like'},
        //                 {data: 'sex'}],
        //         })
        //
        //
        //
        //
        //             // alert(result.rows);
        //         // var $data = $(result);
        //         // fnCallback($data.rows);
        //         // if(result =="ok"){
        //         //     alert("添加成功");
        //         // }else{
        //         //     alert("添加失败");
        //         // }
        //         // window.location.reload();
        //     }
        // }),

        "columnDefs": [
            {

                "targets": [ 0 ],
                "width": "10%",
            },
            {
                "targets": [ 1 ],
                //    "sorting": false,
                //    "render": function (data, type, full, meta) {
                //        // return '<a href="/task_mgm/task" >'+ data +'</a>'
                //        AA = function js_method() {
                //            $.get("/task_mgm/taskinfo_comment")
                //        };
                //        return '<a href="javascript:void(0);" onclick="AA()">'+ data +'</a>'
                //    }

            },
            {
                "targets": [ 2 ],
                "width": "15%",
            },
            {
                "targets": [ 3 ],
                //    "data": null,
                "width": "10%",
                //    "sorting": false,
                //    "defaultContent": "<i class=\"fa fa-edit\" id=\"edit\">编辑</i>",
                // "render": function (data, type, row, meta) {
                //     if([row[4] == "0"]){
                //         return  "<i class=\"fa fa-edit\" id=\"edit\">编辑</i>";
                //     }
                // }
            }],
    });


//     /*****************************
//      *       js of Add Row        *
//      ******************************/
//
//     var t = $('.add-rows').DataTable({
//         responsive: true,
// // "bPaginate": true, //翻页功能
// // "bLengthChange": true, //改变每页显示数据数量
// // "bFilter": true, //过滤功能
// // "bSort": true, //排序功能
// // "bInfo": true,//页脚信息
// // "bAutoWidth": true,//自动宽度
// // "bStateSave": true,//状态保存，使用了翻页或者改变了每页显示数据数量，会保存在cookie中，下回访问时会显示上一次关闭页面时的内容。
//
// // "sLengthMenu": "每页显示 _MENU_ 条记录",
// // "sZeroRecords": "抱歉， 没有找到",
// // "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
// // "sInfoEmpty": "没有数据",
// // "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
// // "sZeroRecords": "没有检索到数据",
//
//         "oPaginate": {
//             "sFirst": "首页",
//             "sPrevious": "前一页",
//             "sNext": "后一页",
//             "sLast": "尾页"
//         },
//         "sPaginationType": "full_numbers",
//
//         "oLanguage": {
//             "sSearch": "搜索:",
//             "sLengthMenu": "每页显示 _MENU_ 条记录",
//             "sZeroRecords": "抱歉， 没有找到",
//             "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
//             "sInfoEmpty": "没有数据",
//             "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
//             "oPaginate": {
//                 "sFirst": "首页",
//                 "sPrevious": "前一页",
//                 "sNext": "后一页",
//                 "sLast": "尾页"
//             },
//             "sZeroRecords": "没有检索到数据",
//         },
//     });
//     var counter = 1;
//
//     $('#addRow').on( 'click', function () {
//
//         t.row.add( [
//             counter +'.1',
//             counter +'.2',
//             counter +'.3',
//             counter +'.4',
//             counter +'.5'
//         ] ).draw( false );
//
//         counter++;
//     } );

} );
