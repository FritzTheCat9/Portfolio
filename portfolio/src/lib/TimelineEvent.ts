import pbLogo from '../assets/PB.png';
import fabrityLogo from '../assets/FABRITY.png';

export interface TimelineEvent {
  image: string;
  company: string;
  position: string;
  description?: string;
  dateFrom: Date;
  dateTo: Date;
}

export const events: TimelineEvent[] = [
  {
    image: pbLogo,
    company: 'Bialystok University of Technology',
    position: `Engineer's degree in Computer Science`,
    dateFrom: new Date(2018, 9, 1),
    dateTo: new Date(2022, 2, 30),
  },
  {
    image: fabrityLogo,
    company: 'FABRITY',
    position: 'Junior Developer',
    description: `Developing new functionalities and maintenance of API projects in low code platform FastApp (C#, .NET, API, React).`,
    dateFrom: new Date(2021, 9, 1),
    dateTo: new Date(2023, 2, 30),
  },
];
