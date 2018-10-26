import React from "react";

const Footer = (props) => (
    <footer style={{background: props.background}} className="pt-5 pb-2 w-100">
        <div className="container mt-4" style={{height: "100px"}}>
        </div>
        <p className="w-100 block text-right text-light pr-5">Copyright &copy; TechBuy 2018</p>
    </footer>
)

export default Footer;