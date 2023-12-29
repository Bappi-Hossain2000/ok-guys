// var friendsName = "" ;
// console.log(friendsName)


// var strType = "Bappi";
// console.log(typeof strType)


var numType = 30;
console.log(numType);


// var Booltype = true;
// console.log(typeof Booltype)


// var rochona = "lorem10 am student"
// console.log(rochona.toUpperCase())

// var rochona2 = "LOREM10 AM STUDENT"
// console.log(rochona2.toLowerCase())


// var myFd = "Minhaj  Mejba  BeniAmin  Rana" ;
// console.log(myFd.split("Rana"))


// var myFd2 = "Minhaj  Mejba  BeniAmin  Rana" ;
// console.log(myFd2.indexOf("Mejba"))

// var num1 = 10;
// var num2 = 5;
// console.log(num1+num2)


// var num1 = 10;
// var num2 = 10;
// var total = num1+num2
// console.log(total)


// var num1 = "10.55";
// var num2 = 10;
// // console.log(typeof num1)
// num1 = parseFloat(num1);
// var total = num1+num2
// console.log(total) (= 10.55)


// var num1 = "10.55";
// var num2 = 10;
// num1 = parseInt(num1);
// var total = num1+num2
// console.log(total) (= 10)


// var num3 = 10;
// var num4 = 10;
// // num4 = "" + num4;
// console.log (typeof num4);
// var total = num3+num4
// console.log(total)



// var num1 = 50;
// var num2 = 20;
// var total = num1 + num2
// console.log(num1 + num2)
// // console.log(total)


// var num1 = 50;
// var num2 = 20;
// // console.log(num1 - num2)
// var total = num1 - num2
// console.log(total)



// var num1 = 5;
// var num2 = 2;
// // console.log(num1 * num2)
// var total = num1 * num2
// // console.log(total)


// var num1 = 10;
// var num2 = 2;
// // console.log(num1 / num2)
// var total = num1 / num2
// console.log(total)



// var num1 = 10;
// var num2 = 3;
// // console.log(num1 / num2)
// var total = num1 % num2
// console.log(total)


// var num1 = -20;
// // var sum = Math.abs(num1)
// // console.log(sum)
// Math.abs(num1)
// console.log(Math.abs(num1))


// var totalMembers = 20.6;
// Math.round(totalMembers)
// console.log(Math.round(totalMembers))



// var totalMembers = 0.0000000000001;
// Math.ceil(totalMembers)
// console.log(Math.ceil(totalMembers))


// var totalMembers = 1.9999999999;
// Math.floor(totalMembers)
// console.log(Math.floor(totalMembers))


// var lotery = 0.9999999999;
// Math.random() 
// console.log(Math.random())


// var lotery = 0.9999999999;
// Math.random() * 100;
// console.log(Math.random() * 100)


// var lotery = Math.random() * 100;
// console.log(lotery)


// Conditional

//1. If Conditional
//2. else Conditional
//3. else if Conditional
//4. switch Statement Conditional



// 1. if Conditional//

// var a = 2;
// var b = 5;
// if(a < b)//এই লজিক সঠিক হলেই  কেবল ফলাফল আসবে//{
// console.log("computer erore Math is wrong");
// }

// var a = 2;
// if(a < 3){
// console.log("It is right");
// }

// var a = 2;
// var b = 3;
// if(a <= 3){
// console.log("It is right");
// }
// var a = 5;
// var b = 3;
// if(a > 3){
// console.log("It is right last");
// }
// if(10 > 2){
//   console.log("Hello world")
// }




//2. else Conditional//

// var a = 10 ;
// var b = 1 ;
// if(a > b){
//   console.log("Bappi");
// }
// if(a < b){
//   console.log("Samima");
// }

