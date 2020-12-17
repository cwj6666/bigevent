//处理图片头像和文字头像
function gotoInfo(){
    $.ajax({
        url:'/my/userinfo',
        success:function(res){   
            let name=res.data.nickname||res.data.username;
            $('.welocome').html('欢迎&nbsp;&nbsp;'+name);
            if(res.data.user_pic){
                $('.text-avatar').hide();
                $(".layui-nav-img").attr('src',res.data.user_pic)
            }else{
                $(".layui-nav-img").hide();
                $('.text-avatar').text(res.data.username[0].toUpperCase())
            }
        },
        complete:function(options){
          
            if(options.responseJSON.message!=='获取用户基本信息成功！'&& options.responseJSON.status!==0){
                location.href="login.html";
            }
        }
    })
}
gotoInfo();
//退出
$(function(){
  $('.goOut').on('click',function(e){
    e.preventDefault();
    let layer = layui.layer;
    layer.confirm('确认退出吗?', {icon: 3, title:'提示'}, function(index){
        localStorage.removeItem('token')
        location.href='login.html'
        layer.close(index);
      });
  })
})
