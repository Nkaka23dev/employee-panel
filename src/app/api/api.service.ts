import { HttpClient, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private http = inject(HttpClient);
    private baseURL = 'http://localhost:7001/api/';

    get<T>(path: string): Observable<T> {
        return this.http.get<T>(`${this.baseURL}${path}`);
    }
    post<T>(path: string, data: T): Observable<T> {
        return this.http.post<T>(`${this.baseURL}${path}`, data);
    }
}
