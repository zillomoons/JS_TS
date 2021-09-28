import {CityType, HouseType} from "../02_objects/02_02";
import {GovernBuildType} from "../02_objects/02_02"


export const addMoneyToBudget = (governBuild: Array<GovernBuildType>, type: string, sum: number) => {
    return governBuild[0].type === type ? governBuild[0].budget += sum : governBuild[1].budget += sum
}



export const repairHouse = (house: HouseType) => {
    house.repaired = true
}
export const toFireStaff = (governBuildType: GovernBuildType, staff: number) => {
    governBuildType.staffNumber -= staff
}
export const toHireStaff = (governBuildType: GovernBuildType, staff: number) => {
    governBuildType.staffNumber += staff
}
export const createGreeting = (cityName: string) => {
    return 'Hello, ' + cityName
}