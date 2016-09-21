
var arr = ["a","x","b","d","m","a","k","m","p","j","a"];
var count = {};
var position   = {};
arr.forEach(function(value, index){
    if(count[value]){
        count[value] ++;
        position[value] += ","+index;
    } else {
        count[value] = 1;
        position[value]   =""+index;
    }
});

var max = count[Object.keys(count).sort(function (a, b) {
    return count[a]<=count[b];
})[0]];

//把出现最多的字母写入arr-all
var arr_all = [];
for(i in count){
    if(count[i] >= max ){
        max = count[i];
        arr_all.push(i);
    }
}

document.write('出现字数最多的字母是:'+arr_all+'<br>')

//打印次数位置
for(var i=0;i<arr_all.length;i++){
    var letter = arr_all[i];
    document.write(letter+'出现的次数:'+count[letter]+'<br>')
    document.write(letter+'出现的位置:'+position[letter]+'<br>')
}
