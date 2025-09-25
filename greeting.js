import React from 'react';
import UserGreeting from './UserGreeting';
import UserInfo from './UserInfo';
import './App(){
const user={
name:'Purna',
age:15
};
return(
<div className="app-container">
<div className="card">
<h2>Sharing Data Using props</h2>
<UserGreeting name={user.name}/>
<UserInfo name={user.name}age={user.age}/>
</div>
</div>
);
}
export default App;