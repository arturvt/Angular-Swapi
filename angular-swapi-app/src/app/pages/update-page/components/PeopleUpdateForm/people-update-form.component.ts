import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-people-update-form',
  templateUrl: './people-update-form.component.html',
  styleUrls: ['./people-update-form.component.css'],
})
export class PeopleUpdateFormComponent implements OnInit {
  public people = new FormGroup({
    name: new FormControl('Sample Name', { nonNullable: true }),
    height: new FormControl(120),
    robot: new FormControl(false),
    address: new FormGroup({
      street: new FormControl('Power Street', { nonNullable: true }),
      city: new FormControl('Spring Ville', { nonNullable: true }),
      houseNumber: new FormControl(123),
    }),
    nickNames: new FormArray([new FormControl('Dude'), new FormControl('Mate')]),
  });

  ngOnInit(): void {
    console.log('Start');
  }

  addNickName(nickName: string) {
    this.people.controls.nickNames.push(new FormControl(nickName));
  }

  updateAddress(): void {
    this.people.controls.address.setValue({
      street: 'New Street',
      city: 'New City',
      houseNumber: 321,
    });
  }

  updateHouseNumber(): void {
    this.people.controls.address.patchValue({
      houseNumber: 456,
    });
  }
}
