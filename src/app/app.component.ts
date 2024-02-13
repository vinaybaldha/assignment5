import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValodator } from './custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectName: [
        null,
        [Validators.required, CustomValodator.invalidProjectName],
        CustomValodator.asyncInvalidProjectName,
      ],
      email: [null, [Validators.required, Validators.email]],
      projectStatus: ['critical'],
    });
  }
  onsubmit() {
    console.log(this.projectForm.value);
  }
}
