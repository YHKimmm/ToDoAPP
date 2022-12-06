const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-button');
const tabs = document.querySelectorAll('.tabs div');
const underLine = document.getElementById('underline');
let mode = 'all';
let taskLists = [];
let filterLists = [];

// 탭들을 누를때마다 underline 자유자재로 움직이게하기...!
tabs.forEach(tab=>tab.addEventListener('click',(e)=>underLineTabs(e)));
function underLineTabs(e) {
    underLine.style.left = e.target.offsetLeft + 'px';
    underLine.style.width = e.target.offsetWidth + 'px';
    underLine.style.top = e.target.offsetTop + e.target.offsetHeight+'px';
}


addBtn.addEventListener('click', addTask);

taskInput.addEventListener('blur', () => {
    taskInput.value = '';
});

addBtn.addEventListener("mousedown", addTask);
taskInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
    addTask(event);
    }
});

for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', (e) => {
        filter(e);
    })
}

function addTask() {
    let task = {
        taskContent: taskInput.value,
        id: randomIDGenerate(),
        isCompete: false,
    }
    taskLists.push(task);
    console.log(taskLists);
    render();
}

function render() {
    let list = [];
    if (mode === 'all') {
        list = taskLists;
    } else if (mode === 'not done') {
        list = filterLists;
    } else if (mode === 'done') {
        list = filterLists;
    }
    let resultHTML = '';
    for (let i = 0; i < list.length; i++){
        if (list[i].isCompete == true) {
            resultHTML += `<div class="tasks">
            <div class="task task-done"><span>${list[i].taskContent}</span></div>
            <div class="buttons">
              <button onclick="completeTask('${list[i].id}')" class="check-button button">
                <i class="fa-solid fa-rotate-left"></i>
              </button>
              <button onclick="deleteTask('${list[i].id}')" class="delete-button button">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>`;
        } else {
            resultHTML += `<div class="tasks">
            <div class="task"><span>${list[i].taskContent}</span></div>
            <div class="buttons">
              <button onclick="completeTask('${list[i].id}')" class="check-button button">
                <i class="fa-solid fa-check"></i>
              </button>
              <button onclick="deleteTask('${list[i].id}')" class="delete-button button">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>`;
        }
    }
    
    document.querySelector('.task-render').innerHTML = resultHTML;
}

function completeTask(id) {
    for (let i = 0; i < taskLists.length; i++){

        // id가 같다면 isCompete를 바꾸시오, isCompete가
        // true냐 false에 따라 UI가 변동되기때문! render함수 if (taskLists[i].isCompete == true) {
        if (taskLists[i].id == id) {
            taskLists[i].isCompete = !taskLists[i].isCompete;
            break;
        }
    }
    console.log(taskLists);
    filter();
}

function deleteTask(id) {
    for (let i = 0; i < taskLists.length; i++){
        if (taskLists[i].id == id) {
            taskLists.splice(i, 1);
            break;
        }
    }
    console.log(taskLists);
    filter();
}

function filter(e) {
    // if문 없을떄는 completeTask & deleteTask 함수에서 mode = e.target.id 에서 target을
    // 못읽는 이유 -> filter()호출했을경우 원래 filter(e)함수에서 e라는 event 매개변수가
    // 없기 때문에 target을 읽지못한다
    // 그렇기때문에, if문으로 e라는 매개변수가 있는 경우를 나누는것이다...!
    // e 매개변수가 있는경우에만 e(event).target을 읽어라!
    if (e) {
        mode = e.target.id;
        console.log(mode);
    } 
    
    filterLists = [];
    if (mode === 'all') {
        for (let i = 0; i < taskLists.length; i++){
            filterLists.push(taskLists[i]);
            console.log(filterLists)
        }
    }
    else if (mode === 'not done') {
        for (let i = 0; i < taskLists.length; i++){
            if (taskLists[i].isCompete == false) {
                filterLists.push(taskLists[i]);
                console.log(filterLists);
            }
        }
    } else if (mode === 'done') {
        for (let i = 0; i < taskLists.length; i++){
            if (taskLists[i].isCompete == true) {
                filterLists.push(taskLists[i]);
                console.log(filterLists);
            }
        }
    }
    render();
}



