import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  template: ` <h1>Article Details: {{ slug }}</h1> `,
})
export class ArticleDetailComponent implements OnInit {
  slug = '';

  // bản chất của class ActivatedRoute trong angular gọi là service
  // để sử dụng các service của angular trong các component ta sẽ khai báo ở constructor
  constructor(private activatedRoute: ActivatedRoute) {}

  // ngOnInit là 1 hàm lifecycle của angular
  // ngOnInit được chạy sau khi các properties của component được khởi tạo và trước khi component render template
  // ngOnInit: dùng để call API, thực hiện các tác vụ bất đồng bộ, thao tác với router
  ngOnInit() {
    // Truy cập tới giá trị của các params trên url
    const { slug } = this.activatedRoute.snapshot.params;
    this.slug = slug;
    // Dùng giá trị params từ url để gọi API get detail
  }
}
