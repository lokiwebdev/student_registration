import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const StdEdit = () => {
    const { stdid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:7000/student/" + stdid).then((res) => {
            return res.json();
        }).then((resp) => {
            setId(resp.id);
            setPhoto(resp.photo);
            setFname(resp.fname);
            setLname(resp.lname);
            setFathern(resp.fathern);
            setEmail(resp.email);
            setAddress(resp.address);
            setPhone(resp.phone);
            setGender(resp.gender);
            setDob(resp.dob);
            setCountry(resp.country);

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, setId] = useState("");
    const [photo, setPhoto] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [fathern, setFathern] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [country, setCountry] = useState("");


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const stddata = { photo, fname, lname, fathern, email, address, phone, gender, dob, country };


        fetch("http://localhost:7000/student/" + stdid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(stddata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/viewStudents');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <>
            <div className="row col-md-12">

                <div className="row text-center">
                    <div className="col">
                        <p className="h1 fw-bold text-primary" >
                            Edit Student
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
                    <img className="studentEdit-img" src={photo} alt="" />
                </div>

                <form className="form col-md-5 m-4 " onSubmit={handlesubmit}>
                    <h1 className="mb-5" style={{ fontSize: 25 }}>Update Student Details</h1>


                    <div className="mb-1 ">
                        <label className="px-3 h5">Photo:</label>
                        <input
                            type="text"
                            name="photo"
                            value={photo}
                            onChange={e => setPhoto(e.target.value)}
                            placeholder="Your photo's url"
                        />
                    </div>

                    <div className="mb-1 ">
                        <label htmlFor="name" className="px-3 h5">
                            First Name*:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="fname"
                            value={fname}
                            onChange={e => setFname(e.target.value)}
                            required
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="mb-1 ">
                        <label htmlFor="name" className="px-3 h5">
                            Last Name*:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="lname"
                            value={lname}
                            onChange={e => setLname(e.target.value)}
                            required
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div className="mb-1 ">
                        <label className="px-3 h5">Father Name:</label>
                        <input
                            type="text"
                            name="fathern"
                            value={fathern}
                            onChange={e => setFathern(e.target.value)}
                            placeholder="Your father's number"
                        />
                    </div>
                    <div className="mb-1 ">
                        <label className="px-3 h5">Phone*:</label>
                        <input
                            type="number"
                            name="phone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="Your mobile number"
                            required
                        />
                    </div>
                    <div className="mb-1 ">
                        <label className="px-3 h5">Email*:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <label className="px-1 h5">Address*</label>
                        <textarea
                            rows="3"
                            name="address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            placeholder="Enter Your Address Here"
                            required
                        />
                    </div>
                    {/* <div className="mb-1">
                        <label className="px-1 h5"> Gender*:</label>
                        <select value={gender} onChange={e => setGender(e.target.value)} required>
                            <option value="">Celect a Genter</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div> */}
                     <div className="gender-selector py-2">
                        <label className="px-4 h5"> Gender*:</label>
                        <div className="gender-selector">
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={e => setGender(e.target.value)}
                            /> Male
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={e => setGender(e.target.value)}
                            /> Female
                            <input
                                type="radio"
                                id="other"
                                name="gender"
                                value="other"
                                checked={gender === "other"}
                                onChange={e => setGender(e.target.value)}
                            /> Other
                        </div>
                    </div>
                    <div className="mb-1 ">
                        <label className="px-3 h5">D.O.B*:</label>
                        <input
                            type='date'
                            placeholder='Enter BirthDate'
                            value={dob}
                            onChange={e => setDob(e.target.value)}
                            name='dob'
                            required
                        />
                    </div>
                    <div className="mb-1 ">
                        <label className="px-3 h5">Country*:</label>
                        <select value={country} onChange={e => setCountry(e.target.value)} required>
                            <option value="">Select a Country</option>
                            <option value="India">India</option>
                            <option value="USA">U.S.A</option>
                            <option value="UK">U.K</option>
                            <option value="China">China</option>
                        </select>
                    </div>

                    {/* <button className="btnA mx-2 my-4" type="submit">
                        Update
                    </button> */}

                    <div className="mb-2">
                        <button className="btnA mx-2 my-4" type="submit">
                            Update
                        </button>
                        <Link to={'/viewStudents'} className="btnA btn-dark ms-2">Back</Link>
                    </div>

                </form>

            </div>
        </>
    );
}

export default StdEdit;