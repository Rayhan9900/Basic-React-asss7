import PropTypes from 'prop-types'
import Select from '../Selects/Select'
import Selector from '../selector/Selector'

function Course({ courseName }) {


    const total = courseName.reduce((sum, current) => sum + current.credit, 0)

    return (


        <div className="underline">
            <h2 className="text-2xl">Credit Hour Remaining:</h2>

            <h2 className="mt-2 font-bold ">Course Name: {courseName.name}</h2>


            <h4>Total Credit Hour:{total}{courseName.credit}</h4>


            <h4>Total Price : </h4>


        </div>

    )
}
Course.propTypes = {

    courseName: PropTypes.func

}

export default Course