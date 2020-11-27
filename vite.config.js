import { resolve } from "path";

function pathResolve(dir) {
    return resolve(__dirname, ".", dir);
}

module.exports = {
    base: "/start-vue3/",
    assetsDir: "",
    alias: {
        "/@/": pathResolve("src"),
    },
    optimizeDeps: {
        include: ["@ant-design/icons-vue"],
    },
};