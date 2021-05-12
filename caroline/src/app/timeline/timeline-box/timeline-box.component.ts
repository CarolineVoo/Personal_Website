import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'timeline-box',
  templateUrl: './timeline-box.component.html',
  styleUrls: ['./timeline-box.component.css']
})
export class TimelineBoxComponent implements OnInit {
  @Input() position: string;
  @Input() image: string;
  @Input() title: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
    AOS.init()
  }

}
