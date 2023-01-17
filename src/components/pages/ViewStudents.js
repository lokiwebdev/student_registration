import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ViewStudents = () => {
    const [stddata, stddatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/student/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/student/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:7000/student/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:7000/student").then((res) => {
            return res.json();
        }).then((resp) => {
            stddatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    // search students
    let searchStudents = (e) => {
        e.preventDefault();
        alert(
            "searchStudents"
        );

    };

    return (
        <div className="container">

            <section className="contact-search ">
                <div className="container">
                    <div className="grid">

                        <div className="row text-center">
                            <div className="col">
                                <p className="h1 fw-bold text-primary" >
                                    Student Manager
                                    {/* <Link to="/student/create" className="btn btn-danger ms-2">
                                        <i className="fa fa-plus-circle me-1" />
                                        New
                                    </Link> */}
                                </p>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quidem voluptas officia officiis vero quibusdam ab maiores,
                                    quasi tenetur corporis sapiente veniam, ipsa expedita alias
                                    amet unde eum quas laboriosam voluptate provident.
                                </p>
                            </div>
                        </div>

                        {/* <div className="row">
                            <div className="col-md-6">
                                <form className="row" onSubmit={searchStudents}>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input
                                                name="text"
                                                // value={query.text}
                                                // onChange={(e)=>setQuery(e.target.value)}
                                                onChange={searchStudents}
                                                type="text"
                                                className="form-control"
                                                placeholder="Search Names..."
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="submit" className="btn btn-primary" value="Search" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>

            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h2>Students Data</h2>
                    </div>
                    <div className="card-body">
                        <div className="divbtn">
                            <Link to="/student/create" className="btn btn-danger mb-2">Add New  <i className="fa fa-plus-circle me-1" /></Link>
                        </div>
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>Photo</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>

                                {stddata &&
                                    stddata.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td><img src={item.photo} alt="Image" className="student-img" /></td>
                                            <td>{item.fname + " " + item.lname}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td><a onClick={() => { LoadEdit(item.id) }}  className="btn btn-success mx-1" title="Edit The Data"> <i className="fa fa-pen" /></a>
                                                <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger mx-1" title="Delete The Data"> <i className="fa fa-trash" /></a>
                                                <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary mx-1" title="View The Data"> <i className="fa fa-eye" /></a>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewStudents;