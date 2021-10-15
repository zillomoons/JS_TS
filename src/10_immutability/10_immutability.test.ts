import {
    addBooks, addCompany, changeBooks, CompaniesType,
    haircut,
    migrateUser,
    moveUser, removeBook, SkillsLevelType, updateCompany, updateCompany2,
    upgradeLaptop, upgradeSkill,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompanies
} from "./10_immutability";

test('reference type test', () =>{
    let user: UserType ={
        name: 'Dolzhit',
        hair: 52,
        address: { country: 'Russia', city: 'Ulan-Ude' },
    }
    const prettyUser = haircut(user, 15)
    expect(user.hair).toBe(52)
    expect(prettyUser.hair).toBe(37)
    expect(prettyUser.address).toBe(user.address)
})

test('change address', ()=> {
    let user: UserWithLaptopType ={
        name: 'Dolzhit',
        hair: 52,
        address: { country: 'Russia', city: 'Ulan-Ude' },
        laptop: {name: 'Thinkbook', RAM: 16}
    }
    const movedUser = moveUser(user, 'Moscow')

    expect(movedUser.address.city).toBe('Moscow')
    expect(movedUser.address.country).toBe('Russia')
    expect(user.address.city).toBe('Ulan-Ude')
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
})
test('upgrade laptop', ()=> {
    let user: UserWithLaptopType ={
        name: 'Dolzhit',
        hair: 52,
        address: { country: 'Russia', city: 'Ulan-Ude' },
        laptop: {name: 'Thinkbook', RAM: 16}
    }
    const userWithMacbook = upgradeLaptop(user, 'Macbook')

    expect(user).not.toBe(userWithMacbook)
    expect(userWithMacbook.laptop.name).toBe('Macbook')
    expect(userWithMacbook.address.country).toBe(user.address.country)
    expect(user.laptop.name).toBe('Thinkbook')
    expect(userWithMacbook.laptop.RAM).toBe(16)
})
test('array immutability', ()=>{
    let user: UserWithBooksType = {
        name: 'Dolzhit',
        hair: 52,
        address: { country: 'Russia', city: 'Ulan-Ude' },
        laptop: {name: 'Thinkbook', RAM: 16},
        books: ['CSS', 'HTML', 'JS'],
    }
    const migrantUser = migrateUser(user, 'Estonia', 'Tallin')
    const userWithNewBook = addBooks(user, ['Refactor', 'rest api'])

    expect(migrantUser.books).toBe(user.books)
    expect(migrantUser).not.toBe(user)
    expect(migrantUser.address.city).toBe('Tallin')

    expect(userWithNewBook.books.length).toBe(5)
    expect(userWithNewBook.address.city).toBe('Ulan-Ude')
    expect(userWithNewBook.laptop.name).toBe('Thinkbook')
    expect(userWithNewBook.books[3]).toBe('Refactor')
    expect(userWithNewBook.books[4]).toBe('rest api')
    expect(user.books.length).toBe(3)

})
test('change books', ()=> {
    let user: UserWithBooksType = {
        name: 'Dolzhit',
        hair: 52,
        address: { country: 'Russia', city: 'Ulan-Ude' },
        laptop: {name: 'Thinkbook', RAM: 16},
        books: ['CSS', 'HTML', 'JS'],
    }
    const userWithUpdatedBooks = changeBooks(user, 'JS', 'TS')

    expect(userWithUpdatedBooks.books[2]).toBe('TS')
    expect(userWithUpdatedBooks.books.length).toBe(3)
    expect(user.books[2]).toBe('JS')
    expect(user.books.length).toBe(3)
})
test('upgrade skills', ()=> {
    let skillsLevel: SkillsLevelType = [80, 90, 100, 70, 55]

    let newLevelSkills = upgradeSkill(skillsLevel, 80, 85)

    expect(newLevelSkills[0]).toBe(85)
    expect(skillsLevel[0]).toBe(80)

})
test('remove book', ()=> {
    let user: UserWithBooksType = {
        name: 'Dolzhit',
        hair: 52,
        address: { country: 'Russia', city: 'Ulan-Ude' },
        laptop: {name: 'Thinkbook', RAM: 16},
        books: ['CSS', 'HTML', 'JS'],
    }
    const userWithUpdatedBooks = removeBook(user, 'JS')

    expect(userWithUpdatedBooks.books.length).toBe(2)
    expect(user.books[2]).toBe('JS')
    expect(user.books.length).toBe(3)
})
test( 'check companies', ()=> {
    let user: UserWithLaptopType & WithCompanies ={
        name: 'Dolzhit',
        hair: 52,
        address: { country: 'Russia', city: 'Ulan-Ude' },
        laptop: {name: 'Thinkbook', RAM: 16},
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-incubator'}
        ]
    }

    const userWithNewJob = addCompany(user, 3, 'Google')
    const userUpdatedCompanies = updateCompany(user, 1, 'LinkedIn')

    expect(userWithNewJob.companies.length).toBe(3)
    expect(userWithNewJob.companies[2].title).toBe('Google')
    expect(user.companies.length).toBe(2)

    expect(user).not.toBe(userUpdatedCompanies)
    expect(userUpdatedCompanies.companies[0].title).toBe('LinkedIn')
    expect(userUpdatedCompanies.companies.length).toBe(2)
    expect(userUpdatedCompanies.address).toBe(user.address)

})
test( 'update companies', ()=> {

    let companies: CompaniesType = {
        'Kate': [ {id: 1, title: 'Brother'}, {id: 2, title: 'Harman'}],
        'Alex': [ {id: 1, title: 'LinkedIn'}, {id: 2, title: 'Google'}],
    }
    let copy: CompaniesType = updateCompany2(companies, 'Alex', 2, 'Amazon')

    expect(copy['Alex']).not.toBe(companies['Alex'])
    expect(copy['Kate']).toBe(companies['Kate'])
    expect(copy['Alex'][1].title).toBe('Amazon')

})
