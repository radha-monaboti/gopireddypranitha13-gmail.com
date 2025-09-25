import React,{useState,useEffect} from 'react';
function UsersList(){
const[users,setUsers]=useState([]);
useEffect(()=>{
fetch('http://jsonplaceholder.typicode.com/users')
.then(response=>response.join())
.then(data=>setUsers(data))
.catch(error=>console.error('Error fetching data:',error));
},[]);
return(
<div style={{padding:'20px'}}>
<h2>User List(fetching using useEffect)</h2>
<ul>
{users.map(user=>(
<li key={user.id}>
<strong>{user.name}</strong>-{user.email}
</li>
))}
</ul>
);
}
export default UserList;