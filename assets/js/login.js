//去注册
$('#goToReg').on('click',function(){
    $('.register').show();
    $('.login').hide()
})
//去登陆
$('#goToLogin').on('click',function(){
    $('.register').hide();
    $('.login').show()
})
let  form = layui.form;
let  layer = layui.layer;

//条件验证
form.verify({ 
    repass:function(item){
        let text=$('.password1').val().trim()
        if(item!==text){
            return '两次密码不一致'
        }
    },
     //我们既支持上述函数式的方式，也支持下述数组的形式
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    pass: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ] 
  });  
//注册
$('#regForm').on('submit',function(e){
    e.preventDefault();
    let data=$('#regForm').serialize();
    $.ajax({
        type:'POST',
        url:'/api/reguser',
        data,
        success:function(res){
           if(res.status!==0){
               return layer.msg(res.message);
           }
           $('#regForm')[0].reset();
           $('#goToLogin').click();
        }
    })
})
//登陆
$('#loginForm').on('submit',function(e){
    e.preventDefault();
    let data=$('#loginForm').serialize();
    $.ajax({
        type:'POST',
        url:'/api/login',
        data,
        success:function(res){
          
           if(res.status!==0){
               return layer.msg(res.message);
           }
           localStorage.setItem('token',res.token)
           layer.msg('登陆成功', {
           
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
          }, function(){
            location.href="./index.html"; 
          });
                                                                                                                                                                                                                 
        }
    })
})
