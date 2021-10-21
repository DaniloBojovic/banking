import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private profileService: ProfileService, private fb: FormBuilder) {}

  ngOnInit() {
    // this.profileService.getProfile().subscribe(p => {
    //   this.profileForm = new FormGroup({
    //     tppName: new FormControl(p.tppName, [Validators.required, Validators.minLength(4)]),
    //     tppCode: new FormControl(p.tppCode, [Validators.required, Validators.minLength(4),
    //     Validators.maxLength(12)]),
    //     email: new FormControl(p.email, [Validators.required, Validators.email])
    //   });
    // });
    this.createForm();
  }

  createForm() {
    this.profileForm = this.fb.group({
      tppName: ['', Validators.required],
      tppCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    // this.profileService.UpdateProfile(...)
    console.warn('FROM SUBMIT', this.profileForm.value);
    this.profileService.updateProfile(this.profileForm.value);
  }
}
