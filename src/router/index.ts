import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        meta: {
            index: 0,
        },
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/About.vue"),
        meta: {
            index: 1,
        },
    },
    {
        path: "/todoList",
        name: "TodoList",
        component: () =>
            import(/* webpackChunkName: "todo" */ "@/views/TodoList.vue"),
        meta: {
            index: 2,
        },
    },
    {
        path: "/luckdraw",
        name: "LuckDraw",
        component: () =>
            import(/* webpackChunkName: "luckdraw" */ "@/views/LuckDraw.vue"),
        meta: {
            index: 2,
        },
    },
    {
        path: "/address/list",
        name: "Address",
        component: () =>
            import(
                /* webpackChunkName: "address" */ "@/views/address/AddressList"
            ),
        meta: {
            index: 2,
        },
    },
    {
        path: "/address/edit",
        name: "AddressEdit",
        component: () =>
            import(
                /* webpackChunkName: "address" */ "@/views/address/AddressEdit"
            ),
        meta: {
            index: 3,
        },
    },
    {
        path: "/chat/list",
        name: "Chat",
        component: () =>
            import(/* webpackChunkName: "chatpage" */ "@/views/chat"),
        meta: {
            index: 3,
        },
    },
    {
        path: "/ball",
        name: "Ball",
        component: () =>
            import(/* webpackChunkName: "todo" */ "@/views/pageDiv.vue"),
        meta: {
            index: 3,
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
