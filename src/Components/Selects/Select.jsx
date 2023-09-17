import { useEffect, useState } from 'react'
import './Select.css'
import Selector from '../selector/Selector';
import Course from '../Course/Course';
import PropTypes from 'prop-types'


function Select({ handleCourseName, handleSelect }) {
    const [selectors, setSelectors] = useState([]);




    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setSelectors(data))
    }, [])



    return (
        <div className='md:flex  '>
            <div className=' grid grid-cols-3  gap-10'>

                {
                    selectors.map(selector =>
                        <Selector handleCourseName={handleCourseName}
                            // handleSelect={handleSelect}
                            key={selector.id}
                            selector={selector}>

                        </Selector>)
                }


            </div >


        </div>
    )
}

Select.propTypes = {
    handleCourseName: PropTypes.func,
    // handleSelect: PropTypes.func
}



export default Select