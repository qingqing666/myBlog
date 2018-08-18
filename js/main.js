$(function(){
    var swiper = new Swiper('.swiper-container', {
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    $.ajax({
        url:"//fejia.cn/getData",
        type: "get",
        dataType: "jsonp",
        success:function(res){
            console.log(res);
        },
        error:function(err){
            console.log(err);
        }
    })
})
    


  