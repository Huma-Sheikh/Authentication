import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../Components/InputField';
import { sanitizeInput } from '../utils/helper';
import { emailRegex, passwordRegex } from '../utils/validator';
import './SignIn.css'
import axios from 'axios';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!emailRegex?.test(sanitizeInput(formData?.email))) newErrors.email = 'Invalid email';
    if (!passwordRegex?.test(formData?.password)) newErrors.password = 'Invalid password';
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e?.target?.name]: sanitizeInput(e?.target?.value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await axios.post('http://localhost:5000/api/auth/login', formData);
        localStorage.setItem('token', res?.data?.token);
        localStorage.setItem('user', JSON?.stringify(res?.data));
        navigate('/dashboard');
      } catch (error: any) {
        alert(error?.response?.data?.message || 'Login failed');
      }
    }
  };

  return (
    <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign In</h2>
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData?.password}
            onChange={handleChange}
            error={errors?.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      
   
  );
};

export default SignIn;
