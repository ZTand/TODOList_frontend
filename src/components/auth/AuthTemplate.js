import React from 'react';
import { Link } from 'react-router-dom';
import './AuthTemplate.scss';

const AuthTemplate = ({ children }) => {
  return (
    <div className="AuthTemplateWrapper">
      <div className="WhiteBox">
        <div className="logo">
          <Link to="/">TODOList</Link>
        </div>
        <hr />
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
