'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import ProductList from '../components/Product/ProductList';
import { useSetAtom } from 'jotai';
import { cartAtom } from '../store/CartAtom';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const setCartItems = useSetAtom(cartAtom);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, { ...product }]);
    };

    if (loading) {
        return <div className={styles.container}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.container}>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Product List</h1>
            <ProductList products={products} onProductAddClicked={handleAddToCart} />
        </div>
    );
}
