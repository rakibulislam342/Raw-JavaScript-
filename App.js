// NON PRIMATIVE DATA TYPE ----------------------->
/*
Object 
Array 
RegExp 
*/

// PRIMITIVE DATA TYPE ----------------------------->
/*
String
Number
Boolen
Undefined 
Null
*/


// JavaScript Operators ---------------------------------->
// Arithmatic Operators
/*

+ Addition
- Subtraction
* Multiplication
/ Division
% Modulas
++ Increment
-- Decrement

*/

// JavaScript Comparison Operators ------------------------->
/*
== is equal to
=== value + Data Types
!= Not equal
> Grather than
>= Grather than equal
< less than
<= less than equal
*/

// JavaScript Logical Operators --------------------------->
/*
&&
||
!
*/

var Marks = 87

if(Marks>=80){
    console.log('A+')
}
else if(Marks<80 && Marks>=70){
    console.log('A')
}
else if(Marks<60 && Marks>=50){
    console.log('A-')
}
else if(Marks<50 && Marks>=33){
    console.log('A-')
}
else{
    console.log('Fail!')
}

// JavaScript Switch ------------------------------------->
var Day = 100

switch(Day){
   case (0):
       console.log('Sturday')
    break
    case (1):
        console.log('Sunday')
    break
    case (2):
        console.log('Monday')  
    break     
    case (3):
        console.log('Tuesday')  
    break       
    case (4):
        console.log('Wednesday')   
    break    
    case (5):
        console.log('Thursday')
        break
    case (6):
        console.log('Friday')   
    break
    default:
    console.log('Day not Exist!')     

}


// // JavaScript Loop ----------------------------------->
// // For loop --------->
var i;
for (i=1;i<10;i++){
    console.log(i)
}

// For Loop With Break
var x;
for (x=1;x<20;x++){
    if(x == 10){
        break
    }
    console.log(x)
}

// For loop with continue
var y;
for (y=1;y<10;y++){
    if(y == 5 || y == 7){
        continue
    }
    console.log(y)
}

// While Loop ----------------->
var i = 1
while(i < 11){
    console.log(i)
    i++
}

// JavaScript Function ----------------------------------->
function msg(){
    alert('Function Alert')
}

function Addition(n1,n2){
    var X = n1 + n2
    return X
}
document.write(Addition(20,980))

function string(firstName, lastName){
    return firstName + lastName
}
document.write(string('Rakibul islam',' Rafi'))

function UserName(firstName,lastName){
    if(firstName == undefined || lastName == undefined){
        console.log('Your name is not defined')
    }
    else{
        return firstName +" "+lastName
    }
}
UserName('Rakibul islam')

function IntNumberAddtion(firstNumber,lastNumber){
    if(firstNumber || lastNumber == parseInt){
        
    }
}

var firstNumber = 50
var lastNumber = 10.5

if(firstNumber & lastNumber == parseInt){
    console.log(firstNumber + lastNumber)
}
else{
    console.log('Types of Diffrent')
}


// JavaScript Object --------------------------------->
var Person = {
    Name:'Rakibul islam',
    Age:15,
    Class:'Eight',
    City:'Dhaka',
    Country:'Bangladesh'
}
console.log(Person)
console.log(Person.Age)

Array 
var Array_ = ['Dhaka','Rajshahi','Rangpur']
console.log(Array_[0])

var i;
for(i=0;i<Array_.length;i++){
    console.log(Array_[i])
}

For in Loop
var i;
var item = ['Rice','Beef','Tomato','Oil','Salt']
for(i in item){
    document.write(item[i])
}


// For in loop Object --------------------------------->
var Mypc = {
    brand:'Asus',
    isHDD: true,
    Ram:'16Gb',
    Disk:'1T',
    processor:'AMD Ryzon 5',
    GraphicCard: 'NDVIA'
}

var i;
for(i in Mypc){
    console.log(i)
}

// Array Method Concat ---------------->
var Array_1 = [1,2,3,4,5]
var Array_2 = [6,7,8,9,10]

