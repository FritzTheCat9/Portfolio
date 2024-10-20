<script lang="ts">
  import NavLink from '../lib/NavLink.svelte';
  import SectionHeader from '../lib/SectionHeader.svelte';
  import SocialMediaIcon from '../lib/SocialMediaIcon.svelte';
  import SkillGroup from '../lib/SkillGroup.svelte';
  import ImageSlider from '../lib/ImageSlider.svelte';
  import ProjectHeader from '../lib/ProjectHeader.svelte';
  import ProjectDescription from '../lib/ProjectDescription.svelte';
  import ProjectLinks from '../lib/ProjectLinks.svelte';
  import Timeline from '../lib/Timeline.svelte';
  import DownloadCVButton from '../lib/DownloadCVButton.svelte';
  import Courses from '$lib/Courses.svelte';
  // import ContactForm from '$lib/ContactForm.svelte';

  import githubIcon from '../public/Skills/github.svg';
  import linkedinIcon from '../public/linkedin.svg';
  import youtubeIcon from '../public/youtube.svg';
  import myPhoto from '../public/Bartłomiej_Umiński_CV.jpg';

  import { favouriteTechStackSkillGroup } from '../lib/FavouriteTechStackSkillGroup';
  import { basicKnowledgeSkillGroup } from '../lib/BasicKnowledgeSkillGroup';
  import { otherSkillGroup } from '../lib/OtherSkillGroup';
  import { youtubeLinksImages } from '../lib/YoutubeLinksImages';
  import { freakFightsFanImages } from '../lib/FreakFightsFanImages';
  import { events } from '../lib/TimelineEvent';
  import { courses } from '../lib/CourseData';

  let youtubeLinksProjectDescription =
    'I achieved 8th place in the "100 Commits" competition organized by DevMentors. Over 100 days, I developed the "YoutubeLinks" application, which allows users to create playlists from YouTube links and download those playlists as MP3 and MP4 files. I used my favourite tech stack to create this project - C#, .NET, Minimal API, Blazor WebAssembly, MudBlazor, Entity Framework Core and Vertical Slices Architecture.';
  let freakFightsFanProjectDescription =
    'The FreakFightsFan application contains information and statistics about federations, events, fights and fighters of freak fight federations. I created this application because I am a fan of freak fights and I wanted to practice building Full Stack applications with .NET technology. I used my favourite tech stack to create this project - C#, .NET, Minimal API, Blazor WebAssembly, MudBlazor, Entity Framework Core and Vertical Slices Architecture.';
  let contactEmail = 'contact.bartlomiejuminski@gmail.com';
</script>

<main>
  <div class="bg-gray-400 flex justify-center">
    <div class="max-w-screen-lg">
      <nav
        class="bg-gray-200 p-8 flex flex-col items-center md:flex-row md:justify-end md:space-x-8 space-y-2 md:space-y-0">
        <NavLink href="#info" text="Info" />
        <NavLink href="#experience" text="Experience" />
        <NavLink href="#projects" text="Projects" />
        <NavLink href="#courses" text="Courses" />
        <NavLink href="#skills" text="Skills" />
        <NavLink href="#contact" text="Contact" />
        <DownloadCVButton />
      </nav>
      <section id="info">
        <div class="flex flex-col-reverse md:flex-row items-center bg-gray-100 p-4 lg:px-12">
          <SectionHeader name="Info" hidden />
          <div class="text-center md:text-left">
            <h1 class="text-2xl font-bold mb-2">Bartłomiej Umiński</h1>
            <h1 class="text-xl mb-4 italic">Software Engineer</h1>
            <h2 class="mb-6 max-w-md text-justify">
              I am a hard-working programmer. I am able to create Full Stack applications in .NET
              technology. I pursue my goals, systematically, one step at a time. I believe in the
              importance of constant work on myself and my skills.
            </h2>
            <div class="flex justify-center md:justify-start space-x-4">
              <SocialMediaIcon
                href="https://github.com/FritzTheCat9"
                iconPath={githubIcon}
                iconAlt="Github Image" />
              <SocialMediaIcon
                href="https://www.linkedin.com/in/bartłomiej-umiński/"
                iconPath={linkedinIcon}
                iconAlt="Linkedin Image" />
              <SocialMediaIcon
                href="https://www.youtube.com/@bartlomiejuminski"
                iconPath={youtubeIcon}
                iconAlt="Youtube Image" />
            </div>
          </div>
          <div class="w-48 h-48 mb-8 mx-auto p-2">
            <img src={myPhoto} alt="Bartłomiej Umiński" />
          </div>
        </div>
      </section>
      <section id="experience">
        <div class="bg-gray-200 p-4 lg:px-12">
          <SectionHeader name="Experience" />
          <Timeline {events} />
        </div>
      </section>
      <section id="projects">
        <div class="bg-gray-100 p-4 lg:px-12">
          <SectionHeader name="Projects" />
          <ProjectHeader name="YoutubeLinks" />
          <!-- add fade animation  -->
          <ImageSlider images={youtubeLinksImages} startIndex={4} />
          <ProjectDescription description={youtubeLinksProjectDescription} />
          <ProjectLinks
            ><SocialMediaIcon
              href="https://github.com/FritzTheCat9/YoutubeLinks"
              iconPath={githubIcon}
              iconAlt="Github Image" />
            <SocialMediaIcon
              href="https://www.youtube.com/watch?v=G1gY-jynpu0"
              iconPath={youtubeIcon}
              iconAlt="Youtube Image" />
          </ProjectLinks>
          <!-- used technologies - coś takiego jak skill group ale jakoś w liście z nazwami i mniejsze -->
          <ProjectHeader name="FreakFightsFan" />
          <ImageSlider images={freakFightsFanImages} startIndex={5} />
          <ProjectDescription description={freakFightsFanProjectDescription} />
          <ProjectLinks>
            <SocialMediaIcon
              href="https://github.com/FritzTheCat9/FreakFightsFan"
              iconPath={githubIcon}
              iconAlt="Github Image" />
          </ProjectLinks>
        </div>
      </section>
      <section id="courses">
        <div class="bg-gray-200 p-4 lg:px-12">
          <SectionHeader name="Courses" />
          <Courses {courses} />
        </div>
      </section>
      <!-- section with completed courses -->
      <!-- section with known languages -->
      <!-- section with hobbies -->
      <section id="skills">
        <div class="bg-gray-100 p-4 lg:px-12">
          <SectionHeader name="Skills" />
          <SkillGroup
            name={favouriteTechStackSkillGroup.name}
            skills={favouriteTechStackSkillGroup.skills} />
          <SkillGroup
            name={basicKnowledgeSkillGroup.name}
            skills={basicKnowledgeSkillGroup.skills} />
          <SkillGroup name={otherSkillGroup.name} skills={otherSkillGroup.skills} />
        </div>
      </section>
      <section id="contact">
        <div class="bg-gray-200 p-4 lg:px-12">
          <SectionHeader name="Contact" />
          <h1 class="text-xl text-gray-600 my-4 text-center">Contact me via email:</h1>
          <h1
            class="text-xl text-blue-500 hover:text-blue-700 transition duration-300 text-center mb-4 italic">
            <a href="mailto:contact.bartlomiejuminski@gmail.com">
              {contactEmail}
            </a>
          </h1>
          <!-- <ContactForm /> -->
        </div>
      </section>
    </div>
  </div>
</main>
