<template>
    <div class="home">
        <Navbar />
        <div class="content text-center m-5">
            <p class="title" >Picture Perfect Memories Awaits!</p>
            <p class="sub-main fw-light">Unlock the Magic of Photography. Immerse Yourself in Our Studio's Captivating
                Atmosphere.
                Create Lasting Memories with Professional Portraits and Unforgettable Shots.</p>
        </div>
    </div>

    <div class="body-bg">
        <div class="services">
            <br>
            <div class="text-center">
                <p class="title fs-1 fw-bold">OUR SERVICES</p>
                <hr>
                <br>
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-1 col-md-4 col-lg-4">
                        <div class="card bg-transparent text-bg-dark border-0" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
                            <video class="video" ref="video" autoplay loop muted>
                                <source src="@/assets/images/prod-photo.mp4" type="video/mp4">
                            </video>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">Photography</h5>
                                <p class="card-text">At YourStudio, we transform moments into timeless art through
                                    creative
                                    and precise Photography services. Let us frame your world and preserve memories
                                    beautifully.</p>
                                <button type="button" class="btn learn-more btn-outline-light">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1 col-md-4 col-lg-4">
                        <div class="card bg-transparent text-bg-dark border-0">
                            <video class="video" ref="video" autoplay loop muted>
                                <source src="@/assets/images/prod-vid.mp4" type="video/mp4">
                            </video>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">Videography</h5>
                                <p class="card-text">Dive into cinematic brilliance with YourStudio's Videography
                                    services,
                                    where cutting-edge technology and captivating narratives transform your moments into
                                    visual masterpieces.</p>
                                <button type="button" class="btn learn-more btn-outline-light">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1 col-md-4 col-lg-4" >
                        <div class="card bg-transparent text-bg-dark border-0" >
                            <video class="video" ref="video" autoplay loop muted>
                                <source src="@/assets/images/prod-cin.mp4" type="video/mp4">
                            </video>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">Cinematography</h5>
                                <p class="card-text">Elevate storytelling with YourStudio's Cinematography services. Our
                                    creative team brings cinematic perfection to every frame, turning stories into
                                    extraordinary visual experiences.</p>
                                <button type="button" class="btn learn-more btn-outline-light">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="comments">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style="height: 450px">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="text-center">
                                <p class="title fw-light">"YourStudio captured our special day flawlessly! From the
                                    stunning
                                    photos to the
                                    cinematic video, they exceeded our expectations. Professional, creative, and simply
                                    amazing!"</p>
                                <img src="@/assets/images/face-1.jpg">
                                <p class="fs-5 my-2">Sarah L.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="text-center">
                                <p class="title fw-light">"Absolutely blown away by the creativity and professionalism
                                    of
                                    YourStudio! Their
                                    attention to detail in both photography and videography is unparalleled. Highly
                                    recommend!"
                                </p>
                                <img src="@/assets/images/face-2.jpg">
                                <p class="fs-5 my-2">Andrew M.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="text-center">
                                <p class="title fw-light">"Incredible experience with YourStudio! They have a knack for
                                    capturing
                                    the essence
                                    of the moment in every shot. Our wedding photos and video are nothing short of
                                    magical. Thank you!"</p>
                                <img src="@/assets/images/face-3.jpg">
                                <p class="fs-5 my-2">Marcus F.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="about">
            <div class="flex-container">
                <div class="row">
                    <div class=" col-md-6 col-lg-5 d-none d-sm-block text-center">
                        <img src="@/assets/images/studio.jpg" alt="">
                    </div>
                    <div class="col-md-6 col-lg-7">
                        <p class="title fs-1 fw-bold" style="letter-spacing: 3px;">ABOUT US</p>
                        <p class="main fw-light">At YourStudio, we're the visual storytellers who turn moments into
                            memories. With an artful
                            blend of passion, professionalism, and technical finesse, we capture life's most precious
                            occasions in stunning detail. From weddings to corporate events, our team is dedicated to
                            delivering captivating photography, videography, and cinematography that leaves a lasting
                            impression. Trust YourStudio to transform your special moments into timeless treasures.</p>
                        <button type="button" class="btn learn-more btn-outline-light">Learn More</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5 col-lg-6  d-none d-sm-block">
                        <div class="background">
                            <img src="@/assets/images/bg-2.jpg" alt="">
                        </div>
                    </div>
                    <div class=" col-sm-12 col-md-4 col-lg-2 ">
                        <div class="form animation-duration-1000 animation-ease-in-out" v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }">
                            <div class="container">
                                <p class="title fs-2 fw-bold" style="letter-spacing: 3px;">Contact Us</p>
                                <p class="main fw-light">Ready to capture your special moments? Connect with YourStudio
                                    now! Whether it's a
                                    wedding, corporate event, or family gathering, our team is here to make your vision
                                    a reality. Reach out through our website to schedule a consultation and let's create
                                    something extraordinary together</p>
                                <button type="button" class="btn learn-more btn-dark">Contact Us <i
                                        class="bi bi-telegram"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="container" style=" padding: 15px">
                <div class="text-center">
                    <p class="fs-1 fw-light" style="letter-spacing: 3px;">YOURSTUDIO | PHOTOGRAPHY</p>
                    <hr
                        style="background-color: white; width: 100%; height: 2px; margin: 10px 0px 20px 0px !important;">
                    <p class="fw-bold" style="letter-spacing: 3px;">INFO@YOURSTUDIO.COM | +1 (555) 123-4567 | 1234 MAIN
                        STREET, ANYTOWN, AUSTRALIA</p>
                    <div class="button-container">
                        <button class="btn btn-outline-light"><i class="bi bi-facebook"></i>
                        </button>
                        <span style="margin: 0 10px;"></span>
                        <button class="btn btn-outline-light"><i class="bi bi-twitter"></i>
                        </button>
                        <span style="margin: 0 10px;"></span>
                        <button class="btn btn-outline-light"><i
                                class="bi bi-instagram"></i>
                        </button>
                    </div>
                    <p class="fw-light">© YourStuio Photography 2020. Website Design by Harold Limpiado</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
