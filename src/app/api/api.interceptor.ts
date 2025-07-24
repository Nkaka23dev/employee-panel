import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const cloned = req.clone({
            setHeaders: {
                chek: 'Eric header',
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        return next.handle(cloned);
    }
}
