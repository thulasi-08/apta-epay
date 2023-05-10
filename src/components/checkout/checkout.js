import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function spinner() {

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
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <section style={{ paddingTop: "50px" }}>
                        <div class="d-flex justify-content-between align-items-center mb-5">
                            <div class="d-flex flex-row align-items-center">
                                <h4 class="text-uppercase mt-1">Eligible</h4>
                                <span class="ms-2 me-3">Pay</span>
                            </div>
                            <a href="#!">Cancel and return to the website</a>
                        </div>

                        <div class="row">
                            <div class="col-md-7 col-lg-7 col-xl-6 mb-4 mb-md-0">
                                <h5 class="mb-0 text-success">$85.00</h5>
                                <h5 class="mb-3">Diabites Pump & Supplies</h5>
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
                                    
                                    <div class="d-flex justify-content-center">
                                        <div class="spinner-border" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    <div class="btn btn-success btn-lg btn-block">Proceed to payment</div>
                                </div>
                            </div>
                            <div class="col-md-5 col-lg-4 col-xl-4 offset-lg-1 offset-xl-2">
                                <div class="p-3" style={{ backgroundColor: "#eee" }}>
                                    <span class="fw-bold">Order Recap</span>
                                    <div class="d-flex justify-content-between mt-2">
                                        <span>contracted Price</span> <span>$186.86</span>
                                    </div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <span>Amount Deductible</span> <span>$0.0</span>
                                    </div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <span>Coinsurance(0%)</span> <span>+ $0.0</span>
                                    </div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <span>Copayment </span> <span>+ 40.00</span>
                                    </div>
                                    <hr />
                                    <div class="d-flex justify-content-between mt-2">
                                        <span class="lh-sm"
                                        >Total Deductible,<br />
                                            Coinsurance and copay
                                        </span>
                                        <span>$40.00</span>
                                    </div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <span class="lh-sm"
                                        >Maximum out-of-pocket <br />
                                            on insurance policy</span
                                        >
                                        <span>$40.00</span>
                                    </div>
                                    <hr />
                                    <div class="d-flex justify-content-between mt-2">
                                        <span>Insurance Responsibility </span> <span>$71.76</span>
                                    </div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <span>Patient Balance </span> <span>$13.24</span>
                                    </div>
                                    <hr />
                                    <div class="d-flex justify-content-between mt-2">
                                        <span>Total </span> <span class="text-success">$85.00</span>
                                    </div>
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