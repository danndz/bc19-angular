import { Component, OnInit } from '@angular/core';
import { Movies } from '../core/models/movie.interface';
import { MovieService } from '../core/services/movie.service';

@Component({
  selector: 'app-movie',
  template: ` <h1 class="text-center">Movies</h1> `,
})
export class ExMovieComponent implements OnInit {
  movies: Movies = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // Gọi tới 1 hàm đồng bộ trong service
    // this.movies = this.movieService.getMovieList();

    // Gọi tới 1 hàm bất đồng bộ (Observable) trong service
    // Observable giống như là một function, do đó nó sẽ không được chạy cho tới khi ta invoke function đó
    // Để invoke Observable ta sẽ chấm tới 1 hàm subscribe, hàm này nhận vào một object gồm 3 callbacks (next, error, complete)
    this.movieService.getMovieList().subscribe({
      // next: Nhận giá trị được gởi tới từ Observable
      next: (value) => {
        console.log(value);
        this.movies = value;
      },
      // error: Nhận lỗi được gởi tới từ Observable, lưu ý chỉ có 1 trong 2 thằng error hoặc complete được chạy, khi một trong 2 thằng error hoặc complete được chạy => đồng nghĩa là Observable đã kết thúc
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('DONE');
      },
    });
  }
}
