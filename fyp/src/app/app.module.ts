import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
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
import { StartComponent } from './start/start.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UrgentoptionsComponent } from './urgentoptions/urgentoptions.component';
import { RateusComponent } from './rateus/rateus.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutappComponent } from './aboutapp/aboutapp.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AccountsettingComponent } from './accountsetting/accountsetting.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { FormsModule } from '@angular/forms';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { MessageTableComponent } from './message-table/message-table.component';
import { SafeResourceUrlPipe } from './safe-resource-url.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersComponent } from './orders/orders.component';
import { HistoryOrdersComponent } from './history-orders/history-orders.component';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './transaction/transaction.component';
import { BusinessComponent } from './business/business.component';
import { WritingTranslationComponent } from './writing-translation/writing-translation.component';
import { ProgrammingTechComponent } from './programming-tech/programming-tech.component';
import { VideoAnimationComponent } from './video-animation/video-animation.component';
import { MusicAudioComponent } from './music-audio/music-audio.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { EducationLearningComponent } from './education-learning/education-learning.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
// import { CategoryComponent } from './category/category.component';
import { CategoryDisplayComponent } from './category-display/category-display.component';
import { BackHeaderComponent } from './back-header/back-header.component';
import { IncompleteOrdersComponent } from './incomplete-orders/incomplete-orders.component';
import { CancelOrdersComponent } from './cancel-orders/cancel-orders.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { GooglePayComponent } from './google-pay/google-pay.component';

@NgModule({
  declarations: [
    
    GooglePayComponent,
    SearchResultComponent,
    IncompleteOrdersComponent,
    CancelOrdersComponent,
    BackHeaderComponent,
    CategoryDisplayComponent,
    WritingTranslationComponent,
    ProgrammingTechComponent,
    VideoAnimationComponent,
    MusicAudioComponent,
    LifestyleComponent,
    EducationLearningComponent,
    DigitalMarketingComponent,
    BusinessComponent,
    CurrentOrdersComponent,
    HistoryOrdersComponent,
    OrdersComponent,
    AppComponent,
    AboutusComponent,
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
    StartComponent,
    UrgentoptionsComponent,
    RateusComponent,
    PrivacyPolicyComponent,
    AboutappComponent,
    FavoritesComponent,
    AccountsettingComponent,
    DeleteaccountComponent,
    UpdateaccountComponent,
    CardDetailComponent,
    ChatPageComponent,
    MessageTableComponent,
    SafeResourceUrlPipe,
   
  

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    GooglePayButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [DatePipe ,HomeComponent,CardDetailComponent,TransactionComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
 

})
export class AppModule { 

}
