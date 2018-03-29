$( document ).ready(function() {
  document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
      // 通过下面这个API隐藏右上角按钮
      WeixinJSBridge.call('hideOptionMenu');
      WeixinJsBridge.invoke('disabledShare',{},function(e){
      　　});
  });
});
