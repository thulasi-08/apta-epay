import React, { useState } from "react";
import ReactDOM from "react-dom";
import bg from "./frame-1136.png"

import "./booking.css";

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${bg})`
};

window.booking = {};


const options = {
  componentRestrictions: { country: "in" },
  fields: ["address_components", "geometry", "icon", "name"],
  strictBounds: false,
  types: ['(cities)']
};


function onFocusFromLocMapInit(event) {
  console.log("map initiated");

  var autocompleteFrom = new window.google.maps.places.Autocomplete(document.getElementById('fromLocation'), options);

  autocompleteFrom.addListener('place_changed', function () {
    var place = autocompleteFrom.getPlace();
    console.log('You entered: ' + place.name);
    window.booking.fromLoc = place;
    return;
  });
}

function onFocusToLocMapInit(event) {

  var autocompleteTo = new window.google.maps.places.Autocomplete(document.getElementById('toLocation'), options);
  autocompleteTo.addListener('place_changed', function () {
    var place = autocompleteTo.getPlace();
    console.log('You entered: ' + place.name);
    window.booking.toLoc = place;
    return;
  });
}

function getDepartureDate() {
  const dateControl = document.querySelector('input[type="date"]');
  dateControl.value = '2017-06-01';
  console.log(dateControl.value); // prints "2017-06-01"
  console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
}

function getReturnDate() {

}

function getTotalPassengers() {
  console.log("22XX");
}

function handleSubmit(event) {
  alert('Your favorite flavor is: ' + this.state.value);
  event.preventDefault();
}

function handleChange(event) {
  this.setState({ value: event.target.value });
}

function getTravelType() {

}


function onBookingFromSubmit() {
    console.log("came here");
}



function BookingForm() {

  var curr = new Date();
  curr.setDate(curr.getDate());
  var dateDefaultValue = curr.toISOString().substring(0, 10);

  return (
    <form action="/search">
      <div className="form-check form-check-inline mb-3">
        <input className="form-check-input" type="radio" name="traveltype" id="inlineRadio1" value="oneway" defaultChecked />
        <label className="form-check-label" htmlFor="inlineRadio1">One Way</label>
      </div>
      <div className="form-check form-check-inline mb-3">
        <input className="form-check-input" type="radio" name="traveltype" id="inlineRadio2" value="twoway" />
        <label className="form-check-label" htmlFor="inlineRadio2">Round Trip</label>
      </div>
      <div className="row">
        <div className="col col-xs-4 col-lg-3 mb-3">
          <div className="d-flex flex-column">
            <label htmlFor="fromLocation" className="form-label">From</label>
            <input id="fromLocation" onFocus={onFocusFromLocMapInit} name="fromLocation" type="text" required className="form-control-lg mb-2" placeholder="eg: Mumbai" aria-label="From location" />
          </div>
        </div>
        <div className="col col-xs-4 col-lg-3 mb-3">
          <div className="d-flex flex-column">
            <label htmlFor="toLocation" className="form-label">To</label>
            <input id="toLocation" onFocus={onFocusToLocMapInit} name= "toLocation" type="text" required className="form-control-lg mb-2" placeholder="eg: Hyderabad" aria-label="to destination" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-xs-4 col-lg-3 mb-3">
          <div className="d-flex flex-column">
            <label htmlFor="startDate" className="form-label">Departure</label>
            <input id="startDate" onChange={getDepartureDate} name="startDate" required className="form-control-lg mb-2" type="date" defaultValue={dateDefaultValue} />
          </div>
        </div>
        <div className="col col-xs-4 col-lg-3 mb-3">
          <div className="d-flex flex-column">
            <label htmlFor="returnDate" className="form-label">Return</label>
            <input id="returnDate" onChange={getReturnDate} name="returnDate" required className="form-control-lg mb-2" type="date" defaultValue={dateDefaultValue} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-xs-4 col-lg-3">
          <div className="d-flex flex-column">
            <label required className="form-label">Passengers</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-xs-4 col-lg-3 mb-3">
          <div className="d-flex flex-column">
            <label className="form-label">Adults</label>
            <input type="number" required className="form-control-lg mb-2" name="adults" defaultValue={1} min="1" max="5"  aria-label="From location" />
          </div>
        </div>
        <div className="col col-xs-4 col-lg-3 mb-3">
          <div className="d-flex flex-column">
            <label className="form-label">Children</label>
            <input type="number" required className="form-control-lg mb-2" name="children" defaultValue={0} min="0" max="5"  aria-label="to destination" />
          </div>
        </div>
      </div>

      <button type="submit" onSubmit={onBookingFromSubmit} className="btn btn-primary">Search Routes</button>
    </form>
  );

}
function HeroImage() {
  return (
    <div>
      <div className="bg-image" style={sectionStyle} ></div>
      <div className="bg-text">
        <BookingForm />
      </div>
    </div>
  );
}

function Booking() {
  // React States
  //getTotalPassengers();
  return (
    <div>
      <HeroImage />
    </div>)

}
export default Booking;