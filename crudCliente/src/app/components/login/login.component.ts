import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private toast: ToastrService) {}

  ngOnInit(): void {
    this.toast.info('Por gentilza realize o login!','Olá,');
  }
}
