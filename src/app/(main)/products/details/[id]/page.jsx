import styles from "./page.module.css"
async function page({ params }) {
    const id = params.id;
  
    let products;
    try {
      const data = await fetch('https://fakestoreapi.com/products');
      products = await data.json();
    } catch (error) {
      throw Error(error);
    }

    const product = products.find((p) => p.id == id);
  
  
    return (
      <main className={styles.container}>
        <div>
          <p className={styles.Id}>Product ID: {product.id}</p>
          <h1 className={styles.title}>Product Title: {product.title}</h1>
          <img className={styles.img} src={product.image} alt={product.title}  />
          <p className={styles.description}>Description: {product.description}</p>
          <p className={styles.category}>Category: {product.category}</p>
          <p className={styles.price}>Price: ${product.price}</p>
          <p className={styles.Count}>Count: {product.rating.count}</p>
          <p className={styles.rate}>Rating: {product.rating.rate}</p>
        </div>
      </main>
    );
  }
  
  export default page;
