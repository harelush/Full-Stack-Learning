'use client';

import styles from './page.module.css';
import { cartAtom } from '../store/CartAtom';
import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";


const Cart = () => {
    const [cartItems, setCartItems] = useAtom(cartAtom);

    const [totalPrice, setTotalPrice] = useState(0);
    const router = useRouter();

    useEffect(
        () => {
            const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
            setTotalPrice(newTotalPrice);
        },
        [cartItems]);

    const emptyCart = () => {
        setCartItems([]);
    }

    const handleSubmitOrder = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/orders/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ totalAmount: totalPrice })
            });

            if(!response.ok) {
                throw new Error('Failed to submit order');
            }

            alert('Order submitted successfully');
            emptyCart();
            router.push('/products');
        } catch (e) {
            console.log('error is',e)
            alert('Failed to submit order, Please try again later');
        }
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.mainHeader}>Your Cart</h1>

            <ul className={styles.cartList}>
                {
                    cartItems.map((item) => (
                        <li
                            key={item.id}
                            className={styles.cartItem}>
                            <span className={styles.itemName}>{item.name}</span>
                            <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
                        </li>
                    ))
                }
            </ul>

            <div className={styles.total}>
                <span>Total:</span>
                <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
            </div>

            <div className={styles.actions}>
                <button className={styles.payButton} onClick={handleSubmitOrder}>Pay Now</button>
                <button className={styles.emptyButton} onClick={emptyCart}>Empty the Cart</button>
            </div>


        </div>
    );
};

export default Cart;