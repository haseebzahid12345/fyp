import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccountComponent } from './account/account.component';
import { CodeverificationComponent } from './codeverification/codeverification.component';
import { CommunityandlegalComponent } from './communityandlegal/communityandlegal.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EarningsComponent } from './earnings/earnings.component';
import { FilterstudentComponent } from './filterstudent/filterstudent.component';
import { FilterteachersComponent } from './filterteachers/filterteachers.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentcardComponent } from './paymentcard/paymentcard.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ProfileteacherComponent } from './profileteacher/profileteacher.component';
import { RequestforstudentsComponent } from './requestforstudents/requestforstudents.component';
import { RequestforteachersComponent } from './requestforteachers/requestforteachers.component';
import { SettingComponent } from './setting/setting.component';
import { SettingteacherComponent } from './settingteacher/settingteacher.component';
import { SignupComponent } from './signup/signup.component';
import { UrgentoptionsComponent } from './urgentoptions/urgentoptions.component';
import { RateusComponent } from './rateus/rateus.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { StartComponent } from './start/start.component';
import { AboutappComponent } from './aboutapp/aboutapp.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AccountsettingComponent } from './accountsetting/accountsetting.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { MessageTableComponent } from './message-table/message-table.component';

const routes: Routes = [
  {
  path: 'chat-page/:id', 
  component: ChatPageComponent
  },
  {
    path: 'message-table', 
    component: MessageTableComponent
    },
  {
    path: 'card-detail/:id',
     component: CardDetailComponent 
  },
  {
    path: 'updateaccount',
    component:UpdateaccountComponent,
  },
  {
    path: 'accountsetting',
    component:AccountsettingComponent,
  },
  {
    path: 'favourites',
    component:FavoritesComponent,
  },
  {
    path: 'aboutapp',
    component:AboutappComponent,
  },
  {
    path: 'rateus',
    component:RateusComponent,
  },
  {
    path: 'policy',
    component:PrivacyPolicyComponent,
  },
  {
    path: 'urgentoptions',
    component:UrgentoptionsComponent,
  },
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: '',
    component:StartComponent,
  },
  {
    path: 'aboutus',
    component:AboutusComponent,
  },
  {
    path: 'account',
    component:AccountComponent,
  },
  {
    path: 'codeverification',
    component:CodeverificationComponent,
  },
  {
    path: 'communityandlegal',
    component:CommunityandlegalComponent,
  },
  {
    path: 'contactus',
    component:ContactusComponent,
  },
  {
    path: 'earning',
    component:EarningsComponent,
  },
  {
    path: 'filterstudent',
    component:FilterstudentComponent,
  },
  {
    path: 'filterteacher',
    component:FilterteachersComponent,
  },
  {
    path: 'forgetpassword',
    component:ForgetpasswordComponent,
  },
  {
    path: 'header',
    component:HeaderComponent,
  },
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'newpassword',
    component:NewpasswordComponent,
  },
  {
    path: 'notification',
    component:NotificationsComponent,
  },
  {
    path: 'payment',
    component:PaymentComponent,
  },
  {
    path: 'paymentcard',
    component:PaymentcardComponent,
  },
  {
    path: 'preferences',
    component:PreferencesComponent,
  },
  {
    path: 'profileteacher',
    component:ProfileteacherComponent,
  },
  {
    path: 'requestforstudents',
    component:RequestforstudentsComponent,
  },
  {
    path: 'requestforteachers',
    component:RequestforteachersComponent,
  },
  {
    path: 'setting',
    component:SettingComponent,
  },
  {
    path: 'settingteacher',
    component:SettingteacherComponent,
  },
  {
    path: 'signup',
    component:SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