var Array_Result = Array_1.concat(Array_2)
console.log(Array_Result)

// Array Form 
var Array_ = 'Rakibul islam Rafi'
console.log(Array.from(Array_))

// Array Filter
var numbers_Array = [30,32,40,55,90]
var Result = numbers_Array.filter(function(item){
    return item < 50
})
console.log(Result)

// Array Foreach --------------->
var Array_ = [9,6,3,8,5,7]
Array_.forEach(function(fetch){
    console.log(fetch)
})


// Array Includes ------------->
var Arr = [5,6,9,7,8]
console.log(Arr.includes(1))

// Array Reverse -------------->
var A = [9,6,5,1,4,2,8,5,6,]
console.log(A.reverse())

// Array Sort -------------->
console.log(A.sort())

// Array Pop  ----------------->
console.log(A.pop())
console.log(A.pop())


// Array Push ------------------->
var Arr = [5,6,7,8,9]
Arr.push(800)
console.log(Arr)

// Array Splice ------------------->
var Arr = [8,8,5,2,3,4]
Arr.splice(2,0,200)
console.log(Arr)


// JavaScript String Method ---------------------->
var Country = "Bangladesh"
console.log(Country.charAt(5))

// concat ----------->
// var Array_1 = 'Rakibul'
// var Array_2 = 'Islam'

// console.log(Array_1.concat(Array_2))

// indexof()
// var I = 'JavaScript'
// console.log(I.indexOf('S'))

// replace
// substr
// trim

// var Country = '  China   '
// var Trim = Country.trim()
// console.log(Trim.length)


// JavaScript Date Object ------------------------------->
var Date_Object = new Date()
console.log(Date_Object.getDate())
console.log(Date_Object.getFullYear())
console.log(Date_Object.getHours())
console.log(Date_Object.getMinutes())
console.log(Date_Object.getMonth())
console.log(Date_Object.getMilliseconds())
console.log(Date_Object.getSeconds())

// JavaScript Math -------------------------------------->
console.log(Math.abs(-8))
console.log(Math.ceil(2.3))
console.log(Math.floor(4.9))
console.log(Math.max(10,30,500,1,60,))
console.log(Math.min(100,500,0,800,120))
console.log(Math.random()*9)
console.log(Math.round(7.5))

// // JavaScript Number Object -------------------------->
console.log(Number.isFinite(7.99))
console.log(Number.isInteger(8.69))
console.log(Number.parseFloat('7.86'))
console.log(Number.parseInt('3.568'))

// JavaScript Window Object ----------------------------->
function ObjAlert(){
    alert('Alert Sucess!')
}

function ObjConfirm(){
    let result = confirm("Do you want to Delete!")
    console.log(result)
}

function ObjPrompt(){
   var x =  confirm("Write Your name: ")
   console.log(x)
}

function ObjOpen(){
    open()
    
}

function ObjClose(){
    close()
}

setTimeout(function(){
    alert("Alert After 5mins")
},10000)


// JavaScript Navigator Object ------------------------->
document.write("<br/> navigator.appCodeName = ",navigator.appCodeName)
document.write("<br/> navigator.appName = ",navigator.appName)
document.write("<br/> navigator.appVersion = ",navigator.appVersion)
document.write("<br/> navigator.cookieEnabled = ",navigator.cookieEnabled)
document.write("<br/> navigator.language = ",navigator.language)
document.write("<br/> navigator.userAgent = ",navigator.userAgent)
document.write("<br/> navigator.platform = ",navigator.platform)
document.write("<br/> navigator.onLine = ",navigator.onLine)

// // JavaScript Events ----------------------------->
function OnClick(){
    console.log('Click Sucessfully Compleated')
}

function MouseOver(){
    console.log('Mouse Over Compleated')

}

function MouseOut(){
    console.log('Mouse Out!')
}

function KeyUp(){
    console.log('Key Up Sucessfully!')
}

function KeyDown(){
    console.log('Key Down Sucessfully!')
}

function Onchange(){
    console.log('OnChange Sucessfully!')
}

function Onload(){
    console.log('onload Sucessfully!')
}