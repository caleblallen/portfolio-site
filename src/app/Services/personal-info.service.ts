import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
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
      birthDate: new Date('1987-03-19')
    };
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
