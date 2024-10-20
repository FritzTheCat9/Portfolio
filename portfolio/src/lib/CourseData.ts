import pbCourseImage from '../public/courses/pb_course.png';
import solidWebApiImage from '../public/courses/solidne-web-api.png';
import modularMonolithImage from '../public/courses/modularny-monolit.png';

export interface CourseData {
  title: string;
  website: string;
  image: string;
}

export const courses: CourseData[] = [
  {
    title: 'Modular Monolith',
    website: 'https://platform.devmentors.io/courses/modularny-monolit',
    image: modularMonolithImage,
  },
  {
    title: 'SOLIDne Web API',
    website: 'https://platform.devmentors.io/courses/solidne-web-api',
    image: solidWebApiImage,
  },
  {
    title: 'Learning to program SPA-type web applications',
    website: 'https://navoica.pl/courses/course-v1:Politechnika_Bialostocka+AIOK+2022_S3/about',
    image: pbCourseImage,
  },
];
