import {StudentType} from "../02_objects/02";
import {addSkill, changeActive, checkStudentCity} from "./03";

let student: StudentType;

beforeEach(() => {
        student = {
            id: 1,
            name: 'Kate',
            age: 32,
            isActive: false,
            address: {
                city: {
                    name: 'Minsk',
                    country: 'Belarus'
                },
                street: 'Surganova'
            },
            technologies: [
                {
                    id: 1,
                    title: 'HTML'
                },
                {
                    id: 2,
                    title: 'CSS'
                },
                {
                    id: 3,
                    title: 'JS'
                },
                {
                    id: 4,
                    title: 'React'
                },
            ]
        }
    }
)

test('new skill should be added to student', () => {
    expect(student.technologies.length).toBe(4)

    addSkill(student, 'Redux')
    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe('Redux')
    expect(student.technologies[4].id).toBeDefined()
})

test('student should become active', () => {
    expect(student.isActive).toBe(false)

    changeActive(student)

    expect(student.isActive).toBe(true)
})

test('does student lives in this city?', () => {
    let result1 = checkStudentCity(student, 'Moscow')
    let result2 = checkStudentCity(student, 'Minsk')

    expect(result1).toBe('try again')
    expect(result2).toBe('correct')
})