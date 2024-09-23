import type { SkillGroupProps } from './SkillGroupProps';

import svelteImage from '../assets/Skills/Svelte.png';
import javaScriptImage from '../assets/Skills/JavaScript.png';
import typeScriptImage from '../assets/Skills/TypeScript.png';
import vueImage from '../assets/Skills/Vue.png';
import cssImage from '../assets/Skills/CSS.png';
import cImage from '../assets/Skills/C.png';
import cppImage from '../assets/Skills/C++.png';
import dockerImage from '../assets/Skills/Docker.png';
import htmlImage from '../assets/Skills/HTML.png';
import sqlImage from '../assets/Skills/SQL.png';
import angularImage from '../assets/Skills/Angular.png';
import reactImage from '../assets/Skills/React.png';
import azureImage from '../assets/Skills/Azure.png';
import tailwindImage from '../assets/Skills/tailwind.png';

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
    { name: 'Tailwindcss', iconPath: tailwindImage, iconAlt: 'Tailwindcss Icon' },
    { name: 'C++', iconPath: cppImage, iconAlt: 'C++ Icon' },
    { name: 'C', iconPath: cImage, iconAlt: 'C Icon' },
  ],
};
