import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.css']
})
export class TechSkillsComponent implements OnInit {

  arrSkill = [];

  constructor() { }

  technology = [
    {
      title: 'Angular',
      content: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.', 
      skills: [
        {
          num: 3,
          level: [],
          noLevel: []
        }
      ],
      img: '../../assets/images/angular.png',
      url: 'https://angular.io/docs'
    },
    {
      title: 'React JS',
      content: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers.', 
      skills: [ 
        {
          num: 2,
          level: [],
          noLevel: []
        }
      ],
      img: '../../assets/images/react.png',
      url: 'https://reactjs.org/'
    },
    {
      title: 'React Native',
      content: 'React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android and  iOS by using Reacts framework.', 
      skills: [ 
        {
          num: 2,
          level: [],
          noLevel: []
        }
      ],
      img: '../../assets/images/react-native.png',
      url: 'https://reactnative.dev/'
    },
    {
      title: 'JavaScript', 
      content: 'JavaScript is a programming language that conforms to the ECMAScript specification, used both on the client-side and server-side that allows you to make web pages interactive.',
      skills: [ 
        {
          num: 3,
          level: [],
          noLevel: []
        }
      ],
      img: '../../assets/images/javascript.png',
      url: 'https://www.javascript.com/'
    },
    {
      title: 'TypeScript',
      content: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.', 
      skills: [ 
        {
          num: 3,
          level: [],
          noLevel: []
        }
      ],
      img: '../../assets/images/typescript.png',
      url: 'https://www.typescriptlang.org/'
    },
    {
      title: 'HTML5',
      content: 'The HyperText Markup Language is the standard markup language for documents designed to structure a web page and its content, and to be displayed in a web browser.', 
      skills: [ 
        {
          num: 4,
          level: [],
          noLevel: []
        }
      ],
      img: '../../assets/images/html.png',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics'
    },
    {
      title: 'CSS3',
      content: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.', 
      skills: [ 
        {
          num: 4,
          level: [],
          noLevel: []
        }
      ],
      img: '../../assets/images/css.png',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      title: '.NET Core',
      content: '.NET (previously named .NET Core) is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems.', 
      skills: [ 
        {
          num: 1,
          level: [],
          noLevel: []
        }
      ],
      img: '../../assets/images/netcore.png',
      url: 'https://dotnet.microsoft.com/'
    },
  ]

  ngOnInit() {
    this.createSkill();
    console.log(this.technology)
  }

  
  createSkill(): void {
    this.technology.map((item, index) => {
      item.skills.map( x => {
        let numOfRest = 5 - x.num;
        for(let i = 0; i < x.num; i++) {
          x.level[i] = x.num;
        }

        for(let i = 0; i < numOfRest; i++) {
          x.noLevel[i] = numOfRest;
        }
      })

      

    })
  }

}
