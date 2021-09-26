import {StudentType} from "../02_objects/02";

const sum = (a:number, b:number) => {
    return a + b
}
const res = sum(3, sum(3,4))
console.log(res)

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
        })
}

export const changeActive = (st: StudentType) => {
    st.isActive = true
}

export const checkStudentCity = ( st: StudentType, cityName: string) => {
     return st.address.city.name === cityName ? 'correct' : 'try again'
}