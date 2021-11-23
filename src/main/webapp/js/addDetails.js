function addfavorite( ) {
    var goods_id=document.getElementById('goods_id').innerText;
    var num=document.getElementById('num').innerText;

    $.ajaxSettings.async = false;//可以访问到外面的变量
      $.ajax({
        type:"POST",
        dataType:"text",
        url: "/servlet_addfavorite", // 要访问的地址，这里访问的是servlet映射地址
        // cache: false,  // 是否缓存,
        data: {"account_num":num,"goods_id":goods_id}, // 相当于地址栏后面的参数
        // contentType: "application/x-www-form-urlencoded",
        success: function(result)
        {

          if(result =="ok"){
              alert("添加成功");
          }else{
              alert("添加失败");
          }
        }
      });





}