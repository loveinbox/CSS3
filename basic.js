function iFrameHeight() {
	//insertCSS("../new.css");
	var ifm = document.getElementById("iframepage");
	ifm.height = "10px";
	var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument;
	if (ifm != null && subWeb != null) {
		ifm.height = subWeb.body.scrollHeight+"px";
	}
}

function insertCSS(filePath){
	var ifm = document.getElementById("iframepage");
	ifm.contentDocument.head.innerHTML='<link rel="stylesheet" type="text/css" href="'+filePath+'" /> ';
}
