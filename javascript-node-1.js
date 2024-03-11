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
  let avdUrl=[];
  // let avdUrl=[[1,"www.kounts.info","[www.kounts.info]&02-578-3694",999]];
  // let avdUrl=[[1,"www.kounts.info","[www.kounts.info]&02-578-3694",999],[1,"www.kounts.info","[www.kounts.info]&02-578-3694",999]];
  
  var avdUrlLength = avdUrl.length;
  
  var firstNum = Math.floor(Math.random() * avdUrlLength);
  var secondNum =0;
  
  if(firstNum ==(avdUrlLength-1) || avdUrlLength == 0  ){
      secondNum = 0;
  } else {
      secondNum = firstNum+1;
  }
  console.log("firstNum["+firstNum+"]secondNum["+secondNum+"]");
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

function pwTest(){
  let pw1='Zx3c4v5b!-5678';  // 소문자+대문자+특수문자+숫자 

  // console.log( "pwdCheck pw1:",pwdCheck(pw1) )  // true
  // console.log( "pwdCheck pw2:",pwdCheck(pw2) )  // true
  // console.log( "pwdCheck pw3:",pwdCheck(pw3) )  // true
  
  console.log(kin4(pw1));
  
  
}

function spreadTest(){
  const arg1 = {key1:"value1", key2:"value2"  };
  const result = {...(arg1), key3:"value3" };  //  spread  연산자 
  const result1 = {key4:"value4", ...(result), key5:"value5", ...(arg1)}; // 중복값 발생시 최종 값이 이전 값을 덮어쓴다. 
  console.log(result1);
}

function forEachTest(){
  const resultObj ={};
  let str="x:111,y:222";

  str.split(",").forEach( v =>{
    
    // v를 분할하여 배열을 생성 
    // 그리고 [key, value]를 사용하여 배열의 각 요소를 key와 value 변수에 할당
    // 비구조화 할당(destructuring assignment) ES6부터 도입된 문법
     const [key,value] = v.split(":");  
     resultObj[key] = value;
  } );

  console.log(resultObj);
  
  var [one,two,three] = "abc:ABC:123".split(":");
  console.log( one,two,three );
  
}

function arrayReduce(){
  let arr2 = [  { id: "foo", name: "Mr, Foo" },  { id: "baz", name: "Mr. Baz" }];
  /*
  array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
  callback: 각 요소에 대해 실행할 함수로, 다음 네 가지 매개변수를 받습니다.
    accumulator: 누적된 결과값.
    currentValue: 현재 순회 중인 배열의 요소.
    currentIndex: 현재 순회 중인 배열의 인덱스.
    array: reduce()를 호출한 배열 자체.
    initialValue (optional): 초기값으로, 첫 번째 콜백 호출에서 accumulator의 초기 값으로 사용됩니다. 생략하면 배열의 첫 번째 요소가 초기값으로 사용됩니다.
  */
  arr2.reduce(  
    (a,v)=>{
      console.log(a, v);
      
    },"default value"
  );

  const number = [1,2,3,4,5,6,7,8,9,10];
  const sum = number.reduce( (accumulator,currentValue, index )=>{
      console.log("index===>",index);
      return accumulator + currentValue;
  }, 0  );
  console.log("sum",sum);

}

function functGrammer(){
  const func2 = function(name){
    return "FUNC2 ".concat(name);
  }

  console.log(func2('series'));
}

function immutabilityTest(){
  const plainVar = "abc";
  // plainVar="erererer"; Assignment to constant variable.
  console.log(plainVar);
}

// header('func1');  // window 객체 때문에 node에서 실행하면 오류남 
// arrayTest();
// objectHandle();
// arrayTest2();
mathTest();
// trycatchTest();
// getRandomTwoValue();    
//collectionTest();
// pwTest();
// spreadTest();
// forEachTest();
// arrayReduce();
// functGrammer();
// immutabilityTest();

