import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import { createHead } from "@vueuse/head";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";
// 适配个浏览器样式;
import "normalize.css/normalize.css";
// 转 rem
import resizeFontsize from "@/common/utils/rem/rem";
resizeFontsize();

import { registerVant } from "./plugins/vant.plugin";

const AsyncComp = defineAsyncComponent(
    () => import("@/components/globalComponents/ui-button/index.vue"),
);

const app = createApp(App).use(store).use(router);
// 全局組件註冊
app.component("async-component", AsyncComp);
const head = createHead();
app.use(head);
registerVant(app);
app.mount("#app");
