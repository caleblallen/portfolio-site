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
        liveLink: null,
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
        anchorImage: 'atwater-monitor.png',
        documents: []

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
          link: 'https://tinydragon.dev/SalaryDataVisualizer',
          text: 'You may view the page in action here'
        },
        // tslint:disable-next-line:max-line-length
        postMortem: 'Most of the work in this project was done in excel with salary comparison and normalization. For the display page I focused on the following:\n\n__Intuitive UI__:One of my goals here was to create a page that worked exactly like a user would expect it to. So when they select a job from the list...it gets added. They don\'t have to think beyond that. If they want an item removed, the click the remove box. I believe I hit upon a really easy to use UI on this project and I\'m proud of that.\n\n__Chart.js__: I worked with [Chart.js](https://www.chartjs.org/) for this project. I learned the quirks and methods of creating and updating a chart for users to interact with. The data on this page was likely more dynamic than Chart.js was really designed for.',
        sourceCode: {
          link: 'https://github.com/caleblallen/Salary-Data-Visualizer',
          text: 'View on Github'
        },
        frameWorks: ['jQuery',
          'Apache',
          'JavaScript',
          'Bootstrap',
          'Linux'],
        gallery: ['sdv_chart.png',
          'sdv_selectors.png'],
        anchorImage: 'sdv_chart.png',
        documents: []

      },
      MarkovGeneratorJava: {
        title: 'Markov Generator (Java)',
        // tslint:disable-next-line:max-line-length
        description: 'This is a Markov Generator that uses random seeds and histograms to generate patterns analogous to human written communication.',
        designGoals: {
          // tslint:disable-next-line:max-line-length
          intro: 'Markov chains predict future results based on the current state and probable next state. This works very well with human speech, which is filled with patterns and boilerplate.\n\nThis generator is currently configured to generate some Tolkien inspired Dwarf and Orc names, along with whole sentences written in the style of Charles Dickens.\n\nThis project had to...',
          goals: ['...generate 1st, 2nd, and 3rd order Markov chains.',
            '...produce probabilistic results by following the chains with random seeds.',
            '...pass the my upper division software development class.']
        },
        liveLink: {
          link: 'https://repl.it/@CalebAllen/Jarkov-Generator',
          text: 'A link to a live example you may view on repl.it'
        },
        // tslint:disable-next-line:max-line-length
        postMortem: 'Notable lessons from this project:\n\n__Java HashMap__: The heart of this project is a histogram of type: <code>HashMap&lt;String,HashMap&lt;String,Integer&gt;&gt;</code> I\'d worked with python dictionaries, so the learning was mostly syntax.\n\n__Java Generic Types__: This was my first exposure to generic types. Most of my classes were focused on restricting use of advanced data structures in code. That is, afterall, what they were trying to teach. I\'ve worked with them far more since then, but this was my first exposure.',
        sourceCode: {
          link: 'https://github.com/caleblallen/jarkov-generator',
          text: 'View on github'
        },
        frameWorks: ['Java'],
        gallery: ['markov_histogram.png', 'markov_java.png', 'markov_java_breakdown.png'],
        anchorImage: 'markov_java_breakdown.png',
        documents: [{
          title: 'Markov Generator Project Report',
          link: 'markov_generator_java.pdf'
        }]
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
