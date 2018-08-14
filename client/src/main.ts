import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './ts/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);