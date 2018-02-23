import { Component, OnInit } from '@angular/core';
import { Sections } from './sections';

@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.component.html',
  styleUrls: ['./homeapp.component.css']
})
export class HomeappComponent implements OnInit {
  constructor() { }

  sections: Sections[] = [
    {
      title: 'Become Your Own Advisor',
      description: 'Our panel of consulting advisors will never sell you any financial product. Our contractual obligation will be limited to offering you the right advice to protect your interest.',
      url: 'x',
      image: 'beat123',

    },
    {
      title: 'Consulting Advisory ',
      description: 'Our Expert Services group of highly qualified and experienced professionals can help you with your specific needs.',
      url: 'x',
      image: 'beta456'
    }
  ];
  // TODO: create class and set data here only
  ngOnInit() {
  }

}
