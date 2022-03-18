import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import store from '../store';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/AboutView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/LoginView.vue'),
        meta: {
            requireGuest: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/RegisterView.vue'),
        meta: {
            requireGuest: true
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () =>
            import ('../views/ProfileView.vue'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/pet',
        name: 'pet',
        component: () =>
            import ('../views/PetView.vue'),
        meta: {
            requireAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!store.getters.isLoggedIn) {
            //Redirect to the login page
            next('/login');
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requireGuest)) {
        if (store.getters.isLoggedIn) {
            //Redirect to the profile page
            next('/profile');
        } else {
            next();
        }
    } else {
        next()
    }
})

export default router