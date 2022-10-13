import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../conversion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentToUsd: number[];
  currentToEur: number[];

  constructor(private conversionService: ConversionService) {
    this.currentToUsd = [];
    this.currentToEur = [];
  }

  ngOnInit(): void {
    this.conversionService
      .setConversion('UAH', 'EUR', 1)
      .subscribe((result: any) => {
        console.log(result);
        this.currentToEur = result.conversion_result;
      });
    this.conversionService
      .setConversion('UAH', 'USD', 1)
      .subscribe((result: any) => {
        console.log(result);
        this.currentToUsd = result.conversion_result;
      });
  }
}
