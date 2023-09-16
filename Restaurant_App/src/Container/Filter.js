import React from 'react'

const Filter = () => {
    const prod = ["All Items","Rice Items","cold Drinks","Pizza","Hot Drinks"];
  return (
    <div>
        <center>
            <span className='h4'>Filter</span>
            <select name='Filter'></select>
        </center>
    </div>
  )
}

export default Filter