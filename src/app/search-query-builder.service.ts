import { Injectable } from '@angular/core';

export interface SearchQuery {
  age?: {
    from: number;
    to: number;
  };
  genders?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SearchQueryBuilderService {
  searchQuery: SearchQuery = {};

  setAge(from: number, to: number) {
    this.searchQuery.age = {
      from: from,
      to: to,
    };
    return this;
  }

  setGenders(genders: string[]) {
    this.searchQuery.genders = genders;
    return this;
  }

  build() {
    return this.searchQuery;
  }
}
