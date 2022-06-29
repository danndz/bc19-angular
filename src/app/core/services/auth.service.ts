import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(values: any): Observable<any> {
    return this.http.post<any>('QuanLyNguoiDung/DangNhap', values);
  }

  register(values: any): Observable<any> {
    return this.http.post<any>('QuanLyNguoiDung/DangKy', {
      ...values,
      maNhom: 'GP01',
    });
  }
}
