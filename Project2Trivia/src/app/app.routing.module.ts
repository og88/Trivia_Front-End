import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { GuestMenuComponent } from './components/guest-menu/guest-menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CasualGameComponent } from './components/casual-game/casual-game.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CasualGameEndComponent } from './components/casual-game-end/casual-game-end.component';

const routes: Routes = [
{
    //sets the default path on startup
    path: "",
    redirectTo: "/guest-menu",
    pathMatch: "full"
},
{
    path: "guest-menu",
    component: GuestMenuComponent
},
{
    path: "login",
    component: LoginComponent
},
{
    path: "register",
    component: RegisterComponent
},
{
    path: "leaderboard",
    component: LeaderboardComponent
},
{
    path: "main-menu",
    component: MainMenuComponent
},
{
    path: "edit-profile",
    component: EditProfileComponent
},
{
    path: "casual-game",
    component: CasualGameComponent
},
{
    path: "casual-game-end",
    component: CasualGameEndComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}