import React from "react";
import { useSelector } from "react-redux";
import { getFeaturedProducts } from "../../redux/selectors";
import ProductList from "../../components/ProductList";
import Button from "../../components/Button";
import "./style.scss";

function HomePage() {
  const products = useSelector(getFeaturedProducts);
  return (
    <section className='HomePage'>
      <div
        className='hero'
        style={{ backgroundImage: `url(/media/static/singleProductBcg.jpeg)` }}
      >
        <div className='banner'>
          <h1>classic devices</h1>
          <div className='slogan'>Vintage, not obsolete!</div>
          <div className='banner__link'>
            <Button text='Get classic' link='/products' inverted />
          </div>
        </div>
      </div>

      <div className='featured-products'>
        <h2 className='featured-products__title'>Featured products</h2>
        <ProductList products={products} />
        <Button text='View all products' link='/products' />
      </div>
    </section>
  );
}

export default HomePage;
