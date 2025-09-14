export interface Faculty {
  id: string;
  name: string;
  title: string;
  mainSubject: string; // Yellow label
  secondarySubject: string; // Grey label
  bio: string;
  quote: string;

}


export const facultyData: Faculty[] = [
 {
    id: 'yogesh-kochar',
    name: 'Yogesh Kochar', // <-- faculty name goes here
    title: 'Founder & English Faculty',
    mainSubject: 'Yogesh Kochar Sir',         // Yellow label
    secondarySubject: ' English (IX-XII)',   // Grey label
    bio: '20+ years experience, 6500+ students, 200+ toppers. Known for motivational teaching and transforming English proficiency.',
    quote: "Education is not preparation for life; education is life itself.",
  },
  {
    id: 'akshay-sir',
    name: 'Akshay Sir',
    title: 'Mathematics & Science Faculty',
    mainSubject: 'Akshay Sir',
    secondarySubject: 'Mathematics & Science (IX-X)',
    bio: 'Simplifies complex Math & Science concepts with practical clarity and innovative teaching methods.',
    quote: "Mathematics is not about numbers, equations, or algorithms: it is about understanding.",
   
  },
  {
    id: 'vikash-sir',
    name: 'Vikash Sir',
    title: 'Economics & Political Science Faculty',
    mainSubject: 'Vikash Sir',
    secondarySubject: 'Economics & Political Science (XI-XII)',
    bio: 'Makes economic theories relatable and exam-ready with real-world examples and case studies.',
    quote: "Economics is everywhere and understanding economics can help you make better decisions.",
  },
  {
    id: 'pradeep-sir',
    name: 'Pradeep Sir',
    title: 'Social Science Faculty',
    mainSubject: 'Pradeep Sir',
    secondarySubject: 'Social Science (IX-X)',
    bio: 'Transforms history & civics into engaging stories that students remember and understand deeply.',
    quote: "History is not a burden on the memory but an illumination of the soul.",
   
  },
  {
    id: 'jhankar-maam',
    name: 'Jhankar Ma\'am',
    title: 'Business Studies Faculty',
    mainSubject: 'Jhankar Ma\'am',
    secondarySubject: 'Business Studies (XI-XII)',
    bio: 'Teaches business concepts with real-world examples, making commerce subjects practical and interesting.',
    quote: "Business is not just about profit, it's about creating value for society.",
    
  },
  {
    id: 'jaskeerat-maam',
    name: 'Jaskeerat Ma\'am',
    title: 'Psychology Faculty',
    mainSubject: 'Jaskeerat Ma\'am',
    secondarySubject: 'Psychology (XI-XII)',
    bio: 'Blends psychology theories with real-life understanding, making the subject fascinating and applicable.',
    quote: "Psychology is the study of the mind, but teaching it is the art of touching hearts.",
  }
];