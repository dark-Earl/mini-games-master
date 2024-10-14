
// 方向键逻辑
$(".directedButton").find("button").each(function (i,n) {
    $(n).on("touchstart",function () {
        var key = $(this).attr("data-key");
        var keyname = $(this).attr("data-keyname");
        buttonDown(key,keyname);
    });
    $(n).on("touchend",function () {
        var key = $(this).attr("data-key");
        var keyname = $(this).attr("data-keyname");
        buttonUp(key,keyname);
        // keyboardClick(key,keyname);
    })
})

// 普通键逻辑
$(".commonButton").find("button").each(function (i,n) {
    $(n).on("touchend",function () {
        var key = $(this).attr("data-key");
        var keyname = $(this).attr("data-keyname");
        keyboardClick(key,keyname);
    })
})

function keyboardClick(key,keyname) {
    var e = new KeyboardEvent('keydown',{'keyCode':key,'which':key,'key':keyname});
    document.dispatchEvent(e);
    e.stopPropagation();
    setTimeout(function () {
        var d = new KeyboardEvent('keyup',{'keyCode':key,'which':key,'key':keyname});
        document.dispatchEvent(d);
    },1000)
    debounce(buttonUp,1000,key,keyname);

}

// 防抖函数
var timer = null;
function debounce(fn,delay,key,keyname) {
    // 利用arguments模拟实现函数重载
    timer&&clearTimeout(timer);
    return timer= setTimeout(function () {
        fn(key,keyname);
    },delay)
}

// 方向键按下
function buttonDown(key,keyname) {
    var e = new KeyboardEvent('keydown',{'keyCode':key,'which':key,'key':keyname});
    document.dispatchEvent(e);
    e.stopPropagation();
}

// 按键弹起
function buttonUp(key,keyname) {
    var d = new KeyboardEvent('keyup',{'keyCode':key,'which':key,'key':keyname});
    document.dispatchEvent(d);
}
