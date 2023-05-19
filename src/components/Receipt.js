import React, { useState } from 'react';

import { useSelector } from 'react-redux';

function Receipt() {
    const [itemList, setItemList] = useState();
    const totalMoney = useSelector(state => state.product.money)
    const money = useSelector(state => state.product.totalMoney)
    const items = useSelector(state => state.product.items)

    const updatedMoney = money - totalMoney;

    const filteredItems = items.filter(i => i.count > 0);

    return (
        <>
            <div className='mt-5'>
                <h2>Your Receipt</h2>
                <div>

                    <table className="table p-5">
                        <thead>
                            <tr>
                                <th scope="col">Products</th>
                                <th scope="col"></th>
                                <th scope="col">Total Prices</th>
                            </tr>
                        </thead>
                        {
                            filteredItems.map((i) => (
                                <tbody key={i.id}>
                                    <tr>
                                        <td>{i.productName}</td>
                                        <td>x{i.count}</td>
                                        <td>${(i.productPrice * i.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                    </tr>
                                </tbody>
                            ))
                        }
                        <tbody >
                            <tr>
                                <td scope="row"></td>
                                <td scope="row"></td>
                                <td scope="row"> </td>
                            </tr>
                            <tr >
                                <th scope="row" className='table-active'>Total</th>
                                <th scope="row" className='table-active'></th>
                                <th scope="row" className='table-active'>{updatedMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Receipt
