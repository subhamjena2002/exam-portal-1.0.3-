import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../login/login.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SignupComponent } from '../signup/signup.component';
import { ProgrammingComponent } from '../UserComponent/programming/programming.component';
import { GkComponent } from '../UserComponent/gk/gk.component';
import { AllComponent } from '../UserComponent/all/all.component';
import { InstructionComponent } from '../UserComponent/instruction/instruction.component';
import { ExamComponent } from '../UserComponent/exam/exam.component';
import { ResultComponent } from '../UserComponent/result/result.component';
import { AboutusComponent } from '../UserComponent/aboutus/aboutus.component';
import { AuthGuard } from '../authgurd/auth.guard';
import { NavAdminComponent } from '../nav-admin/nav-admin.component';
import { AnswerComponent } from '../answer/answer.component';
import { ShowResultsComponent } from '../show-results/show-results.component';

const routes: Routes = [
  { path: 'admin123', component: AdminComponent ,canActivate:[AuthGuard]},
  { path: 'user', component: UserComponent ,canActivate:[AuthGuard]},
  { path: 'admin', component: NavAdminComponent ,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'programming', component: ProgrammingComponent,canActivate:[AuthGuard] },
  { path: 'gk', component: GkComponent,canActivate:[AuthGuard] },
  { path: 'all', component: AllComponent,canActivate:[AuthGuard] },
  { path: 'answer', component: AnswerComponent,canActivate:[AuthGuard] },
  { path: 'instruction', component: InstructionComponent,canActivate:[AuthGuard] },
  { path: 'exam', component: ExamComponent ,canActivate:[AuthGuard]},
  { path: 'showresults', component: ShowResultsComponent ,canActivate:[AuthGuard]},
  { path: 'about us', component: AboutusComponent ,canActivate:[AuthGuard]},
  { path: 'result/:correct/:incorrect', component: ResultComponent,canActivate:[AuthGuard] },

  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
