function TiMu(){
	for(var i in data1){
		var div = document.createElement("div");
		div.className = "entrance-bottom-frame-line";
		document.querySelector(".entrance-bottom-frame").appendChild(div);
		
		var beijing = document.createElement("div");
		beijing.className = "entrance-bottom-frame-beijing";
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(beijing);
		
		
		var div2 = document.createElement("div");
		div2.className = "entrance-bottom-frame-line-title";
		div2.innerHTML = data1[i].title;
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);
		
		var code = document.createElement("code");
		var pre = document.createElement("pre");
		code.innerHTML = data1[i].code;
		pre.appendChild(code);
		pre.className = "pre_message"
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(pre);
		
		var divli = document.createElement("div");
		var divli1 = document.createElement("div");
		divli1.innerHTML = parseInt(i) + 1;
		divli.appendChild(divli1)
		
		document.querySelector(".entrance-bottom-frameli").appendChild(divli);
		
		for(var j in data1[i].xuanxiang){
			var div3 = document.createElement("div");
			div3.className = "entrance-bottom-frame-line-button";
			var div3_id = document.createElement("div");
			div3_id.className = "entrance-bottom-frame-line-button-id";
			if(j == 0){
				 div3_id.innerHTML = "A";
			}else if(j == 1){
				 div3_id.innerHTML = "B";
			}else if(j == 2){
				 div3_id.innerHTML = "C";
			}else{
				 div3_id.innerHTML = "D";
			}
			var div4 = document.createElement("div");
			div4.className = "entrance-bottom-frame-line-button-frame";
			div4.innerHTML = data1[i].xuanxiang[j];
			div3.appendChild(div3_id)
			div3.appendChild(div4);
			document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);
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


function CountDown() {
          minutes = Math.floor(mintime / 60);
         seconds = Math.floor(mintime % 60);
         if(minutes < 10){
         	minutes1 = "0" + minutes
         }else{
         	minutes1 = minutes
         }
         if(seconds < 10){
         	seconds1 = "0" + seconds
         }else{
         	seconds1 = seconds
         }
         msg =   minutes1 + ":" + seconds1;
         document.all["timer"].innerHTML = msg;
//       if (maxtime == 5 * 60)alert("还剩5分钟");
             ++mintime;
   
//       clearInterval(timer);

 }

window.onload = function(){
	TiMu()
	mintime = 1; 
    timer = setInterval("CountDown()", 1000); 
	var dact = document.querySelector(".entrance-bottom-frame-line")
	var divli = document.querySelector(".entrance-bottom-frameli").children[0]
	var active = "active"
	var none = "none"
	addClass(dact, active)
	addClass(divli, active)
	var timu_id = 0
	var frame_left = 0
	document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
	for(var i = 0;i<document.querySelectorAll(".entrance-bottom-frame-line-button").length;i++){
		document.querySelectorAll(".entrance-bottom-frame-line-button")[i].onclick = function(){
			if(timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1){
				frame_left += -100
				document.querySelector("#timer").style.opacity = 0
				document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
				timu_id++;
				addClass(document.querySelector(".entrance-bottom-frameli").children[timu_id], active)
				addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
				removeClass(document.querySelector(".entrance-bottom-frameli").children[timu_id-1], active)
				removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id-1], active)
				addClass(document.querySelectorAll(".entrance-bottom-frame-beijing")[timu_id-1],none)
				setTimeout(function(){document.querySelector("#timer").style.opacity = 1},700)
			}else{
				window.location.href='result.html';
			}
		}
	}
}


var data1 =[ {
             "id" : "1",  
             "title": "1.编译和运行下面代码时显示的结果是（）",  
             "code": 
`public class ThisConstructorCall { 
 	public ThisConstructorCall(String s){
 		System.out.println('s = ' + s);  
	} 
	public ThisConstructorCall(int i){ 
		this('i = ' + i);  
	} 
	public static void main(String args[]){  
		new ThisConstructorCall('String call');
		new ThisConstructorCall(47); 
	}
}`,			
             "xuanxiang":[
             				"打开当前目录下的文件1.txt，既可以向文件写数据，也可以从文件读数据",
             				"ClassCastException",
             				"FileNotFoundException",
             				"IndexOutOfBoundsException",
             				]
	
        },{  
             "id" : "2",  
             "title": "编译和运行下面代码时显示的结果是（）",  
             "code": 
 `public class ThisConstructorCall { 
 	public ThisConstructorCall(String s){
    	System.out.println('s = ' + s);  
	} 
	public ThisConstructorCall(int i){ 
		this('i = ' + i);  
	} 
	public static void main(String args[]){  
		new ThisConstructorCall('String call');
		new ThisConstructorCall(47); 
	}
}`,	
             "xuanxiang":[
             				"打开当前目录下的文件2.txt，既可以向文件写数据，也可以从文件读数据",
             				"ClassCastException",
             				"FileNotFoundException",
             				"IndexOutOfBoundsException",
             				]
        },{  
             "id" : "3",  
             "title": "编译和运行下面代码时显示的结果是（）",  
             "code": 
 `public class ThisConstructorCall { 
 	public ThisConstructorCall(String s){
    	System.out.println('s = ' + s);  
	} 
	public ThisConstructorCall(int i){ 
		this('i = ' + i);  
	} 
	public static void main(String args[]){  
		new ThisConstructorCall('String call');
		new ThisConstructorCall(47); 
	}
}`,	
             "xuanxiang":[
             				"打开当前目录下的文件2.txt，既可以向文件写数据，也可以从文件读数据",
             				"ClassCastException",
             				"FileNotFoundException",
             				"IndexOutOfBoundsException",
             				]
        },{  
             "id" : "4",  
             "title": "编译和运行下面代码时显示的结果是（）",  
             "code": 
 `public class ThisConstructorCall { 
 	public ThisConstructorCall(String s){
    	System.out.println('s = ' + s);  
	} 
	public ThisConstructorCall(int i){ 
		this('i = ' + i);  
	} 
	public static void main(String args[]){  
		new ThisConstructorCall('String call');
		new ThisConstructorCall(47); 
	}
}`,	
             "xuanxiang":[
             				"打开当前目录下的文件2.txt，既可以向文件写数据，也可以从文件读数据",
             				"ClassCastException",
             				"FileNotFoundException",
             				"IndexOutOfBoundsException",
             				]
        },{  
             "id" : "5",  
             "title": "编译和运行下面代码时显示的结果是（）",  
             "code": 
 `public class ThisConstructorCall { 
 	public ThisConstructorCall(String s){
    	System.out.println('s = ' + s);  
	} 
	public ThisConstructorCall(int i){ 
		this('i = ' + i);  
	} 
	public static void main(String args[]){  
		new ThisConstructorCall('String call');
		new ThisConstructorCall(47); 
	}
}`,	
             "xuanxiang":[
             				"打开当前目录下的文件2.txt，既可以向文件写数据，也可以从文件读数据",
             				"ClassCastException",
             				"FileNotFoundException",
             				"IndexOutOfBoundsException",
             				]
        }
        ];
        
