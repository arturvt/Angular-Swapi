import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface InputCheck {
  label: string;
  value: string;
  checked?: boolean;
}

@Component({
  selector: 'app-check-selector',
  templateUrl: './check-selector.component.html',
  styleUrls: ['./check-selector.component.scss'],
})
export class CheckSelectorComponent implements OnInit {
  @Output() selectedOption = new EventEmitter<string>();
  
  inputChecks: InputCheck[] = [
    {label: 'NO ID', value: 'NO_ID', checked: true},
    {label: 'ID Level 1.', value: 'LVL_1'},
    {label: 'ID Level 2', value: 'LVL_2'},
    {label: 'ID Level 3', value: 'LVL_3'}];


  updated = (updatedSelection: string[]) => {
    this.selectedOption.emit(updatedSelection[0]);
  }

  ngOnInit() {
    this.selectedOption.emit(this.inputChecks[0].value);
  }
}
