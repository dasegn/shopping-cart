import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '@shop-cart/core/services/api.service';
import { User } from '@shop-cart/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public user: User;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getProfile();
  }

  ngOnDestroy() {
  }

  getProfile() {
    this.api.setEndpoint('endpoint')
    .setAction('/profile')
    .setReqMethod('GET')
    .makeCall().subscribe( (response: any) => {
      this.user = new User(response);
    });
  }
}
