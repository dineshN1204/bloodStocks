import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Blood() {

    const [selectBlood, setSelectBlood] = useState('')
    const [bloodData, setBloodData] = useState([])
    const [filteredBlood,setFilteredBlood] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/blood/get`)
            .then(res => {
                setBloodData(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const handleSelectBlood = (e)=>{
        const filtered = bloodData.filter(x => x.bloodGroup === selectBlood)
        setFilteredBlood(filtered)
        switch(selectBlood){
            case 'a+': setSelectBlood('a+')
            break;
            case 'a-': setSelectBlood('a-')
            break;
            case 'b+': setSelectBlood('b+')
            break;
            case 'b-': setSelectBlood('b-')
            break;
            case 'ab+': setSelectBlood('ab+')
            break;
            case 'ab-': setSelectBlood('ab-')
            break;
            case 'o+': setSelectBlood('o+')
            break;
            case 'o-': setSelectBlood('o-')
            break;
            default : return selectBlood
        }
    }
    return (
        <div className='blood-select-div'>
            <select className='blood-select' value={selectBlood} onChange={(e)=>setSelectBlood(e.target.value)}>
                <option value='select-an-option'>Select an option</option>
                <option value='a+'>A+</option>
                <option value='a-'>A-</option>
                <option value='b+'>B+</option>
                <option value='b-'>B-</option>
                <option value='ab+'>AB+</option>
                <option value='ab-'>AB-</option>
                <option value='o+'>O+</option>
                <option value='o-'>O-</option>
            </select><br/>
            <button onClick={handleSelectBlood}>Get Details</button>
            
            
            <div style={{display:'flex'}}>
            {filteredBlood.map(e=>(
                <ul key={e.id} style={{margin:'50px'}}>
                    <li style={{listStyleType:'none'}}>Name:</li>
                    <li style={{listStyleType:'none'}}>{e.name}</li>
                    <li style={{listStyleType:'none'}}>Age:</li>
                    <li style={{listStyleType:'none'}}>{e.age}</li>
                    <li style={{listStyleType:'none'}}>City:</li>
                    <li style={{listStyleType:'none'}}>{e.city}</li>
                    <li style={{listStyleType:'none'}}>Blood Group:</li>
                    <li style={{listStyleType:'none'}}>{e.bloodGroup}</li>
                    <li style={{listStyleType:'none'}}>Contact:</li>
                    <li style={{listStyleType:'none'}}>{e.contact}</li><br/><br/>
                </ul>
            ))}
            </div>
        </div>
    )
}
