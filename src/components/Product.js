import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux"
import { buyItem } from '../redux/productSlice';


function Product({ item }) {
    const dispatch = useDispatch();
    const [count, setcount] = useState(0);
    const [currentId, setCurrentId] = useState();


    const handleChange = (e, id) => {
        if (e < 0) {
            return;
        }
        setcount(e)
        setCurrentId(id)
    }

    useEffect(() => {
        dispatch(buyItem({ id: item.id, count: count }))
    }, [dispatch, currentId, count])

    const handleBuy = () => {
        setcount(Number(count) + 1)
    };

    const handleSell = () => {
        setcount(Number(count) - 1)
    };


    return (
        <div>
            <div key={item.id} className="col">
                <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.productName}</h5>
                        <div className='item-cost'>${item.productPrice}</div>
                    </div>
                    <div style={{ marginBottom: "25px" }}>
                        <button
                            id='sellButton'
                            type="button"
                            className="btn btn-danger"
                            style={{ marginRight: "25px" }}
                            disabled = {count === 0 ? true : false}
                            onClick={handleSell}
                        >Sell</button>
                        <input
                            type="number"
                            placeholder="0"
                            value={count}
                            onChange={(e) => handleChange(e.target.value, item.id)}
                        />
                        <button
                            type="button"
                            className="btn btn-success"
                            style={{ marginLeft: "25px" }}
                            onClick={handleBuy}
                        >Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
