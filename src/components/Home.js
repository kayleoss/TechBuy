import React from 'react';
import { Link } from 'react-router-dom';

const colors = [
	"3px solid #ffc30f",
	"3px solid #a5fc0f",
	"3px solid #0cfc44",
	"3px solid #0cf9da",
	"3px solid #015993",
	"3px solid #f010fc",
]

const Home = (props) => (
	<section>
		<header>
			<div className="container">
				<div className="row pt-5">
					<div className="col"></div>
					<div className="col-md-5 col-sm-12 mt-5 pt-4">
						<h1 className="h3 mt-5">Never pay full price for tech again</h1>
						<p>Using a variety of vendors from around the world, we put together the best tech deals for you.</p>
					</div>
				</div>
			</div>
		</header>
		<section className="p-5" style={{background: props.headerColor}}>
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<h2 className="text-light">Search For Deals</h2>
						<p className="text-light">We use custom algorithms to find you the best and cheapest prices on computers, laptops, and tablets. You'll never have to spend time searching out flyers again.</p>
					</div>
					<div className="col-sm-6">
						<div className="row mt-3">
							<div className="col-sm-4 mt-3">
								<Link to="/computers" className="product-button text-light font-weight-bold block text-center" style={{border: colors[0]}}>Computers</Link>
							</div>
							<div className="col-sm-4 mt-3">
								<Link to="/laptops" className="product-button text-light font-weight-bold block text-center" style={{border: colors[1]}}>Laptops</Link>
							</div>
							<div className="col-sm-4 mt-3">
								<Link to="/tablets" className="product-button text-light font-weight-bold block text-center" style={{border: colors[2]}}>Tablets</Link>
							</div>
							<div className="col-sm-4 mt-3">
								<Link to="/phones" className="product-button text-light font-weight-bold block text-center" style={{border: colors[3]}}>Phones</Link>
							</div>
							<div className="col-sm-4 mt-3">
								<Link to="/tvs" className="product-button text-light font-weight-bold block text-center" style={{border: colors[4]}}>TVs</Link>
							</div>
							<div className="col-sm-4 mt-3">
								<Link to="/audio" className="product-button text-light font-weight-bold block text-center" style={{border: colors[5]}}>Audio</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>

)


export default Home;
