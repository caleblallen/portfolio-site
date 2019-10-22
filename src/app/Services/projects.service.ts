import { Injectable } from '@angular/core';
import {PortfolioProject} from '../Model/PortfolioProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: {};
  private frameworkIcons: object;
  constructor() {
    this.frameworkIcons = {
      amazonwebservices: 'devicon-amazonwebservices-plain',
      android: 'devicon-android-plain',
      angularjs: 'devicon-angularjs-plain',
      apache: 'devicon-apache-plain',
      appcelerator: 'devicon-appcelerator-plain',
      apple: 'devicon-apple-plain',
      atom: 'devicon-atom-plain',
      babel: 'devicon-babel-plain',
      backbonejs: 'devicon-backbonejs-plain',
      behance: 'devicon-behance-plain',
      bitbucket: 'devicon-bitbucket-plain',
      bootstrap: 'devicon-bootstrap-plain',
      bower: 'devicon-bower-plain',
      c: 'devicon-c-plain',
      cakephp: 'devicon-cakephp-plain',
      ceylon: 'devicon-ceylon-plain',
      chrome: 'devicon-chrome-plain',
      codeigniter: 'devicon-codeigniter-plain',
      coffeescript: 'devicon-coffeescript-plain',
      confluence: 'devicon-confluence-plain',
      couchdb: 'devicon-couchdb-plain',
      cplusplus: 'devicon-cplusplus-plain',
      csharp: 'devicon-csharp-plain',
      'c#': 'devicon-csharp-plain',
      css3: 'devicon-css3-plain',
      cucumber: 'devicon-cucumber-plain',
      d3js: 'devicon-d3js-plain',
      debian: 'devicon-debian-plain',
      devicon: 'devicon-devicon-plain',
      django: 'devicon-django-plain',
      docker: 'devicon-docker-plain',
      doctrine: 'devicon-doctrine-plain',
      '.net': 'devicon-dot-net-plain',
      drupal: 'devicon-drupal-plain',
      electron: 'devicon-electron-plain',
      elm: 'devicon-elm-plain',
      ember: 'devicon-ember-plain',
      erlang: 'devicon-erlang-plain',
      express: 'devicon-express-plain',
      facebook: 'devicon-facebook-plain',
      firefox: 'devicon-firefox-plain',
      foundation: 'devicon-foundation-plain',
      gatling: 'devicon-gatling-plain',
      gimp: 'devicon-gimp-plain',
      git: 'devicon-git-plain',
      github: 'devicon-github-plain',
      gitlab: 'devicon-gitlab-plain',
      go: 'devicon-go-plain',
      google: 'devicon-google-plain',
      gradle: 'devicon-gradle-plain',
      grunt: 'devicon-grunt-plain',
      gulp: 'devicon-gulp-plain',
      handlebars: 'devicon-handlebars-plain',
      heroku: 'devicon-heroku-plain',
      html5: 'devicon-html5-plain',
      ie10: 'devicon-ie10-plain',
      illustrator: 'devicon-illustrator-plain',
      inkscape: 'devicon-inkscape-plain',
      intellij: 'devicon-intellij-plain',
      ionic: 'devicon-ionic-plain',
      jasmine: 'devicon-jasmine-plain',
      java: 'devicon-java-plain',
      javascript: 'devicon-javascript-plain',
      jeet: 'devicon-jeet-plain',
      jetbrains: 'devicon-jetbrains-plain',
      jquery: 'devicon-jquery-plain',
      krakenjs: 'devicon-krakenjs-plain',
      laravel: 'devicon-laravel-plain',
      less: 'devicon-less-plain',
      linkedin: 'devicon-linkedin-plain',
      linux: 'devicon-linux-plain',
      meteor: 'devicon-meteor-plain',
      mocha: 'devicon-mocha-plain',
      mongodb: 'devicon-mongodb-plain',
      moodle: 'devicon-moodle-plain',
      mysql: 'devicon-mysql-plain',
      nginx: 'devicon-nginx-plain',
      nodejs: 'devicon-nodejs-plain',
      nodewebkit: 'devicon-nodewebkit-plain',
      npm: 'devicon-npm-plain',
      oracle: 'devicon-oracle-plain',
      photoshop: 'devicon-photoshop-plain',
      php: 'devicon-php-plain',
      phpstorm: 'devicon-phpstorm-plain',
      postgresql: 'devicon-postgresql-plain',
      protractor: 'devicon-protractor-plain',
      pycharm: 'devicon-pycharm-plain',
      python: 'devicon-python-plain',
      rails: 'devicon-rails-plain',
      react: 'devicon-react-plain',
      redhat: 'devicon-redhat-plain',
      redis: 'devicon-redis-plain',
      ruby: 'devicon-ruby-plain',
      rubymine: 'devicon-rubymine-plain',
      safari: 'devicon-safari-plain',
      sass: 'devicon-sass-plain',
      sequelize: 'devicon-sequelize-plain',
      sketch: 'devicon-sketch-plain',
      slack: 'devicon-slack-plain',
      sourcetree: 'devicon-sourcetree-plain',
      ssh: 'devicon-ssh-plain',
      stylus: 'devicon-stylus-plain',
      swift: 'devicon-swift-plain',
      symfony: 'devicon-symfony-plain',
      tomcat: 'devicon-tomcat-plain',
      travis: 'devicon-travis-plain',
      trello: 'devicon-trello-plain',
      twitter: 'devicon-twitter-plain',
      typescript: 'devicon-typescript-plain',
      ubuntu: 'devicon-ubuntu-plain',
      vagrant: 'devicon-vagrant-plain',
      vim: 'devicon-vim-plain',
      visualstudio: 'devicon-visualstudio-plain',
      vuejs: 'devicon-vuejs-plain',
      webpack: 'devicon-webpack-plain',
      webstorm: 'devicon-webstorm-plain',
      windows8: 'devicon-windows8-plain',
      wordpress: 'devicon-wordpress-plain',
      yarn: 'devicon-yarn-plain',
      yii: 'devicon-yii-plain',
      zend: 'devicon-zend-plain'
    };

    this.projects = {
      1: {
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
        frameWorks: ['C#', '.NET', 'jQuery', 'PHP', 'Apache'],
        gallery: ['assets/img/abstract-002.png',
                  'assets/img/abstract-003.png',
                  'assets/img/abstract-004.png',
                  'assets/img/abstract-005.png']
      }
    };
  }
  getProject(key): PortfolioProject {
    return this.projects[key];
  }

  getFrameworkIcon(key): string {
    console.log(key);
    key = key.toLowerCase().replace(' ', '');
    console.log(key);
    return this.frameworkIcons[key];
  }
}
