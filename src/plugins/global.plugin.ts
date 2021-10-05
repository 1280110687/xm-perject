import { App, defineAsyncComponent } from "vue";
import Toast from "vant";
import { Loading } from "vant";
import { Button } from "vant";
import myButton from "@/components/globalComponents/ui-button/index.vue";
const vantComponents = [Toast, Loading, Button, myButton];
export function registerGlobalComponents(app: App): void {
  vantComponents.map((item: any) => {
    item.install = (app: any) => {
      app.component(item.name, item);
    };
    // app.component(`${item}`, item);
  });
}

// //vue3 基础组件的自动化全局注册
// const requireComponent = require.context(
//   // 其组件目录的相对路径
//   "./components",
//   // 是否查询其子目录
//   false,
//   // 匹配基础组件文件名的正则表达式
//   /\.vue$/
// );

// requireComponent.keys().forEach((fileName) => {
//   // 获取组件配置
//   const componentConfig = requireComponent(fileName);
//   // 全局注册组件
//   app.component(
//     componentConfig.default.name,
//     // 如果这个组件选项是通过 `export default` 导出的，
//     // 那么就会优先使用 `.default`，
//     // 否则回退到使用模块的根。
//     componentConfig.default || componentConfig
//   );
// });
