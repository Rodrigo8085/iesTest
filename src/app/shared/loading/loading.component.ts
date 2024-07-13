import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `<span class="loader"></span>`,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
