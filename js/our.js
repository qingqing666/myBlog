$(function(){
    function getInfo(){
        $.ajax({
            url: "//fejia.cn:8080/getShowImg",
            type: "get",
            success: function (res) {
                console.log(res);
                $("#main-show").css("background-image","url('"+res.path+"')")
                $(".main-show-content > ul li").eq(0).html(res.txt);
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
    getInfo();
})