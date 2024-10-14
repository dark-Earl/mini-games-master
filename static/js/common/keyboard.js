

$("#keyArea").find("button").each(function (i,n) {
    if(isLargeScreen()){
        $(n).on("click",function () {
            var key = $(this).attr("data-key");
            var keyname = $(this).attr("data-keyname");
            keyboardClick(key,keyname);
        })
    }else{
        $(n).on("touchend",function () {
            var key = $(this).attr("data-key");
            var keyname = $(this).attr("data-keyname");
            keyboardClick(key,keyname);
        })
    }

})

function keyboardClick(key,keyname) {
    var e = new KeyboardEvent('keydown',{'keyCode':key,'which':key,'key':keyname});
    document.dispatchEvent(e);
    e.stopPropagation();
    debounce(buttonUp,500,true,key,keyname);
}

// 防抖函数立即执行版
var timer = null;
function debounce(fn,delay,isImmediate) {
    // 利用arguments模拟实现函数重载
    timer&&clearTimeout(timer);
    if(isImmediate){
        if(!timer){
            arguments.length==5?(fn(arguments[3],arguments[4])):(fn());
        }
        return timer = setTimeout(function () {
            timer=null;
        },delay)
    }else{
        return timer= setTimeout(function () {
            arguments.length==5?(fn(arguments[3],arguments[4])):(fn());
        },delay)
    }
}

// 按键弹起
function buttonUp(key,keyname) {
    var d = new KeyboardEvent('keyup',{'keyCode':key,'which':key,'key':keyname});
    document.dispatchEvent(d);
}
