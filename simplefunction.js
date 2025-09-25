import React,{useState}from 'react';
function SimpleForm()
const[formData,setFormData]=useState({name:",email"});
const[submitted,setSubmitted]=useState(false);
const handlesSubmit=(e)=>{

e.preventDefault();
setSubmitted(true);
};
const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value});
};
if(submitted){
return(
<div style={{padding:'20px',textAlign:'center'}}>
<h2>Thank you for submitted!</h2>
<p>we recieved your details.</p>
<button 
onclick={()=>=setSubmitted(false)}
style={{padding:'8px 16px',marginTop:'10px}}
>
submit Again
</button>
</div>
);
}
return(
<form onsubmit={handleSubmit}style={{padding:'20px'}}>
<input
type="text"
name="name"
value={formData.name}
onchange={handleChange}
placeholder="your Name"
required
style={{display:'block',margin:'10px 0',padding:'8px',width:'100%'}}
/>
<input
type="email"
name="name"
value={formData.email}
onchange={handleChange}
placeholder="your Email"
required 
style={{display:'block',margin:'10px 0',padding:'8px',width:'100%'}}
/>
<button type="submit"style={{padding:'8px 16px',marginTop:'10px'}}>
submit
</button>
</form>
);
}
export default SimpleForm;