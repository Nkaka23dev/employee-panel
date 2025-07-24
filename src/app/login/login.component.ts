import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatPseudoCheckboxModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressBarModule,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    private authService = inject(AuthService);
    private route = inject(Router);
    isLoading = false;
    hidePassword = true;
    today = new Date();
    passwordHide = true;

    login() {
        this.authService.login();
        this.isLoading = true;
        setTimeout(() => {
            this.route.navigate(['/dashboard']);
        }, 500);
    }
}
