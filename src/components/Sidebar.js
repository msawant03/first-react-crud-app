import React from "react";

const Sidebar = ({ isOpen }) => {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Sidebar content goes here */}
        <p>Sidebar Content</p>
      </div>
    );
};


export default Sidebar;