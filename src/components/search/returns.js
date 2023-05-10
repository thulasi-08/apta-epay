import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./search.css";
import $ from "jquery"
import DataRoutes from "../../data-base/return-routes";


const urlSearchParams = new URLSearchParams(window.location.search);
const userParams = Object.fromEntries(urlSearchParams.entries());

var traveltypeOneway = userParams.traveltype === 'oneway' ? true : false,
    traveltypeTwoway = userParams.traveltype === 'oneway' ? false : true,
    fromLocation = userParams.fromLocation ? userParams.fromLocation.split(",")[0]: '',
    toLocation = userParams.toLocation?  userParams.toLocation.split(",")[0] : '',
    startDate = userParams.startDate,
    returnDate = userParams.returnDate,
    adults = userParams.adults,
    children = userParams.children;
var priceSelected = false;

   


function RenderAvailableRouteComponents() {
    sessionStorage.setItem("stations", JSON.stringify(DataRoutes.Data.Stations));
    var cities = DataRoutes.Data.Stations,
        routes = DataRoutes.Data.Schedules;
    var html = [];
    for (var i = 0; i < routes.length; i++) {
        html.push(constructHTMLSelection(routes[i],i));
    }

    console.log(html);

    return html;   
}


function redirectToPage(link, data) {
    const params = new URLSearchParams(data);
    window.location = link + "?" + params;
}

function continueButton(e) {
    var price = e.currentTarget.getAttribute('data-price'),
    fareKey = e.currentTarget.getAttribute('data-farekey');
  if(!priceSelected){
    var paymentInfo = JSON.parse(sessionStorage.getItem("paymentInfo"));
     paymentInfo.return = [{
            "price": price,
            "fareKey": fareKey
         }]
    
    sessionStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
  }
   
    sessionStorage.setItem("userParams", JSON.stringify(userParams));

    redirectToPage("/pay-direct/tranfertypee/BOFEAMeDICVIS/KLIKJJeikm2390-02PLrs_erer", userParams);

}

function handleChange(e){

    priceSelected = true;
    var price = e.currentTarget.getAttribute('data-price'),
        fareKey = e.currentTarget.getAttribute('data-farekey');
        var paymentInfo = JSON.parse(sessionStorage.getItem("paymentInfo"));
        paymentInfo.return = [{
            "price": price,
            "fareKey": fareKey
         }]
    

        sessionStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));

}

function constructHTMLSelection(data,number) {
    var timeStart = new Date(data.DepartureDateTime);
    var timeEnd = new Date(data.ArrivalDateTime);

    var readbleTimeStart = timeStart.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    var readableTimeEnd = timeEnd.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    var radioName = "travelType"+ number;

    return (
        <Card>
            <Card.Header as="h5">Lurxury Bus</Card.Header>
            <Card.Body>
                <Card.Title>{toLocation} to {fromLocation} </Card.Title>
                <div className="row displayListRow">
                    <div className="col-sm-2">
                        <p>Start Time</p>
                        <div><br></br></div>
                        <strong>{readbleTimeStart}</strong>
                    </div>
                    <div className="col-sm-2">
                        <p>Arrival time</p>
                        <div><br></br></div>
                        <strong>{readableTimeEnd}</strong>
                    </div>
                    <div className="col-sm-2">
                        <p>Hours</p>
                        <div><br></br></div>
                        {data.Duration}</div>
                    <div className="col-sm-2">
                        <p>Economy</p>
                        <label className="radiobtn">
                            <input type="radio" name={radioName} value="economy" onClick={handleChange} defaultChecked data-price={data.OnlineFares.Economy.FareTotal} data-farekey={data.OnlineFares.EconomyExtra.FareKey} /> </label>
                        <h5>${data.OnlineFares.Economy.FareTotal}</h5>
                    </div>
                    <div className="col-sm-2">
                        <p>EconomyExtra</p>
                        <label className="radiobtn">
                            <input type="radio" name={radioName} value="economy-extra" onClick={handleChange}  data-scheduleNumber="600089" data-price={data.OnlineFares.EconomyExtra.FareTotal}
                                data-farekey={data.OnlineFares.EconomyExtra.FareKey} /></label>
                        <h5>${data.OnlineFares.EconomyExtra.FareTotal}</h5>
                    </div>
                    <div className="col-sm-2">
                        <p>Flexible</p>
                        <label className="radiobtn"><input type="radio" name={radioName} onClick={handleChange} value="flex" data-price={data.OnlineFares.Flexible.FareTotal} data-farekey={data.OnlineFares.Flexible.FareKey} /></label>
                        <h5>${data.OnlineFares.Flexible.FareTotal}</h5>

                    </div>
                </div>
                <Button variant="primary" onClick={continueButton} data-farekey={data.OnlineFares.EconomyExtra.FareKey} data-price={data.OnlineFares.Economy.FareTotal} data-radioname={radioName} type="button" className="continueButton" data-schedulekey={data.ScheduleKey} data-arrivalLocationCode={data.ArrivalLocationCode}
                    data-departureLocationCode={data.DepartureLocationCode}>Continue-&gt;</Button>
            </Card.Body>
        </Card>
    );



}


