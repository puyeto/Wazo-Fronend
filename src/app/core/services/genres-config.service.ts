import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

import { GenresConfig } from '../../config/genres';

@Injectable({
  providedIn: 'root'
})
export class GenresConfigService {

  public genresConfig: GenresConfig = new GenresConfig(this.api);

  constructor(private api: ApiService) { }

  get genresList() {
    return this.genresConfig.config.items;
  }
}
