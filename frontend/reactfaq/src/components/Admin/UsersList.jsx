import { useEffect, useState } from 'react';
import axios from 'axios';
import './UsersList.css'; 
const UsersList = () => {
  const [users, setUsers] = useState([]);  //intiliazaing as empty array to strore users
  const token = localStorage.getItem("token"); //taking tokens from local storage

  useEffect(() => {
    axios.get("http://localhost:8080/admin/users", {
      headers: { Authorization: `Bearer ${token}` } //header mein token chahaiye as admin ke liye hai
    })
    .then(res => setUsers(res.data))  //we will update the users state with the data received from the API
    .catch(err => console.error("Error fetching users:", err));
  }, [token]);

  return (
    <div className='users-list-page'>  
      <h2 style={{ color: '#101010ff' ,fontSize: '2rem',fontWeight:900}}>Registered Users</h2>
      <table className='user-table'> 
        <thead>  {/* Table header for displaying user details and tr is table row */}
          <tr>   
            <th>Username</th>  {/* Table header for username column adn so on all these 3 will be in one row*/}
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => ( //will loop over the users array with object u and key as i
            <tr key={i}>  {/* that above key will be used to create row for each user */}
              <td>{u.username}</td> 
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
