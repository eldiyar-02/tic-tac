
//6

// function task6(obj) {
//     if(obj.name.langth % 2 === 0){
//         console.log(0);
//     }else{
//         console.log(1);
//     }
// }
// task6({name: 'wxxxx'});

//7

// function task7(num1, num2){
// if(num1 > num2){
//     console.log(1);
// }else if (num1 < num2){`
//     console.log(-1);
// }else if (num1 = num2)
// console.log(0);
// }
// task7(5,2)

//8

// function masterIoda(num) {
//     if(num % 3 === 0 ){
//         console.log('master');
//     }else if(num % 5 === 0){
//         console.log('Ioda');
//     }else if(num % 3 === 0 && num % 5 === 0
//          ){
//         console.log(masterIoda);
//     }
// }

//1

// let num = 5;

// for (let i = 1; i <= 10; i++){
//     console.log(i * ${num} = ${num * i});
// }

//2

// let arr = [1, 2, 3, 4, 5, -2, -3];
// let sum = 0;

// for (let i = 0; i >= arr.length; i++){
//     if (arr[i] > 0) {
//         sum = sum + arr[i];
//     }
// } 
// console.log(sum);

//1

// function task1(name) {
//     console.log(Привет ${name});
// } 
// task1('kutman');

// const task1  = (name) => {
//     const result = Привет ${name};
//     console.log(result); 
//   };
//   task1('kutman')

//2

// const task1 = (age) => {
// const result = Мне ${age} лет!;
// console.log(result);
// };
// task1(16)

// function task1 (age) {
//     console.log(Мне ${age} лет!);
// } 
// task1(16)



// const task3 = (num) => {
//    const result = num * num

//    console.log(result)
// }

// task3(6)

// function task3(num){
//     console.log(num * num)
// }

// task3(4)

// let sum = 0;

// for (let i = 1 ; i <= 10; i++) {
//    if (i % 5 == 0) {
//      sum = sum + i; 
//    }
// }
// console.log(sum);

// function t4(arr) {
// return arr.map((elem)=> <div>${elem}</div>)
// };
// console.log(t4([1,2]));

// const t4 = (arr) => {
//      return arr.map((elem)=> <div>${elem}</div>)
// };
// console.log(t4([1,2]));

// function t5 (arr) {
//     return arr.filter ((elem) => elem.length % 2 === 0)
// };
// console.log(t5(['ab', 'abc', 'abcd']));

// const t5 = (arr) => {
//     return arr.filter ((elem) => elem.length % 2 === 0)
// };
// console.log(t5('ab', 'abc', 'abcd'));

// function t7(arr) {
//     return arr.filter ((elem) => elem)
// }
// console.log(t7([t,f,t,t]));

// const t7 = (arr) => {
//     return arr.filter ((elem) => elem)
// }
// console.log(t7([t,f,t,t]));

// function t6 (arr) {
//     return arr.map ((elem) =>{
//         if (elem *2 % 10 === 0) {
//             return elem * 2;
//         }
//     })
// };
// console.log(t6([1,2,3,7,10,5]));

// function task3(arr){
//     return arr.map((elem) => elem.id);
// };
// console.log(task3([{id: 1},{id: 2},{id: 3},{id: 4}]));

// function task8(arr) {
//     return arr.filter((elem) => elem != undefined)
// }
// console.log(task8([true, false, true,true, undefined, true, undefined]));

// const task1 = {
//     name: "Jon",
//     age: 18
//   };
// console.log(task1.age);

// function task9(arr) {
//     return arr.reduce((acc, cur) => {
//         return acc + cur
//     })
// }
// console.log(task9([1,2,3,4,5]));

// function task10 (arr) {
//     return arr.reduce((acc,cur) =>{
//         console.log(acc, cur);
//         return acc && cur
//     })
// }
// console.log(task10([true,true,true,true]));


// function task11(arr) {
//     return arr.reduce((acc, cur, index) => {
//         return { ...acc, [field${index + 1}]: cur }
//     }, {})
// }
// console.log(task11([true, 1, 'wow', 'you are smart, bro']));

// function task12(arr) {
//     return arr.map((elem) => elem.isActive)
// }
// console.log(task12([{ name: 'pilot', isActive: true }]));

// function task12 (obj) {
//     return Object.keys(obj).reduce((acc, cur) => {
//         console.log(obj[cur]);
//       if (typeof obj[cur] === 'string') {
//           return {...acc, [cur]: obj[cur]};
//       } else {
//           return acc;
//       };
//     }, {});
// }
// console.log(task12({name: 'pilot', isActive: true}));
// console.log(Object.values(task12))


// function task13(obj) {
//     return Object.keys(obj).reduce((acc, cur) => {
//         if (obj[cur] === false) {
//             return [...acc, cur]
//         }else{
//             return acc;
//         }
//     }, []);
// }
// console.log(task13({isActive: false, isPilot: true }));

// const car ={
//     mark: 'BMW',
//     year: 2008,
//     color: 'black'
// } 
// console.log(car);
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

// function task14(arr) {
//     return arr.reduce((acc, cur) => {
//         return acc + cur / arr.length
//     }, 0)
// };
// console.log(task1([4, 6]));

// function task1(arr1, arr2) {
//     return arr1.reduce((acc, cur, index) => {
//         return [...acc, cur + arr2[index]]
//     }, [])
// }
// console.log(task1([2,4], [1,3]));









