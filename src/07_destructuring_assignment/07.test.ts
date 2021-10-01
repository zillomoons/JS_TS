export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}> // можно создать отдельный type LessonType = { title: string}
    address: { street: { title: string} }
}

let props: ManType;
beforeEach(()=> {
    props = {
        name: 'Dolzhit',
        age: 35,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Trudovaya'
            }
        }
    }
})


test('destructure1', () => {

    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(35)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Trudovaya')
})
test('destructure2', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ...restLessons] = props.lessons

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');
    expect(restLessons.length).toBe(2);
    expect(restLessons[0].title).toBe('2')

})