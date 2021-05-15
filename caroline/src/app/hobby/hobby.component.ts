import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit{
  @ViewChild('one', {static: true}) one: ElementRef;
  @ViewChild('two', {static: true}) two: ElementRef;
  @ViewChild('three', {static: true}) three: ElementRef;
  @ViewChild('four', {static: true}) four: ElementRef;

  hobby = ['taekwondo', 'workout', 'gaming', 'programming']
  level: number;
  show: boolean;

  hobbySections = [
    {
      type: 'taekwondo',
      title: 'Taekwondo',
      content: 'When I was 11 years old, I started Taekwondo. Someone in my family also went to taekwondo in the past. My goal was therefore to beat them and get a black belt. The best thing about taekwondo was the competitions and the fights. After 7 years, I did not have much time due to focus on school and work. So I have always wondered if I should do a comeback one day?',
      img: '../../assets/images/hobby-taekwondo.gif'
    },
    {
      type: 'workout',
      title: 'Workout',
      content: 'I am a person who likes to be physically active. I started exercising properly at the gym when I was around 16 years old. I am a motivated person who always sticks to a training routine. I often did strength training and took small intervals at the gym. Until covid-19 came, the gym closed and I started running outside instead. I’m still fighting!',
      img: '../../assets/images/hobby-workout.gif'
    },
    {
      type: 'gaming',
      title: 'Gaming',
      content: 'Since I was little I have always enjoyed gaming. That was the time I very often played games with my family. Nintendo 64, GameCube and Gameboy Advance SP. Right now, I still play a little, but not as much as before. I am gaming on the computer and Playstation 5. Games like GTA5, League of Legends and other exciting story games.',
      img: '../../assets/images/hobby-gaming.gif'
    }
    ,
    {
      type: 'programming',
      title: 'Programming',
      content: 'In high school, I figured it out that I wanted to be a developer. I chose to study Information Technology to learn more about coding and computers. The more I learned coding the more I enjoyed it. So it has become a small hobby for me, where I make small projects in my spare time. Creating stuff like websites and simple games.',
      img: '../../assets/images/hobby-programming.gif'
    }
  ]

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    AOS.init();

    this.show = true;
    this.level = 0;
    this.activePage(this.level);

    setInterval(()=> {
      this.Next();
    }, 10000)
  }

  refresh() {
    this.show = false;
    this.changeDetectorRef.detectChanges();
    this.show = true;
  }

  Next() {
    this.refresh();

    if(this.level === 3) {
      this.level = 0;
      this.activePage(this.level);
      return;
    }
    this.level += 1;

    this.activePage(this.level);
  }

  Previous() {
    this.refresh();

    if(this.level === 0) {
      this.level = 3;
      this.activePage(this.level);
      return;
    }
    this.level -= 1;
    this.activePage(this.level);
  }

  setLevel(num: number) {
    this.refresh();
    this.level = num;
    this.activePage(num);
  }

  activePage(level: number) {
    switch(level) {
      case 0: 
        this.one.nativeElement.style.background = '#3f5751';
        this.two.nativeElement.style.background = '#d8ede7';
        this.three.nativeElement.style.background = '#d8ede7';
        this.four.nativeElement.style.background = '#d8ede7';
        
        this.one.nativeElement.style.transform = 'scale(1.5)';
        this.two.nativeElement.style.transform = 'scale(1)';
        this.three.nativeElement.style.transform = 'scale(1)';
        this.four.nativeElement.style.transform = 'scale(1)';
        break;
      case 1: 
        this.one.nativeElement.style.background = '#d8ede7';
        this.two.nativeElement.style.background = '#3f5751';
        this.three.nativeElement.style.background = '#d8ede7';
        this.four.nativeElement.style.background = '#d8ede7';

        this.one.nativeElement.style.transform = 'scale(1)';
        this.two.nativeElement.style.transform = 'scale(1.5)';
        this.three.nativeElement.style.transform = 'scale(1)';
        this.four.nativeElement.style.transform = 'scale(1)';
        break;
      case 2: 
        this.one.nativeElement.style.background = '#d8ede7';
        this.two.nativeElement.style.background = '#d8ede7';
        this.three.nativeElement.style.background = '#3f5751';
        this.four.nativeElement.style.background = '#d8ede7';

        this.one.nativeElement.style.transform = 'scale(1)';
      this.two.nativeElement.style.transform = 'scale(1)';
      this.three.nativeElement.style.transform = 'scale(1.5)';
      this.four.nativeElement.style.transform = 'scale(1)';
        break;
      case 3: 
        this.one.nativeElement.style.background = '#d8ede7';
        this.two.nativeElement.style.background = '#d8ede7';
        this.three.nativeElement.style.background = '#d8ede7';
        this.four.nativeElement.style.background = '#3f5751';

        this.one.nativeElement.style.transform = 'scale(1)';
      this.two.nativeElement.style.transform = 'scale(1)';
      this.three.nativeElement.style.transform = 'scale(1)';
      this.four.nativeElement.style.transform = 'scale(1.5)';
        break;
    }
  }


  

}


/*
  next = true;
  previous = false;

 refresh() {
    this.next = false
    this.previous = false;
    this.changeDetectorRef.detectChanges();
  }


  Next() {
    this.refresh();
    this.next = true;

    if(this.level === 3) {
      this.level = 0;
      this.activePage(this.level);
      return;
    }
    this.level += 1;

    this.activePage(this.level);
  }

  Previous() {
    this.refresh();
    this.previous = true;

    if(this.level === 0) {
      this.level = 3;
      this.activePage(this.level);
      return;
    }
    this.level -= 1;
    this.activePage(this.level);
  }

    setLevel(num: number) {
    this.refresh();
    this.next = true;
    this.level = num;
    this.activePage(num);
  }

  */
