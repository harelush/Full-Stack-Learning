import styles from './page.module.css'
import ProductList from '../components/Product/ProductList';

const products = [
    { id: 1, image: 'https://via.placeholder.com/150', name: 'Sample Product 1', price: 299.9888889 },
    { id: 2, image: 'https://via.placeholder.com/150', name: 'Sample Product 2', price: 19.99 },
    { id: 3, image: 'https://via.placeholder.com/150', name: 'Sample Product 3', price: 39.99 },
    { id: 4, image: 'https://via.placeholder.com/150', name: 'Sample Product 1', price: 299.9888889 },
    { id: 5, image: 'https://via.placeholder.com/150', name: 'Sample Product 2', price: 19.99 },
    { id: 6, image: 'https://via.placeholder.com/150', name: 'Sample Product 3', price: 39.99 },
];

export default function Products() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Product List</h1>
            <ProductList products={products} />
        </div>
    );
};