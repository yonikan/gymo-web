import { Routes } from "@angular/router";

// import { AuthComponent } from "./auth.component";

import { SignupComponent } from "./unprotected/signup.component";
import { SigninComponent } from "./unprotected/signin.component";
import { ProtectedComponent } from "./protected/protected.component";


export const AUTH_ROUTES: Routes = [
  { path: '', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }
];