function randomIDGenerate() {
    return "_" + Math.random().toString(36).substr(2, 9);
}
 


//3.
function calculate(obj){    // 함수 안을 바꾸시오
    let { a, b, c } = obj;
    return a + b + c;
}

console.log(calculate({ a: 1, b: 2, c: 3 }));

//4.
let name="noona store"
let fruits = ["banana","apple","mango"]
let address={
    country:"Korea",
    city:"Seoul"
}

function findStore(obj) {
    let { name, address: { city } } = obj;
    console.log({address: { city }});
    return name="noona store" && city == "Seoul";
}
console.log(findStore({ name, fruits, address }))

//5.
function getNumber(){
    let array = [1, 2, 3, 4, 5, 6]    // 여기서부터 바꾸시오
    let[first,,third,forth] = array;
    return {first,third,forth}
}
console.log(getNumber())

//6.
function getCalendar(first, ...rest) {
  return (
    first === "January" &&
    rest[0] === "Febuary" &&
    rest[1] === "March" &&
    rest[2] === undefined
  );
}
console.log(getCalendar('January', 'Febuary', 'March'));

//7.
function getMinimum(){
    let a= [45,23,78];
    let b = [54,11,9];
    return Math.min(...a,...b); // 여기를 바꾸시오
}
console.log(getMinimum());

//8.
function sumNumber() {
  // 여기서부터 바꾸시오
  const sum = (a, b)=> a+b
  return sum(40, 10);
}
console.log(sumNumber());

//9.
function sumNumber() {
  //여기를 바꾸시오

    let addNumber = (a) => (b) => (c) => a + b + c;
    return addNumber(1)(2)(3); 
  
}
 console.log(sumNumber());

// 배열문제

let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

//map
let capital = names.map((name) => {
    return name.toUpperCase();
})

console.log(capital);

let firstName = names.map((name) => {
    return name.split(' ').slice(0, 1).join(' ');
})
let lastName =names.map((name) => {
    return name.split(' ').slice(1).join(' ');
})
console.log(firstName);
console.log(lastName);

let initialOnly = names.map((name) => {
    let splitName = name.split(' ');
    console.log(splitName);
    let initial = '';
    splitName.forEach((eachName) => {
        initial += eachName[0];
    })
    return initial;
})
console.log(initialOnly);

//filter
let a = names.filter((name) => {
    if (name.includes('a')){
        return name;
    }
})
console.log(a);

let doubleLetter =  names.filter((item) => {
    let splitName = item.split("");
    return splitName.some((letter, index) => letter == splitName[index + 1]);
  })

console.log(doubleLetter);

//some
let twentyName = names.some((name) => {
    if (name.length >= 20) {
        return name;
    }
})

console.log(twentyName);

let pName = names.some((name) => {
    let splitName = name.split(' ');
    splitName.pop();
    return splitName.some((eachName)=>eachName.toLocaleLowerCase().includes('p'));
    
})

console.log(pName);

//every
let everyTwentyName = names.every((name) => {
    if (name.length >= 20) {
        return name;
    }
}) 
console.log(everyTwentyName);

let aName = names.every((name) => {
    let splitName = name.split('');
    return splitName.every((eachName)=>eachName.includes('a'));
})
console.log(aName);

//find
let moreThanTwenty = names.find((name) => {
    if (name.length >= 20) {
        return name;
    }
})
console.log(moreThanTwenty);

let middleName = names.find((name) => {
    return name.split(' ').length >= 3;
})
console.log(middleName);

//findIndex
let moreThanTwentyIndex = names.findIndex((name) => {
    return name.length >= 20;
})
console.log(moreThanTwentyIndex);

let middleNameIndex = names.findIndex((name) => {
    return name.split(' ').length >= 3;
})
console.log(middleNameIndex);

