import React from 'react'
import Productbox from './Productbox'
import fimage1 from "../images/1.jpg"
import fimage2 from "../images/2.png"
import fimage3 from "../images/3.png"
import fimage4 from "../images/4.jpg"


function Product() {
    return (
        <div id="features">
            <h1>PRODUCT & SERVICES</h1>
            <div className="a-container">
            <Productbox image={fimage1} title="Personal Loan" name="This loan is designed to cater for the urgent needs of salaried..." /> 
            <Productbox image={fimage2} title="Business Loan" name="Business loan is exclusively limited to registered businesses..." /> 
            <Productbox image={fimage3} title="Smart Loan" name="The Smart Loan has been designed to enable you neet these..." /> 
            <Productbox image={fimage4} title="Corporate Finance" name="FCL's dedicated Corporate Finance strategic business unit" />  
            </div>
         
        </div>
    )
}

export default Product
