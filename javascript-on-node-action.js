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

function filterTest(){
  const sets = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
  ];


  for (let i  in sets) {
    console.log("in : "+i);
  }
  for (let i  of sets) {
    console.log("of : "+i);
  }

  sets.forEach( v=>{ 
    //console.log(v);
      v.filter( k =>{  if(k%2===0){console.log(k)}  } )
   });
}

function variablesTest(){
  var var1="a";
  console.log(var1)
  var var1="b";
  console.log(var1)

  let letvar=0;
  letvar++;

  const convar=0;
  convar++;
};

function arrowFunc(){
  let upcount=0;
/* 
  
  () 함수의 매개변수 부분
  () => { ... }: 매개변수 없는 함수
  (x) => { ... }: 하나의 매개변수를 받는 함수
  (x, y) => { ... }: 두 개의 매개변수를 받는 함수

*/
  const upvote=(x)=>{    
    console.log((x+upcount) )
  }

  const upvote2=function(y){
    console.log((y+upcount) )
  }

  upvote(4);
  upvote2(7);
}

function objLiteral(){
  let obj1 = {one:"first"}
  console.log( obj1.one  )
  
  let obj2 = {"two":"second"}
  console.log( obj2.two  )
  console.log( obj2["two"]  )

  let obj3 = {"special key!": "value"};
  console.log(obj3["special key!"]); // "value"
  // console.log(obj3.special key!); // 이건 오류 발생

  let obj4={
      fruits : [1,2,3,4,5],
      price : 100,
      message : 'vue is the app best package!',
      inversetxt :'',
      reversetxt : '',
      kmethos: function (){  console.log("kkkk methods"); },
      inter : {sayhello : [7,8,{third:"deep3"}]}
  }

  console.log(obj4.fruits[4]," ", obj4.message, " ", obj4.inter.sayhello[2].third )
  obj4.kmethos();

  let obj5={
      elects : [
          {name:"black", count : 0},
          {name:"pink", count :0},
          {name:"white", count :0},
          {name:"brown", count :0} 
      ]        
  }

  console.log( obj5.elects[1].name )

  let result= {searchResults : []}
  console.log(result)

  let counter={count:0};
  
}

let fetch1 = ()=>{
  return fetch('https://jsonplaceholder.typicode.com/todos/10')
  .then( res => res.json() )
  .then( json => {  /* console.log(json); */ return json; } )
  .catch(error => { console.log(error); return {}; });
}

let fetch2= async ()=>{
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    
    const res = await response.json();
    return res;

  } catch (error) {
    console.error('error:',error);
    throw error;
  }
}

async function fetchSample(){

  let result1 = await  fetch1();
  console.log("result1:::",result1);

  let result2 = await  fetch2();
  console.log("result2:::",result2);
}

function filterTest(){
  const todos = [1,2,3,4,5]
  const element = 2;

  // JavaScript에서 { } 블록은 값을 반환하지 않으므로, 필터링 콜백 함수가 항상 false로 평가됩니다.
  // 따라서 filter() 메서드는 모든 요소를 제거하고 빈 배열 []을 반환합니다.
  const result0 = todos.filter( (e)=> { e !== element }  ) // []
  console.log(result0);

  const result1 = todos.filter( (e)=> { return e !== element }  ) // [ 1, 3, 4, 5 ]
  console.log(result1);

  const result2 = todos.filter( (e)=> e !== element  ) // [ 1, 3, 4, 5 ]
  console.log(result2);


};

async function async1() {
  return "Hello, Async!";
}

function  asyncAwaitTest() {

/*
  비동기 함수 (async)
    async 키워드는 함수를 비동기로 선언합니다.
    비동기 함수는 항상 Promise 객체를 반환합니다.
    함수 내부에서 return 값을 사용하면, 이는 암묵적으로 Promise.resolve()로 감싸집니다.

  await 키워드
    await는 Promise가 처리될 때까지 함수의 실행을 멈추고 결과 값을 반환받습니다.
    await는 async 함수 내에서만 사용 가능합니다.
    await 뒤에는 반드시 Promise를 반환하는 표현식이어야 합니다.
*/
  console.log(  async1() )
  async1().then( (res) => { console.log(res) }   )
}

asyncAwaitTest();
// filterTest();
// fetchSample();
// objLiteral();
// arrowFunc();
// variablesTest();
// filterTest();
// immutabilityTest();
// functGrammer();
// arrayReduce();
// forEachTest();
// spreadTest();
// pwTest();
//collectionTest();
// getRandomTwoValue();    
// trycatchTest();
// mathTest();
// arrayTest2();
// objectHandle();
// arrayTest();
// header('func1');  // window 객체 때문에 node에서 실행하면 오류남 