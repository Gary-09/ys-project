<template>
    <div class="home">
        <Navbar />
        <div class="content text-center m-5">
            <p class="main">Picture Perfect Memories Awaits!</p>
            <p class="sub-main">Unlock the Magic of Photography. Immerse Yourself in Our Studio's Captivating
                Atmosphere.
                Create Lasting Memories with Professional Portraits and Unforgettable Shots.</p>
        </div>
    </div>

    <div class="services">
        <div class="text-center">
            <p class="main">Our Services</p>
            <hr>
        </div>
        <br>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-1 col-md-4 col-lg-4">
                    <div class="card bg-transparent text-bg-dark" style="width: auto;">
                        <video class="video" ref="video" autoplay loop muted>
                            <source src="@/assets/images/prod-photo.mp4" type="video/mp4">
                        </video>
                        <div class="card-body">
                            <h5 class="card-title">Photography</h5>
                            <p class="card-text">At YourStudio, our Photography services turn moments into timeless art,
                                capturing the essence of each scene with creativity and precision. Let us frame your
                                world
                                and
                                preserve your memories with beauty and brilliance.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-1 col-md-4 col-lg-4">
                    <div class="card bg-transparent text-bg-dark" style="width: auto;">
                        <video class="video" ref="video" autoplay loop muted>
                            <source src="@/assets/images/prod-vid.mp4" type="video/mp4">
                        </video>
                        <div class="card-body">
                            <h5 class="card-title">Videography</h5>
                            <p class="card-text">Immerse yourself in cinematic brilliance with YourStudio's Videography
                                services. We blend cutting-edge technology and captivating narratives to transform your
                                moments
                                into visual masterpieces.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-1 col-md-4 col-lg-4">
                    <div class="card bg-transparent text-bg-dark" style="width: auto;">
                        <video class="video" ref="video" autoplay loop muted>
                            <source src="@/assets/images/prod-cin.mp4" type="video/mp4">
                        </video>
                        <div class="card-body">
                            <h5 class="card-title">Cinematography</h5>
                            <p class="card-text">Elevate your storytelling with YourStudio's Cinematography services.
                                Our
                                creative team brings cinematic perfection to every frame, turning ordinary stories into
                                extraordinary visual experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>