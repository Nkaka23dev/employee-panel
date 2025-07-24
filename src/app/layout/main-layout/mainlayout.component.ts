import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import {
    Router,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    RouterOutlet,
} from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-mainlayout',
    standalone: true,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        AsyncPipe,
        RouterLinkActive,
        RouterLink,
        RouterOutlet,
        MatCardModule,
        RouterModule,
    ],
    templateUrl: './mainlayout.component.html',
    styleUrl: './mainlayout.component.scss',
})
export class MainlayoutComponent {
    private breakpointObserver = inject(BreakpointObserver);
    private authService = inject(AuthService);
    private route = inject(Router);

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(
            map((result) => result.matches),
            shareReplay()
        );
    logout() {
        this.authService.logout();
        this.route.navigate(['/login']);
    }
}
