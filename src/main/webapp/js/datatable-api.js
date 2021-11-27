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

        /*汉化开始*/
        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "前一页",
            "sNext": "后一页",
            "sLast": "尾页"
        },
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

        "ajax":"load",
        "bDestroy":true,
        "bRetrieve": true,
        "sDom": '<"x_content"B><"top"lf>rt<"bottom"ip><"clear">', //定义处理范围
        "bom":true,
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

        "ajax":{"url":"/data/ajax.json"},

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

    /*****************************
     *       js of Add Row        *
     ******************************/

    var t = $('.add-rows').DataTable({
        responsive: true,
// "bPaginate": true, //翻页功能
// "bLengthChange": true, //改变每页显示数据数量
// "bFilter": true, //过滤功能
// "bSort": true, //排序功能
// "bInfo": true,//页脚信息
// "bAutoWidth": true,//自动宽度
// "bStateSave": true,//状态保存，使用了翻页或者改变了每页显示数据数量，会保存在cookie中，下回访问时会显示上一次关闭页面时的内容。

// "sLengthMenu": "每页显示 _MENU_ 条记录",
// "sZeroRecords": "抱歉， 没有找到",
// "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
// "sInfoEmpty": "没有数据",
// "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
// "sZeroRecords": "没有检索到数据",

        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "前一页",
            "sNext": "后一页",
            "sLast": "尾页"
        },
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
    });
    var counter = 1;

    $('#addRow').on( 'click', function () {
        t.row.add( [
            counter +'.1',
            counter +'.2',
            counter +'.3',
            counter +'.4',
            counter +'.5'
        ] ).draw( false );

        counter++;
    } );




    /*****************************************************
     *       Automatically add a first row of data        *
     *****************************************************/

// $('#addRow').trigger('click');






    /***************************************************************
     *       js of Individual column searching (text inputs)        *
     ***************************************************************/

// Setup - add a text input to each footer cell
    $('.text-inputs-searching tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

// DataTable
    var tableSearching = $('.text-inputs-searching').DataTable();

// Apply the search
    tableSearching.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );


    /*****************************************************************
     *       js of Individual column searching (select inputs)        *
     *****************************************************************/

    $('.datatable-select-inputs').DataTable( {
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value="">Select option</option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );

                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' );
                } );
            } );
        }
    } );


    /********************************************************************
     *       js of Child rows (show extra / detailed information)        *
     ********************************************************************/


    /* Formatting function for row details - modify as you need */
    function format ( d ) {
// `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
            '<tr>'+
            '<td>Full name:</td>'+
            '<td>'+d.name+'</td>'+
            '</tr>'+
            '<tr>'+
            '<td>Extension number:</td>'+
            '<td>'+d.extn+'</td>'+
            '</tr>'+
            '<tr>'+
            '<td>Extra info:</td>'+
            '<td>And any further details here (images etc)...</td>'+
            '</tr>'+
            '</table>';
    }

// -- Child rows (show extra / detailed information) --


    var tableChildRows = $('.show-child-rows').DataTable( {
        "ajax": "../../app-assets/data/datatables/ajax-child-rows.json",
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "salary" }
        ],
        "order": [[1, 'asc']]
    } );

// Add event listener for opening and closing details
    $('.show-child-rows tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = tableChildRows.row( tr );

        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );


    /***************************************************
     *       js of Row selection (multiple rows)        *
     ***************************************************/


    var multipleRowsTable = $('.selection-multiple-rows').DataTable();

    $('.selection-multiple-rows tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
    });

    $('#row-count').on('click', function() {
        alert(multipleRowsTable.rows('.selected').data().length + ' row(s) selected');
    });


    /*************************************************************
     *       js of Row selection and deletion (single row)        *
     *************************************************************/


    var tableselectionDelete = $('.selection-deletion-row').DataTable();

    $('.selection-deletion-row tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            tableselectionDelete.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $('#delete-row').on('click', function() {
        tableselectionDelete.row('.selected').remove().draw(false);
    });


    /*********************************
     *       js of Form inputs        *
     *********************************/


    var tableFormInputs = $('.submit-form-inputs').DataTable();

    $('.inputs-submin').on('click', function() {
        var data = tableFormInputs.$('input, select').serialize();
        alert(
            "The following data would have been submitted to the server: \n\n" +
            data.substr(0, 120) + '...'
        );
        return false;
    });


    /*****************************************************
     *       js of Show / hide columns dynamically        *
     *****************************************************/


    var tableDynamically = $('.hide-columns-dynamically').DataTable({
        "scrollY": "200px",
        "paging": false
    });

    $('a.toggle-vis').on('click', function(e) {
        e.preventDefault();

        // Get the column API object
        var column = tableDynamically.column($(this).attr('data-column'));

        // Toggle the visibility
        column.visible(!column.visible());
    });

    /************************************************
     *       Search API (regular expressions)        *
     ************************************************/


    $('.search-api').DataTable();

    $('input.global_filter_search').on('keyup click', function() {
        filterGlobal();
    });

    $('input.column_filter_search').on('keyup click', function() {
        filterColumn($(this).parents('tr').attr('data-column'));
    });


    function filterGlobal() {
        $('.search-api').DataTable().search(
            $('#global_filter').val(),
            $('#global_regex').prop('checked'),
            $('#global_smart').prop('checked')
        ).draw();
    }

    function filterColumn(i) {
        $('.search-api').DataTable().column(i).search(
            $('#col' + i + '_filter').val(),
            $('#col' + i + '_regex').prop('checked'),
            $('#col' + i + '_smart').prop('checked')
        ).draw();
    }

} );
