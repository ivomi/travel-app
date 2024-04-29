import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withRouterConfig } from '@angular/router';
import { routes } from '@app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    // provideClientHydration(),
    provideHttpClient(withFetch()),
    provideRouter(routes, withRouterConfig({ paramsInheritanceStrategy: 'always' })),
  ],
};
