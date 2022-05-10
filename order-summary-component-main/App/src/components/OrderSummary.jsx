import React from "react";
import "./OrderSummary.css"
import hero from "../images/illustration-hero.svg"
import music from "../images/icon-music.svg"


function OrderSummary(){
	return (
		<div className="card">
			<img className="hero" src={hero} alt="subscribed to music"/>
			<h1>Order Summary</h1>
			<span>You can now listen to millions of<br/> songs,
				audiobooks, and podcasts on<br/> any device anywhere you like!
			</span>
			<div className="payment-details">
				<img src={music} alt="music icon" />
				<div>
					<h4>Annual Plan</h4>
					<span>$59.99/year</span>
				</div>
				<h4><a href="#">Change</a></h4>
			</div>
			<button href="#" className="payment">Proceed to Payment</button>
			<button href="#" className="cancel">Cancel Order</button>
		</div>
	)
}

export default OrderSummary;