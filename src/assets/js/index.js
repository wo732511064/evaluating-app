function append(parent, text) {
    if (typeof text === 'string') {
      var temp = document.createElement('div');
      temp.innerHTML = text;
      // 防止元素太多 进行提速
      var frag = document.createDocumentFragment();
      while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
      }
      parent.appendChild(frag);
    }
    else {
      parent.appendChild(text);
    }
  }
function append(parent, text) {
    if (typeof text === 'string') {
      var temp = document.createElement('div');
      temp.innerHTML = text;
      // 防止元素太多 进行提速
      var frag = document.createDocumentFragment();
      while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
      }
      parent.appendChild(frag);
    }
    else {
      parent.appendChild(text);
    }
  }
function banner() {

	//1 获取变量
	// 屏幕的宽度
	var width = document.body.offsetWidth;

	//  获取 轮播图的ul
	var moveUl = document.querySelector('.banner_images');
	var li1 = "<li></li>"
	var linum = 0
	for(var j=1;j<=document.querySelectorAll(".banner_images li").length-1;j++){
			append(document.querySelector(".banner_index-frame"), li1);
			linum++
		}
	// 索引的li标签
	var indexLiArr = document.querySelectorAll('.banner_index li');

	// 定义 index 记录 当前的 索引值
	// 默认 我们的ul 已经 往左边 移动了 一倍的宽度
	var Ul = document.querySelector('.train_banner');
	// (为什么 一位 最左边的图片 是用来做无限轮播的 不希望用户看到) 所以 index =1
	var left = document.querySelector('.train_banner_left');
	var right = document.querySelector('.train_banner_right');
	var index = 0;
	
	
	

	// 抽取的代码 提升代码的可读性,以及 降低维护的难度
	var startTransition = function() {
		moveUl.style.transition = 'all .5s';
	}

	var endTransition = function() {
		moveUl.style.transition = '';
	}

	// 由于 移动的距离 无法确定 所以提取为参数
	var setTransform = function(distance) {
		
		moveUl.style.transform = 'translateX(' + distance + 'px)';
		
	}

	// 开启定时器
	var timeId = setInterval(function() {
		// 累加
		index++;
		if(index >= document.querySelectorAll(".banner_images li").length) {
						index = 0
					}
		// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
		// moveUl.style.transition = 'all .3s';
		startTransition();

		// 修改 ul的位置
		// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
		setTransform(index * width * -1);

	}, 5000);

	function li() {
		for(var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].index = i;
			indexLiArr[i].onclick = function() {
				for(var i = 0; i < indexLiArr.length; i++) {
					indexLiArr[i].className = '';
				}
				indexLiArr[this.index].className = 'current';
				clearInterval(timeId);
				endTransition();
				index = this.index;
				setTransform((this.index) * width * -1);
				startTransition()

				timeId = setInterval(function() {
					// 累加

					index++;
					if(index >= document.querySelectorAll(".banner_images li").length) {
						index = 0
					}
					// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
					// moveUl.style.transition = 'all .5s';
					startTransition();

					// 修改 ul的位置
					// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
					setTransform(index * width * -1);

				}, 5000)
			};

		}
	}
	li();

	//轮播左点击
	left.addEventListener('click', function() {
		clearInterval(timeId);
		startTransition();
		index--;
		if(index < 0) {
			// 跳到倒数第二张
			
			index = document.querySelectorAll(".banner_images li").length-1;
			// 关闭过渡
			// moveUl.style.transition = '';

			// 瞬间 修改一下 ul 的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);
		} else {
			setTransform(index * width * -1);
		}

		// 修改 索引li标签的 class
		for(var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className = '';
		}

		// 有一个 1的 差值
		indexLiArr[index].className = 'current';

		timeId = setInterval(function() {
			// 累加
			
			index++;
			if(index >= document.querySelectorAll(".banner_images li").length) {
						index = 0
					}
			// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
			// moveUl.style.transition = 'all .3s';
			startTransition();

			// 修改 ul的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);

		}, 5000)

	})

	//轮播右点击
	right.addEventListener('click', function() {
		clearInterval(timeId);
		startTransition();
		index++;
		if(index >= document.querySelectorAll(".banner_images li").length) {
			// 跳到倒数第二张
			index = 0;

			// 关闭过渡
			// moveUl.style.transition = '';

			// 瞬间 修改一下 ul 的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);
		} else{
			setTransform(index * width * -1);
		}

		// 修改 索引li标签的 class
		for(var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className = '';
		}

		// 有一个 1的 差值
		indexLiArr[index].className = 'current';

		timeId = setInterval(function() {
			// 累加

			index++;
			if(index >= document.querySelectorAll(".banner_images li").length) {
						index = 0
					}
			// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
			// moveUl.style.transition = 'all .3s';
			startTransition();

			// 修改 ul的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);

		}, 5000)

	})

	// 过渡 结束事件 用来 修正 index的值 并修改索引
	moveUl.addEventListener('webkitTransitionEnd', function() {

		//  如果 index 太大了 
		if(index >= document.querySelectorAll(".banner_images li").length) {
			index = 0;

			// 关闭过渡
			// moveUl.style.transition = '';
			endTransition();

			// 瞬间 修改一下 ul 的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);
		} else if(index < 0) {
			// 跳到倒数第二张
			index = document.querySelectorAll(".banner_images li").length-1;

			// 关闭过渡
			// moveUl.style.transition = '';
			endTransition();

			// 瞬间 修改一下 ul 的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);
		}

		// 修改 索引li标签的 class
		for(var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className = '';
		}

		// 有一个 1的 差值
		indexLiArr[index].className = 'current';
		
	})

	window.onresize = function() {
		endTransition();
		clearInterval(timeId);
		width = document.documentElement.clientWidth;
		setTransform(index * width * -1);
		timeId = setInterval(function() {
			// 累加
			index++;
			if(index >= document.querySelectorAll(".banner_images li").length) {
				index = 0
			}
			// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
			// moveUl.style.transition = 'all .3s';
			startTransition();

			// 修改 ul的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);
		}, 5000)
	}
	var start = 0
	var tform = 0
	function handlerTouchEvent(event){
	    //只跟踪一次触摸
	    if(event.touches.length==1 || event.touches.length==0){//书上这里有错
	        switch(event.type){
	            case "touchstart":
	            	endTransition();
	            	clearInterval(timeId);
	              
	               start = event.touches[0].clientX
	                break;
	            case "touchend":
	            	if(start - event.changedTouches[0].clientX >= width/2){
	            		if(index >= document.querySelectorAll(".banner_images li").length-1){
	            			index = 0
	            		}else{
	            			index++
	            		}
	                	setTransform(index * width * -1);
	               }else{
	               		setTransform(index * width * -1);
	               }
	               
	            	if(event.changedTouches[0].clientX - start >= width/2){
	            		if(index <= 0){
	            			index = document.querySelectorAll(".banner_images li").length-1
	            		
	            		}else{
	            			index--
	            		}
	                	setTransform(index * width * -1);
	               }else{
	               		setTransform(index * width * -1);
	               }
	            	startTransition();
	               
	                timeId = setInterval(function() {
						// 累加
						index++;
						if(index >= document.querySelectorAll(".banner_images li").length) {
							index = 0
						}
						// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
						// moveUl.style.transition = 'all .3s';
						startTransition();
			
						// 修改 ul的位置
						// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
						setTransform(index * width * -1);
					}, 5000)
	                break;
	            case "touchmove":
	                event.preventDefault(); //阻止滚动
	                tform = index * width * -1 - (start - event.changedTouches[0].clientX)
	                if(tform >= 0){
						tform = 0
					}
					
					if(tform <= -linum * width){
						tform = -linum * width
					}
					setTransform(tform);
	        }
	    }
	}
		
	moveUl.addEventListener('touchstart',handlerTouchEvent,false);
    moveUl.addEventListener('touchmove',handlerTouchEvent,false);
    moveUl.addEventListener('touchend',handlerTouchEvent,false);

}



