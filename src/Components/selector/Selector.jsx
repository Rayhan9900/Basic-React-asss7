import PropTypes from 'prop-types';


function Selector({ selector, handleCourseName, handleSelect }) {
    const { title, cover, name, credit } = selector



    return (
        <div className=' w-80 h-[402px]  mb-8 p-4  '>
            <img className='w-96 mb-4' src={cover} alt="" />

            <h2 className='text-xl mb-2'>
                {name}
            </h2>
            <h4 className='text-xl mb-2 '>
                <small>{title}</small>
            </h4>
            <div className='flex justify-between'>
                <h3>price:{selector.price}</h3>
                <div>
                    <h3>credit:{selector.credit}hr</h3>
                </div>
            </div>

            <div className='mt-4 text-3xl text-white bg-blue-500 text-center rounded-3xl '>
                <button
                    onClick={() => handleCourseName(selector)}
                >select</button>
            </div>


        </div>
    )
}

Selector.propTypes = {
    selector: PropTypes.object.isRequired,
    handleCourseName: PropTypes.func
}
export default Selector





