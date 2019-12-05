import { Injectable } from '@angular/core';

export interface TechVersionPair {
  name: string;
  version: string;
}

export interface TechEntry {
  category: string;
  details: TechVersionPair[];
}

@Injectable({
  providedIn: 'root'
})

export class PersonalInfoService {
  public technologySpecifics: TechEntry[];
  private personalDetails: {
    firstName: string;
    lastName: string;
    descriptor: string;
    twitterAccount: string;
    twitchAccount: string;
    linkedIn: string;
    githubAccount: string;
    emailAddress: string;
    birthDate: Date;
  };

  constructor() {
    this.personalDetails = {
      firstName: 'Caleb',
      lastName: 'Allen',
      descriptor: 'Full Stack Developer',
      twitterAccount: 'caleblallen',
      twitchAccount: 'punch_cut',
      linkedIn: 'https://www.linkedin.com/in/caleb-allen-066136133/',
      githubAccount: 'caleblallen',
      emailAddress: 'caleb.allen@gmail.com',
      birthDate: new Date('1987-03-03')
    };

    this.technologySpecifics = [
      {
        category: 'Languages',
        details: [
          {name: 'JavaScript ', version: 'ES6'},
          {name: 'TypeScript ', version: 'v3.4'},
          {name: 'Python ', version: 'v2.7 - v3.8'},
          {name: 'C#.NET ', version: 'v4.8'},
          {name: 'Java ', version: 'v13'},
          {name: 'C++ ', version: '\'03 & \'17'},
          {name: 'PHP ', version: 'v7.1'},
          {name: 'HTML/CSS/SCSS ', version: 'v5/v3/v3.5.6'},
        ]
      },
      {
        category: 'Frameworks',
        details: [
          {name: 'Angular', version: 'v8'},
          {name: 'Node.js', version: 'v12'},
          {name: 'Express.js', version: 'v4.17'},
          {name: 'jQuery', version: 'v3.3'},
          {name: 'Bootstrap', version: 'v3-4'}
        ]
      },
      {
        category: 'Databases',
        details: [
          {name: 'MongoDB', version: 'V4.2'},
          {name: 'MySQL', version: 'v5.7'},
          {name: 'Transact-SQL', version: '2014'}
        ]
      },
      {
        category: 'Shells',
        details: [
          {name: 'Bash', version: 'v4.3'},
          {name: 'Powershell', version: 'v5.1'},
          {name: 'MS-DOS', version: 'v10'}
        ]
      },
      {
        category: 'Servers',
        details: [
          {name: 'Apache', version: 'v2.4'},
          {name: 'Ubuntu Server', version: 'v18'},
          {name: 'Windows Server', version: '\'03, \'08, \'12, \'16'}
        ]
      }
    ];
  }

  public fractionalAge(date = ''): number {
    const now = new Date();
    let then = this.personalDetails.birthDate;
    if (date !== '') {
      then = new Date(date);
    }
    return (now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  }

  public name(): string {
    return `${this.personalDetails.firstName} ${this.personalDetails.lastName}`;
  }

  public descriptor(): string {
    return this.personalDetails.descriptor;
  }

  public email(): [string, string] {
    return [this.personalDetails.emailAddress, this.personalDetails.emailAddress];
  }

  public github(): [string, string] {
    return [this.personalDetails.githubAccount, `https://github.com/${this.personalDetails.githubAccount}`];
  }

  public linkedIn(): [string, string] {
    // Of Course linkedIn had to do their own thing.
    return [this.name(), this.personalDetails.linkedIn];
  }

  public twitch(): [string, string] {
    return [this.personalDetails.twitchAccount, `https://www.twitch.tv/${this.personalDetails.twitchAccount}`];
  }

  public twitter(): [string, string] {
    return [this.personalDetails.twitterAccount, `https://twitter.com/${this.personalDetails.twitterAccount}`];
  }

}
