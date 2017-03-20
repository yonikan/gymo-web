import { Routes, RouterModule } from "@angular/router";

// import { AuthComponent } from "./auth/auth.component";
import { ChatComponent } from "./shared/chat/chat.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { ChartsComponent } from "./charts/charts.component";
import { MembersComponent } from "./members/members.component";
import { ContactComponent } from "./contact/contact.component";


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: 'auth', component: AuthComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'charts', component: ChartsComponent },
    { path: 'members', component: MembersComponent },
    { path: 'contact', component: ContactComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
