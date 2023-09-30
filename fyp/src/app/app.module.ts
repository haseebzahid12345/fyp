import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccountComponent } from './account/account.component';
import { CodeverificationComponent } from './codeverification/codeverification.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EarningsComponent } from './earnings/earnings.component';
import { FilterstudentComponent } from './filterstudent/filterstudent.component';
import { FilterteachersComponent } from './filterteachers/filterteachers.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
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
import { CommunityandlegalComponent } from './communityandlegal/communityandlegal.component';
import { StartComponent } from './start/start.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UrgentoptionsComponent } from './urgentoptions/urgentoptions.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AccountComponent,
    CodeverificationComponent,
    ContactusComponent,
    EarningsComponent,
    FilterstudentComponent,
    FilterteachersComponent,
    FooterComponent,
    ForgetpasswordComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    NewpasswordComponent,
    NotificationsComponent,
    PaymentComponent,
    PaymentcardComponent,
    PreferencesComponent,
    ProfileteacherComponent,
    RequestforstudentsComponent,
    RequestforteachersComponent,
    SettingComponent,
    SettingteacherComponent,
    SignupComponent,
    CommunityandlegalComponent,
    StartComponent,
    UrgentoptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
