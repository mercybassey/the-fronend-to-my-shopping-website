import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import 'animate.css';

function HomeScreen (props) {
    const [products, setProduct] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:5002/api/products');
            console.log(data);
            setProduct(data);
        }
        fetchData();
        return () => {
            //
        };
    }, [])

    return (
        <ul className="products ">
                    {
                      products.map(product =>   
                      <li key={product._id}>
                        <div className="product">
                            
                            <div className="product-image"><Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt=""/></Link></div>
                           <div className="product-name"> <Link to={"/product/" + product._id}> {product.name}</Link></div> 
                            <div className="product-rating">{product.rating} stars</div>
                            <div className="product-price">{product.price}</div>
                            <div className="product-category">{product.category}</div>
                        </div>
                    </li>)
                    }
     </ul>

    ) 
}

export default HomeScreen;

 
