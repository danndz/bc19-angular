import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

// template driven form

@Component({
  selector: 'app-login',
  template: `
    <div class="w-50 mx-auto">
      <h1 class="text-center">Login</h1>

      <!-- Khi Form submit sẽ kích hoạt event ngSubmit và gọi tới hàm handleSubmit  -->
      <form #loginForm="ngForm" (ngSubmit)="handleSubmit()">
        <div class="mb-3">
          <label for="taiKhoan" class="form-label">Tài Khoản</label>
          <input
            type="text"
            class="form-control"
            id="taiKhoan"
            name="taiKhoan"
            ngModel
            #taiKhoan="ngModel"
            required
            minlength="5"
            maxlength="20"
          />
          <div
            *ngIf="taiKhoan.invalid && (taiKhoan.dirty || taiKhoan.touched)"
            class="alert alert-danger"
          >
            <span *ngIf="taiKhoan.errors?.['required']">
              Tài khoản không được để trống
            </span>
            <span *ngIf="taiKhoan.errors?.['minlength']">
              Tài khoản phải từ 5 đến 20 kí tự
            </span>
          </div>
        </div>

        <div class="mb-3">
          <mat-form-field appearance="outline">
            <mat-label>Mật khẩu</mat-label>
            <input
              type="text"
              matInput
              name="matKhau"
              ngModel
              #matKhau="ngModel"
              required
              pattern=".{5,}"
            />
            <mat-error *ngIf="matKhau.invalid">
              <span *ngIf="matKhau.errors?.['required']">
                Mật khẩu không được để trống
              </span>
              <span *ngIf="matKhau.errors?.['pattern']">
                Mật khẩu không đúng định dạng
              </span>
            </mat-error>
          </mat-form-field>
        </div>

        <!-- <div class="mb-3">
          <label for="matKhau" class="form-label">Mật Khẩu</label>
          <input
            type="password"
            class="form-control"
            id="matKhau"
            name="matKhau"
            ngModel
            required
          />
        </div> -->

        <button class="btn btn-success">Đăng Nhập</button>
      </form>
    </div>
  `,
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  handleSubmit() {
    // Kiểm tra xem form đã hợp lệ hay chưa trước khi submit
    if (this.loginForm.invalid) {
      alert('Invalid');
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (value) => {
        // Đăng nhập thành công
        // B1: Lưu thông tin xuống localstorage
        localStorage.setItem('user', JSON.stringify(value));
        // B2: Redirect
        this.router.navigateByUrl('/movies');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
