import {CreateGreetingMessage, ManType} from "./05";

let people: Array<ManType> = []
beforeEach( () => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})
test('should get array of greeting messages', () => {
    const greetingPeople = CreateGreetingMessage(people)

    expect(greetingPeople.length).toBe(3)
    expect(greetingPeople[0]).toBe('Hello Andrew. Welcome to IT incubator!')
    expect(greetingPeople[1]).toBe('Hello Alexander. Welcome to IT incubator!')
    expect(greetingPeople[2]).toBe('Hello Dmitry. Welcome to IT incubator!')

})