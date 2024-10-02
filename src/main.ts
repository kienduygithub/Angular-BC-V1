import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './app/main.module';

platformBrowserDynamic().bootstrapModule(MainModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
