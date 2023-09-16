import PropTypes from 'prop-types';

function Selector({ selector }) {
    const { title, cover, name, credit } = selector
    return (
        < div className=' mb-20 '>
            <img className='w-80 mb-4' src={cover} alt="" />

            <h2 className='text-3xl mb-2'>
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
            <div className='mt-6 text-3xl'>
                <button>select</button>
            </div>

        </div>
    )
}

Selector.propTypes = {
    selector: PropTypes.object.isRequired
}
export default Selector





