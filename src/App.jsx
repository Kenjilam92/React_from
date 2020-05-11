import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Components/Form'

function App() {
  const [users, setUsers] = useState([]);
  
 
 
  return (
    <>
    <div className="jumbotron">
       <Form handleUser={setUsers}/>
    </div>
    <div className="container">
     <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
      {users.map( (user,i) =>
        {
        console.log(i)
        console.log(user)
        return (<tr key={i}>
          <td>{user.fname}</td>
          <td>{user.lname}</td>
          <td>{user.email}</td>
          <td>{user.pw}</td>
        </tr>);
        }
      )}
       </tbody>
     </table>
    </div>
    </>
  );
}

export default App;
