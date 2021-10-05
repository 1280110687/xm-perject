import { App } from "vue";
import Toast from "vant";
const vantComponents = [Toast];
export function registerVant(app: App): void {
  vantComponents.map((item: any) => {
    app.use(item);
  });
}
