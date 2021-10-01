import React from 'react';

type PropsType = {
    name: string
    age: number
    isMarried: boolean
    car: {model: string}
    food: Array<string>
}
export const ManComponent: React.FC<PropsType> = ({name, age, isMarried, ...props}) => {
    return (
        <div>
            <hr/>
            <div>Hello, {name}. Your age is: {age} and you are { isMarried ? 'married' : 'not married'}</div>
            <div>Your favourite food: {props.food}.</div>
            <div>Your car model is: {props.car.model}</div>
        </div>
    );
};

export default ManComponent;