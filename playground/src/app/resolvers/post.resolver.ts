import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { SampleService } from '../services/sample.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<any> {

  constructor(private sample: SampleService) {

  }

  resolve() {
    return this.sample.getPost();
  }
}
