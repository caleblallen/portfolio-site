import { Injectable } from '@angular/core';
import {PortfolioProject} from '../Model/PortfolioProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: {};
  constructor() {
    this.projects = {
      1: {
        title: 'Atwater Monitor',
        description: 'Atwater Monitor is an SNMP Monitoring Program written in C# .NET.',
        designGoals: {
          intro: 'Create a program that will discover, track, and present the ambient temperature recorded by UPS temperature probes. The monitor was designed to:',
          goals: ['Respond to HTTP requests with temperature information in order to integrate with a simple web app.',
          'Keep a Rolling Average of Unit Temperatures.',
          'Notify administrators of dangerous temperatures via email alerts.']
        },
        liveLink: {
          link: 'http://www.google.com/',
          text: 'See it Work Live'
        },
        postMortem: 'Here are a few key lessons I took away from this project:\n\n**The C# Programming Language:**  This is the first time I\'ve developed in C#. The actual code was only written after a week of studying the C# language. I worked with Classes, Delegates, Generics, LINQ, Collections, Open Source Libraries, Asynchronous Methods, and OOP Concepts.\n\n**Basic TCP Socket Programming in C#:** System.Net and System.Net.Sockets were utilized here. My goal was to respond to web requests without a true web server running, and this method accomplished that.\n\n**Visual Studio 2019:** The last version of Visual Studio I used was 2005. Learning the improvements and relearning how to debug and step through the code with VS was very valuable.',
        sourceCode: {
          link: 'https://github.com/caleblallen/AtwaterMonitor',
          text: 'View on Github'
        },
        frameWorks: ['jQuery', 'PHP'],
        gallery: ['assets/img/abstract-002.png', 'assets/img/abstract-003.png', 'assets/img/abstract-004.png', 'assets/img/abstract-005.png']
      }
    };
  }
  getProject(key): PortfolioProject {
    return this.projects[key];
  }
}
