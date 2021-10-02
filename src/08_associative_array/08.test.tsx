export type UsersType = {
    [key: string]: { id: number, name: string }
};
let users: UsersType;
beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Kate'},
        '121': {id: 121, name: 'Ann'},
        '454131': {id: 454131, name: 'Peter'},
        '41': {id: 41, name: 'Andy'},
        '15': {id: 15, name: 'Raven'},
    };
})

test('should select corresponding user from obj', () => {
    users['101'].name = 'Catherine'

    expect(users['101'].name).toBe('Catherine');

})
test('should delete corresponding user from obj', () => {
    delete users['41']

    expect(users['41']).toBeUndefined();

})