import { Component } from '@angular/core';
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
  currentToUsd: any;
  currentToEur: any;
  resultList: any;
  numeral: any;
  firstOption: any;
  secondOption: any;

  constructor(private conversionService: ConversionService) {
    this.currentToUsd = [];
    this.currentToEur = [];
    this.resultList = [];
  }
  setFirstOption(e: any) {
    this.firstOption = e.target.value;
  }
  setSecondOption(e: any) {
    this.secondOption = e.target.value;
  }
  getNumberValue(e: any) {
    this.numeral = e.target.value;
  }
  ngOnInit() {
    this.conversionService
      .setConversion('UAH', 'EUR', 1)
      .subscribe((result: any) => {
        console.log(result);
        this.currentToEur = result;
      });
    this.conversionService
      .setConversion('UAH', 'USD', 1)
      .subscribe((result: any) => {
        console.log(result);
        this.currentToUsd = result;
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
