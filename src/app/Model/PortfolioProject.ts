import { WebLink } from './WebLink';


export class PortfolioProject {
  title: string;
  designGoals: {
    intro: string;
    goals: string[];
  };
  description: string;
  postMortem: string;
  sourceCode: {
    link: string,
    text: string
  };
  liveLink: {
    link: string,
    text: string
  };
  frameWorks: string[];
  gallery: string[];
  anchorImage: string;
  documents: WebLink[];
}
