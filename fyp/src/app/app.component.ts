import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ParseService } from './services/parse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // private timeoutId: any;
  // private intervalId: any;
  // private remainingTime: number = 3000000; // For demonstration, 10 seconds
  // private sessionTimeout = 3000000; // For demonstration, 10 seconds
  // private routerSubscription!: Subscription;
  // private sessionKey = 'appSessionId'; // Key for storing session ID in localStorage

  constructor(private router: Router, private parseService: ParseService) {}

  ngOnInit() {
    // this.loadSessionId(); // Load session ID from localStorage

    // this.routerSubscription = this.router.events.pipe(
    //   filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    // ).subscribe((event: NavigationEnd) => {
    //   if (['/', '/login', '/signup'].includes(event.urlAfterRedirects)) {
    //     this.clearSessionTimeout();
    //   } else {
    //     this.setupSessionTimeout();
    //   }
    // });
    // this.setupSessionTimeout();
  }

  ngOnDestroy() {
    // this.clearSessionTimeout();
    // this.routerSubscription.unsubscribe();
  }



  // private setupSessionTimeout() {
  //   this.resetTimer();
  //   document.addEventListener('mousemove', this.resetTimer);
  //   document.addEventListener('keypress', this.resetTimer);
  //   document.addEventListener('click', this.resetTimer);
  // }

  // private clearSessionTimeout() {
  //   clearTimeout(this.timeoutId);
  //   clearInterval(this.intervalId);
  //   document.removeEventListener('mousemove', this.resetTimer);
  //   document.removeEventListener('keypress', this.resetTimer);
  //   document.removeEventListener('click', this.resetTimer);
  // }

  // private resetTimer = () => {
  //   clearTimeout(this.timeoutId);
  //   clearInterval(this.intervalId);
  //   this.remainingTime = this.sessionTimeout;
  //   this.timeoutId = setTimeout(() => this.endSession(), this.sessionTimeout);
  //   this.startInterval();
  // };

  // private startInterval() {
  //   this.intervalId = setInterval(() => {
  //     this.remainingTime -= 1000;
  //     console.log(`Remaining time: ${this.remainingTime / 1000} seconds`);
  //     console.log(localStorage['appSessionId']);
  //     if (this.remainingTime <= 0) {
  //       clearInterval(this.intervalId);
  //     }
  //   }, 1000);
  // }

  // private loadSessionId() {
  //   const sessionId = localStorage.getItem(this.sessionKey);
  //   if (sessionId) {
  //     this.sessionId(sessionId);
  //     console.log(this.sessionId(sessionId),"brilliant") // Only call sessionId if it's not null
  //   }
  // }
  
  // async endSession() {
  //   const sessionId = localStorage.getItem(this.sessionKey);
  //   if (sessionId) { // Ensure sessionId is not null before using it
  //     console.log('Session ended due to inactivity.');
  //     const status = await this.parseService.endSession(sessionId);
  //     if (status && status.success) {
  //       alert("session ended");
  //     }
  //     localStorage.removeItem(this.sessionKey);
  //     this.router.navigate(['/login']);
  //   } else {
  //     console.error('Session ID was null at end of session.');
  //   }
  // }

  // sessionId(sessionId: string) {
  //   localStorage.setItem(this.sessionKey, sessionId);
  // }
}
