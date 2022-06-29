import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <div class="w-50 mx-auto">
      <h1 class="text-center">Register</h1>
      <form [formGroup]="registerForm" (ngSubmit)="handleSubmit()">
        <div class="mb-3">
          <mat-form-field appearance="outline">
            <mat-label>Tài khoản</mat-label>
            <input type="text" matInput formControlName="taiKhoan" />
            <mat-error *ngIf="registerForm.get('taiKhoan')?.invalid">
              {{
                getErrorMessage('taiKhoan', {
                  required: 'Tài khoản không được để trống',
                  minlength: 'Tài khoản phải từ 5 đến 20 kí tự',
                  maxlength: 'Tài khoản phải từ 5 đến 20 kí tự'
                })
              }}
            </mat-error>
          </mat-form-field>
        </div>

        <div class="mb-3">
          <mat-form-field appearance="outline">
            <mat-label>Mật khẩu</mat-label>
            <input type="password" matInput formControlName="matKhau" />
            <mat-error *ngIf="registerForm.get('matKhau')?.invalid">
              {{
                getErrorMessage('matKhau', {
                  required: 'Mật khẩu không được để trống',
                  pattern: 'Mật khẩu không đúng định dạng'
                })
              }}
            </mat-error>
          </mat-form-field>
        </div>

        <div class="mb-3">
          <mat-form-field appearance="outline">
            <mat-label>Email</mat-label>
            <input type="email" matInput formControlName="email" />
            <mat-error *ngIf="registerForm.get('email')?.invalid">
              {{
                getErrorMessage('email', {
                  required: 'Email không được để trống',
                  email: 'Email không đúng định dạng'
                })
              }}
            </mat-error>
          </mat-form-field>
        </div>

        <div class="mb-3">
          <mat-form-field appearance="outline">
            <mat-label>Họ tên</mat-label>
            <input type="text" matInput formControlName="hoTen" />
            <mat-error *ngIf="registerForm.get('hoTen')?.invalid">
              {{
                getErrorMessage('hoTen', {
                  required: 'Họ tên không được để trống'
                })
              }}
            </mat-error>
          </mat-form-field>
        </div>

        <div class="mb-3">
          <mat-form-field appearance="outline">
            <mat-label>Số điện thoại</mat-label>
            <input type="text" matInput formControlName="soDt" />
            <mat-error *ngIf="registerForm.get('soDt')?.invalid">
              {{
                getErrorMessage('soDt', {
                  required: 'Số điện thoại không được để trống'
                })
              }}
            </mat-error>
          </mat-form-field>
        </div>

        <button class="btn btn-success">Đăng ký</button>
      </form>
    </div>
  `,
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Khởi tạo Form
    this.registerForm = this.fb.group({
      taiKhoan: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      matKhau: [
        '',
        [
          Validators.required,
          Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      hoTen: ['', [Validators.required]],
      soDt: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  handleSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);
  }

  getErrorMessage(control: string, validations: Record<string, string>) {
    const error = Object.entries(validations).reduce((result, [key, value]) => {
      // this.registerForm.get('taiKhoan')?.hasError('required')
      if (this.registerForm.get(control)?.hasError(key)) {
        result = value;
      }
      return result;
    }, '');

    return error;
  }
}
