$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // autoplay: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    // mySwiper.activeIndex = 1;
    // // mySwiper.slideTo(1);
    // $(".utilities-body-top li").click(function(){
    //     var i = $(this).index();
    //     // mySwiper.slideTo(1);
    // })
    getUtilitiesData();
    getPublicData();
    getShowImg();
    $(".focus-public-sj").hover(function () {
        $(this).css({
            top: '11px',
            right: '307px',
            transform: "rotate('36deg')"
        })
        $(".focus-public-sign").css({
            top: "-5px",
            right: "224px",
        })
        $(".focus-public-text").css({
            top: "10px",
            right: "310px",
        })
        $(".focus-public").css("width", "300px");
        return false;
    })
    $(".focus-public").mouseout(function(){
        $(".focus-public-sj").css({
            top: '11px',
            right: '7px',
            transform: "rotate('213deg')"
        })
        $(".focus-public-sign").css({
            top: "-5px",
            right: "-76px",
        })
        $(".focus-public-text").css({
            top: "10px",
            right: "10px",
        })
        $(this).css("width","0");
    })
})
//实用工具
function getUtilitiesData() {
    $.ajax({
        url: "//fejia.cn:8080/getData",
        type: "post",
        data: {
            status: "0"
        },
        success: function (res) {
            utilitiesRender(res, 0)
        },
        error: function (err) {
            console.log(err);
        }
    })
    $.ajax({
        url: "//fejia.cn:8080/getData",
        type: "post",
        data: {
            status: "1"
        },
        success: function (res) {
            utilitiesRender(res, 1)
        },
        error: function (err) {
            console.log(err);
        }
    })
    $.ajax({
        url: "//fejia.cn:8080/getData",
        type: "post",
        data: {
            status: "2"
        },
        success: function (res) {
            utilitiesRender(res, 2);
        },
        error: function (err) {
            console.log(err);
        }
    })
    $.ajax({
        url: "//fejia.cn:8080/getData",
        type: "post",
        data: {
            status: "3"
        },
        success: function (res) {
            utilitiesRender(res, 3);
        },
        error: function (err) {
            console.log(err);
        }
    })
    function utilitiesRender(res, index) {
        for (var i = 0; i < res.length; i++) {
            var data = res[i];
            var str = "";
            // console.log(data.src)
            data.src = "./images/utilities_item_01.jpg";
            str += "<a href=" + data.href + "><div class='utilities-body-item'>";
            str += "<dl class='utilities-item-top'><dt>";
            str += "<img src='" + data.src + "' alt=''></dt>";
            str += "<dd><h2>" + data.name + "</h2><div>" + data.remark + "</div></dd></dl>";
            str += "<div class='qr-sign'></div><div class='qr-signed'></div>";
            str += "<div class='utilities-item-btm'><span class='book-sign'></span>";
            for (var n = 0; n < data.tag.length; n++) {
                var tagData = data.tag[n];
                if (tagData.number > 99) {
                    tagData.number = "99+";
                }
                if (tagData.name) {
                    str += "<span class='utilities-item-article'>" + tagData.name + "  <i>" + tagData.number + "</i></span><span class='utilities-item-read'>阅读数监控<i>61</i></span>";
                    str += "<span class='utilities-item-fans'>粉丝画像<i>28</i></span><span class='utilities-item-people'>公众号诊断<i>9</i></span>";
                }

            }
            str += "</div></div></a>";
        }
        $(".utilities-body-item").hover(function () {
            $(this).find(".qr-sign").show();
            $(this).find(".qr-signed").show();
        }, function () {
            $(this).find(".qr-sign").hide();
            $(this).find(".qr-signed").hide();
        })
        $(".utilities-body-btm").each(function (i, e) {
            // var index = $(this).data("index");
            if (i == index) {
                $(this).html(str);
            }
            if (i == 0) {
                $(this).css("background", "#6CF");
            } else if (i == 1) {
                $(this).css("background", "#FC9");
            } else if (i == 2) {
                $(this).css("background", "#6C9");
            } else if (i == 3) {
                $(this).css("background", "#F99");
            }
        })
    }
}
//获取公众号
function getPublicData() {
    $.ajax({
        url: "//fejia.cn:8080/getData",
        type: "post",
        data: {
            status: "4"
        },
        success: function (res) {
            publicRender(res, 0)
        },
        error: function (err) {
            console.log(err);
        }
    })
    $.ajax({
        url: "//fejia.cn:8080/getData",
        type: "post",
        data: {
            status: "5"
        },
        success: function (res) {
            publicRender(res, 1)
        },
        error: function (err) {
            console.log(err);
        }
    })
    $.ajax({
        url: "//fejia.cn:8080/getData",
        type: "post",
        data: {
            status: "6"
        },
        success: function (res) {
            publicRender(res, 2);
        },
        error: function (err) {
            console.log(err);
        }
    })
    $.ajax({
        url: "//fejia.cn:8080/getData",
        type: "post",
        data: {
            status: "7"
        },
        success: function (res) {
            publicRender(res, 3);
        },
        error: function (err) {
            console.log(err);
        }
    })
    $.ajax({
        url: "//fejia.cn:8080/getData",
        type: "post",
        data: {
            status: "8"
        },
        success: function (res) {
            publicRender(res, 4);
        },
        error: function (err) {
            console.log(err);
        }
    })
    function publicRender(res, index) {
        for (var i = 0; i < res.length; i++) {
            var data = res[i];
            var str = "";
            // console.log(data.src)
            data.src = "./images/public_item_01.jpg";
            str += "<a href=" + data.href + "><div class='public-body-item'>";
            str += "<dl class='public-item-top'><dt>";
            str += "<img src='" + data.src + "' alt=''></dt>";
            str += "<dd><h2>" + data.name + "</h2><div>" + data.remark + "</div></dd></dl>";
            str += "<div class='qr-sign'></div><div class='qr-signed'></div>";
            str += "<div class='public-item-btm'><span class='book-sign'></span>";
            for (var n = 0; n < data.tag.length; n++) {
                var tagData = data.tag[n];
                if (tagData.number > 99) {
                    tagData.number = "99+";
                }
                if (tagData.name) {
                    str += "<span class='public-item-article'>" + tagData.name + "  <i>" + tagData.number + "</i></span><span class='public-item-read'>阅读数监控<i>61</i></span>";
                    str += "<span class='public-item-fans'>粉丝画像<i>28</i></span><span class='public-item-people'>公众号诊断<i>9</i></span>";
                }

            }
            str += "</div></div></a>";
        }
        $(".public-body-btm").each(function (i, e) {
            // var index = $(this).data("index");
            if (i == index) {
                $(this).html(str);
            }
            if (i == 0) {
                $(this).css("background", "#6CF");
            } else if (i == 1) {
                $(this).css("background", "#FC9");
            } else if (i == 2) {
                $(this).css("background", "#6C9");
            } else if (i == 3) {
                $(this).css("background", "#F99");
            } else if (i == 4) {
                $(this).css("background", "#6C9");
            }
        })
    }
}
function getShowImg() {
    $.ajax({
        url: "//fejia.cn:8080/getShowImg",
        type: "get",
        success: function (res) {
            console.log(res);
            $(".content-header-logo img").attr("src", res.path);
            res.txt = "新考拉媒体导航"
            $(".content-header-title").html(res.txt);
        },
        error: function (err) {
            console.log(err);
        }
    })
}




