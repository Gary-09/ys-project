import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/MainPage.vue";
import PhotographyView from "../views/PhotographyPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/services/photography",
            name: "photography",
            component: PhotographyView,
        },
    ],
});

export default router;
