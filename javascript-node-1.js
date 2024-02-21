function header(param) {
  console.log('header.onload!!!!!')
  var data = {
    port: 123,
    userID: "omega3"
  };
  
  data.version="10.1.1.";
  window[param](data); // 객체에 동적으로 적용하는 방법 
}

function func1(param) {
  console.log('func1!!!!!' + param.port + "||" + param.userID + "||" + param.version)
}
  
  
  
function arrayTest(){
    var blackNUM = [];
  blackNUM.push([2,"blackId","blackData","",""]);
  console.log(blackNUM);
}
  
function objectHandle () {
  
  filters = {
    all : "all_value",
    active : "active_value",
    completed : "completed_value",
    array_obj  : [
      {name: "astral", age: 1, gender:"M" },
      
    ]
  }


    let p_name="all";
  console.log( filters[p_name]  ) // 객체에 동적으로 적용하는 방법 
  
  
  p_name="array_obj";
  console.log( filters[p_name]  )
  console.log( filters[p_name][0]  )
  console.log( filters[p_name][0].gender  )
  console.log( filters.array_obj[0].name  );
  console.log( filters.array_obj[0].notfound  );
  console.log( filters.array_obj[1]?.name ?? "null undefined일 때 디폴트 값 세팅"  );

  var ids={
    10:"ONE",
    20:"TWO",
  }

  ids[30]="THREE";
  console.log(ids)
}
  
function arrayTest2(){
  var userState = [];
  //userState = ["one","two","three","four"]
  userState[2]="1"
  console.log( userState.length  );
  console.log( userState  );
}
  
function trycatchTest(){
    var arr1 =[{one:"onevalue"}];
    let arrValue ="";
    try {
        arrValue = arr1[2].one;
        
    } catch(e){
        //console.log(e)
      arrValue ="IN CATCH"
    }
    console.log( "arrValue:", arrValue )
}
  
function mathTest(){
  console.log(  Math.floor(Math.random() * 3)  );
}
  
function getRandomTwoValue(){
       var avdUrlLength = 3;
     
     var firstNum = Math.floor(Math.random() * avdUrlLength);
     var secondNum =0;
     
     if(firstNum ==(avdUrlLength-1) ){
             secondNum = 0;
     } else {
         secondNum = firstNum+1;
     }
     
     console.log("firstNum:"+firstNum+" secondNum:"+ secondNum )
}

function collectionTest(){
  console.log(  [1,2,3,4].map( (v)=>{ return v*5}  ) )
}
  

function pwdCheck(val){
	var check = true;
	var alpha_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,20}$/;
  /*
    (?=.*[a-z]): 소문자 알파벳이 최소한 1개 포함되어야 합니다.
    (?=.*[A-Z]): 대문자 알파벳이 최소한 1개 포함되어야 합니다.
    (?=.*\d): 숫자가 최소한 1개 포함되어야 합니다.
    (?=.*\W): 특수문자가 최소한 1개 포함되어야 합니다.
    .{8,20}: 총 길이가 8에서 20 사이여야 합니다.
  */
	if(!alpha_pattern.test(val) || kin4(val)){
		check = false;
	}else{
		check = true;
	}
	return check;
}

function kin4(str, max){
	if(!max) max = 4; // 글자수를 지정하지 않으면 4로 지정
	var i, j, k, x, y;
	var buff = ["0123456789", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
	var src, src2, ptn="";
	
	for(i=0; i<buff.length; i++){
		src = buff[i];
		src2 = buff[i] + buff[i];
		for(j=0; j<src.length; j++){
			x = src.substr(j, 1);
			y = src2.substr(j, max);
			ptn += "["+x+"]{"+max+",}|";
			ptn += y+"|";  // [0]{4,}|0123|[1]{4,}|1234|[2]{4,}|2345|[3]{4,}|3456|[4]{4,}|4567|  이렇게 생성된다 
		}
	}
	ptn = new RegExp(ptn.replace(/.$/, "")); // 맨마지막의 글자를 하나 없애고 정규식으로 만든다.
	
	if(ptn.test(str.toUpperCase())) return true;
	return false;
}

    
// header('func1');  // window 객체 때문에 node에서 실행하면 오류남 
// arrayTest();
// objectHandle();
// arrayTest2();
// mathTest();
// trycatchTest();
// getRandomTwoValue();    
//collectionTest();

let pw1='Zx3c4v5b!-5678';  // 소문자+대문자+특수문자+숫자 

// console.log( "pwdCheck pw1:",pwdCheck(pw1) )  // true
// console.log( "pwdCheck pw2:",pwdCheck(pw2) )  // true
// console.log( "pwdCheck pw3:",pwdCheck(pw3) )  // true

console.log(kin4(pw1));

const arg1 = {key1:"value1", key2:"value2"  };
const result = {...(arg1), key3:"value3" };  //  spread  연산자 
const result1 = {key4:"value4", ...(result), key5:"value5", ...(arg1)}; // 중복값 발생시 최종 값이 이전 값을 덮어쓴다. 
console.log(result1);