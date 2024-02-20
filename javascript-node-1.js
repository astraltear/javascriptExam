function header(param) {
  console.log('header.onload!!!!!')
  var data = {
    port: 123,
    userID: "wifiKey"
  };
  
  data.version="10.1.1.";
  window[param](data);
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
  
  
    
// header('func1');  // window 객체 때문에 node에서 실행하면 오류남 
//arrayTest();
objectHandle();
// arrayTest2();
// mathTest();
//trycatchTest();
//getRandomTwoValue();    

  
  