import React, { Component } from 'react';
import { removeFromShoppingCart } from '../../ducks/reducer';
import { connect } from 'react-redux';
import './cart.css'

class Cart extends Component {
    
    render() {
        let shoppingCartDisplay = this.props.shoppingCart.map((item, index) => {
            return (
                <div  key={index}>
                    <div>
                    <img  className="cart-shirt" src={item.img} alt="" />
                    <h2>{item.name}</h2>
                    </div>
                  
                    <div>
                        
                        <h2>{"$" + item.price + ".00"}</h2>
                        <div >
                            <button className="shopping-cart-button" onClick={() => this.props.removeFromShoppingCart(index)}>X</button>
                            
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="shopping-cart-container">
                <ul className='wrapper'>
                    <li className='box1'>box1</li>
                    <li className='box2'>box2
                    {shoppingCartDisplay[0] ? 
                shoppingCartDisplay 
                : <div className="go-buy-something"><h1>empty cart</h1></div>}  
                   
                    </li>
                    <li className='box3'>box3</li>
                    
                    
                </ul>
                {/* {shoppingCartDisplay[0] ? 
                shoppingCartDisplay 
                : <div className="go-buy-something"><h1>empty cart</h1></div>}   */}
            </div>
        )
    }

    }

    
    function mapStateToProps(state) {
        console.log(state);
        return {
            shoppingCart: state.shoppingCart
        };
    }
    
    export default connect(mapStateToProps, {removeFromShoppingCart})(Cart);