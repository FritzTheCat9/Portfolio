import type { SkillGroupProps } from './SkillGroupProps';

import cSharpImage from '../public/Skills/CSharp.png';
import dotnetImage from '../public/Skills/Dotnet.png';
import mudblazorImage from '../public/Skills/MudBlazor.png';
import blazorImage from '../public/Skills/Blazor.png';
import dotnetCoreImage from '../public/Skills/DotnetCore.png';
import efCoreImage from '../public/Skills/EFCore.png';
import vsaImage from '../public/Skills/VSA.png';
import githubIcon from '../public/Skills/github.svg';

export const favouriteTechStackSkillGroup: SkillGroupProps = {
  name: 'Favourite tech stack',
  skills: [
    { name: 'C#', iconPath: cSharpImage, iconAlt: 'C# Icon' },
    { name: '.NET', iconPath: dotnetImage, iconAlt: '.NET Icon' },
    { name: 'Minimal API', iconPath: dotnetCoreImage, iconAlt: 'Minimal API Icon' },
    {
      name: 'Entity Framework Core',
      iconPath: efCoreImage,
      iconAlt: 'Entity Framework Core Icon',
    },
    { name: 'Blazor WebAssembly', iconPath: blazorImage, iconAlt: 'Blazor WebAssembly' },
    { name: 'MudBlazor', iconPath: mudblazorImage, iconAlt: 'MudBlazor Icon' },
    {
      name: 'Vertical Slices Architecture',
      iconPath: vsaImage,
      iconAlt: 'Vertical Slices Architecture Icon',
    },
    { name: 'Git', iconPath: githubIcon, iconAlt: 'Git Icon' },
  ],
};
