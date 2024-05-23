import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

export default function AddBlood() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [bloodGroup, setBloodGrp] = useState('select-an-option')
    const [contact, setContact] = useState('')

    const nameRef = useRef()
    useEffect(() => { nameRef.current.focus() }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && age && city && bloodGroup && contact !== '') {
            axios.post(`http://localhost:3001/blood/addblood`, {
                name, age, city, bloodGroup, contact
            })
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        setName('')
        setAge('')
        setCity('')
        setBloodGrp('')
        setContact('')
    }
    else alert('All fields are required')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type='text' style={{ textTransform: 'capitalize' }} ref={nameRef} value={name} onChange={(e) => setName(e.target.value)}></input><br />
                <label>Age</label><br />
                <input type='number' value={age} onChange={(e) => setAge(e.target.value)}></input><br />
                <label>City</label><br />
                <input type='text' style={{ textTransform: 'capitalize' }} value={city} onChange={(e) => setCity(e.target.value)}></input><br />
                <label>Blood Group</label><br />
                <select value={bloodGroup} onChange={(e) => setBloodGrp(e.target.value)}>
                    <option value='select-an-option'>Select an option</option>
                    <option value='a+'>A+</option>
                    <option value='a-'>A-</option>
                    <option value='b+'>B+</option>
                    <option value='b-'>B-</option>
                    <option value='ab+'>AB+</option>
                    <option value='ab-'>AB-</option>
                    <option value='o+'>O+</option>
                    <option value='o-'>O-</option>
                </select><br />
                <label>Contact</label><br />
                <input type='text' value={contact} onChange={(e) => setContact(e.target.value)}></input><br />
                <button type='submit'>Add Blood</button>
            </form>
        </div>
    )
}
