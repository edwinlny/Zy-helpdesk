import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 bg-primary">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Help Desk</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>
            Tools
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><Link to="/admin"><a>Admin</a></Link></li>
            <li><Link to="/"><a>Submit Ticket</a></Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  );
};

export default NavBar;