// document.getElementById( id)

// document.getElementById
// ('button-send').style.color = 'red';


// document.getElementById
// ('button-send').style.background = 'yellow';

// let btnBg = document.getElementById
// ('button-send');

// btnBg.style.background = 'orange';




//1
// function task1(){
//     let firstLi = document.guerySelector('1');
//     return firstLi.TextContent; 
// }
// console.log(task1());

//2

// function task2(){
//     let arr = Array.from(document.guerySelectorAll('li'));
//     return arr.map((elem) => elem.textContent)
// }
// console.log(task2());
//3
// function task3() {  
//     let arr = Array.from(document.getElementsByClassName('list-item'));  
//     return arr.map((elem) => elem.textContent)  
// }   
// console.log(task3());  
//4
// function task4() {  
//     let arr = Array.from(document.getElementsByClassName('list-item'));  
//     return arr.map((elem) => elem.getAttribute('class'));  
// }  
// console.log(task4()); 
//5 
// function task5() {  
//     let arr = Array.from(document.getElementsByClassName('list-item'));  
//     return arr.map((elem) => elem.getAttribute('data-test-id'))  
// }  
// console.log(task5());

//6 

// function task6(){
//     let arr = Array.from(document.getElementsByClassName('list-item'));
//     return arr.map((elem) => {
//         if (! elem.getattribute('class').includes(elem.textContent)){
//             return elem.getattribute('data-test-id')
//         }
//     })
// }
// console.log(task6());


// function task7(){
//     let arr = Array.from(document.getElementsByClassName('list-item'));
//     return arr.map((elem) => {
//         return `${elem.getAttribute('data-test-id')} ${elem.textContent}`
//     })
// }
// console.log(task7());

// function task9(){
    // let input = document.getElementById('secret-input');
//     return input.value = 'You were hacked!'
// }
// console.log(task9());

//10

// function task10(){
//     let input = document.getElementById('secret-input');
//     let btn = document.getElementById('button-send');
//     return btn.addEventListener('click', () => {
//         return input.value = `${input.value}, You were hacked`
//     })
// }
// console.log(task10());


// for (let i = 0; i <= 100; i++){
// let newDiv = document.createElement('div');
// newDiv.className= 'conteiner';
// let newSpan = document.createElement('span');
// newSpan.innerText = i;
// document.body.appendChild(newDiv);
// newDiv.appendChild(newSpan)
// }

// let newDiv = document.createElement('div');
// newDiv.style.width = '100px';
// newDiv.style.height = '100px';
// newDiv.style.backgroundColor = 'red';
// document.body.appendChild(newDiv);

// for (let i = 0; i <= 10; i++) { 
//     let newDiv = document.createElement('div'); 
//     newDiv.style.width = '100px'; 
//     newDiv.style.height = '100px'; 
//     newDiv.style.backgroundColor = 'red'; 
//     newDiv.style.borderRadius = '50px'; 
//     let newSpan = document.createElement('span'); 
//     newDiv.style.display = 'flex' 
//     newDiv.style.justifyContent = 'center' 
//     newDiv.style.alignItems = 'center' 
//     newDiv.innerText = i; 
//     newDiv.addEventListener('click', () => { 
//         newDiv.style.backgroundColor = 'yellow' 
//         newDiv.style.transition = '.6s' 
//     }) 
//     if (i % 2 == 0) { 
//         newDiv.style.backgroundColor = 'aqua' 
//     } 
//     document.body.appendChild(newDiv) 
//     newDiv.appendChild(newSpan) 
// }


for (let i = 0; i <= 10; i++) { 
    let newDiv = document.createElement('div'); 
    newDiv.style.width = '100px'; 
    newDiv.style.height = '100px'; 
    newDiv.style.backgroundColor = 'red'; 
    newDiv.style.borderRadius = '50px'; 
    let newSpan = document.createElement('span'); 
    newDiv.style.display = 'flex' 
    newDiv.style.justifyContent = 'center' 
    newDiv.style.alignItems = 'center' 
    newDiv.innerText = i; 
    newDiv.addEventListener('click', () => { 
        newDiv.style.backgroundColor = 'yellow' 
        newDiv.style.transition = '.6s' 
    }) 
    if (i % 2 == 0) { 
        newDiv.style.backgroundColor = 'aqua' 
    } 
    document.body.appendChild(newDiv) 
    newDiv.appendChild(newSpan) 
}

for (let i = 0; i <= 10; i++) { 
    let newDiv = document.createElement('div'); 
    let krug = document.createElement('div') 
    let newImg = document.createElement('img') 
    newDiv.style.width = '200px'; 
    newDiv.style.height = '200px'; 
    newDiv.style.backgroundColor = 'red'; 
    newDiv.style.display = 'flex' 
    newDiv.style.justifyContent = 'center' 
    newDiv.style.alignItems = 'center'  
    newDiv.style.margin = '5px' 
    newImg.style.width = '100px' 
    newImg.style.height = '100px' 
    newImg.style.borderRadius = '50px' 
    newImg.style.backgroundImage = 'url(data:image/png;base64,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)' 
    document.body.appendChild(newDiv) 
    newDiv.appendChild(krug) 
    krug.appendChild(newImg) 
}

