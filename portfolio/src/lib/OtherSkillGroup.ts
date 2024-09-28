import type { SkillGroupProps } from './SkillGroupProps';

import microsoftOfficeImage from '../public/Skills/MicrosoftOffice.png';
import msTeamsImage from '../public/Skills/MSTeams.png';
import carImage from '../public/Skills/car.png';

export const otherSkillGroup: SkillGroupProps = {
  name: 'Other',
  skills: [
    { name: 'MS Office', iconPath: microsoftOfficeImage, iconAlt: 'MS Office Icon' },
    { name: 'MS Teams', iconPath: msTeamsImage, iconAlt: 'MS Teams Icon' },
    { name: 'driving licence (category B)', iconPath: carImage, iconAlt: 'Driving Licence Icon' },
  ],
};
