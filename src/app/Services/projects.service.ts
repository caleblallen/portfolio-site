import { Injectable } from '@angular/core';
import {PortfolioProject} from '../Model/PortfolioProject';
import { Routes, RouterModule} from '@angular/router';
import * as fwIcons from '../Configurations/FrameworkIcons';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: {};
  private readonly frameworkIcons: object;
  constructor() {
    // TODO: Re-evaluate this injection.
    this.frameworkIcons = fwIcons.FrameworkIcons;

    this.projects = {
      AtwaterMonitor: {
        title: 'Atwater Monitor',
        description: 'Atwater Monitor is an SNMP Monitoring Program written in C# .NET.',
        designGoals: {
          // tslint:disable-next-line:max-line-length
          intro: 'Create a program that will discover, track, and present the ambient temperature recorded by UPS temperature probes. The monitor was designed to:',
          goals: ['Respond to HTTP requests with temperature information in order to integrate with a simple web app.',
            'Keep a Rolling Average of Unit Temperatures.',
            'Notify administrators of dangerous temperatures via email alerts.']
        },
        liveLink: {
          link: 'http://www.google.com/',
          text: 'See it Work Live'
        },
        // tslint:disable-next-line:max-line-length
        postMortem: 'Here are a few key lessons I took away from this project:\n\n**The C# Programming Language:**  This is the first time I\'ve developed in C#. The actual code was only written after a week of studying the C# language. I worked with Classes, Delegates, Generics, LINQ, Collections, Open Source Libraries, Asynchronous Methods, and OOP Concepts.\n\n**Basic TCP Socket Programming in C#:** System.Net and System.Net.Sockets were utilized here. My goal was to respond to web requests without a true web server running, and this method accomplished that.\n\n**Visual Studio 2019:** The last version of Visual Studio I used was 2005. Learning the improvements and relearning how to debug and step through the code with VS was very valuable.',
        sourceCode: {
          link: 'https://github.com/caleblallen/AtwaterMonitor',
          text: 'View on Github'
        },
        frameWorks: ['.NET',
          'PHP',
          'Apache',
          'jQuery',
          'C#',
          'JavaScript',
          'Bootstrap',
          'Linux'],
        gallery: ['atwater-monitor.png',
          'amonitor_listing.png',
          'amonitor_graph.png'],
        anchorImage: 'atwater-monitor.png'
      },


      SalaryDataVisualizer: {
        title: 'Salary Data Visualizer',
        description: 'A business intelligence page that displays salary comparison charts between three school districts.',
        designGoals: {
          // tslint:disable-next-line:max-line-length
          intro: 'To create a webpage that could quickly display salary comparisons between job titles. Reclassification meetings are fluid and collaboriative. Thus, it was essential that the Salary Data Visualizer be able to...',
          goals: ['...perform rapid comparisons.',
            '...easily add job descriptions for discussion.',
            '...just as easily remove job descriptions from consideration.']
        },
        liveLink: {
          link: 'https://caleballen.com/reclass_2018/reclass.php',
          text: 'You may view the  page in action here'
        },
        // tslint:disable-next-line:max-line-length
        postMortem: 'Most of the work in this project was done in excel with salary comparison and normalization. For the display page I focused on the following:\n\n__Intuitive UI__:One of my goals here was to create a page that worked exactly like a user would expect it to. So when they select a job from the list...it gets added. They don\'t have to think beyond that. If they want an item removed, the click the remove box. I believe I hit upon a really easy to use UI on this project and I\'m proud of that.\n\n__Chart.js__: I worked with [Chart.js](https://www.chartjs.org/) for this project. I learned the quirks and methods of creating and updating a chart for users to interact with. The data on this page was likely more dynamic than Chart.js was really designed for.',
        sourceCode: {
          link: '--',
          text: 'View on Github'
        },
        frameWorks: ['jQuery',
          'Apache',
          'JavaScript',
          'Bootstrap',
          'Linux'],
        gallery: ['atwater-monitor.png',
          'amonitor_listing.png',
          'amonitor_graph.png'],
        anchorImage: 'atwater-monitor.png'
      }

    };
  }
  getProject(key): PortfolioProject {
    return this.projects[key];
  }

  getFrameworkIcon(key): string {
    key = key.toLowerCase().replace(' ', '');
    return this.frameworkIcons[key];
  }
}
