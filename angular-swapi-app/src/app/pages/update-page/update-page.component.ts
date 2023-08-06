import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss'],
})
export class UpdatePageComponent implements OnInit {
  readonly fakeCharacter = {
    name: 'Luke Skywalker',
    height: 172,
    gender: 'male',
    homeWorld: {
      name: 'Tatooine',
      population: 200000,
    },
  };

  constructor(private fb: FormBuilder) {}

  characterForm: FormGroup = this.fb.nonNullable.group({
    name: ['', Validators.required],
    height: [0, Validators.min(1)],
    gender: ['', Validators.required],
    homeWorld: this.fb.group({
      name: ['', Validators.required],
      population: [0, Validators.min(1)],
    }),
  });

  ngOnInit() {
    console.log('started');
  }

  heightControl(): FormControl {
    return this.characterForm.get('height') as FormControl;
  }

  height(): number {
    return this.characterForm.get('height').value as number;
  }

  isHeightValid(): boolean {
    return !this.characterForm.get('height')?.invalid;
  }

  gender(): string {
    return this.characterForm.get('gender')?.value as string;
  }

  fillPlanet(): void {
    this.characterForm.patchValue({
      homeWorld: {
        name: 'Tatooine',
        population: 200000,
      },
    });
  }

  fillPerson(): void {
    this.characterForm.patchValue({
      name: 'Luke Skywalker',
      gender: 'male',
      height: 172,
    });
  }

  populate(): void {
    this.characterForm.setValue(this.fakeCharacter);
  }

  onSubmit() {
    console.log('submitted');
    console.log(this.characterForm.value);
    console.log(this.characterForm.valid);
    console.log(this.characterForm.controls['name'].value);
    console.log(this.characterForm.controls['gender'].value);
    console.log(this.characterForm.controls['height'].value);
  }
}
