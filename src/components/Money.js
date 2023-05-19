import React from 'react';

import { useSelector } from 'react-redux';

function Money() {
  const totalMoney = useSelector((state) => state.product.money);

  return (
    <>
      <div className='sticky-top' style={{ backgroundColor: "red", color: "white", fontSize: "50px", }}>
        ${
          totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
      </div>
    </>
  )
}

export default Money

/*
          totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

*/