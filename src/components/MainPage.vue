<template>
    <div class="home">
        <Navbar />
        <div class="content text-center m-5">
            <p class="main">Picture Perfect Memories Awaits!</p>
            <p class="sub-main">Unlock the Magic of Photography. Immerse Yourself in Our Studio's Captivating Atmosphere.
                Create Lasting Memories with Professional Portraits and Unforgettable Shots.</p>
        </div>
    </div>

    <div class="services">
        <div class="text-center">
            <p class="main">Our Services</p>
            <hr>
        </div>
        <br>
        <div class="d-flex justify-content-center">
            <div class="card bg-transparent text-bg-dark" style="width: 18rem;">
                <video class="video" ref="video" controls loop>
                    <source src="@/assets/images/prod-photo.mp4" type="video/mp4">
                </video>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
            </div>
            <div class="card bg-transparent text-bg-dark" style="width: 18rem;">
                <video class="video" ref="video" controls loop>
                    <source src="@/assets/images/prod-vid.mp4" type="video/mp4">
                </video>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
            </div>

            <div class="card bg-transparent text-bg-dark" style="width: 18rem;">
                <video class="video" ref="video" controls loop>
                    <source src="@/assets/images/prod-cin.mp4" type="video/mp4">
                </video>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>