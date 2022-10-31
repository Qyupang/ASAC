import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import NameView from './NameView';

const PageA = () => {
  const navigate = useNavigate();

  const gotoPageC = () => {
    alert('페이지 C로 이동!!');
    navigate('/c');
  };

  const numbers = [1, 2, 3, 4, 5];

  const names = [
    { id: 0, name: 'A', age: 1 },
    { id: 1, name: 'B', age: 2 },
    { id: 2, name: 'C', age: 3 },
  ];

  return (
    <div>
      <div>PageA</div>
      <Link to="/">Page B로 이동</Link>
      {names.map((user, idx) => (
        <NameView key={user.id} name={user.name} url={`/${user.id}`} />
      ))}
      <div onClick={gotoPageC}>Page C로 이동</div>
    </div>
  );
};

export default PageA;
