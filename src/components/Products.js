import { useState, useEffect } from 'react';
import "./styles.css";

import { useSelector } from "react-redux"


import Product from './Product';

function Products() {
    const items = useSelector(state => state.product.items)

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
                {items.map((i) => (
                    <Product key={i.id} item={i} />
                ))}
            </div>
        </div>
    )
}

export default Products
