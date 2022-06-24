import React from 'react'

import './Grid2.css';

function Grid2() {
  return (
    <div className='container'>
      <div className='col sidebar'>
        <h1>Sidebar</h1>
      </div>
      <div className='col main-content'>
        <h1>Main Content</h1>
      </div>
    </div>
  )
}

export default Grid2;