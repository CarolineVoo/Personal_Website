import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
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
      content: 'Taekwondo was my first hobby. After 7 years, I had to give up martial arts due to lack of free time. ',
      img: '../../assets/images/hobby-taekwondo.gif'
    },
    {
      type: 'workout',
      title: 'Workout',
      content: 'This is workout',
      img: '../../assets/images/hobby-workout.gif'
    },
    {
      type: 'gaming',
      title: 'Gaming',
      content: 'This is gaming',
      img: '../../assets/images/hobby-gaming.gif'
    }
    ,
    {
      type: 'programming',
      title: 'Programming',
      content: 'This is programming',
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
