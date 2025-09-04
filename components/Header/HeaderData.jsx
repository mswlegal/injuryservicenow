import LogoImg from '@/public/images/main/logo.webp';

export const headerData = {
  logo: 'InjuryService',
  logoImg: LogoImg,
  menu: [
    {
      label: 'About Us',
      link: '#',
    },
    {
      label: 'Serivices',
      link: '#',
      submenu: [
        { label: 'Dropdown Item 1', link: '#' },
        { label: 'Dropdown Item 2', link: '#' },
        { label: 'Dropdown Item 3', link: '#' },
        { label: 'Dropdown Item 4', link: '#' },
        { label: 'Dropdown Item 5', link: '#' },
      ],
    },
    {
      label: 'Call now',
      link: '#',
      submenu: [
        {
          label: 'Dropdown Item 1',
          link: '#',
          navdropdown: [
            { label: 'Subdropdown Item 1', link: '#' },
            { label: 'Subdropdown Item 2', link: '#' },
          ],
        },
        {
          label: 'Dropdown Item 2',
          link: '#',
          navdropdown: [
            { label: 'Subdropdown Item 1', link: '#' },
            { label: 'Subdropdown Item 2', link: '#' },
          ],
        },
        {
          label: 'Dropdown Item 3',
          link: '#',
          navdropdown: [
            { label: 'Subdropdown Item 1', link: '#' },
            { label: 'Subdropdown Item 2', link: '#' },
          ],
        },
      ],
    },
  ],
};
