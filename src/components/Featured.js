import React, { Component } from 'react';
import Slider from "react-slick";

export default class Featured extends Component {
  state = {
    products: []
  }
  componentDidMount() {
    fetch("https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=abcat0501000))?apiKey=" + process.env.REACT_APP_API_KEY + "&sort=dollarSavings.asc&show=name,url,dollarSavings,salePrice,shortDescription,image,sku&facet=bestSellingRank&pageSize=8&format=json")
      .then(response => response.json())
      .then(res => this.setState({ products: res.products }))
  }


  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1
          }

        }
      ]
    };
    return (
      <div className='grey-background pt-5 pb-5'>
        <div className="container">
          <h3 className="h3 text-center">Featured computers on sale</h3>
          <p className="text-center">Get them while the price is <strong>HOT</strong></p>
          <Slider {...settings}>
            {this.state.products.map(product => {
              return (
                <div className="mt-4 p-2" key={product.sku}>
                  <div className="product-box box-shadow p-3">
                    <h4 className="h4 text-center mt-3"><a href={product.url} target="_blank" rel="noopener noreferrer">{product.name.split("-")[0] + " - " + product.name.split("-")[1]}</a></h4>
                    <p className="text-info text-center mb-0">SKU: {product.sku}</p>
                    <b className="block w-100 text-center"><span className="text-success">${product.salePrice}</span> - You save: <span className="purple-color">${product.dollarSavings}</span></b>
                    <img src={product.image !== null ? product.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"} className="ml-auto mr-auto block mt-3 mb-3 product-img" alt={product.name} />
                    {product.shortDescription ? <p dangerouslySetInnerHTML={{ __html: product.shortDescription.split(";").splice(1, 6) }}></p> : ""}
                    <a href={product.url} target="_blank" className="cta-link box-shadow block w-50 m-auto text-center pt-2 pb-2" rel="noopener noreferrer">Get it now</a>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    )
  }
}
