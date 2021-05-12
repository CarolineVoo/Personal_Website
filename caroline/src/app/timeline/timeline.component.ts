import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timeLine;

  constructor() { }

  ngOnInit() {
    this.timeLine = [
      {
        year: 1998,
        title: "My birth",
        content: "I was born in Norway, October 21th 1998. My family is from Vietnam and later moved to Norway in the 1970s. So I grew up in a small town called Askim",
        img: "../../assets/images/baby-1998-2.png",
        position: 'left',
        end: false
      },
      {
        year: 2001,
        title: "",
        content: "",
        img: "../../assets/images/baby-1998-2.png",
        position: 'right',
        end: false
      },
      {
        year: 2020,
        title: "",
        content: "",
        img: "",
        position: 'left',
        end: true
      }

    ]

  }

}
