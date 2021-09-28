import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) =>{
        alert(event.currentTarget.name)
    }
    const onNameChanged = () => {
        console.log('Name has changed')
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('Age has changed:' + event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log('Focus has been lost')
    }

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input type="number" onChange={onAgeChanged}/>
        <button onClick={deleteUser} name={'delete'}>x</button>
    </div>
}
