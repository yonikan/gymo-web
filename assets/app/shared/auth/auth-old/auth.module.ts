import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profileRouting } from "./profile.routing";

import { ProfileComponent } from "./profile.component";
import { InfoComponent } from "./info/info.component";
import { FriendsComponent } from "./friends/friends.component";
import { SettingsComponent } from "./settings/settings.component";


@NgModule({
    declarations: [
        ProfileComponent,
        InfoComponent,
        FriendsComponent,
        SettingsComponent
    ],
    imports: [
        CommonModule,
        profileRouting
    ],
    providers: []
})
export class ProfileModule {

}
