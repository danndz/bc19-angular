// snippet: a-service, a-service-httpclient

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movie.interface';

// interface HttpPayload<T> {
//   statusCode: number;
//   message: string;
//   content: T;
//   dateTime: string;
// }

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovieList(): Observable<Movies> {
    // return (
    //   this.http
    //     .get<HttpPayload<Movies>>(
    //       'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
    //     )
    //     // pipe: hàm nhận đầu vào là một Observable và trả ra một Observable khác
    //     // transform dữ liệu của observable trước khi trả ra cho observer bên ngoài component
    //     // .pipe(map((value) => value.content))
    // );

    // Đã xử lý baseUrl ở interceptor
    // Đã xử lý transform data ở interceptor
    return this.http.get<Movies>(
      'QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
    );
  }
}
