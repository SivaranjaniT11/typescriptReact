import React, { useState } from "react";
import styles from "./Form.module.scss";  
import { FormData } from "../../types/FormData";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
    <div style={{textAlign:"center"}}><b>Testing Form</b></div>
    <div className={styles["form-container"]}>

     <div> 
        
        <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div>
          <label>Mobile</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>

        <div className={`${styles.button}`}><button type="submit" >Submit</button></div>
        
      </form>
      </div>
    </div></>
  );
};

export default Form;
