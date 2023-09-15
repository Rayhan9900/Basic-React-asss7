import { useEffect, useState } from 'react'
import './Select.css'
import Course from '../Course/Course';

function Select() {
    const [selectors, setSelectors] = useState([]);
    const [allSelect, setAllSelet] = useState([])
    const [totalHour, setTotalHour] = useState(0)




    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setSelectors(data))
    }, [])

    const handleAllSelect = (selector) => {
        setAllSelet([...allSelect, selector])
    }

    const handleTotal = (credit) => {
        const newCreadit = totalHour + credit;
        setTotalHour(newCreadit)

    }

    return (
        <div className=' p-48 mr-6 gap-4  bg-white flex '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ' >

                {
                    selectors.map((selector) => (
                        <div key={selector.id} >
                            <div className='w-96 h-36'>
                                <img className="  rounded-xl" src={selector.cover} alt="" />
                            </div>

                            <h2 className="text-2xl mt-4">{selector.name}</h2>
                            <p className='text-2xl'><small>{selector.title}</small></p>

                            <div className='mt-4 mb-3 flex gap-16'>
                                <p> price:{selector.price}</p>
                                <p>credit:{selector.credit}hr</p>
                            </div>
                            <div className=' text-center p-2 mr-8 text-2xl bg-blue-500 text-white rounded-2xl'>
                                <button onClick={() => handleAllSelect(selector)} >Select</button>
                            </div>
                        </div>
                    ))
                }

                <Course allSelect={allSelect}
                ></Course>

            </div>
        </div>
    )
}




export default Select