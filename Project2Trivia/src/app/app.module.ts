import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//imported modules
//import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
//main module import
import { AppComponent } from './app.component';
//to enable app routing, going from one component to another
import { AppRoutingModule } from './app.routing.module';
//custom component imports
import { GuestMenuComponent } from './components/guest-menu/guest-menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CasualGameComponent } from './components/casual-game/casual-game.component';
import { CasualGameEndComponent } from './components/casual-game-end/casual-game-end.component';
//custom service imports
import { QuestionService } from './services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    GuestMenuComponent,
    LoginComponent,
    RegisterComponent,
    LeaderboardComponent,
    MainMenuComponent,
    CasualGameComponent,
    EditProfileComponent,
    CasualGameEndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    QuestionService,
    CasualGameComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
