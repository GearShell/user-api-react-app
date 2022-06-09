import React, {useState} from 'react';
import "./Registeration.css";
import axios from 'axios';

function Registeration() {

    const[fname, setfname] = useState("");
    const[lname, setLname] = useState("");
    const[email, setEmail] = useState("");
    const[submitted, setSubmitted] = useState(false);
    const[error, setError] = useState(false);


    const payload = {
        "firstName": fname,
        "lastName": lname,
        "email": email
}

    const postData = (e) => {
        e.preventDefault();
        if (fname === '' || email === '' || lname === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }

    axios.post("https://dummyapi.io/data/v1/user/create", payload, {
        headers: {
            "app-id": "628f806631241c612e9bee76"
        }}) .then((res) => {
        console.log(res);
    })
    }

    const handleFirstName = (e) => {
        setfname(e.target.value);
        setSubmitted(false);
    };
     
    const handleSeconddName = (e) => {
        setLname(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
     
     
    const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <h1>User {fname} {lname} successfully registered!!</h1>
          </div>
        );
      };
     
      
      const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
          </div>
        );
      };


  return (
    <div className='Reg_Header'>
        <h1>Registeration Page</h1>

        <div className='Reg-inner'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" value={fname} onChange={handleFirstName} placeholder="Enter the First Name"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Second Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" value={lname} onChange={handleSeconddName} placeholder="Enter the Second Name"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" value={email} onChange={handleEmail} placeholder="name@example.com"/>
            </div>
            <button type="Submit" class="btn btn-primary" onClick={(e) => postData(e)}>Signup</button>
        </div>
        <div className="Messages">
                {errorMessage()}
                {successMessage()}
        </div>
    </div>
  );
};

export default Registeration;