import { Component } from '@angular/core';
import {
  SearchQuery,
  SearchQueryBuilderService,
} from './search-query-builder.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchQuery: SearchQuery;

  constructor(private readonly searchQueryBuilder: SearchQueryBuilderService) {
    this.searchQuery = this.searchQueryBuilder
      .setAge(12, 20)
      .setGenders(['male', 'female'])
      .build();
  }
}
