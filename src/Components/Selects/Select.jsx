import { useEffect, useState } from 'react'
import './Select.css'
import Selector from '../selector/Selector';


function Select() {
    const [selectors, setSelectors] = useState([]);


    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setSelectors(data))
    }, [])

    return (
        <div className='md:w-2/3'>

            {
                selectors.map(selector => <Selector key={selector.id} selector={selector}></Selector>)
            }
        </div >
    )
}




export default Select