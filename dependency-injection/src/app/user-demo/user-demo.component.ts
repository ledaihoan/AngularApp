import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {
  userName: string;
  apiUrl: string
  constructor(private service: UserService, @Inject('API_URL') apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  ngOnInit() {
  }

  signIn(): void {
    this.service.setUser({'userName': 'Hoan Le'});
    this.userName = this.service.getUser().userName;
  }
}
