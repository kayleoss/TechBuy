import React, {Component} from 'react';
import {apiKey} from '../apiCredentials/featured';
import Product from './Product';

export default class Search extends Component {
    state = {
        category: null,
        keyword: "",
        errorMessage: "",
        categoryPath: "",
        products: [],
        loading: false
    }

    handleSearch = () => {
        this.setState({loading: true})
        fetch("https://api.bestbuy.com/v1/products(search=" + this.state.keyword +  "&categoryPath.id=" + this.state.categoryPath + ")?apiKey=" + apiKey + "&sort=name.asc&pageSize=12&format=json")
        .then(res => res.json())
        .then(res => {
            this.setState({loading: false})
            if (res.products.length < 1) {
                return this.setState({errorMessage: "No results found", products: []})
            } 
            this.setState({products: res.products, errorMessage: ""})
        })
    }

    validateSearch = (e) => {
        e.preventDefault()
        if (this.state.category === null) {
            return this.setState({errorMessage: "Please select category"})
        } else if (this.state.keyword === "") {
            return this.setState({errorMessage: "Please enter search term"})
        } else {
            switch (this.state.category) {
                case "Computers":
                    this.setState({categoryPath: "abcat0501000"})
                    break;
                case "Cameras": 
                    this.setState({categoryPath: "abcat0401000"})
                    break;
                case "Headphones": 
                    this.setState({categoryPath: "abcat0204000"})
                    break;
                case "Audio": 
                    this.setState({categoryPath: "pcmcat241600050001"})
                    break;
                case "Laptops": 
                    this.setState({categoryPath: "abcat0502000"})
                    break;
                case "Tablets": 
                    this.setState({categoryPath: "pcmcat209000050006"})
                    break;
                case "Speakers": 
                    this.setState({categoryPath: "pcmcat310200050004"})
                    break;
                default:
                    this.setState({categoryPath: ""})
            }
        }
        this.handleSearch()
    }

    render() {
        const categories = ["Computers", "Cameras", "Headphones", "Audio", "Laptops", "Tablets", "Speakers"];
        return (
            <section className="container search p-5">
                <h3 className="text-center pt-3 h3">Search For Products</h3>
                <hr />
                <div className="row mt-3">
                    {categories.map(category => (
                        <div className="col-sm-4" key={categories.indexOf(category)}>
                            <input type="radio" className="inline mr-3" name="category" value={category} aria-label={category + " category"} onChange={(e) => this.setState({category: e.currentTarget.value})} />
                            <label htmlFor="computers" className="inline">{category}</label>
                        </div>
                    ))}
                </div>
                <form className="form-group mt-3" onSubmit={this.validateSearch}>
                    <input onChange={(e) => this.setState({keyword: e.currentTarget.value})} className="form-control inline w-75 mr-3 box-shadow border-0" type="text" name="keyword" placeholder="Keyword search..." aria-label="Enter keyword" required />
                    <button type="button" onClick={this.validateSearch} className="btn box-shadow border-0 inline text-light small-device-margin-top" style={{background: this.props.headerColor}} aria-label="Submit button">Search</button>
                    {this.state.loading ? <p className="text-dark mt-3">Searching...</p> : <p className="text-danger mt-3">{this.state.errorMessage}</p>} 
                </form>
                <div className="container mt-5">
                    <div className="row pb-3">
                        {this.state.products ?  this.state.products.map(product => (
                            <div className="col-sm-4 mt-3" key={product.sku}>
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
                        )) : ""}
                    </div>
                </div>
            </section>
        )
    }
}
