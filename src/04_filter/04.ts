import {CityType, GovernBuildType, HouseType} from "../02_objects/02_02";

const predicate = (age: number) => {
    return age > 90
}
export const oldManOnly = (ages: number[]) => {
    return ages.filter(predicate)
}
export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}
export const getHousesOnTheStreet = (houses: Array<HouseType>, street: string) => {
     return houses.filter(h => h.address.street.title === street)
}
export const getGovernBuildWithStaffNumberGreaterThen = (governmentBuildings: Array<GovernBuildType>, number: number) => {
    return governmentBuildings.filter(building => building.staffNumber > number)
}