// if(a > b){
// //   console.log("Bappi");
// // }
// // else{
// //   console.log("Samima");
// // } (else কন্ডিশন একাই ব্যবহার হয়। 
// এটিতে ফাস্ট ব্যাকেটে কোনো কন্ডিশন সেট করতে হয়না।
//  এটি if কন্ডিশনের ওপর কাজ করে ।
// //   আবার এটি একবারের বেশি ব্যবহার হয় না।
// //    এটি মূলত if এর সাহায্যকারী হিসেবে ব্যবহার হয়ে থাকে)



//3. else if Conditional//


// var x = 500;
// var y = 500;

// if(x>y){ //এটি একবার ব্যবহার করা ভালো
//   console.log("x boro")
// }
// else if(x<y){ //যত খুশি তত বার ব্যবহার করা ভালো
//   console.log("y boro")
// }
// else{ //এটি একবারের বেশি ব্যবহার করা যাবেনা
//   console.log("they both are same")
// }

// var x = 5;
// var y = 5;


// if(x<y){
  //   console.log("x boro")
  // }
  // else if(x>y){
    //   console.log("y boro")
    // }
    // else if(x>y){
      //   console.log("y boro")
      // }
      // else{
        //   console.log("They both are same")
        // }




        //4. switch Statement Conditional//

        // // var sum = 10;

        // switch(1){
        //   case 100:
        //     console.log("hello world1");
        //     break;
        //   case 5:
        //     console.log("hello world2");
        //     break;
        //   case 1:
        //     console.log("hello world3");
        //     break;
        //   default:
        //     console.log("Sorry");
        //     break;
        // }


// // Date Object//  //

 // myDate.toTimeString()

// var myDate = new Date();
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.getMonth())
// console.log(myDate.getDate())
// console.log(myDate.getMinutes())
// console.log(myDate.getSeconds())
// console.log(myDate.getMilliseconds())
 
// outPut
// 10:16:40 GMT+0600 (Bangladesh Standard Time)
// 10:16:40 AM
// 11/17/2023
// 10
// 17
// 16
// 40
// 521



// Array //

// Array অনেকগুলো ডাটা একত্রে স্টোর করা যায়  //

// var fdName = ["Bappi", "Samima", "Sumaiya"];
// console.log(fdName[2]); //array হতে ডাটা খুজে বাহির করার নিয়ম//

// var fdName = ["Bappi", "Samima", "Sumaiya"];
// var id = fdName[1];
// console.log(id); //array হতে ডাটা খুজে বাহির করার নিয়ম//

// var fdName = ["Bappi", "Samima", "Sumaiya"];
// fdName[1] = "Shithimony";//array মধ্যে ডাটা পরিবর্তন করার নিয়ম//
// console.log(fdName); 



// Array Push() Pop() Shift() & Unshift() //

      // Array Push() //
// var fdName = ["Bappi", "Samima", "Sumaiya"];
// fdName.push("Shithimony","BAPPI");//array মধ্যে ডাটা যোগ/প্রবেশ করানোর নিয়ম//
// console.log(fdName); 

// Pop() //
// var fdName = ["Bappi", "Samima", "Sumaiya"];
//  fdName.push("wesfvds")//array মধ্যে ডাটা শেষে ডাটা যোগ করানোর নিয়ম//
// fdName.pop();//array মধ্যে ডাটা শেষের ডাটা রিমুভ করানোর নিয়ম//
// console.log(fdName); 

// Shift()  //
// var fdName = ["Bappi", "Samima", "Sumaiya"];
// //  fdName.shift()//array এর শুরুতে ডাটাকে বাদ দেওয়ার নিয়ম//
// fdName.unshift("my jan wife");//array এর শুরুতে ডাটা প্রবেশ করানোর নিয়ম//
// console.log(fdName); 




// Slice() & Splice()//


// Slice() //

// var fdName = ["1.Bappi", "2.Samima", "3.Sumaiya","4.Samiewma", "5.Sumaiya"];
//  fdName.slice(2,3)//array মধ্যে যেকোনো স্থান থেকে ডাটা খুজের বাহির নিয়ম//
// console.log(fdName.slice(3)); 



