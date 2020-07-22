import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen (props) {
    
    console.log(props.match.params.id)
    const product = data.products.find(x=> x._id === props.match.params.id)
    return (
       <div>

            <div className="back-to-result">
                <Link to="/"><i className="fa fa-angle-double-left"></i>Back to results</Link>
            </div>

            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="" ></img>
                </div>

                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} stars
                        </li>
                        <li>
                            <b>{product.price}</b>
                        </li>
                        <li>
                            Description: {product.description}
                        </li>

                    </ul>
                </div>

                <div className="details-action">
                    <ul>
                        <li>
                            Price: <b>{product.price}</b>
                        </li>
                        <li>
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>

                        </li>
                        <li>
                            <button className="button">
                                Add to cart
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

       </div>
    )
}

export default ProductScreen;