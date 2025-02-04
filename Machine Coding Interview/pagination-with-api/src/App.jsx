import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard';
import './App.css'


// const ProductCard = ({image, title}) => {
//   return(
//     <div>
//       <img src={image} alt={title} />
//       <span>{title}</span>
//     </div>
//   )
// } 

function App() {
  const [products, setProducts] = useState([]);

  // Fetch the data using (https://dummyjson.com/)

  const fetchData = async()=>{
    const data = await fetch('https://dummyjson.com/products');
    const jsonData = await data.json();
    // console.log(jsonData);
    setProducts(jsonData.products);
  }

  useEffect( ()=>{
    fetchData();
  }, []);

  // console.log(products);
  
  return (
    <>
      <h1>Pagination using React With API</h1>
      <div className='product-container'>
        {
          products.map((product) => ( 
          <ProductCard key = {product.id} image={product.thumbnail} title={product.title}/>
        ))
        }
      </div>
    </>
  )
}

export default App
