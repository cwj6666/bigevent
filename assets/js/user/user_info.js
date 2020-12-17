let form=layui.form
let layer=layui.layer

function change(){
    $.ajax({
        url: "/my/userinfo",
        success: function (res) {
            form.val("formTest", res.data);
        }
    });
}
change();

$('#reset').click(function(e){
    e.preventDefault()
    change()
})
$('.layui-form').submit(function(e){
    e.preventDefault();
    let data=$('.layui-form').serialize();
    $.ajax({
        type:'POST',
        url:'/my/userinfo',
        data,
        success:function(res){
            console.log(111);
          if(res.status!==0){
              layer.msg(res.message)
          }
          layer.msg('设置成功')
          change();
          window.parent.gotoInfo()；
      
        }
    })
})

// $('#changePwd').click(function(e){
//     e.preventDefault();
//     let data=$('.layui-form').serialize();
//     $.ajax({
//         type:'POST',
//         url:'/my/userinfo',
//         data,
//         success:function(res){
//             console.log(111);
//           if(res.status!==0){
//               layer.msg(res.message)
//           }
//           layer.msg('设置成功')
//           change()
//         }
//     })
// })

