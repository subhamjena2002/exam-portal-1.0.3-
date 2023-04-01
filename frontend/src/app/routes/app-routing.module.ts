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

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: 'gk', component: GkComponent },
  { path: 'all', component: AllComponent },
  { path: 'instruction', component: InstructionComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'about us', component: AboutusComponent },
  { path: 'result/:correct/:incorrect', component: ResultComponent },

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
