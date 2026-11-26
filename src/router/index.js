import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ReviewsPage from '../views/ReviewsPage.vue'
import WatchlistPage from '../views/WatchlistPage.vue'
import ArticleDetailPage from '../views/ArticleDetailPage.vue'
import LoginPage from '../views/LoginPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/reviews', name: 'reviews', component: ReviewsPage },
        { path: '/watchlist', name: 'watchlist', component: WatchlistPage },
        { path: '/article/:id', component: ArticleDetailPage },
        {path:'/login', name: 'login', component: LoginPage}
    ],
})

export default router