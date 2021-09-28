import {GovernBuildType, HouseType} from "../02_objects/02_02";

export type ManType = {
    name: string
    age: number
}
const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]
const dimychTransformator = (man: ManType) => ({
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
})

const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexander', lastName: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    },
]
export const devs2 = people.map(m => dimychTransformator(m))

export const devs3 = people.map( m => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: m.name.split(' ')[0],
    lastName: m.name.split(' ')[1]
}))

export const greetingPeople = people.map( m => `Welcome ${m.name.split(' ')[0]} to IT incubator!`)

export const CreateGreetingMessage = (people: Array<ManType>) => {
    return people.map(m => `Hello ${m.name.split(' ')[0]}. Welcome to IT incubator!`)
}
export const getStreetTitlesOfGovernBuildings = (governBuildings: Array<GovernBuildType>) =>
    governBuildings.map( governBuild => governBuild.address.street.title)

export const getStreetTitlesOfCityHouses = (houses: Array<HouseType>) =>
    houses.map(house => house.address.street.title)

export const createGreetingMessage = (houses: Array<HouseType>) =>
    houses.map(h =>
        `Hello people of ${h.address.street.title} street!`)