// // Splice() //

// var fdName = ["1.Bappi", "2.Samima", "3.Sumaiya","4.Samiewma", "5.Sumaiya"];
// fdName.splice(0,2, "my jan wife"); //array মধ্যে ইচ্ছেমত ডাটা বাদ দেওয়া এবং প্রবেশ করানোর নিয়ম//
// console.log(fdName); 



// for, for/in, for/of, while & do/while loops //


//1. for loops //

// for(var i = 0; i<=5;  i++ ){
//   console.log(i);
// }

// var Names = [1,2,3,4,5,6,7,8,9, "Bappi", "Samima"]
// for(var i = 0; i<Names.length;  i++ ){
//   console.log(Names[i]);
// }


// //2. while loops //
 
// var Bappi = 0;
// while(Bappi<10){
//   console.log(Bappi)
// Bappi++
// }


// 3.function //

// function Fun(){
//   var num1 = 50;
//   var num2 = 20;
//   console.log(num1*num2)
// }
// Fun()
// console.log("hello world")
// Fun()
// Fun()
// Fun()

// Advance //
// function fun(){
//   var num1 = 10;
//   var num2 = 5;
//   var total = num1 + num2;
//   console.log(total)
// }
// fun()


// function fun(num1, num2){
//   var total = num1+num2;
//   console.log(total)
// }
// fun(10, 4)

// function fun(num1, num2){
//   var total = num1-num2;
//   console.log(total)
// }
// fun(10, 4)

// function fun(num1, num2){
//   var total = num1*num2;
//   console.log(total)
// }
// fun(10, 4)

// function fun(num1, num2){
//   var total = num1/num2;
//   console.log(total)
// }
// fun(10, 4)

// function fun(num1, num2){
//   var total = num1%num2;
//   console.log(total)
// }
// fun(10, 4)

//advance label//
// function fun(num1){
//   var total = num1*10;
//   return total;
// }
// var a = fun(4)
// var b = fun(5)
// console.log(a)
// console.log(b)
// console.log(a*b)





// Object //

// var MyAdress = {YourName:"Bappi chowdhory", Village:"chakraza", Age:"25"}
// console.log(MyAdress.Age);
// console.log(MyAdress.Village);
// var nP = MyAdress["YourName"]
// console.log(nP);

//constractor//

// function MyInfo(YourName, Village, Age){
//     this.YourName = YourName;
//     this.Village = Village;
//     this.Age = Age;
// }
// var Bappi305 = new MyInfo("Bappi", "Chakraza", "25");
// var Ziku = new MyInfo("Ziku", "Bogura", "23");
// var Minhaj = new MyInfo("Md. Minhaj Uddin Mondol", "Naogaon", "28");
// console.log (Minhaj)


// function MyInfo(YourName, Village, Age){
//     this.YourName = YourName;
//     this.Village = Village;
//     this.Age = Age;
//     this.ShowMe = function(){
//       console.log(this.YourName)
//       console.log(this.Village)
//       console.log(this.Age)
//     };
// }
// var Bappi305 = new MyInfo("Bappi", "Chakraza", "25");
// var Ziku = new MyInfo("Ziku", "Bogura", "23");
// var Minhaj = new MyInfo("Md. Minhaj Uddin Mondol", "Naogaon", "28");
// Ziku.ShowMe()
// Bappi305.ShowMe()




// Ternary Opetator //
// if & else কে সর্ট  করে কাজ করার জন্য Ternary Opetator ব্যবহার করা হয় //
// মাত্র দুট উত্তরের জন্য এটি ব্যবহার করা হয় //

// var num = 5;
// (num<10)? "I am small" : "I am big"
//  console.log((num<10)? "I am small" : "I am big")

// var num = 50;
// num<10? "I am small" : "I am big"
//  console.log((num<10)? "I am small" : "I am big")

