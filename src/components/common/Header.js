import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <>
      <div className="HeaderWrapper">
        <div className="top">
          <div className="logo">
            <Link to="/">TODOList</Link>
            <button>로그인</button>
          </div>
        </div>
      </div>
      <div className="space" />
    </>
  );
};

export default Header;
