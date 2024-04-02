<template>
    <div class="navigation d-flex justify-content-center p-3">
        <nav class="navbar navbar-expand-lg bg-* rounded sticky-top" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="@/assets/images/logo.png" alt="" width="60"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 ">
                            
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/services" class="nav-link">Services</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pioneers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <router-view />
                    </ul>
                </div>
                <button type="button" class="btn btn-outline-light">Contact Us <i class="bi bi-telegram"></i></button>
            </div>
        </nav>
    </div>
</template>