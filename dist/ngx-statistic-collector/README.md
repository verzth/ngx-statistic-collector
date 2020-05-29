# NgxStatisticCollector
[![GitHub version](https://badge.fury.io/gh/verzth%2Fngx-statistic-collector.svg)](https://badge.fury.io/gh/verzth%2Fngx-statistic-collector)
[![npm version](https://badge.fury.io/js/%40verzth%2Fngx-statistic-collector.svg)](https://badge.fury.io/js/%40verzth%2Fngx-statistic-collector)

Angular 7 Library for Statistic Data Collection.

### Installation

1. Via Node Package Manager.
```shell script
npm i --save @verzth/ngx-statistic-collector
```

2. Via Yarn.
```shell script
yarn add @verzth/ngx-statistic-collector
```

### How to Use
1. Add `NgxStatisticCollectorModule` in your application root module.
   
```typescript jsx
@NgModule({
    // OTHERS declarations, providers etc.
    imports: [
        // SOME MODULE
        NgxStatisticCollectorModule,
        // SOME MODULE
    ],
    // OTHERS declarations, providers etc.
})
export class AppModule {
    constructor(private ngxStatisticCollectorConfig: NgxStatisticCollectorConfig) {
        this.ngxStatisticCollectorConfig
          .setHost('HOST_URL')
          .setKey('ACCESS_KEY');
    }
}
```

2. Use `NgxStatisticCollectorService` in your Component.
```typescript jsx
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service: NgxStatisticCollectorService) {}
  ngOnInit(): void {
    const hitParams: HitParams = {
      _start : '2020-04-01T01:00:00.000Z',
      _end : '2020-04-01T01:00:00.000Z'
    } as HitParams;
    this.service.getHits(TIME.HOURLY, hitParams).subscribe(data => {
      console.log(data);
    });

    const contentParams: ContentParams = {
      _start : '2020-04-01T01:00:00.000Z',
      _end : '2020-04-01T01:00:00.000Z',
      action: 'impression'
    } as ContentParams;
    this.service.getContents(TIME.HOURLY, contentParams).subscribe(data => {
      console.log(data);
    });

    const eventParams: EventParams = {
      _start : '2020-04-01T01:00:00.000Z',
      _end : '2020-04-01T01:00:00.000Z',
      name: 'login'
    } as EventParams;
    this.service.getEvents(TIME.HOURLY, eventParams).subscribe(data => {
      console.log(data);
    });
  }
}
```

3. Make sure always use RFC3339 format for _start and _end date parameter.

4. Below are Request Params list.
   
   - `HitParams`:
        
        - `_start` - Mandatory - `string` : Start date (Use **RFC3339** Format).
        - `_end` - Mandatory - `string` : End date (Use **RFC3339** Format).
        - `columns` - Optional - `string[]` : Columns list which you want to add to data.
        - `page` - Optional - `string` : Filter data by **Page**.
        - `page_type` - Optional - `string` : Filter data by **Page Type**.
        - `isInteraction` - Optional - `number` : Filter data by **Interaction State**.
        - `age` - Optional - `number` : Filter data by **Age**.
        - `gender` - Optional - `string: male|female` : Filter data by **Gender**.
        - `attributes` - Optional - `string[]` : Filter data by **Attributes** values.
        - `device` - Optional - `string[]` : Filter data by **Device** values.
        - `location` - Optional - `string[]` : Filter data by **Location** values.
        
   - `ContentParams`:
    Same as `HitParams` but has some additional params:
        
        - `action` - Mandatory - `any: string|string[]` : Specify data values Ex: `impression`, `click`, etc.
        - `type` - Optional - `string` : Filter data by action **Type**
        - `category` - Optional - `string` : Filter data by action **Category**
        
   - `EventParams`:
    Same as `HitParams` but has some additional params:
    
        - `name` - Mandatory - `any: string|string[]` : Specify data values Ex: `login`, `logout`, etc.
        - `type` - Optional - `string` : Filter data by action **Type**
        - `category` - Optional - `string` : Filter data by action **Category**
