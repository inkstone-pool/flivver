import { createRouter,createWebHashHistory} from "vue-router";
import Start from '../views/start.vue'
import play from '../views/play.vue'
const routes = [
    { path: '/', component: Start },
    { path: '/play', component: play },
  ]
  
export const router = createRouter({
history: createWebHashHistory(),
routes: routes
})