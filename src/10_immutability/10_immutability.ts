export type UserType= {
    name: string
    hair: number
    address: {country: string, city: string}
}
export type LaptopType = {
    name: string
    RAM: number
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserWithLaptopType & {
    books: string[]
}
export function haircut(u: UserType, length: number){
    const copy = {...u, hair: u.hair - length}
    //copy.hair = copy.hair - length
    return copy;
}
export function moveUser(u: UserWithLaptopType, city: string){
    return {...u, address: {...u.address, city: city}};
}
export function upgradeLaptop(u: UserWithLaptopType, laptopName: string){
    return {...u, laptop: {...u.laptop, name: laptopName}}
}
export function migrateUser(u: UserWithBooksType, country: string, city: string){
    return {...u, address: {...u.address, country: country, city: city}};
}
export function addBooks(u: UserWithBooksType, newBooks: string[]){
    return {...u, books: [...u.books].concat(newBooks) };
}
export function changeBooks(u: UserWithBooksType, oldBook: string, newBook: string){
    return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
}

export type SkillsLevelType = number[]
export const skillsLevel: SkillsLevelType = [80, 90, 100, 70, 55]
export function upgradeSkill(skills: SkillsLevelType, oldLevel: number, newLevel: number){
    return skills.map(s => s === oldLevel ? newLevel : s )
}

export const removeBook = (u: UserWithBooksType, book: string) => ({...u, books: u.books.filter(b => b !== book)})

export type CompanyType = { id: number, title: string }
export type WithCompanies = {
    companies: CompanyType[]
}

export const addCompany = (u: UserWithLaptopType & WithCompanies, id: number, companyName: string) => {
    let newCompany: CompanyType = {id: id, title: companyName}
    return {...u, companies: [...u.companies, newCompany]}
}

export const updateCompany = (u: UserWithLaptopType & WithCompanies,
                              id: number, updatedName: string) => ({...u,
    companies: u.companies.map(c => c.id === id? {...c, title: updatedName} : c) })

export type CompaniesType = { [key: string] : CompanyType[] }

export const updateCompany2 = (companies: CompaniesType, userName: string,
                               companyID: number, newTitle: string) => {
    return {...companies, [userName]: companies[userName]
            .map(c => c.id === companyID
            ? {...c, title: newTitle}
            : c ) }
}