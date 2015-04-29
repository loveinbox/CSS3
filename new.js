
var keepInView=function(){
	function aa(dom){
		var ifm = document.getElementById("iframepage");
		var tempDom = typeof dom ==="string"? document.getElementById(dom):dom;
		var top = document.documentElement.scrollTop||document.body.scrollTop;
		if(top<100){
			tempDom.style.top = "20px";
		}else{
			if(top<400||top<ifm.height.slice(0,-2)-55){
				console.log(tempDom.style.top);
				tempDom.style.top = top-75+"px";
			}
		}
		// console.log("document.documentElement.scrollTop = "+document.documentElement.scrollTop);
		// console.log(tempDom.style.top);
	}
	aa("main-aside-nav");	
};

window.onscroll=keepInView;