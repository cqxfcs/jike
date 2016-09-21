var calcu ; //用来选择运算符
var result = 0;
var numshow = 0;
var operate = 0; //用来表示输入状态
var num=0;
var quit = 0; //用来防止重复按键
function enter(num){
    var str = document.calculator.numScreen.value;
    str=(str!=0)?((operate==0) ? str : "") :"";
    str = str+num;
    document.calculator.numScreen.value = str;
    operate = 0;
    quit = 0;
}

function doubleZero(){
    var str = document.calculator.numScreen.value;
    str=(str!=0)?((operate==0) ? str + "00" : "0"):"";
    document.calculator.numScreen.value = str;
    operate = 0;
}

function del(){
    var str = document.calculator.numScreen.value;
    str=(str!=0)?str.substr(0,str.length-1):"";
    document.calculator.numScreen.value = str;
}

function spot(){
    var str = document.calculator.numScreen.value;
    str=(str!=0)?((operate==0) ? str : "0"):"";
    for (var i = 0; i < str.length; i++) {
        if(str.substr(i,1)=="."){
            return false;
        }
    }
    str = str+".";
    document.calculator.numScreen.value = str;
    operate = 0;
}

function clearScreen(){
    num=0;
    result=0;
    numshow="0";
    document.calculator.numScreen.value = "0";
}

function calculate(){
    numshow = Number(document.calculator.numScreen.value);
    if(num!=0 && quit!=1){
        switch (calcu){
            case 1:result = num + numshow;break;
            case 2:result = num - numshow;break;
            case 3:result = num * numshow;break;
            case 4:if(numshow!=0){
                result = num/numshow;
            }else{
                document.getElementById("note").innerHTML="被除数不能为零";
                setTimeout(clearnote,2000);
            };break;
            case 5:result = num % numshow;break;
            case 6:result = Math.sin(Math.PI*num/180);break;
            case 7:result = Math.cos(Math.PI*num/180);break;
            case 8:result = Math.tan(Math.PI*num/180);break;
            case 9:if(numshow!=0){
                result = 1/numshow;
            }else{
                document.getElementById("note").innerHTML="倒数分母不能为零";
                setTimeout(clearnote,2000);
            };break;
            case 10:result = Math.sqrt(numshow);break;

        }
        quit=1; //避免重复按键
    }else{
        result=numshow;
    }
    numshow=String(parseFloat(result.toFixed(8)));
    document.calculator.numScreen.value=numshow;
    num=result; //存储当前值
}

function clearnote(){ //清空提示
    document.getElementById("note").innerHTML="";
}

function plus(){ //加法
    calculate(); //调用计算函数
    operate=1;
    calcu=1;
}
function minus(){ //减法
    calculate();
    operate=1;
    calcu=2;
}

function multiply(){ //乘法
    calculate();
    operate=1;
    calcu=3;
}
function divide(){ //除法
    calculate();
    operate=1;
    calcu=4;
}
function persent(){ //求余
    calculate();
    operate=1;
    calcu=5;
}
function equal(){
    calculate(); //等于
    operate=1;
    num=0;
    result=0;
    numshow="0"
}

function sin(){
    calculate();
    operate=1;
    calcu=6;
}
function cos(){
    calculate();
    operate=1;
    calcu=7;
}
function tan(){
    calculate();
    operate=1;
    calcu=8;
}
function lastbutone(){
    calculate();
    operate=1;
    calcu=9;
}

function genhao(){
    calculate();
    operate = 1;
    calcu = 10;
}