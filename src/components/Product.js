import React from 'react';

const Product = (props) => {
  let description;
  if (props.shortDescription) {
    if (props.shortDescription.includes(";")) {
      description = props.shortDescription.split(";").splice(1, 6)
    } else {
      description = props.shortDescription
    }
  } else {
    description = "No description available"
  }
  return (
    <div className="product box-shadow p-3" key={props.id}>
      <h4 className="h4 text-center mt-3"><a href={props.url} target="_blank" rel="noopener noreferrer">{props.name.split("-")[0] + " - " + props.name.split("-")[1]}</a></h4>
      <p className="text-info text-center mb-0">SKU: {props.sku}</p>
      <b className="block w-100 text-center"><span className="text-success">${props.salePrice}</span> - You save: <span className="purple-color">${props.dollarSavings}</span></b>
      <img src={props.image !== null ? props.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"} className="ml-auto mr-auto block mt-3 mb-3 product-img" alt={props.name}/>
      <p dangerouslySetInnerHTML={{__html: description }}></p>
      <a href={props.url} target="_blank" className="cta-link box-shadow block w-50 m-auto text-center pt-2 pb-2" rel="noopener noreferrer">Get it now</a>
    </div>
  )

}

export default Product;
