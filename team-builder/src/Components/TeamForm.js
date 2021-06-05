import React from 'react'
import { useState } from 'react'

export default function TeamForm(props) {

    const { addMember } = props;

    const [member, setMember] = useState({name: "", email: "", role: ""})

    const submitHandler = (event) => {
        event.preventDefault();
        addMember(member);

        setMember({name: "", email: "", role: ""})
    }

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setMember({...member, [inputName]: inputValue})
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" name="name" value={member.name} onChange={handleChange}></input>
            </div>

            <div>
                <label>Email: </label>
                <input type="text" name="email" value={member.email} onChange={handleChange}></input>
            </div>

            <div>
                <label>Role: </label>
                <select name="role" value={member.role} onChange={handleChange}>
                    <option>Select House</option>
                    <option>Gryffindor</option>
                    <option>Hufflepuff</option>
                    <option>Ravenclaw</option>
                    <option>Slytherin</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    )

}