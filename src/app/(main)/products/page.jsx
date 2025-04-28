import ProductItem from "@/components/ProductItem/ProductItem";
import error from "./error";
import styles from "./page.module.css"
import Link from 'next/link';

const Profile = async () => {
   let products;
   try {
    const data = await fetch('https://fakestoreapi.com/products')
    products= await data.json();
   } catch(error){
    throw Error(error)
   }
   console.log(products)


    return (
        <div className={styles.container}>
            {products.map((product) => (
                <Link key={product.id} href={`/products/details/${product.id}`}>
                   <ProductItem key={product.id} item={product}/>
           </Link>
         ))}
        </div>
    )
}

export default Profile;
