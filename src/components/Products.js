import React, {Component} from 'react';
import Product from './Product';

export default class Computers extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    fetch(this.props.endpoint)
    .then(res => res.json())
    .then(res => this.setState({products: res.products}))
  }

  render() {
    var categorySplit = this.props.category.split("");
    categorySplit[0] = categorySplit[0].toUpperCase();
    var camelCategory = categorySplit.join("");
    return (
      <section className="p-5 container">
        <h3 className="h3 mt-3 text-center">{camelCategory}!</h3>
        <p className="text-center">Your daily list of best-selling {this.props.category} on sale</p>
        <div className="row products mt-3">
          {this.state.products.map(product => (
            <div className="col-sm-4 mt-5">
              <Product
                id={product.sku}
                name={product.name}
                image={product.image}
                dollarSavings={product.dollarSavings}
                shortDescription={product.shortDescription}
                url={product.url}
                salePrice={product.salePrice}
              />
            </div>
          ))}
        </div>
      </section>
    )
  }
}
