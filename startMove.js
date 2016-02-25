window.onload = function () {
    var myDiv = document.getElementById("myDiv");
    myDiv.ii = null;
    myDiv.onmouseover = function () {
        startMove(myDiv, {width: 400, height: 400});
//                startMove(this,"opacity", 100);
    };
    myDiv.onmouseout = function () {
        startMove(myDiv, {width: 200, height: 200});
    }

//             myLi[i].onmouseout = function () {
//                 startMove(this,{"width",b:"height"}, 200);
// //                startMove(this,"opacity", 30);
//             }
};
//    var  ii = null;
// function startMove(obj, json) {
//     clearInterval(obj.ii);
//     var bb = true;
//     obj.ii = setInterval(function () {
//         for (var attr in json) {
//             var speed;
//             var total = 0;
//             if (attr == "opacity") {
//                 total = Math.round(parseFloat(getStyle(obj, attr)) * 100);//获取的透明度为0到1之间，所以要乘以100，IE才可以用
//             } else {
//                 total = parseInt(getStyle(obj, attr));
//             }
//             speed = (json[attr] - total) / 4;
//             speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);  //ceil向上取整，floor向下取整
//             if (total != json[attr]) {
//                 bb=false;
//             }
//             if (attr == "opacity") {
//                 obj.style.filter = "alpha(opacity:" + (total + speed) + ")";
//                 obj.style.opacity = (total + speed) / 100;
//             }
//             else {
//                 obj.style[attr] = total + speed + "px";
//             }
//             if (bb){
//                 clearInterval(obj.ii);
//             }

//         }
//     }, 30);

// }
// function getStyle(obj, attr) {
//     if (obj.curentStyle) {
//         return obj.curentStyle[attr];
//     } else {
//         return getComputedStyle(obj)[attr];
//     }
// }
function startMove(obj, json){
    clearInterval(obj.ii);
    var bb = true;
    obj.ii = setInterval(function(){
        for(var attr in json){
            var speed = null;
            var total = 0;
            if(attr == "opacity"){
                total= Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                total = parseInt(getStyle(obj,attr));
            }
            speed = (json[attr]-total)/8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            if(total !=json[attr]){
                bb = false;
            }
            if(attr == "opacity"){
                obj.style.filter = "alpha(opacity:"+total+speed+")";
                obj.style.opacity = (total+speed)/100;
            }else{
                obj.style[attr] = total+speed +"px"; 
            }
            if(bb){
                clearInterval(obj.ii);
            }
        }
    },30);
}


function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj,null)[attr];
}