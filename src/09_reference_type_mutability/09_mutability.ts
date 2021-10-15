export type UserType = { name: string, age: number, address: { country: string}}

export let user = {
    name: 'Dolzhit',
    age: 35
}
export function increaseAge (user: UserType){
    user.age ++;
}