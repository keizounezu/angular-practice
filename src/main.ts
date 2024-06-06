import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

async function prepare() {
  const { worker } = await import('./mocks/browser')
  return await worker.start();
}

// woker起動であるprepare()が完了してからplatformBrowserDynamic().bootstrapModule(AppModule);を実行する
prepare()
  .then(() => {
    return platformBrowserDynamic().bootstrapModule(AppModule);
  })
  .catch((err) => console.error(err));
