type LocalCityType = {
    name: string
    country: string
}
type AddressType = {
    city: LocalCityType
    street: string
}
type TechnologyType = {
    id: number
    title: string
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologyType>
}

const student: StudentType = {
    id: 1,
    name: 'Kate',
    age: 32,
    isActive: true,
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

type AddressTypeCarOwner = {
    country: string
    city: string
    street: string
    building: number
}
type OwnerType = {
    name: string
    address: AddressTypeCarOwner
}
type FactoryType = {
    title: string
    city: string
    country: string
}
type CarType = {
    id: string
    model: string
    color: string
    year: number
    factory: FactoryType
    owner: OwnerType
}

const car: CarType = {
    id: '54648rNpQ',
    model: 'Toyota',
    color: 'green',
    year: 2018,
    factory: {
        title: 'Toyota Auto',
        city: 'Nagasaki',
        country: 'Japan'
    },
    owner: {
      name: 'Sergey Malyshev',
      address: {
          country: 'Russia',
          city: 'Moscow',
          street: 'Lebedev',
          building: 25
      }
    }

}

console.log(student.name)
console.log(student.address.city.name)
console.log(student.technologies[2].title)

console.log(car.factory.title)
console.log(car.owner.address.street)

