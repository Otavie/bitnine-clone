import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
// import AboutUs from './components/AboutUs.vue'

const routes = [
    {
        name: "HomeView",
        component: HomeView,
        path: '/'
    }
    // {
    //     name: "AboutUs",
    //     component: AboutUs,
    //     path: '/about'
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(() =>{
    window.scrollTo({ top: 0, behavior: 'smooth', duration: 500 })
})

export default router;