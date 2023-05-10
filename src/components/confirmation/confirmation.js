import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import QRCode from 'react-qr-code';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const urlSearchParams = new URLSearchParams(window.location.search);
const userParams = Object.fromEntries(urlSearchParams.entries());

var traveltypeOneway = userParams.traveltype === 'oneway' ? true : false,
    traveltypeTwoway = userParams.traveltype === 'oneway' ? false : true,
    fromLocation = userParams.fromLocation ? userParams.fromLocation.split(",")[0] : '',
    toLocation = userParams.toLocation ? userParams.toLocation.split(",")[0] : '',
    startDate = userParams.startDate,
    returnDate = userParams.returnDate,
    adults = userParams.adults,
    children = userParams.children,
    passengers = parseInt(userParams.adults) + parseInt(userParams.children);


var paymentInfo = JSON.parse(sessionStorage.getItem("paymentInfo"));
var departurePrice;
var retrunPrice;
var totalPrice;
if (paymentInfo) {
    
    if (paymentInfo.departure) {
        departurePrice = parseInt(paymentInfo.departure[0].price)
    }
    if (paymentInfo.return) {
        retrunPrice = parseInt(paymentInfo.return[0].price)
    }
    if (traveltypeTwoway) {
        totalPrice = parseInt(departurePrice + retrunPrice);
    } else {
        totalPrice = parseInt(departurePrice);
    }

}


var finalPrice = finalTotalPrice();

function finalTotalPrice() {    
    return parseInt(totalPrice) * passengers;

}

function Confirmation() {

    const [value, setValue] = useState(JSON.stringify(userParams));
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256);
    return (
        <div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <Card>
                        <Card.Header as="h5">Lurxury Bus</Card.Header>
                        <Card.Body>
                            <Card.Title>Hyderabd to Ongole </Card.Title>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>Deaparture Location</th>
                                        <th>{fromLocation}</th>
                                    </tr>
                                    <tr>
                                        <th>Arrival Location</th>
                                        <th>{toLocation}</th>
                                    </tr>
                                    <tr>
                                        <th>Start Date</th>
                                        <th>{startDate}</th>
                                    </tr>
                                    {traveltypeTwoway ? <tr>
                                        <th>Return</th>
                                        <th>{returnDate}</th>
                                    </tr> : ''}
                                    <tr>
                                        <th>Passengers</th>
                                        <th>{adults} Adult(s) and {children} Children(s) </th>
                                    </tr>
                                    <tr>
                                        <th>Departure Price</th>
                                        <th>${departurePrice}</th>
                                    </tr>
                                    {traveltypeTwoway ? <tr>
                                        <th>Return Price</th>
                                        <th>${retrunPrice}</th>
                                    </tr> : ''}
                                </thead>

                            </Table>
                        </Card.Body>
                    </Card>
                    <section style={{ paddingTop: "50px" }}>
                        <div class="row">
                            <div class="col-md-7 col-lg-7 col-xl-6 mb-4 mb-md-0">

                                <h5 class="mb-3">Ticket Total Price</h5><h3 class="mb-0 text-success"><strong>${finalPrice}.00</strong></h3>
                            </div>

                        </div>
                    </section>
                    <h2> </h2>
                    <center> <QRCode
                        title="APTA-EPAY Confirmation"
                        value={value}
                        bgColor={back}
                        fgColor={fore}
                        size={size === '' ? 0 : size}
                    /></center>
                </div>
                <center style={{ padding: "30px", font: "20px" }}> <Link href="/booking"> Return to Home</Link>
                </center>
            </div>
        </div>
    );
}

export default Confirmation;