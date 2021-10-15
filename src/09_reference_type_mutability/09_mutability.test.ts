import {increaseAge, UserType} from "./09_mutability";

test('reference type test', ()=> {
    let user: UserType = {
        name: 'Dolzhit',
        age: 35,
        address: {country: 'Russia'}
    }

    increaseAge(user);
    expect(user.age).toBe(36)

    const superman = user;
    superman.age = 1000;
    expect(user.age).toBe(1000)
})

test('array reference test', ()=> {
    let users = [
        {name: 'Dolzhit', age: 35},
        {name: 'Zorik', age: 39},
    ]
    let admins = users;
    admins.push({name: 'Bandugan', age: 10})
    expect(users[2].age).toBe(10)
    expect(users[2]).toEqual({name: 'Bandugan', age: 10})

})
test('value type test', ()=>{
    let usersCount = 100;
    let adminsCount = usersCount;
    adminsCount = 101;

    expect(usersCount).toBe(100)
})
test('reference type test2', ()=> {
    let user: UserType = {
        name: 'Dolzhit',
        age: 35,
        address: {country: 'Russia'}
    }

    let user2: UserType = {
        name: 'Zorik',
        age: 39,
        address: user.address
    }
    const admins = [user, user2]

    admins[1].name = 'Zorikto'

    user2.address.country = 'kanary'
    expect(user.address.country).toBe('kanary')
    expect(user2.name).toBe('Zorikto')
    expect(admins[1].name).toBe('Zorikto')

})

test('sort array test', ()=>{
    const letters = ['c', 'd', 'x', 'y', 'm']
    passportist(letters);
    expect(letters).toEqual(['c', 'd', 'x', 'y', 'm'])
})
function passportist (letters: any) {
    const copy = [...letters]
    copy.sort()
}