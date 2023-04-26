import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  responseUrl4: any;
  priceStock: any;
  searchStock: any;
  optionsStock: any;

  /*   dataStock: {
    address1: string;
    currentPrice: number;
    targetHighPrice: number;
    volume: number;
    website: string;
  } = {
    address1: '',
    currentPrice: 0,
    targetHighPrice: 0,
    volume: 0,
    website: '',
  };

  dataStock2: {
    exchDisp: string;
    exchange: string;
    industry: string;
    longname: string;
    sector: string;
    shortname: string;
    symbol: string;
  } = {
    exchDisp: '',
    exchange: '',
    industry: '',
    longname: '',
    sector: '',
    shortname: '',
    symbol: '',
  };
 */
  constructor(private httpClient: HttpClient) {
    // this.url4();
    this.url5();
  }

  /*   url4() {
    const self = this;
    const data = 'symbol=NKE.MX';

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        const response = JSON.parse(this.responseText);
        console.log('url4 data: ', response.data);
        self.dataStock = response.data;
        console.log('url4 dataStockata: ', self.dataStock);

        self.responseUrl4 = JSON.parse(this.responseText);
        console.log('url4 responseUrl4: ', self.responseUrl4);
      }
    });

    xhr.open(
      'POST',
      'https://yfinance-stock-market-data.p.rapidapi.com/stock-info'
    );
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader(
      'X-RapidAPI-Key',
      'e8070cb7dfmsh15cae0beb84cecdp19631cjsnc90c645293a3'
    );
    xhr.setRequestHeader(
      'X-RapidAPI-Host',
      'yfinance-stock-market-data.p.rapidapi.com'
    );

    xhr.send(data);
  }
 */
  price() {
    const self = this;
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        self.priceStock = JSON.parse(this.responseText);
      }
    });

    xhr.open('GET', 'https://yahoo-finance127.p.rapidapi.com/price/NKE.MX ');
    xhr.setRequestHeader('content-type', 'application/octet-stream');
    xhr.setRequestHeader(
      'X-RapidAPI-Key',
      'e8070cb7dfmsh15cae0beb84cecdp19631cjsnc90c645293a3'
    );
    xhr.setRequestHeader('X-RapidAPI-Host', 'yahoo-finance127.p.rapidapi.com');

    xhr.send(data);
  }

  search() {
    const self = this;
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        self.searchStock = JSON.parse(this.responseText);
      }
    });

    xhr.open('GET', 'https://yahoo-finance127.p.rapidapi.com/search/NKE.MX ');
    xhr.setRequestHeader('content-type', 'application/octet-stream');
    xhr.setRequestHeader(
      'X-RapidAPI-Key',
      'e8070cb7dfmsh15cae0beb84cecdp19631cjsnc90c645293a3'
    );
    xhr.setRequestHeader('X-RapidAPI-Host', 'yahoo-finance127.p.rapidapi.com');

    xhr.send(data);
  }

  options() {
    const self = this;
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        self.optionsStock = JSON.parse(this.responseText);
        console.log('options: ', self.optionsStock.quote.fiftyTwoWeekLow);
      }
    });

    xhr.open('GET', 'https://yahoo-finance127.p.rapidapi.com/options/NKE.MX');
    xhr.setRequestHeader('content-type', 'application/octet-stream');
    xhr.setRequestHeader(
      'X-RapidAPI-Key',
      'e8070cb7dfmsh15cae0beb84cecdp19631cjsnc90c645293a3'
    );
    xhr.setRequestHeader('X-RapidAPI-Host', 'yahoo-finance127.p.rapidapi.com');

    xhr.send(data);
  }

  url5() {
    this.search();
    this.price();
    this.options();
  }
}
