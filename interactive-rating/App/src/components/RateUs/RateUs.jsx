import React from "react";
import Card from "../Card/Card";
import star from "../images/icon-star.svg"
import "./RateUs.css"

function RateUsView(props){
	let data;

	function toggleView(){
		props.onSendData(data)
		return;
	}

	function setOptionValue(event){
		data = {value: false, option: event.target.value }
	}

	return (
		<Card>
			<div className="star-holder">
				<img src={star} width="13px"/>
			</div>
			<section className="rate-us">
				<h1>How did we do?</h1>
				<p>Please let us know how we did with your support request.
				All feedback is appreciated to help us improve our offering!
				</p>
				<div className="ratings">
					<input className="hide" name="option" type="radio" id="one" value="1" onClick={setOptionValue}/>
					<label className="rate"  htmlFor="one">1</label>
					<input className="hide" name="option" type="radio" id="two" value="2" onClick={setOptionValue}/>
					<label className="rate"  htmlFor="two">2</label>
					<input className="hide" name="option" type="radio" id="three" value="3" onClick={setOptionValue}/>
					<label className="rate"  htmlFor="three">3</label>
					<input className="hide" name="option" type="radio" id="four" value="4" onClick={setOptionValue}/>
					<label className="rate"  htmlFor="four">4</label>
					<input className="hide" name="option" type="radio" id="five" value="5" onClick={setOptionValue}/>
					<label className="rate"  htmlFor="five">5</label>
				</div>
				<button onClick={toggleView}>SUBMIT</button>
			</section>
		</Card>
	)
}

export default RateUsView;