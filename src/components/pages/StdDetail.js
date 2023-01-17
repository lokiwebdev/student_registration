import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const StdDetail = () => {
    const { stdid } = useParams();

    const [stdData, setStdData] = useState({});

    useEffect(() => {
        fetch("http://localhost:7000/student/" + stdid).then((res) => {
            return res.json();
        }).then((resp) => {
            setStdData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const navigate = useNavigate;

    const handlesubmit = () => {

        navigate('/viewStudents');
    }
    return (
        <>
            <div className="row col-md-12">

                <div className="row text-center">
                    <div className="col">
                        <p className="h1 fw-bold text-primary" >
                            Student Details
                        </p>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quidem voluptas officia officiis vero quibusdam ab maiores,
                            quasi tenetur corporis sapiente veniam, ipsa expedita alias
                            amet unde eum quas laboriosam voluptate provident.
                        </p>
                    </div>
                </div>

                <div className="col-md-5 m-4 ">
                    <img className="studentEdit-img" src={stdData.photo} alt="" />
                </div>

                <form className="form col-md-5 m-4 container " onSubmit={handlesubmit}>
                    <h1 className="mb-5"> Student Details</h1>

                    {/* <div>
                        <h2> Name : {stdData.fname} {stdData.lname}</h2>
                        <h2>Father Name : {stdData.fathern}</h2>
                        <h2>Email : {stdData.email}</h2>
                        <h2>Address : {stdData.address}</h2>
                        <h2>Mobile No : {stdData.phone}</h2>
                        <h2>Gender : {stdData.gender}</h2>
                        <h2>D.O.B : {stdData.dob}</h2>
                        <h2>Country : {stdData.country}</h2>
                    </div> */}

                    <div className="row align-items-center ">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        Name : <span className="fw-bold">{stdData.fname} {stdData.lname}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Father's Name : <span className="fw-bold">{stdData.fathern}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Email : <span className="fw-bold">{stdData.email}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Addresss : <span className="fw-bold">{stdData.address}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Mobile : <span className="fw-bold">{stdData.phone}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Gender : <span className="fw-bold">{stdData.gender}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        D.O.B : <span className="fw-bold">{stdData.dob}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Country : <span className="fw-bold">{stdData.country}</span>
                      </li>
                    </ul>
                  </div>



                    {/* <div className="mb-1 ">
                        <label className="px-3 h5">Email*:</label>
                        <h2>{stdData.email}</h2>
                    </div>
                    <div className="mt-3">
                        <label className="px-1 h5">Address*</label>
                        <h2>{stdData.address}</h2>
                    </div> */}

                    {/* <button className="btnA mx-2 my-4 " type="submit">
                            Back
                        </button> */}
                    <div className="divbtn p-4">
                        <Link to={"/viewStudents"} className="btnA btn-success mt-2">Back</Link>
                    </div>

                </form>

            </div>
        </>
    );
}

export default StdDetail;