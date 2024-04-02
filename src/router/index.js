import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/MainPage.vue";
import ServicesView from "../views/ServicesPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/services",
            name: "serives",
            component: ServicesView,
        },
    ],
});

export default router;
