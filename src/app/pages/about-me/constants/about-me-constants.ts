import { IExperience, IEducation, IProfileLinks } from './../interfaces/about-me.interface';

/**
 * FUTURE IMPLEMENTATION: provide this information from the backend.
 */
export const EXPERIENCE: IExperience[] =
[
  {
    companyImagePath: '../../../assets/geico-logo.jpeg',
    title: 'Software Engineer III',
    company: 'Geico',
    companyCity: 'Indianapolis',
    companyState: 'IN',
    startDate: 'August 2018',
    endDate: 'Present',
    experienceBullets: [
      'Promoted to Mid-Level Full Stack developer within the first year of employment at Geico.',
      'Utilized Angular, HTML, CSS, .NET Core, and MSSql to build full-stack solutions.',
      'Worked with Billing Architects to build testing framework and exception handling\
        middleware for Billing front-end application.',
      'Recognized by the Geico IndyIT Director for providing the largest contributions of\
      unit tests to the Angular jasmine/karma test suite for the Commercial application.',
      'Utilized the following tools for development operations: VSTS, TFS, git, Jira, Splunk,\
      VMware, and Azure Devops.',
      'Leveraged technology skillset with insurance knowledge to contribute to Geico\
      Billing, Sales and Policy applications used by millions of customers.'
    ]
  } as IExperience,
  {
    companyImagePath: '../../../assets/airforce-logo.png',
    title: ' F-16 Avionics Technician',
    company: 'U.S. Air Force',
    companyCity: 'Nellis AFB',
    companyState: 'NV​',
    startDate: 'November 2008',
    endDate: 'November 2012',
    experienceBullets: [
      'Maintained, repaired, adjusted and installed Avionics Systems components for the for 21 Block-40 and Block-50 F-16 aircraft.',
      'Utilized schematic diagrams and Fault Isolation manuals to troubleshoot electrical issues on the airframe for systems \
      including Flight Control, Mission Computing, Weapons, Electronic Warfare, Communication and Fuels.',
      'Led the Pod Accountability Program, ensuring that each of the 63 external Pods were functional, meeting scheduled \
      maintenance deadlines, and had correct documentation for any maintenance and inspections.',
      'Led the Weapons Equipment maintenance program, efficiently maintaining $3 million worth of weapons system test equipment.'
    ]
  } as IExperience,
];

/**
 * FUTURE IMPLEMENTATION: provide this information from the backend.
 */
export const EDUCATION: IEducation[] =
[
  {
    universityName: 'Ball State University',
    degree: 'B.S.',
    degreeFocus: 'Computer Science',
    startDate: 'August 2016',
    endDate: 'May 2018',
    graduated: true,
    educationNotes: [
      'GPA: 3.6',
      'Magna Cum Laude',
      'Dean\'s Every Semester'
    ]
  } as IEducation
];

/**
 * FUTURE IMPLEMENTATION: provide this information from the backend.
 */
export const AWARDS_AND_ACTIVITIES: string[] = [
  'Promoted to Software Engineer III within first year of employment at Geico',
  'Successfully passed Geico cloud academy over C# and .NET Core, Angular, Azure and Project Architecture',
  'Participated in the St. May’s Data Science Hackathon. The project involved \
  analyzing patient reviews for clinical care to aid in performing sentiment analysis of \
  customer reviews to determine the quality of the healthcare experience.',
  'Air Force Distinguished Graduate for F-16 Avionics Technical Training and highest \
  academic rank in the class.'
];

/**
 * FUTURE IMPLEMENTATION: provide this information from the backend.
 */
export const HOME_PAGE_LINKS: IProfileLinks = {
  github: 'https://github.com/devinMcMillen',
  linkedIn: 'http://www.linkedin.com/in/devin-mcmillen-17151a18a'
};
