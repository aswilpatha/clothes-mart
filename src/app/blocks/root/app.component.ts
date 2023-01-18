import { OnInit } from "@angular/core";
import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthService } from "../../core/auth/auth.service";
import { User } from "../../core/user";

@Component({
  selector: "pm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy, OnInit {
  user: Observable<User>;
  userSubscription: Subscription;
  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.authservice.user;
    this.userSubscription = this.authservice.findMe().subscribe((user) => (this.user = user));
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(["/"]);
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
