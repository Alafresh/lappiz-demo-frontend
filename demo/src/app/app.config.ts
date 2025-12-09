import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiConfiguration } from './core/api/api-configuration';
import { environment } from './environments/environment';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: ApiConfiguration,
      useFactory: () => {
        const cfg = new ApiConfiguration();
        (cfg as any).rootUrl = environment.baseUrl;
        return cfg;
      },
    },
  ],
};
