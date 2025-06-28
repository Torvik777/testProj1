import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  private readonly authService = inject(AuthService);
  // form = new FormGroup({
  //   username: new FormControl(Validators.required),
  //   password: new FormControl(Validators.required)
  // });
  form = new FormGroup<{
    username: FormControl<string>,
    password: FormControl<string>
  }>({
    username: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    })
  })

  onSubmit(event: Event) {
    if (this.form.valid) {
      console.log(event);
      console.log(this.form.value);
      const payload = this.form.getRawValue();
      this.authService.login(payload).subscribe((data) => {
        console.log(data);
       });
    }

  }
}
