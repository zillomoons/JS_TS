import {CityType} from "../02_objects/02_02";
import {demolishHousesOnTheStreet, getGovernBuildWithStaffNumberGreaterThen, getHousesOnTheStreet} from "./04";

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

test('Houses should be demolished', () => {
    demolishHousesOnTheStreet(city, 'Happy')
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})
test('list of streets titles of houses', () => {
    let happyHouses = getHousesOnTheStreet(city.houses, 'Happy');
    let whiteHouses = getHousesOnTheStreet(city.houses, 'White');

    expect(happyHouses.length).toBe(2);
    expect(whiteHouses.length).toBe(1);
})
test('buildings with correct staff number', () => {
    let buildings = getGovernBuildWithStaffNumberGreaterThen(city.governmentBuildings, 99)

    expect(buildings.length).toBe(2)
    expect(buildings[1].type).toBe('Fire Station')

})

