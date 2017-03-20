import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";

import { InfoComponent } from "./info/info.component";
import { FriendsComponent } from "./friends/friends.component";
import { SettingsComponent } from "./settings/settings.component";

const PROFILE_ROUTES: Routes = [
    { path: '', component: ProfileComponent, children: [
        { path: 'info', component: InfoComponent },
        { path: 'friends', component: FriendsComponent },
        { path: 'settings', component: SettingsComponent }
    ] }
];

export const profileRouting = RouterModule.forChild(PROFILE_ROUTES);
