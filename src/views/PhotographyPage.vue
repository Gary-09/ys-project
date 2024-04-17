<template>
    <div class="photographyPage">
        <NavbarVue />
        <br>
        <div class="main-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 fs-1 fw-bold">
                        <p>CAPTURE. CREATE. INSPIRE.</p>
                        <p class="fw-light fs-3">Welcome to our dynamic photography team, where creativity, passion, and
                            precision converge to bring your vision to life!</p>
                        <button type="button" class="btn learn-more btn-outline-light">Get Started</button>
                    </div>
                    <div class="col-lg-5 text-center">
                        <video class="video" ref="video" autoplay loop muted>
                            <source src="../assets/images/photography/photo-vid.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <div class="teams">


            <div class="text-center">
                <p class="title fs-1 fw-bold">TEAMS</p>
                <hr>
                <br>
            </div>
            <div class="members">
                <div>
                    <div class="content">
                        <h2>Jane Doe</h2>
                        <span>Senior Photographer</span>
                    </div>
                </div>
                <div>
                    <div class="content">
                        <h2>Alex Smith</h2>
                        <span>Assistant Photographer</span>
                    </div>
                </div>
                <div>
                    <div class="content">
                        <h2>Emily New</h2>
                        <span>Producer/Production Coordinatorr</span>
                    </div>
                </div>
                <div>
                    <div class="content">
                        <h2>Lisa Boley</h2>
                        <span>Editor/Post-Production Specialist</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import NavbarVue from "@/components/Navbar.vue";
import Footer from '../components/Footer.vue'
</script>