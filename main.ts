//**call back 

function wishes (name:string){
   console.log('hellow,'+ name)
}

function callwishes (callback:(name : string) => void){
   let name = 'hania';
   callback(name);
}

callwishes(wishes);

//**

function wish (){
  console.log('hi')
}

function call (callback : ()=> void){

    callback();
}
call (wish)
 
//**Promises

let comeToplay = new Promise(function(resolve, reject) {
   let ayega = "no" // yes

   if (ayega >= "yes"){
      resolve ("hn a jungaa")
   }
   else {
      reject ('nhi a punga')
   }
})

comeToplay.then(function(message){
     console.log(message);
})

comeToplay.catch(function(message){
   console.log(message);
})

//** 

let orderfood = new Promise (function (resolve,reject){

   let foodIsready = "no" //yes

   if (foodIsready === "yes"){
   resolve("your food is ready")
   }
   else{
      reject("it will take some time")
   }
})


orderfood.then (function(message){
  console.log(message);
})

orderfood.catch (function(message){
   console.log(message);
 })