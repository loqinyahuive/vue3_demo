
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

import { createRouter, createWebHistory } from "vue-router";
import list from "/@/views/list.vue";
import ungroupList from "/@/views/ungroupList.vue";

const routes = [
    {
        path: "/",
        component: () => list,
    },
    {
        path: "/ungroupList",
        component: () => ungroupList,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});