import { LandingIcons as Icons } from '@gorlabs/ui';

export const perks: { icon: any; title: string; info: string }[] = [
  {
    icon: Icons.auth,
    title: 'Sign Up',
    info: 'Create your free account to get started with Gorlabs.',
  },
  {
    icon: Icons.customize,
    title: 'Customize',
    info: 'Choose a template and customize it to fit your needs.',
  },
  {
    icon: Icons.launch,
    title: 'Launch',
    info: 'Publish your website and share it with the world.',
  },
];

export const features: { icon: any; title: string; info: string }[] = [
  {
    icon: Icons.bolt,
    title: 'Fast Setup',
    info: 'Get your website up and running in minutes with our intuitive AI-powered builder.',
  },
  {
    icon: Icons.palette,
    title: 'Customizable Templates',
    info: 'Choose from a variety of stunning templates and customize them to suit your brand.',
  },
  {
    icon: Icons.seo,
    title: 'SEO Optimized',
    info: 'Built-in SEO features ensure your website ranks well on search engines.',
  },
  {
    icon: Icons.monitor,
    title: 'Responsive Design',
    info: 'Your website will look great on any device, from desktops to mobile phones.',
  },
  {
    icon: Icons.shop,
    title: 'E-Commerce Ready',
    info: 'Start selling online with our e-commerce features and integrations.',
  },
  {
    icon: Icons.server,
    title: 'Secure Hosting',
    info: 'Enjoy peace of mind with secure and reliable hosting for your website.',
  },
];

export const pricingPlans = [
  {
    name: 'Basic',
    description: 'Start with essential tools to boost your online presence.',
    monthlyPrice: '0',
    annualPrice: '0',
    link: '#',
    features: [
      'Limited AI usage',
      'Access free tools',
      'Built-in AI Keyword Research',
      'Target latest AI products',
      'Access to 100+ free tools',
    ],
  },
  {
    name: 'Professional',
    description:
      'Unlock enhanced features and premium content to supercharge your business.',
    monthlyPrice: 4.99,
    annualPrice: 1.99,
    link: '#',
    features: [
      'Everything in Basic plan',
      'Get 25 premium AI Tools',
      'Index upto 1000 pages',
      'Professional license',
      'Premium support',
      'AI Agent',
    ],
  },
  {
    name: 'Premium',
    description:
      'Ultimate customization and dedicated support for enterprises.',
    monthlyPrice: 79,
    annualPrice: 49,
    link: '#',
    features: [
      'Everything in Professional plan',
      'Get Unlimited premium AI Tools',
      'Add your own AI Model key',
      'Self-hosted AI Tools',
      'Premium license',
      'Premium support & training sessions',
    ],
  },
];

export const bentoCards = [
  {
    title: 'Start with Inspiration',
    info: 'Browse our vast library of pre-designed templates or upload your own images.',
    imgSrc: '/assets/bento-1.svg', // Lightbulb or Inspiration icon
    alt: 'Inspiration for website creation',
  },
  {
    title: 'AI Assists Your Vision',
    info: 'Our intelligent AI tailors suggestions and functionalities based on your goals.',
    imgSrc: '/assets/bento1.svg', // AI Assistant icon
    alt: 'AI website building assistant',
  },
  {
    title: 'Drag & Drop Customization',
    info: 'Effortlessly personalize your website with our intuitive drag-and-drop editor.',
    imgSrc: '/assets/bento1.svg', // Drag and Drop icon or hand editing a website
    alt: 'Website customization with drag and drop',
  },
  {
    title: 'Launch & Shine Online',
    info: 'Publish your website with a single click and take your brand to the world.',
    imgSrc: '/assets/bento1.svg', // Rocket launching or website going live
    alt: 'Website launch and publication',
  },
];

export const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
];
