import PropTypes from 'prop-types'
import Select from '../Selects/Select'

function Course({ courseName, }) {


    const total = courseName.reduce((sum, current) => sum + current.credit, 0)

    const price = courseName.reduce((total, current,) =>
        total + current.price, 0)

    return (

        <div className=" underline">
            <h2 className="text-xl text-blue-500">Credit Hour Remaining:{total}</h2>

            <div>
                <h2 className="mt-2 font-bold ">Course Name:</h2>
                {
                    courseName.map((Select, index) => (
                        <ol key={Select.id}>
                            {index + 1} {Select.name}
                        </ol>
                    ))
                }
            </div>

            <h4 className='mt-2'>Total Credit Hour:{total}{courseName.credit}</h4>

            <h4>Total Price:{price}{courseName.price} </h4>

        </div>

    )
}
Course.propTypes = {

    courseName: PropTypes.func

}

export default Course