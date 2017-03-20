import { Routes } from "@angular/router";

// import { ProfileSComponent } from "./profile.component";
import { InfoComponent } from "./info/info.component";
import { FriendsComponent } from "./friends/friends.component";
import { SettingsComponent } from "./settings/settings.component";

export const PROFILE_ROUTES: Routes = [
  { path: '', component: friendsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'settings', component: SettingsComponent }
];
