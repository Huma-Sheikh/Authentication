import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../Components/InputField';
import { sanitizeInput } from '../utils/helper';
import { nameRegex, emailRegex, passwordRegex, ageRegex, genderRegex } from '../utils/validator';
import './form.css';
import axios from 'axios';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
  const newErrors: { [key: string]: string } = {};
  const name = String(formData.name).trim();
  const email = String(formData.email).trim();
  const password = String(formData.password);
  const age = String(formData.age).trim();
  const gender = String(formData.gender).toLowerCase();

  if (!name || name.length < 2 || name.length > 30 || !nameRegex.test(name)) {
    newErrors.name = 'Name must be 2-30 letters only';
  }

  if (!email || !emailRegex.test(email)) {
    newErrors.email = 'Enter a valid email with @ and domain';
  }

  if (!password || !passwordRegex.test(password)) {
    newErrors.password = 'Password must be 8+ chars, with number & special char';
  }

  if (!age || !ageRegex.test(age)) {
    newErrors.age = 'Age must be between 18 and 100';
  }

  if (!gender || !genderRegex.test(gender)) {
    newErrors.gender = 'Select valid gender: Male, Female or Other';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: sanitizeInput(e.target.value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await axios.post('http://localhost:5000/api/auth/register', formData);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data));
        navigate('/dashboard');
      } catch (error: any) {
        alert(error.response?.data?.message || 'Registration failed');
      }
    }
  };

  return (
    
 <div className="signup-container">
    <div className="signup-left">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className='head1'>Sign Up</h2>
        <InputField label="Name" type="text" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
        <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
        <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} error={errors.password} />
        <InputField label="Age" type="text" name="age" value={formData.age} onChange={handleChange} error={errors.age} />

        <div className="input-group">
          <label>Gender</label>
          <div className="radio-group">
            <label><input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} /> Other</label>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <button type="submit">Register</button>

        <p className="switch-auth">
          Already have an account? <span onClick={() => navigate('/signin')}>Sign In</span>
        </p>
      </form>
    </div>

    <div className="signup-right">
      <img src="/side.png" alt="Contact Illustration" />
      <p>Contact us for support or collaboration</p>
      <div className="icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>
  </div>


    
  );
};

export default SignUp;