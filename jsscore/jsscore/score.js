
function checkScore() {
    var score = document.getElementById("input");
    if(score.value>90&&score.value<=100){
        alert("1等生");
    } else if (score.value > 80 && score.value < 90) {
        alert("2等生");
    } else if (score.value > 70 && score.value < 80) {
        alert("3等生");
    } else if (score.value > 60 && score.value< 70) {
        alert("4等生");
    } else if (score.value > 50 && score.value < 60) {
        alert("5等生");
    } else if (score.value > 40 && score.value < 50) {
        alert("6等生");
    } else if (score.value > 30 && score.value < 40) {
        alert("7等生");
    } else if (score.value > 20 && score.value < 30) {
        alert("8等生");
    } else if (score.value > 10 && score.value < 20) {
        alert("9等生");
    } else if (score.value>= 0 && score.value < 10) {
        alert("退学");
    } else {
        alert("必须为0到100的数值，请输入合法的数值")
    }

}
