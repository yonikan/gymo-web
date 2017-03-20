import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authRouting } from "./auth.routing";

import { AuthComponent }   from './auth.component';
import { AuthHeaderComponent } from "./shared/auth-header.component";
import { SigninComponent } from "./unprotected/signin.component";
import { SignupComponent } from "./unprotected/signup.component";
import { ProtectedComponent } from "./protected/protected.component";

import { AuthGuard } from "./shared/auth.guard";
import { AuthService } from "./shared/auth.service";


@NgModule({
    declarations: [
        AuthComponent,
        AuthHeaderComponent,
        SigninComponent,
        SignupComponent,
        ProtectedComponent
    ],
    imports: [
        CommonModule,
        authRouting
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class AuthModule {}