function ResultCarLayouts(data) {

    return (
        <Card>
            <Card.Header as="h5">Lurxury Bus</Card.Header>
            <Card.Body>
                <Card.Title>Hyderabd to Ongole </Card.Title>
                <Card.Text>Huderabda  -- Suryapet  ---- Guntur --- Ongole</Card.Text>
                <Button variant="primary">Continue-&gt;</Button>
            </Card.Body>
        </Card>
    );
}


function InitSearchLayout() {

    return (
        <div>


            <div className="row">
                <div className="col-lg-10 offset-lg-1 col-md-12  mb-3">
                    <form action="/search">
                        <div className="form-check offset-lg-1 form-check-inline mb-3">
                            <input className="form-check-input" type="radio" name="traveltype" id="inlineRadio1" value="oneway" checked={traveltypeOneway} readOnly />
                            <label className="form-check-label" htmlFor="inlineRadio1">One Way</label>
                        </div>
                        <div className="form-check form-check-inline mb-3">
                            <input className="form-check-input" type="radio" name="traveltype" id="inlineRadio2" checked={traveltypeTwoway} value="twoway" readOnly />
                            <label className="form-check-label" htmlFor="inlineRadio2">Round Trip</label>
                        </div>
                        <div className="row">
                            <div className="col col-xs-4 offset-lg-1 col-lg-2 mb-3">
                                <div className="d-flex flex-column">
                                    <label htmlFor="fromLocation" className="form-label">From</label>
                                    <input id="fromLocation" defaultValue={fromLocation} name="fromLocation" type="text" required className="form-control-lg mb-2" placeholder="eg: Mumbai" aria-label="From location" readOnly />
                                </div>
                            </div>
                            <div className="col col-xs-4 col-lg-2 mb-3">
                                <div className="d-flex flex-column">
                                    <label htmlFor="toLocation" className="form-label">To</label>
                                    <input id="toLocation" defaultValue={toLocation} name="toLocation" type="text" required className="form-control-lg mb-2" placeholder="eg: Hyderabad" aria-label="to destination" readOnly />
                                </div>
                            </div>
                            <div className="col col-xs-4 col-lg-2 mb-3">
                                <div className="d-flex flex-column">
                                    <label htmlFor="startDate" className="form-label">Departure</label>
                                    <input id="startDate" name="startDate" defaultValue={startDate} required className="form-control-lg mb-2" type="date" readOnly />
                                </div>
                            </div>
                            <div className="col col-xs-4 col-lg-2 mb-3">
                                <div className="d-flex flex-column">
                                    <label htmlFor="returnDate" className="form-label">Return</label>
                                    <input id="returnDate" name="returnDate" required defaultValue={returnDate} className="form-control-lg mb-2" type="date" readOnly />
                                </div>
                            </div>
                            <div className="col col-xs-4 col-lg-1 mb-3">
                                <div className="d-flex flex-column">
                                    <label className="form-label">Adults</label>
                                    <input type="number" defaultValue={adults} required className="form-control-lg mb-2" name="adults" min="1" max="5" aria-label="From location" readOnly />
                                </div>
                            </div>
                            <div className="col col-xs-4 col-lg-1 mb-3">
                                <div className="d-flex flex-column">
                                    <label className="form-label">Children</label>
                                    <input type="number" required defaultValue={children} className="form-control-lg mb-2" name="children" min="0" max="5" aria-label="to destination" readOnly />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-center col-lg-4 offset-lg-4 col-md-4 offset-md-4 mb-6">
                                <a className="mb-6" href="/booking">Edit selection</a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

function Returns() {
    // React States
    return (
        <div>
            <InitSearchLayout />
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <RenderAvailableRouteComponents />
                </div>
            </div>
        </div>
    );

}
export default Returns;