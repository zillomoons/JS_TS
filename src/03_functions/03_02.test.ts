import {CityType} from "../02_objects/02_02";
import {
    addMoneyToBudget,
    createGreeting,
    demolishHousesOnTheStreet,
    repairHouse,
    toFireStaff,
    toHireStaff
} from "./03_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                constrYear: 2012,
                repaired: false,
                address: {street: {title: 'White'}, buildNumber: 100}

            },
            {
                id: 2,
                constrYear: 2008,
                repaired: false,
                address: {street: {title: 'Happy'}, buildNumber: 100}
            },
            {
                id: 3,
                constrYear: 2020,
                repaired: false,
                address: {street: {title: 'Happy'},buildNumber: 101}
            }
        ],
        governmentBuildings: [
            {
                type: 'Hospital',
                budget: 200000,
                staffNumber: 200,
                address: {street: {title: 'Central'}, buildNumber: 21}
            },
            {
                type: 'Fire Station',
                budget: 50000,
                staffNumber: 100,
                address: {street: {title: 'South'}, buildNumber: 21}
            },
        ],
        citizensNumber: 100000
    }
})

test('Budget for Hospital should be changed', () => {
    addMoneyToBudget(city.governmentBuildings, 'Hospital', 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(50000)

})
test('Budget for Fire Station should be changed', () => {
    addMoneyToBudget(city.governmentBuildings, 'Fire Station', -5000);

    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(45000)

})
test.skip('Houses should be demolished', () => {
    demolishHousesOnTheStreet(city.houses, 'Happy')
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})
test('House should be repaired', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})
test('quantity of staff should increase ', () => {
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffNumber).toBe(180)

})
test('quantity of staff should decrease', () => {
    toHireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffNumber).toBe(220)

})
test('Greeting message should be correct for city', () => {
    let greeting = createGreeting(city.title)

    expect(greeting).toBe('Hello, New York')
})
