import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
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
    this.http
      .get(
        'https://v6.exchangerate-api.com/v6/995a5a6bfa74591816964694/pair/UAH/USD/1'
      )
      .subscribe((result: any) => {
        this.currentToUsd = result;
      });
    this.http
      .get(
        'https://v6.exchangerate-api.com/v6/995a5a6bfa74591816964694/pair/UAH/EUR/1'
      )
      .subscribe((result: any) => {
        this.currentToEur = result;
      });
  }
  setConversion() {
    return this.http
      .get(
        `https://v6.exchangerate-api.com/v6/995a5a6bfa74591816964694/pair/${this.firstOption}/${this.secondOption}/${this.numeral}`
      )
      .subscribe((result: any) => {
        this.resultList = result;
      });
  }
}
