function set_cookie(name, value, minutes){
    var cookie = name + '=' + escape(value);
    if (minutes){
        var expiration = new Date((new Date()).getTime() + minutes*60000);
        cookie += ';expires=' + expiration.toGMTString();
    }
    document.cookie = cookie;
}

function get_cookie(name){
    var str_cookies = document.cookie;
    var arr_cookies = str_cookies.split(';');
    var num_cookies = arr_cookies.length;
    for(var i = 0; i < num_cookies; i++){
        var arr = arr_cookies[i].split("=");
        if(arr[0] == name) return unescape(arr[1]);
    }
    return "";
}

document.getElementById('color1').onclick = function altRed(){
    document.getElementById('menu-wrapper').style.borderTopColor="red";
    document.getElementById('menu-first').style.backgroundColor="red";
    document.getElementById('suning').style.color = "red";
    document.getElementById('guomei').style.color = "red";
    document.getElementById('gouwu').style.color = "red";
    document.getElementById('yamaxun').style.color = "red";
    document.getElementById('taobao').style.color = "red";
    document.getElementById('taotao1').style.color = "red";
    document.getElementById('taotao2').style.color = "red";
    set_cookie('color','red',1000);
}

document.getElementById('color2').onclick = function altGrey(){
    document.getElementById('menu-wrapper').style.borderTopColor="grey";
    document.getElementById('menu-first').style.backgroundColor="grey";
    document.getElementById('suning').style.color = "grey";
    document.getElementById('guomei').style.color = "grey";
    document.getElementById('gouwu').style.color = "grey";
    document.getElementById('yamaxun').style.color = "grey";
    document.getElementById('taobao').style.color = "grey";
    document.getElementById('taotao1').style.color = "grey";
    document.getElementById('taotao2').style.color = "grey";
    set_cookie('color','grey',1000);
}

document.getElementById('color3').onclick = function altBlue(){
    document.getElementById('menu-wrapper').style.borderTopColor="blue";
    document.getElementById('menu-first').style.backgroundColor="blue";
    document.getElementById('suning').style.color = "blue";
    document.getElementById('guomei').style.color = "blue";
    document.getElementById('gouwu').style.color = "blue";
    document.getElementById('yamaxun').style.color = "blue";
    document.getElementById('taobao').style.color = "blue";
    document.getElementById('taotao1').style.color = "blue";
    document.getElementById('taotao2').style.color = "blue";
    set_cookie('color','blue',1000) ;
}


if(get_cookie('color')){
    document.getElementById('menu-wrapper').style.borderTopColor=get_cookie('color');
    document.getElementById('menu-first').style.backgroundColor=get_cookie('color');
    document.getElementById('suning').style.color = get_cookie('color');
    document.getElementById('guomei').style.color = get_cookie('color');
    document.getElementById('gouwu').style.color = get_cookie('color');
    document.getElementById('yamaxun').style.color = get_cookie('color');
    document.getElementById('taobao').style.color = get_cookie('color');
    document.getElementById('taotao1').style.color = get_cookie('color');
    document.getElementById('taotao2').style.color = get_cookie('color');
}

