
import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import postView from '../views/postView.vue';
import cardView from '../views/cardView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/post/:id', component: postView },

    { path: '/card', component: cardView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },

    {
        path: '/admin',
        children: [
            {
                path: '',
                component: () => import('./views/admin/AdminHomeView.vue')
            }, {
                path: 'post',
                component: () => import('./views/admin/AdminPostView.vue'),
            },
            {
                path: 'post/:id',
                component: () => import('./views/admin/AdminPostView.vue'),
            }
        ],
    },

]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})
export default router