export interface iFeature {
  number: string;
  title: string;
  description: string;
}

export interface iTestimonial {
  avatar: string;
  name: string;
  testimonial: string;
}

export interface iSocial {
  link: string;
  icon: string;
}

export interface iData {
  logo: string;
  altLogo: string;
  navLinks: string[];
  heroIllustration: string;
  features: iFeature[];
  testimonials: iTestimonial[];
  socials: iSocial[];
}



export const DATA: iData = {
  logo: '/logo.svg',
  altLogo: '/logo-white.svg',
  navLinks: ['Pricing', 'Product', 'About Us', 'Careers', 'Community'],
  heroIllustration: '/illustration-intro.svg',
  features: [
    {
      number: '01',
      title: 'Track company-wide progress',
      description: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
    },
    {
      number: '02',
      title: 'Advanced built-in reports',
      description: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
    },
    {
      number: '03',
      title: 'Everything you need in one place',
      description: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
    },
  ],
  testimonials: [
    {
      avatar: '/avatar-anisha.png',
      name: 'Anisha Li',
      testimonial: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    },
    {
      avatar: '/avatar-ali.png',
      name: 'Ali Bravo',
      testimonial: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    },
    {
      avatar: '/avatar-richard.png',
      name: 'Richard Watts',
      testimonial: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
    },
  ],
  socials: [
    {
      link: 'https://www.facebook.com',
      icon: '/icon-facebook.svg',
    },
    {
      link: 'https://www.youtube.com',
      icon: '/icon-youtube.svg',
    },
    {
      link: 'https://www.twitter.com',
      icon: '/icon-twitter.svg',
    },
    {
      link: 'https://www.pinterest.com',
      icon: '/icon-pinterest.svg',
    },
    {
      link: 'https://www.instagram.com',
      icon: '/icon-instagram.svg',
    },
  ],
} as const;
