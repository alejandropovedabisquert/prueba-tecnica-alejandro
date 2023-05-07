import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate()
  return (
    <div className="header">
        <Link to="/">
            <h1>DailyTrends</h1>
        </Link>
    </div>
  );
}

export default Header;
