function Indexotp() {
    return (
        <>
            <div class="container-fluid mt-3">
                <div class="card" style="height:590px;">
                    <div class="card-header text-center">
                        <h3>PHP Registration Form with Mobile OTP Verification Example - LaravelTuts.com</h3>
                    </div>
                    <div class="card-body">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <a class="navbar-brand " href="#">LaravelTuts</a>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">about us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">contect us</a>
                                    </li>
                                </ul>
                            </div>
                            <form class="justify-content-end">
                                <?php
                                if (isset($_SESSION['logged_in']) && $_SESSION['logged_in']==TRUE) {
                                    echo "<a href='logout.php' class='btn btn-danger'>LOGOUT</a>";
                            }else{
                                    echo "<button type='button' class='btn btn-success m-1' data-bs-toggle  ='modal' data-bs-target='#loginModal'>Login</button>
                                <button type='button' class='btn btn-danger m-1' data-bs-toggle='modal' data-bs-target='#RegisterModal'>Register</button>";
                            }
                         ?>
                            </form>
                        </nav>
                        <?php
                        if (isset($_SESSION['logged_in']) && $_SESSION['logged_in']==TRUE) {
                            echo "<h1 class='text-center mt-5 pt-5'>Welcome to this LaravelTuts.com, you are verify!</h1>";
                        }
                    ?>
                    </div>
                </div>

                <div class="modal fade" id="loginModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="loginModalLabel">Login</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form action="registration.php" method="post">
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label>Mobile : </label>
                                        <input type="number" name="moblie_number" class="form-control" placeholder="Mobile" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Password : </label>
                                        <input type="password" name="password" class="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <input type="submit" name="login" class="btn btn-primary" />
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="RegisterModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="RegisterModalLabel">Register</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form action="registration.php" method="post">
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label>Full Name : </label>
                                        <input type="text" name="fullName" class="form-control" placeholder="Full Name" />
                                    </div>
                                    <div class="mb-3">
                                        <label>User Name : </label>
                                        <input type="text" name="username" class="form-control" placeholder="User Name" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Mobile : </label>
                                        <input type="number" placeholder="Mobile number" name="number" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Password : </label>
                                        <input type="password" name="password" class="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <input type="submit" name="register" class="btn btn-primary" />
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

