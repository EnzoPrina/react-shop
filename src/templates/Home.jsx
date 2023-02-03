import React from 'react';
import ProductList from '../containers/ProductList';
import Carrousel from '../components/Carrousel';

const Home = () => {
	return (
		<>
			<Carrousel />
			<ProductList />
		</>
	);
}

export default Home;