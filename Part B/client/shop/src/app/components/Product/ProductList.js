import ProductCard from "./ProductCard";

const ProductList = ({products}) => {
    return (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {
                products.map((prodcut) => {
                    return (
                        <ProductCard 
                            key ={prodcut.id}
                            image={prodcut.image}
                            name={prodcut.name}
                            price={prodcut.price}
                        />
                    )
                })
            }
            
        </div>
    );
}

export default ProductList;