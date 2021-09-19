type StreetType ={
    title: string
}
type AddressType = {
    street: StreetType
    buildNumber: number
}
export type HouseType = {
    constrYear: number
    repaired: boolean
    address: AddressType
}

type GovernBuildType = {
    type: 'Hospital' | 'Fire Station'
    budget: number
    staffNumber: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernBuildType>
    citizensNumber: number
}
