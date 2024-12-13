// 1
const name = 'Никитос'; 
const age = 19; 

if (age >= 18) {
    console.log("Вы совершеннолетний");
} else {
    console.log("Вы несовершеннолетний");
}

// 2
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// 3
const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

lectures.push('Тема 4'); 
practices.unshift('Практика 0'); 

lectures.forEach(lecture => console.log(lecture));
practices.forEach(practice => console.log(practice));

function printArray(array) {
    console.log(array.join(', '));
}

printArray(lectures);
printArray(practices);

// 4

function filterLecturesStartingWithO(topics) {
    return topics.filter(topic => topic.startsWith('О'));
}

const lectures = ['Общество', '2', 'ОБЖ'];

const filteredLectures = filterLecturesStartingWithO(lectures);
console.log(filteredLectures);