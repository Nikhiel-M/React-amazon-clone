import React from "react";
import './Searchbar.css'
import 'material-icons/iconfont/material-icons.css';

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="search">
        <input className="searchInput" type="text" placeholder="Search Amazon.co.za" />
        <button>
          <i class="material-icons">search</i>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
