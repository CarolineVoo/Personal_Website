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
        content: "I was born in Norway, October 21th 1998. My family is from Vietnam and later moved to Norway in the 1970s. So I grew up in a small town called Askim.",
        img: "../../assets/images/baby-1998-2.png",
        position: 'left',
        end: false
      },
      {
        year: 2009,
        title: "My hobby",
        content: "I am a physically active person who loves sports. Taekwondo was my first hobby. After 7 years, I had to give up martial arts due to lack of free time.",
        img: "../../assets/images/hobby-2009.png",
        position: 'right',
        end: false
      },
      {
        year: 2014,
        title: "High School",
        content: "",
        img: "../../assets/images/highschool-2014.png",
        position: 'left',
        end: false
      },
      {
        year: 2017,
        title: "Oslo University",
        content: "",
        img: "../../assets/images/oslomet-2017.png",
        position: 'right',
        end: false
      },
      {
        year: 2020,
        title: "Capgemini Norway",
        content: "",
        img: "../../assets/images/capgemini-2020.png",
        position: 'left',
        end: true
      }

    ]

  }

}
