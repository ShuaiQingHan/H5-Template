(function() {
	try {
		//二维数组定义155张图片的信息，分别是[图片的left, top, width, height, 1（标记，部分数组有）]
		//数组中最后一个值“1”是一个标记，表示图片换行
		var arrImg = [[307, 48, 88, 89], [307, 48, 89, 89], [307, 48, 91, 89], [305, 49, 93, 89], [305, 50, 93, 88], [305, 50, 93, 88], [306, 52, 92, 86], [305, 53, 93, 84], [305, 54, 94, 83], [306, 54, 93, 83], [307, 54, 92, 83], [307, 54, 92, 83], [308, 54, 90, 83], [308, 54, 90, 83], [306, 53, 91, 84], [306, 53, 91, 84], [308, 53, 90, 84], [308, 53, 90, 84], [305, 53, 92, 84], [305, 52, 92, 85], [306, 52, 91, 85], [308, 51, 88, 87, 1], [308, 50, 88, 88], [308, 49, 88, 88], [307, 49, 89, 88], [307, 50, 89, 87], [308, 51, 89, 86], [307, 54, 90, 83], [307, 57, 90, 80], [306, 58, 92, 79], [306, 58, 92, 79], [305, 60, 92, 77], [302, 61, 95, 76], [302, 63, 95, 74], [302, 51, 96, 86], [302, 66, 98, 71], [304, 67, 96, 69], [301, 63, 96, 74], [301, 58, 93, 79], [291, 52, 94, 85], [288, 50, 71, 88], [285, 43, 76, 95], [285, 37, 70, 101], [281, 29, 55, 109], [278, 20, 58, 119], [278, 20, 55, 119, 1], [277, 12, 121, 127], [271, 2, 122, 138], [267, 1, 126, 139], [264, 0, 136, 140], [260, 0, 141, 140], [255, 0, 148, 140], [252, 0, 151, 140], [249, 2, 121, 138], [247, 3, 123, 137], [246, 3, 123, 137], [246, 2, 124, 137], [258, 2, 112, 137], [263, 2, 106, 137], [263, 2, 106, 137], [262, 2, 103, 137], [260, 2, 104, 136], [260, 2, 104, 137, 1], [268, 2, 98, 137], [267, 2, 99, 137], [266, 2, 97, 137], [266, 3, 96, 136], [264, 3, 99, 136], [263, 3, 100, 136], [261, 3, 100, 136], [259, 2, 138, 137], [254, 2, 126, 137], [247, 2, 101, 136], [240, 2, 108, 136], [238, 1, 110, 137], [230, 1, 118, 138], [220, 15, 128, 124], [211, 18, 137, 121], [205, 43, 102, 96], [202, 45, 104, 93], [200, 38, 97, 101], [198, 38, 104, 101, 1], [197, 39, 107, 100], [197, 39, 112, 100], [213, 39, 94, 110], [212, 40, 95, 111], [211, 41, 97, 111], [209, 42, 99, 112], [209, 43, 98, 112], [213, 43, 87, 112], [213, 42, 83, 113], [211, 40, 86, 109], [211, 38, 86, 103], [211, 37, 88, 112], [211, 20, 186, 131], [213, 27, 167, 122], [212, 44, 87, 105], [210, 44, 88, 98], [195, 44, 106, 98], [189, 44, 110, 98], [182, 46, 117, 99], [173, 44, 118, 96, 1], [161, 43, 130, 99], [154, 42, 137, 97], [153, 42, 137, 97], [153, 42, 137, 97], [152, 41, 137, 98], [151, 41, 137, 97], [149, 41, 145, 97], [148, 25, 144, 114], [148, 13, 144, 126], [141, 12, 153, 127], [115, 11, 173, 128], [108, 7, 180, 133], [108, 4, 180, 136], [108, 3, 176, 137, 1], [108, 1, 161, 139], [105, 1, 235, 138], [103, 1, 295, 148], [103, 0, 277, 149], [108, 0, 234, 137], [101, 0, 232, 137], [99, 0, 135, 139], [95, 0, 244, 139], [81, 0, 152, 139], [69, 0, 164, 139, 1], [66, 0, 169, 139], [65, 0, 170, 139], [63, 0, 168, 138], [61, 0, 159, 138], [35, 0, 304, 139], [19, 0, 189, 140], [18, 11, 138, 129], [18, 11, 137, 129], [18, 11, 137, 128], [18, 6, 135, 133], [7, 4, 146, 136], [6, 4, 147, 136], [3, 4, 150, 136, 1], [3, 5, 150, 135], [3, 8, 150, 132], [4, 6, 394, 145], [12, 6, 388, 145], [11, 8, 389, 144], [11, 8, 387, 144], [11, 8, 387, 143, 1], [10, 8, 113, 131], [11, 8, 111, 131], [10, 9, 112, 130], [12, 9, 116, 130], [12, 9, 111, 130], [12, 9, 111, 130], [12, 9, 110, 131], [12, 34, 113, 106], [13, 35, 110, 104]],
		imgLen = arrImg.length, //图片数组长度
		imgIndex, imgLeft, imgTop, maxHeight,   //分别代表 当前图片序号，background-position中的left, top，一行图片中的最大高度
		fun = -1,   //后面setTimeout的返回值，做标记，后面用到
		funImgClick = function() {  //点击图片的事件（跳转到GOOGLE搜索页面）
			window.location.href = "https://www.google.com/search?q=%E7%8E%9B%E8%8E%8E%C2%B7%E8%91%9B%E5%85%B0%E5%A7%86&ct=graham11-hp&oi=ddle&hl=zh-CN"
		},
		funMakeAnimate = function() {   //创建并执行动画的方法，每83毫秒调用一次，创建一个DIV并设置属性、背景图
			//取出当前图片信息
			var img = arrImg[imgIndex],
			//所有DIV都添加到这个容器
			wrap = document.getElementById("hplogo");
			if (wrap && img[0]) {
				//开始创建DIV
				var div = document.createElement("div");
				div.id = "hplogo" + imgIndex;
				div.style.left = img[0] + "px";
				div.style.top = img[1] + "px";
				div.style.width = img[2] + "px";
				div.style.height = img[3] + "px";
				div.style.background = "url(images/graham11-hp-sprite.png) no-repeat " + -imgLeft + "px " + -imgTop + "px";
				div.onmousedown = funImgClick;
				//这里使用了利用&&运算符的技巧，下面还会用到这个技巧
				//相当于"if (img[3] > maxHeight) { maxHeight = img[3]; }"
				img[3] > maxHeight && (maxHeight = img[3]); //保证maxHeight取当前行最大的图片高度
				//如果有5个值，则说明换行了，left重新从0开始，并累加top，行最大高度清0
				//否则left累加当前图片的宽度
				img[4] ? (imgLeft = 0, imgTop += maxHeight, maxHeight = 0) : imgLeft += img[2];
				wrap.appendChild(div);
				++imgIndex;
				//继续动画
				imgIndex < imgLen && (fun = window.setTimeout(funMakeAnimate, 83)); //又是 && ，同上
			}
		},
		funInit = function() {  //页面加载的时候就执行该函数，初始化变量并调用动画函数
			maxHeight = imgTop = imgLeft = imgIndex = 0;
			//如果动画已经在播放，则先停止并删掉相应的DIV节点
			//再次出现 && 的使用
			fun != -1 && (window.clearTimeout(fun), fun = -1);
			//删除已经添加的DOM节点
			for (var index = 0; index < imgLen; ++index) {
				var div = document.getElementById("hplogo" + index);
				div && div.parentNode && div.parentNode.removeChild(div);
			}
			//第一次调用动画函数
			fun = window.setTimeout(funMakeAnimate, 83);
		};

		var originImg = document.createElement("img");
		//页面onload就调用funInit函数
		originImg.addEventListener ?
			originImg.addEventListener("load", funInit, false) : //addEventListener用于Mozilla系列浏览器，第三个参数userCapture若为true,则浏览器采用Capture,若为false则采用bubbing方式
			originImg.attachEvent("onload", funInit);   //用于IE浏览器
		originImg.src = "images/graham11-hp-sprite.png";
	}
	catch (o) {
		//GOOGLE的错误处理
		//google.ml(o, !1, { cause: "DOODLE" });
	}
})()