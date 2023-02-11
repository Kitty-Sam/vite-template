import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Deploy = () => {
  const navigate = useNavigate();
  const onHomeNavigate = () => {
    navigate('/');
  };
  return (
    <button className="btn" type="button" onClick={onHomeNavigate}>
      Back
    </button>
  );
};
