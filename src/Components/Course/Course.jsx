import Select from "../Select/Select"


function Course({ allSelect }) {



    return (

        <div className="  underline  ">
            <h2  >Credit Hour Remaining </h2>
            <h2 className="font-bold ">Course Name</h2>
            {
                allSelect.map((selector, index) => (
                    <ul>
                        <li>{index + 1}{selector.name}</li>
                    </ul>
                ))
            }
            <div>
                <h4>Total Credit Hour : {allSelect.length} </h4>



                <h4>Total Price :</h4>
            </div>
        </div>




    )
}

export default Course