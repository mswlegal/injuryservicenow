import Favicon from '@/public/images/main/logo.webp';

const defaultMetaData = {
  title: '',
  description: '',
  keywords: '',
};

const themes = {
  agencyDark: { title: 'Agency | Dark', description: '', keywords: '' },
  agencyLight: { title: 'Agency | Light', description: '', keywords: '' },
  businessDark: { title: 'Business | Dark', description: '', keywords: '' },
  businessLight: { title: 'Business | Light', description: '', keywords: '' },
  corporateDark: { title: 'Corporate | Dark', description: '', keywords: '' },
  corporateLight: { title: 'Corporate | Light', description: '', keywords: '' },
  marketingDark: { title: 'Marketing | Dark', description: '', keywords: '' },
  marketingLight: { title: 'Marketing | Light', description: '', keywords: '' },
  portfolioDark: { title: 'Portfolio | Dark', description: '', keywords: '' },
  portfolioLight: { title: 'Portfolio | Light', description: '', keywords: '' },
  startupDark: { title: 'Startup | Dark', description: '', keywords: '' },
  startupLight: { title: 'Startup | Light', description: '', keywords: '' },
  pageNotFoundDark: { title: '404 | Dark', description: '', keywords: '' },
  pageNotFoundLight: { title: '404 | Light', description: '', keywords: '' },
  pageAboutUsDark: { title: 'About us | Dark', description: '', keywords: '' },
  pageAboutUsLight: {
    title: 'About us | Light',
    description: '',
    keywords: '',
  },
  pageContactDark: { title: 'Contact | Dark', description: '', keywords: '' },
  pageContactLight: { title: 'Contact | Light', description: '', keywords: '' },
  pagePricingDark: { title: 'Pricing | Dark', description: '', keywords: '' },
  pagePricingLight: { title: 'Pricing | Light', description: '', keywords: '' },
  pageServicesDark: { title: 'Services | Dark', description: '', keywords: '' },
  pageServicesLight: {
    title: 'Services | Light',
    description: '',
    keywords: '',
  },
  pageTeamDark: { title: 'Team | Dark', description: '', keywords: '' },
  pageTeamLight: { title: 'Team | Light', description: '', keywords: '' },
  pageBlogListFullWidthDark: {
    title: 'Blog Posts Fullwidth | Dark',
    description: '',
    keywords: '',
  },
  pageBlogListFullWidthLight: {
    title: 'Blog Posts Fullwidth | Light',
    description: '',
    keywords: '',
  },
  pageBlogListSidebarDark: {
    title: 'Blog Posts with Sidebar | Dark',
    description: '',
    keywords: '',
  },
  pageBlogListSidebarLight: {
    title: 'Blog Posts with Sidebar | Light',
    description: '',
    keywords: '',
  },
  pagePortfolioListDark: {
    title: 'Portfolio List | Dark',
    description: '',
    keywords: '',
  },
  pagePortfolioListLight: {
    title: 'Portfolio List | Light',
    description: '',
    keywords: '',
  },
};

export const mainData = {
  websiteTitle: 'InjuryServiceNow',
  description: '',
  keywords: 'car accidents, personal-injury',
  favicon: Favicon,
  ...Object.fromEntries(
    Object.entries(themes).map(([key, value]) => [
      key,
      { ...defaultMetaData, ...value },
    ])
  ),
};
