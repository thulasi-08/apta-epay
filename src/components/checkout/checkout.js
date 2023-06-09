import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

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
    passengers = parseInt(userParams.adults)+ parseInt(userParams.children);
  

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
    if(traveltypeTwoway){
        totalPrice = parseInt(departurePrice + retrunPrice);
    }else{
        totalPrice = parseInt(departurePrice);
    }
    
}

var finalPrice = finalTotalPrice();

function finalTotalPrice(){

    return parseInt(totalPrice) * passengers;

}


function continueButton(e) {

    redirectToPage("/confirmation", userParams);
}

function redirectToPage(link, data) {
    const params = new URLSearchParams(data);
    window.location = link + "?" + params;
}

function CheckOut() {
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
                                    { traveltypeTwoway ?<tr>
                                        <th>Return</th>
                                        <th>{returnDate}</th>
                                    </tr> : ''}
                                    <tr>
                                        <th>Passengers</th>
                                        <th>{adults} Adult(s) and {children} Children(s) </th>
                                    </tr>
                                    <tr>
                                        <th>Departure Price</th>
                                        <th>₹{departurePrice}</th>
                                    </tr>
                                    { traveltypeTwoway ? <tr>
                                        <th>Return Price</th>
                                        <th>₹{retrunPrice}</th>
                                    </tr> : ''}
                                </thead>

                            </Table>
                        </Card.Body>
                    </Card>
                    <section style={{ paddingTop: "50px" }}>

                        <div class="col-md-5 col-lg-4 col-xl-4 offset-lg-1 offset-xl-2">
                            <div class="p-3" style={{ backgroundColor: "#eee" }}>
                                <span class="fw-bold">Order Recap</span>
                                <div class="d-flex justify-content-between mt-2">
                                    <span>Departure Price</span> <span>₹{departurePrice}</span>
                                </div>
                                { traveltypeTwoway ? <div class="d-flex justify-content-between mt-2">
                                    <span>Return Price</span> <span>₹{retrunPrice}</span>
                                </div>:''}
                                <hr />
                                <div class="d-flex justify-content-between mt-2">
                                    <span>Total </span> <span class="text-success">₹{totalPrice}(X {passengers})</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-7 col-lg-7 col-xl-6 mb-4 mb-md-0">
                                <h3 class="mb-0 text-success"><strong>₹{finalPrice}.00</strong></h3>
                                <h5 class="mb-3">Ticket Total Price</h5>
                                <div>


                                    <div class="d-flex flex-column mb-3">
                                        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                                            <input
                                                type="radio"
                                                class="btn-check"
                                                name="options"
                                                id="option1"
                                                autocomplete="off"
                                            />
                                            <label class="btn btn-outline-primary btn-lg" for="option1">
                                                <div class="d-flex justify-content-between">
                                                    <span>VISA </span>
                                                    <span>**** XXXX</span>
                                                </div>
                                            </label>

                                            <input
                                                type="radio"
                                                class="btn-check"
                                                name="options"
                                                id="option2"
                                                autocomplete="off"
                                                checked
                                            />
                                            <label class="btn btn-outline-primary btn-lg" for="option2">
                                                <div class="d-flex justify-content-between">
                                                    <span>MASTER CARD </span>
                                                    <span>**** XXXX</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="btn btn-success btn-lg btn-block" onClick={continueButton}>Proceed to payment</div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </div>


    );
}

export default CheckOut;