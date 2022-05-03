import React from "react";
import Card from "../Card/Card";
import "./Thanks.css"
import rated from "../images/illustration-thank-you.svg"

function ThanksView(props){

	return(
		<Card>
			<section className="thank-you">
				<img src={rated} width="120px"/>
				<div className="score">
					<p>You selected {props.score} out of 5</p>
				</div>
				<h1>Thank you!</h1>
				<p>We appreciate you taking the time to give a rating.
					If you ever need more support, don't hesitate to 
					get in touch!
				</p>
			</section>
		</Card>
	)
}

export default ThanksView
