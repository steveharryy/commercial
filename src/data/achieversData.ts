
import divyamm from '../photos/divyamm.jpg'
import nitya from '../photos/nitya.jpg'
import harsh from '../photos/harsh.jpg'
import shivani from '../photos/shivani.jpg'
import janvi from '../photos/janvi.jpg'
import veer from '../photos/veer.jpg'
import ananya from '../photos/ananya.jpg'
import yatharath from '../photos/yatharath.jpg'

export interface Achiever {
id: string;
name: string;
marks: string;
class: string;
subjects: string[];
school: string;
image: string;

}

export const achieversData: Achiever[] = [
  {
    id: '1',
    name: 'Divyam Kaushik',
    marks: '95',
    class: 'Class XII',
    subjects: ['English'],
    school: 'Mother Divine',
    image: divyamm,
   
  },
  {
    id: '2',
    name: 'Nitya Rana',
    marks: '95',
    class: 'Class XI',
    subjects: ['English'],
    school: 'Jain Bharati',
    image: nitya,
  },
  {
    id: '3',
    name: 'Harsh Jha',
    marks: '91',
    class: 'Class XII',
    subjects: ['English'],
    school: 'Mata Sukhdevi',
    image: harsh,
  },
  {
    id: '4',
    name: 'Shivani',
    marks: '90',
    class: 'Class XII',
    subjects: ['Pol. Sci.'],
    school: 'SNPS',
    image: shivani,
   
  },
     {
    id: '5',
    name: 'Janvi',
    marks: '90',
    class: 'Class XII',
    subjects: ['Pol. Sci.'],
    school: 'SGSSS',
    image: janvi,
  },
  {
    id: '6',
    name: 'Veer',
    marks: '90',
    class: 'Class XII',
    subjects: ['English'],
    school: 'VSPK',
    image: veer,
    
  },
  {
    id: '7',
    name: 'Ananya Srivastava',
    marks: '93',
    class: 'Class XII',
    subjects: ['English'],
    school: 'Sachdeva',
    image: ananya,
  
  },
  {
    id: '8',
    name: 'Yatharth Kochhar',
    marks: '94',
    class: 'Class XII',
    subjects: ['English'],
    school: 'Sachdeva',
    image: yatharath,
  }
];