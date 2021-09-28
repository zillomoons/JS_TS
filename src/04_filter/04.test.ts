import {oldManOnly} from "./04";

test('should take men older than 90', () => {
    const ages = [10, 20, 22, 1, 100, 90, 14]

    expect(oldManOnly(ages).length).toBe(1)
    expect(oldManOnly(ages)[0]).toBe(100)
})
test('filter only completed tasks', () => {
    const tasks = [
        { id: 1, title: 'CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'React', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
    ]
    const compeletedTasks = tasks.filter( task => task.isDone)
    expect(compeletedTasks.length).toBe(2)
    expect(compeletedTasks[0].id).toBe(1)
    expect(compeletedTasks[1].title).toBe('JS')
})