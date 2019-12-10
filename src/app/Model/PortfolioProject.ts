import { WebLink } from './WebLink';


export class PortfolioProject {
  title: string;
  designGoals: {
    intro: string;
    goals: string[];
  };
  description: string;
  postMortem: string;
  sourceCode: WebLink;
  liveLink: WebLink;
  frameWorks: string[];
  gallery: string[];
  anchorImage: string;
  documents: WebLink[];
  youtube: WebLink;
}
