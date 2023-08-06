import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
// import ProductsView from './views/ProductsView.vue'
import AgensGraphView from './views/AgensGraphView.vue'
import AGCloudView from './views/AGCloudView.vue'
import VisualizationView from './views/VisualizationView.vue'
import UseCasesView from './views/UseCasesView.vue'
import ServicesView from './views/ServicesView.vue'
import DocumentationView from './views/DocumentationView.vue'
import LearnView from './views/LearnView.vue'
import BlogView from './views/BlogView.vue'
import AboutUsView from './views/AboutUsView.vue'
import ContactView from './views/ContactView.vue'
import IRView from './views/IRView.vue'
import DownloadView from './views/DownloadView.vue'

const routes = [
    {
        name: "HomeView",
        component: HomeView,
        path: '/'
    },
    // {
    //     name: "ProductsView",
    //     component: ProductsView,
    //     path: '/products'
    // },
    {
        name: "AgensGraphView",
        component: AgensGraphView,
        path: '/agensgraph'
    },
    {
        name: "AGCloudView",
        component: AGCloudView,
        path: '/ag-cloud'
    },
    {
        name: "VisualizationView",
        component: VisualizationView,
        path: '/agensbrowser'
    },
    {
        name: "UseCasesView",
        component: UseCasesView,
        path: '/graph-database-use-case'
    },
    {
        name: "ServicesView",
        component: ServicesView,
        path: '/services'
    },
    {
        name: "DocumentationView",
        component: DocumentationView,
        path: '/documentation'
    },
    {
        name: "LearnView",
        component: LearnView,
        path: '/learn'
    },
    {
        name: "BlogView",
        component: BlogView,
        path: '/blog'
    },
    {
        name: "AboutUsView",
        component: AboutUsView,
        path: '/company'
    },
    {
        name: "ContactView",
        component: ContactView,
        path: '/contact'
    },
    {
        name: "IRView",
        component: IRView,
        path: '/ir-announcement'
    },
    {
        name: "DownloadView",
        component: DownloadView,
        path: '/agensgraph-downloads'
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(() =>{
    window.scrollTo({ top: 0, behavior: 'smooth', duration: 500 })
})

export default router;