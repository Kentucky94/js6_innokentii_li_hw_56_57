const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

const front = tasks.filter(task => task.category === 'Frontend');
const frontTime = front.reduce((accum, currentTask) => accum + currentTask.timeSpent, 0);

const bug = tasks.filter(task => task.type === 'bug');
const bugTime = bug.reduce((accum, currentTask) => accum + currentTask.timeSpent, 0);

const UI = tasks.filter(task => task.title.includes('UI'));
const UITime = UI.reduce(accum => accum + 1, 0);

const tasksCount = tasks.reduce((accum, currentTask) => {
    if(currentTask.category === 'Frontend'){
        accum.FrontEnd++;
    }else{
        accum.BackEnd++;
    }
    return accum
}, {FrontEnd: 0, BackEnd: 0});

const over4Array = tasks.filter(task => task.timeSpent > 4);
const over4ArrayFiltered = over4Array.map(task => {return {title: task.title, category: task.category}});

console.log(
    `
    Общее количество времени, затраченное на работу над задачами из категории 'Frontend': ${frontTime} \n
    Общее количество времени, затраченное на работу над задачами типа 'bug': ${bugTime} \n
    Количество задач, имеющих в названии слово "UI": ${UITime} \n
    Получите количество задач каждой категории в объект
    `, tasksCount, '\n',
    `Массив задач с затраченным временем больше 4 часов. В массиве должны быть объекты только с ключами title и category.`, '\n',
    over4ArrayFiltered
);