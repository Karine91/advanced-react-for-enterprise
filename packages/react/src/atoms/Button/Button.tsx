import React from 'react';

interface IProps {
  label: string;
}

const Button: React.FC<IProps> = ({ label }) => {
  return (
    <button className='dse-button--container'>{label}</button>
  )
}

export default Button