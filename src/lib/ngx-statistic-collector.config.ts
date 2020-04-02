import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxStatisticCollectorConfig {
  private host: string;
  private key: string;
  constructor(){}
  setHost(host: string){
    this.host = host;
    return this;
  }
  getHost(){
    return this.host;
  }
  setKey(key: string){
    this.key = key;
    return this;
  }
  getKey(){
    return this.key;
  }
}

export const TIME = {
  HOURLY: 'hourly',
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
};
