
// if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
//     // 这里警告框会阻塞当前页面继续加载
//     alert('请在微信中访问😀');
//     // 以下代码是用javascript强行关闭当前页面
//     var opened = window.open('about:blank', '_self');
//     opened.opener = null;
//     opened.close();
// }

    // 微信浏览器 MicroMessenger

 //   if(!isWX()){
 //       alert('请在微信中访问😀');
 //       var opened = window.open('about:blank', '_self');
 //       opened.opener = null;
 //       opened.close();
 //   }

    function isWX() {
        var useragent = navigator.userAgent;
        if(useragent.search(/MicroMessenger/i)<0){
            return false;
        }else{
            return true;
        }
    }

    // 判断是特大屏幕还是小屏幕
    function isLargeScreen() {
        if(window.innerWidth>1000){
            return true;
        }else{
            return false;
        }
    }
