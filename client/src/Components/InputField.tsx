import React from 'react';

interface Props {
  label: string;
  type: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<Props> = ({ label, type, value, name, onChange, error }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
      {error && <small className="error">{error}</small>}
    </div>
  );
};

export default InputField;