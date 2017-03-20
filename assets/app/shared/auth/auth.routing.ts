import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";

import { SignupComponent } from "./unprotected/signup.component";
import { SigninComponent } from "./unprotected/signin.component";
import { ProtectedComponent } from "./protected/protected.component";
import { AuthGuard } from "./shared/auth.guard";


const AUTH_ROUTES: Routes = [
    { path: '', /*redirectTo: '/signup'*/ component: AuthComponent, children: [
        { path: 'signup', component: SignupComponent },
        { path: 'signin', component: SigninComponent },
        { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }
    ] }
];

export const authRouting = RouterModule.forRoot(AUTH_ROUTES);
