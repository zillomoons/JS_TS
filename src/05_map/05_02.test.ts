import {CityType} from "../02_objects/02_02";
import {createGreetingMessage, getStreetTitlesOfCityHouses, getStreetTitlesOfGovernBuildings} from "./05";

let city: CityType

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
test('list of street titles of governments buildings', () => {
    let streets = getStreetTitlesOfGovernBuildings(city.governmentBuildings);

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('Central')
    expect(streets[1]).toBe('South')
})
test('list of street titles of city houses', () => {
    let streets = getStreetTitlesOfCityHouses(city.houses);

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White')
    expect(streets[1]).toBe('Happy')
    expect(streets[2]).toBe('Happy')
})
test('create greeting message for streets',
    () => {
        let greetings = createGreetingMessage(city.houses)

        expect(greetings.length).toBe(3)
        expect(greetings[0]).toBe('Hello people of White street!')
        expect(greetings[1]).toBe('Hello people of Happy street!')
        expect(greetings[2]).toBe('Hello people of Happy street!')

    })