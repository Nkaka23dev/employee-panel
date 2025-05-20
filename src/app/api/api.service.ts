import { HttpClient, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ApiService{
    private http = inject(HttpClient);
    private baseURL = "http://localhost:5229/";

    get<T>(path: string){
      return this.http.get<T>(`${this.baseURL}${path}`);
    }
    post<T>(path:string, data: T){
      return this.http.post<T>(`${this.baseURL}${path}`, data); 
    }
}