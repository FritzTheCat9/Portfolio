import type { SkillGroupProps } from './SkillGroupProps';

import svelteImage from '../public/Skills/Svelte.png';
import javaScriptImage from '../public/Skills/JavaScript.png';
import typeScriptImage from '../public/Skills/TypeScript.png';
import vueImage from '../public/Skills/Vue.png';
import cssImage from '../public/Skills/CSS.png';
import cImage from '../public/Skills/C.png';
import cppImage from '../public/Skills/C++.png';
import dockerImage from '../public/Skills/Docker.png';
import htmlImage from '../public/Skills/HTML.png';
import sqlImage from '../public/Skills/SQL.png';
import angularImage from '../public/Skills/Angular.png';
import reactImage from '../public/Skills/React.png';
import azureImage from '../public/Skills/Azure.png';
import tailwindImage from '../public/Skills/Tailwind.png';

export const basicKnowledgeSkillGroup: SkillGroupProps = {
  name: 'Basic knowledge',
  skills: [
    { name: 'SQL', iconPath: sqlImage, iconAlt: 'SQL Icon' },
    { name: 'Docker', iconPath: dockerImage, iconAlt: 'Docker Icon' },
    { name: 'Azure', iconPath: azureImage, iconAlt: 'Azure Icon' },
    { name: 'JavaScript', iconPath: javaScriptImage, iconAlt: 'JavaScript Icon' },
    { name: 'TypeScript', iconPath: typeScriptImage, iconAlt: 'TypeScript Icon' },
    { name: 'Svelte', iconPath: svelteImage, iconAlt: 'Svelte Icon' },
    { name: 'Vue', iconPath: vueImage, iconAlt: 'Vue Icon' },
    { name: 'Angular', iconPath: angularImage, iconAlt: 'Angular Icon' },
    { name: 'React', iconPath: reactImage, iconAlt: 'React Icon' },
    { name: 'HTML', iconPath: htmlImage, iconAlt: 'HTML Icon' },
    { name: 'CSS', iconPath: cssImage, iconAlt: 'CSS Icon' },
    { name: 'Tailwind CSS', iconPath: tailwindImage, iconAlt: 'Tailwind CSS Icon' },
    { name: 'C++', iconPath: cppImage, iconAlt: 'C++ Icon' },
    { name: 'C', iconPath: cImage, iconAlt: 'C Icon' },
  ],
};
