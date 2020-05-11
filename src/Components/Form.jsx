import React,{useState} from 'react'

const Form = (props) =>{
    const [fname, setFname]= useState("");
    const [lname, setLname]= useState("");
    const [email, setEmail]= useState("");
    const [pw, setPw]= useState("");
    const [cpw, setCpw]= useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {fname: fname, lname: lname, email: email, pw: pw}
        props.handleUser(oldUsers=>[...oldUsers,user]);
        setFname("");
        setLname("");
        setEmail("");
        setPw("");
        setCpw("");
      }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="d-flex flex-column">
        <label htmlFor="fname">First Name:</label>
        <input 
          type="text" 
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          // placeholder={errors.fname? errors.fname : null}
        />
        <label htmlFor="lname">Last Name:</label>
        <input 
          type="text" 
          name="lname"
          value={lname} 
          onChange={(e) => setLname(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input 
          type="text" 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pw">Password:</label>
        <input 
          type="password"
          name="pw"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <label htmlFor="cpw">Confirm Password:</label>
        <input 
          type="password" 
          name="cpw"
          value={cpw}
          onChange={(e) => {setCpw(e.target.value)}}
        />
        <button className="btn btn-dark" type="submit">Submit</button>
      </form>
    );
  }

  export default Form;