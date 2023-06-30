import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "../views/HomeViews.vue";
import NewPost from "../components/blog/NewPost.vue";
const routes = [
  {
    path: "/",
    name: "HomeBiews",
    component: HomeViews,
  },
  {
    path: "/post/:id",
    name: "NewPost",
    component: NewPost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
