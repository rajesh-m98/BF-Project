import React from "react"

const ProceedPay = () => {
    return (
        <>
            <div class="container mt-3">
                <div class="row">
                    <div class="col-lg-12">
                        <a href="payment.php"><i class="fa-solid fa-arrow-left" style={{color: '#000000'}}></i></a><span>   Payment Options</span>
                        <p>Item Total Rs490. <span class="text-warning">Savings of Rs 2</span></p>
                        <hr />

                        <strong>Deliaura</strong> <span>| Delivery In 69 Mins</span> <br />
                        <strong>Home</strong> <span>| 3/125, 3rd Block, Btm layout 2nd stage,Bangalore</span>
                    </div>
                </div>
            </div>

            <div class="container bg-warning">
                <div class="row">
                    <div class="col-lg-12 mt-4 mb-4 px-4">
                        <i class="fa-solid fa-check" style={{color: '#ffffff'}}></i> <span class="text-white">Save Upto Rs98 more with the payment offers</span>

                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <p class="mt-3">UPI</p>
                    <div class="col-lg-12">
                        <div class="card bg-white">
                            <div class="card-body">
                                <i class="fa-solid fa-plus mt-3 mb-3 px-3 border p-1" style={{color: '#ffdd00'}}></i><a href="#" class="nav-link text-dark">Add New UPI ID</a>
                                <p class="px-5">You Need To Register UPI ID</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="container mt-4">
                <div class="row">
                    <p class="mt-3">Credit and Debit Cards</p>
                    <div class="col-lg-12">
                        <div class="card bg-white">
                            <div class="card-body">
                                <i class="fa-solid fa-plus mt-3 mb-3 px-3 border p-1" style={{color: '#ffdd00'}}></i>  <span class="px-2">Add New Card</span>
                                <p class="px-5">Save and Pay Via Cards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="accordion" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <i class="fa-solid fa-wallet border p-1" style={{color: '#ffd500'}}></i> <p class="px-3 mt-2">Wallets</p> <br />
                                            <p class="mt-2">Paytm,Phonepe,Amazon Pay & More</p>
                                        </button>
                                    </h2>

                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <a href="googlepay" class="nav-link text-dark">Paytm</a>  <br />
                                            <a href="phonepe" class="nav-link text-dark">Phonepe</a> <br />
                                            <a href="Googlrpay" class="nav-link text-dark">Google Pay</a> <br />

                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <i class="fa-solid fa-wallet border p-1" style={{color: '#ffbb00'}}></i> <p class="mt-3 px-2">Pluxee/Sodexo</p>
                                            <p class="mt-3">Pluxee/Sodexo Card Valid only on food & Instamart</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <i class="fa-solid fa-building-columns border p-1" style={{color: '#ffae00'}}></i> <p class="px-2 mt-2">Net Banking</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProceedPay