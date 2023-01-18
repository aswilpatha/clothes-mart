import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit,EventEmitter } from '@angular/core';
import { User } from '@core/user';


@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  logoutEvent = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {}

  logout(){
    this.logoutEvent.emit();
  }


}
