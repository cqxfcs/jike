
$(document).ready(function(){   //文档加载后激活函数

    $(window).on("load",function(){
        imglocation();
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};
        window.onscroll = function(){
            if(scrollToSide()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($(".container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
                });
                imglocation();
            }
        };
    });
});
window.onresize = function () {
    imglocation();
}

function scrollToSide(){
    var box = $(".box");
    var lastBoxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2)
    var docHeight = $(document).width();
    var srcollHeight = $(window).scrollTop();
    return (lastBoxHeight<srcollHeight+docHeight)?true:false;
}

//$(window).resize(function () {
//
//})


function imglocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width(); //获取图片宽度
    var num = Math.floor($(window).width()/boxWidth); //一排存放的图片数
    var boxArr = [];
    box.each(function(index,value){  //遍历
        value.style.cssText="";
        var boxHeight = box.eq(index).height();
        if(index<num){
            boxArr[index] = boxHeight;  //将每张图片高度放置到数组里
        }else{
            var minboxHeight = Math.min.apply(null,boxArr);
            var minboxIndex = $.inArray(minboxHeight,boxArr); //inArray函数判断minboxHeight是否包含在boxArr数组中，然后获取最小高度图片位置
            //console.log(value);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();
        }
    });
}