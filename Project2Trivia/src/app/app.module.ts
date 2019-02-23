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
import { PlayGameComponent } from './components/play-game/play-game.component';
import { PlayGameEndComponent } from './components/play-game-end/play-game-end.component';
//custom service imports
import { QuestionService } from './services/question.service';
import { RankService } from './services/rank.service';
import { LayoutImagesService } from './services/layout-images.service';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { QuestionStatisticsComponent } from './components/question-statistics/question-statistics.component';
import { ScoreStatisticsComponent } from './components/score-statistics/score-statistics.component';
import { GooglePieChartService } from './services/google-pie-charts.service';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestMenuComponent,
    LoginComponent,
    RegisterComponent,
    LeaderboardComponent,
    MainMenuComponent,
    EditProfileComponent,
    PlayGameComponent,
    PlayGameEndComponent,
    StatisticsComponent,
    QuestionStatisticsComponent,
    ScoreStatisticsComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    QuestionService,
    PlayGameComponent,
    RankService,
    LayoutImagesService,
    GooglePieChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
