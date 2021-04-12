import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoView } from './poview.class';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  baseurl: string = "http://localhost:5000/api/vendors";

  constructor(
    private http: HttpClient
  ) { }
  
  getPo(vendId: number): Observable<PoView> {
    return this.http.get(`${this.baseurl}/poview/${vendId}`) as Observable<PoView>;
  }
  login(vendorname: string, password: string): Observable<Vendor> {
    return this.http.get(`${this.baseurl}/${vendorname}/${password}`) as Observable<Vendor>;
  }
  list(): Observable<Vendor[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>;
  }
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${this.baseurl}`, vendor) as Observable<Vendor>;
  }
  change(vendor: Vendor): Observable<any> {
    return this.http.put(`${this.baseurl}/${vendor.id}`, vendor) as Observable<any>;
  }
  remove(vendor: Vendor): Observable<Vendor> {
    return this.http.delete(`${this.baseurl}/${vendor.id}`) as Observable<Vendor>;
  }
}
