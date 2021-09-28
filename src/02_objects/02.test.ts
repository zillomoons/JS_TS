import {CityType} from "./02_02";

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

test('test city should contain 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].constrYear).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.buildNumber).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White');

    expect(city.houses[1].constrYear).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.buildNumber).toBe(100);
    expect(city.houses[1].address.street.title).toBe('Happy');

    expect(city.houses[2].constrYear).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.buildNumber).toBe(101);
    expect(city.houses[2].address.street.title).toBe('Happy');

})

test('test city should contain hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('Hospital')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffNumber).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central')

    expect(city.governmentBuildings[1].type).toBe('Fire Station')
    expect(city.governmentBuildings[1].budget).toBe(50000)
    expect(city.governmentBuildings[1].staffNumber).toBe(100)
    expect(city.governmentBuildings[1].address.street.title).toBe('South')
})