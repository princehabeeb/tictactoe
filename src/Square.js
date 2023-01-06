// import React from 'react'

const  Square = ({sqaureClick, value})  => {
  return (
   <button onClick={() => sqaureClick()}>X{value}</button>
  );
}

export default Square