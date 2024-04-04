const SearchProduct = () => {
    return (
        <>
            <section>
                <div class="container">
                    <div class="product-filter-main-wrapper float_left ptb-0 mt-4">
                        <div class="container">
                            <div class="heading-title about-text float_left d-grid  gap-2 d-sm-flex justify-content-sm-start">
                                <h5>Deliaura Specilals (Offers Available)</h5>
                                <img class="img-fluid" src="images/line-yal.png" alt="img" />
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-12">
                                    <div class="custom-tbs-content float_left">
                                        <div id="Beef" class="tabcontent" style="display: block;">
                                            <div class="product-new-filter-block">
                                                {/* fetching products */}
                                                <?php
                                                //calling products function
                                                cart();
                                                search_product();
                                                get_unique_categories();

                          ?>
                                            </div>
                                            <div class="center-btn">
                                                <a href="product-left-sidebar.html">View All</a>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchProduct;