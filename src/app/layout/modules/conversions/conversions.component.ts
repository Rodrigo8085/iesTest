import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversions',
  template: `
  <section>
    <h1>Conversiones</h1>
  </section>
  `,
  styles: ['h1 {text-align: center; font-family: "Nabla", system-ui; font-optical-sizing: auto; font-weight: 400;font-style: normal; font-variation-settings: "EDPT" 60,"EHLT" 12;font-size: xxx-large;}',
    'section {height: 100vh; background-color: #004E75; justify-items: center; align-content: center;}'
  ]
})
export class ConversionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
