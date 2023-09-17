import { useEffect, useState } from 'react'
import './Select.css'
import Selector from '../selector/Selector';
import Course from '../Course/Course';


function Select({ handleCourseName }) {
    const [selectors, setSelectors] = useState([]);




    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setSelectors(data))
    }, [])



    return (
        <div className='md:flex  '>
            <div className='md:w-2/3 grid grid-cols-3  gap-10'>

                {
                    selectors.map(selector =>
                        <Selector handleCourseName={handleCourseName}
                            key={selector.id}
                            selector={selector}>

                        </Selector>)
                }


            </div >
            <Course></Course>

        </div>
    )
}




export default Select