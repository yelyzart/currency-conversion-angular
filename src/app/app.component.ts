import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConversionService } from './conversion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  choices = [
    { id: 1, name: 'UAH' },
    { id: 2, name: 'USD' },
    { id: 3, name: 'EUR' },
  ];

  resultList: any;
  numeral: number;
  firstOption: string;
  secondOption: string;

  reactiveForm = new FormGroup({
    firstOption: new FormControl(),
    secondOption: new FormControl(),
    number: new FormControl(),
  });

  constructor(private conversionService: ConversionService) {
    this.resultList = [];
    this.numeral = NaN;
    this.firstOption = '';
    this.secondOption = '';
  }

  ngOnInit() {
    this.reactiveForm.valueChanges.subscribe((selectedValue) => {
      this.firstOption = selectedValue.firstOption;
      this.secondOption = selectedValue.secondOption;
      this.numeral = selectedValue.number;
    });
  }
  setUp() {
    this.conversionService
      .setConversion(this.firstOption, this.secondOption, this.numeral)
      .subscribe((result: any) => {
        this.resultList = result;
      });
  }
}
