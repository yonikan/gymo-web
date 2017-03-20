import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

// import { AuthModule } from "./shared/auth/auth.module";
import { ChatModule } from "./shared/chat/chat.module";
import { HomeModule } from "./home/home.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ProfileModule } from "./profile/profile.module";
import { ChartsModule } from "./charts/charts.module";
import { MembersModule } from "./members/members.module";
import { ContactModule } from "./contact/contact.module";



@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        // AuthModule,
        ChatModule,
        HomeModule,
        DashboardModule,
        ProfileModule,
        ChartsModule,
        MembersModule,
        ContactModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