// var num = 4;
// var MyCondition = (num<10)? "I am small" : "I am big"
//  console.log(MyCondition)




// Continue Statement & break Statement//

// break Statement//
// for(var i=0; i<10; i++){
//   if(i==5){
//     console.log("Break Now");
//     break;
//   }
//   console.log(i);
// }

// // Continue Statement//
// for(var i=0; i<10; i++){
//   if(i==5){
//     console.log("Bappi Now");
//     continue;
//   }
//   console.log(i);
// }




/* Var, Let, Const */

// var num1 = 1;
// let num2= 2;
// const num3 = 3;

/*1. Var */
// var num1 = 0;
// var num1 = "Bappi";//redeclaration//
//  num1 = "Samima"; //reasine//
//  console.log(num1)
 
 /*2. Let */
//  let num1 = 0;
//  var num = "Bappi";//একই নামে redeclaration করা যাবেনা//
//   num1 = "Samima"; //reasine করা যাবে//
//   console.log(num1)

/*3. Const */
//  const num1 = "It is not change"; //reasine & redeclaration কোন টাই ব্যবহার করা যাবেনা।//
//   console.log(num1)




/* JavaScript Scope */
/*1.Block Spoe, 2.Function Scope & 3.Global Scope*/

/* 1.Global Scope*/
// var fdName = "Bappi"; (এটির অ্যাকসেস যেখানে ইচ্ছা সেখানে থেকে নেওয়া যাবে)
// console.log(fdName);
// function me(){
//   console.log(fdName);
// }
// me()

/* 2.Function Scope*/
// function me(){
//   var fdName2 = "Bapp2";//(এটির অ্যাকসেস শুধু ফ্যানশনের মধ্যে নেওয়া যাবে)
//   console.log(fdName2);
// }
// me()

/* 3.Block Scpoe*/
// {
//   let tumi = "tumi block Scope" // (এটি শুধুমাত্র {} ব্যাকেটের মধ্যে অ্যাকসেস নেওয়া যাবে। এই ব্যাকটের মধ্যে ব্লক হিসেবে থাকে)
//   console.log(tumi);
// }





// JavaScipt Hoisting //
//  YourName = "Bappi" //(first assign)
//  var YourName ; //(then declaration মনে মনে এটি  ওপরের তুলে নিয়ে অনডিফাইন অবস্থা হয়ে থাকে)
// console.log(YourName); //(It is rigth)

//  YourName = "Bappi" //(first assign)
//  let YourName ; //(then declaration  মনে মনে এটি ওপরের ওঠে কিন্তু আনডিফাইন ধরতে পারে না)
// console.log(YourName); //(It is reference error)

//  YourName = "Bappi" //(first assign কখনোও ‍দ্বিতীয় assign করা যায় না)
//  const YourName ; //(then declaration কখনোও ‍দ্বিতীয় declaration করা যায় না)
// console.log(YourName); //(It is SyntextError)




/* Function Expression */

// function CallBack(){
//   console.log("My message")
// }
// CallBack() //(normal Function)


// var ExpressionFun = function(){
//   console.log("My message")
// }
// ExpressionFun() //(Expression Function)

// var ExpressionFun2 = function(message, message1, message3){
//   console.log(message, message1, message3)
// }
// ExpressionFun2("Bappi", "Samima","ew") //(Expression Function)



/* Inner Fumction */
/* আউটারের ফ্যানশনের যেকোনো জিনিস ইনার ফ্যানশনে নিয়ে নেওয়া যাবে
কিন্তু ইনার ফ্যানশনের কোন জিনিস আউটার ফ্যানশানে নেওয়া সম্ভব নয় */
// function OuterFun(){
//   var MyNameO = "Bappi"
//   console.log(MyNameO)

//   function InnerFun(){
//     var MyNameI = "Samima"
//     console.log(MyNameI)
//   }
//   InnerFun()
// }
// OuterFun()



var strType = "Bappi";
console.log(typeof strType)



