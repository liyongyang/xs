import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const defaultRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "home", hidden: true },
  },
  {
    path: "/goods",
    component: () => import("@/views/goods/index.vue"),
    meta: { title: "goods", hidden: true },
  },
  {
    path: "/goods/:sase",
    component: () => import("@/views/goods/components/index.vue"),
    meta: { title: "goods", hidden: true },
  },
  {
    path: "/goods/R275A",
    component: () => import("@/views/goods/components/R275A.vue"),
    meta: { title: "goods", hidden: true },
  },
  {
    path: "/goods/R17",
    component: () => import("@/views/goods/components/r17.vue"),
    meta: { title: "goods", hidden: true },
  },
  {
    path: "/goods/RS100",
    component: () => import("@/views/goods/components/rs100.vue"),
    meta: { title: "goods", hidden: true },
  },
  {
    path: "/goods/H920",
    component: () => import("@/views/goods/components/h920.vue"),
    meta: { title: "goods", hidden: true },
  },
  {
    path: "/goods/:goodType/product-params",
    component: () => import("@/views/goods/components/productParams/index.vue"),
    meta: { title: "goods", hidden: true },
  },
  {
    path: "/goods/:goodType/download",
    component: () => import("@/views/goods/components/download/index.vue"),
    meta: { title: "goods", hidden: true },
  },
  {
    path: "/goods/:goodType/qa",
    component: () => import("@/views/goods/components/qa/index.vue"),
    meta: { title: "goods", hidden: true },
  },
  {
    path: "/goods/:goodType/similar",
    component: () => import("@/views/goods/components/similar/index.vue"),
    meta: { title: "goods", hidden: true },
  },
  {
    path: "/service",
    component: () => import("@/views/myService/index.vue"),
    meta: { title: "service", hidden: true },
  },
  {
    path: "/technical",
    component: () => import("@/views/technical/index.vue"),
    meta: { title: "technical", hidden: true },
  },
  {
    path: "/CustomerCase",
    component: () => import("@/views/CustomerCase/index.vue"),
    meta: { title: "CustomerCase", hidden: true },
  },
  {
    path: "/CustomerCase/:case",
    component: () => import("@/views/CustomerCase/components/detailCase.vue"),
    meta: { title: "detailCase", hidden: true },
  },
  {
    path: "/aboutUs",
    component: () => import("@/views/aboutUs/index.vue"),
    meta: { title: "aboutUs", hidden: true },
  },
  {
    path: "/news",
    component: () => import("@/views/news/index.vue"),
    meta: { title: "aboutUs", hidden: true },
  },
  {
    path: "/expo",
    component: () => import("@/views/expo/index.vue"),
    meta: { title: "aboutUs", hidden: true },
  },
  {
    path: "/contactUs",
    component: () => import("@/views/contactUs/index.vue"),
    meta: { title: "aboutUs", hidden: true },
  },
  {
    path: "/report",
    component: () => import("@/views/report/index.vue"),
    meta: { title: "report", hidden: true },
  },
  {
    path: "/setup",
    component: () => import("@/views/Setup/index.vue"),
    meta: { title: "Setup", hidden: true },
  },
  {
    path: "/aeternityUI",
    component: () => import("@/views/aeternityUI/index.vue"),
    meta: { title: "aeternityUI", hidden: true },
  },
  {
    path: "/sys",
    component: () => import("@/views/sys/index.vue"),
    meta: { title: "sys", hidden: true },
  },
  {
    path: "/gsap",
    component: () => import("@/views/gsap/index.vue"),
    meta: { title: "gsap", hidden: true },
  },
  {
    path: "/detail/:id",
    component: () => import("@/views/detail/index.vue"),
    meta: { title: "aboutUs", hidden: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: defaultRoutes,
});

export default router;
