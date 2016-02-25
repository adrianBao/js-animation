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
			speed = (json[attr]-total)/4;
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