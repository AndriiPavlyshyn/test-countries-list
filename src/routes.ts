import CountriesListPage                  from '@/pages/countries-list-page.vue'
import HomePage                           from '@/pages/home-page.vue'
import NotFoundPage                       from '@/pages/not-found-page.vue'
import { useAuth0 }                       from '@auth0/auth0-vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/list',
    name: 'CountryList',
    component: CountriesListPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (isLoading.value) {
    const waitForAuth = new Promise((resolve) => {
      const interval = setInterval(() => {
        if (!isLoading.value) {
          clearInterval(interval);
          resolve(true);
        }
      }, 50);
    });
    await waitForAuth;
  }

  if (to.path === '/' && isAuthenticated.value) {
    next('/list');
    return;
  }

  if (to.meta.requiresAuth && !isAuthenticated.value) {
    await loginWithRedirect({
      appState: { targetUrl: to.fullPath },
    });
    return;
  }

  next();
});

export default router;
