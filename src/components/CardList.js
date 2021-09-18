import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../context/cart/Context'
const CardList = ({ cards }) => {
    const { addToCart, cartItems } = useContext(Context);

    return (
        <div className="cards">
            {
                cards.map((product) => {
                    const { id, name, description, final_price, orginal_price, img_url } = product;
                    return <div className="containercards">
                        <img className="cardsimage" src={img_url} alt="cards" />
                        <p>{name} <span>${final_price}</span></p>

                        <p>{description}</p>

                        <Button onClick={() => addToCart(product)} variant="outline-primary"><span>Add to cart</span></Button>{' '}

                    </div>
                })
            }
        </div>
    )
}

export default CardList