function TiMu(){
	var topicButton = document.querySelectorAll(".topic-button")
	var topicCenterDiv = document.querySelectorAll(".entrance-bottom-line-center div")
	var frame_left = 0
	var lineId = 0
	for(let i = 0;i<topicButton.length;i++){
		var divli = document.createElement("div");
		divli.innerHTML = i+1;
		document.querySelector(".topic-frameli").appendChild(divli);
		topicButton[i].onclick = function(){
			frame_left += -100
			lineId++
			for(let j=0;j<document.querySelectorAll(".topic-frameli div").length;j++){
				removeClass(document.querySelectorAll(".topic-frameli div")[j],"active")
			}
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
			addClass(document.querySelectorAll(".topic-frameli div")[lineId],"active")
			
			document.querySelector(".topic-frameli").scrollLeft = lineId * (document.querySelector(".topic-frameli div").offsetWidth +  parseInt(getStyle(document.querySelector(".topic-frameli div"),"marginRight")))
		}
	}
	addClass(document.querySelectorAll(".topic-frameli div")[lineId],"active")
	for(let i = 0;i<topicCenterDiv.length;i++){
		topicCenterDiv[i].onclick = function(){
			
			for(let j=0;j<topicCenterDiv.length;j++){
				removeClass(topicCenterDiv[j],"active")
			}
			addClass(topicCenterDiv[i],"active")
			console.log(1)
			
		}
	}
}

function addClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}

function removeClass(obj, cls){
  var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed;//替换原来的 class.
}

function hasClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
  x = 0;
  for(x in obj_class_lst) {
    if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
      return true;
    }
  }
  return false;
}


function getStyle(obj,attr){ 
  if(obj.currentStyle){ 
    return obj.currentStyle[attr]; 
  } 
  else{ 
    return document.defaultView.getComputedStyle(obj,null)[attr]; 
  } 
}


