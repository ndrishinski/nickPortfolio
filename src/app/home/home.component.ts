import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { DataService } from '../data.service';

import { Email } from '../email';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  namePass: boolean = true;
  emailPass: boolean = true;
  successMessage: boolean = false;
  safeURL: any = "https://www.youtube.com/embed/Vunlq-GrrSI";
  infoForm: any = {
    name: '',
    email: ''
  }

  constructor(public dom: DomSanitizer, public dataService: DataService) {
  }

  ngOnInit() {
  }

  model = new Email(2, 'Nick', 'ndrishinski@gmail.com');

  handleForm() {
    console.log(this.infoForm);

    if (/^[a-z ,.'-]+$/i.test(this.infoForm.name)) {
      this.namePass = true;
      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.infoForm.email)) {
        this.emailPass = true;
        this.dataService.addEmail(this.infoForm);
      }
      else {
        this.emailPass = false;
      }
    } else {
      this.namePass = false;;
    }

    if (this.emailPass && this.namePass) {
      this.successMessage = true;
      setTimeout(() => {
        this.infoForm = {
          name: '',
          email: ''
        }
      }, 1000)
    }
  }

}
