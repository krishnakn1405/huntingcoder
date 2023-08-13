import React, { useState } from 'react';
import styles from "@/styles/Contact.module.css";

const Contact = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [desc, setdesc] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();

    // console.log(phone, name, email, desc);

    async function postJSON(data) {
      try {
        const response = await fetch("http://localhost:3000/api/postcontact", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        const result = await response.json();
        console.log("Success:", result);
        alert("Thanks for contacting us");
        setphone('');
        setname('');
        setemail('');
        setdesc('');
      } catch (error) {
        console.error("Error:", error);
      }
    }
    
    const data = { phone, name, email, desc };
    postJSON(data);

  }
  
  const handleChange = (e)=>{
  
    if(e.target.name == 'phone'){
      setphone(e.target.value);
    }
    else if(e.target.name == 'email'){
      setemail(e.target.value);
    } 
    else if(e.target.name == 'desc'){
      setdesc(e.target.value);
    }
    else if(e.target.name == 'name'){
      setname(e.target.value);
    }

    // console.log(e, "change")
  }

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formLabel}>Enter your name</label>
          <input type="text" value={name} onChange={handleChange} className="form-control" id="name" name="name" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formLabel}>Email address</label>
          <input type="email" value={email} onChange={handleChange} className="form-control" id="email" name="email" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formLabel}>Phone</label>
          <input type="phone" value={phone} onChange={handleChange} className="form-control" id="phone" name="phone" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formLabel}>Elaborate your concern</label>
          <textarea className="form-control" value={desc} onChange={handleChange} id="desc" name="desc" placeholder="Write your concern here" rows="3" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact