let form=layui.form;
let layer=layui.layer;
form.verify({  
    pass: [
    /^[\S]{6,12}$/
    ,'密码必须6到12位，且不能出现空格'
  ],
  oldPass: function(value){ 
    let password= $('#pwd').val();
    if(password===value){
      return '新密码和原密码一样'
    }},
  newpass:function(){
  let newpassword= $('#newPwd').val();
    if(newpassword!==value){
      return '和新密码不一致'
    }
  }
});   
$('.layui-form').submit(function(e){
  e.preventDefault();
  let data=$('.layui-form').serialize();
  console.log(data);
  $.ajax({
    type:'POST',
    url:'/my/updatepwd',
    data,
    success:function(res){
      if (res.status !== 0) {
        return layer.msg("更新密码失败！" + res.message);
      }

      layer.msg("更新密码成功！");
      // 清空密码框
      $(".layui-form")[0].reset();
    }
  })
})

