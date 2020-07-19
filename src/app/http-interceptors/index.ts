import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { NoobintercepterService } from "../noobintercepter.service";

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoobintercepterService, multi: true }
];
