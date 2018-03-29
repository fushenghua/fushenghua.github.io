$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});
$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});


document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 通过下面这个API隐藏右上角按钮
    WeixinJSBridge.call('hideOptionMenu');
    WeixinJsBridge.invoke('disabledShare',{},function(e){
    　　});
});
