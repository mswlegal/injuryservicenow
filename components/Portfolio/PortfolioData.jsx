import PortfolioImg from '@/public/images/col-2.jpg';
import MainImage from '@/public/images/col-2.jpg';
import Image from '@/public/images/col-2.jpg';
import CarAccidentsImg from '@/public/images/services/car-accidents.webp';
import RideshareAccidentsImg from '@/public/images/services/rideshare-accidents.webp';
import TruckAccidentsImg from '@/public/images/services/truck-accidents.webp';
import MotorcycleAccidentsImg from '@/public/images/services/motorcycle-accidents.webp';
import BicycleAccidentsImg from '@/public/images/services/bicycle-accidents.webp';
import TrainAccidentsImg from '@/public/images/services/train-accidents.webp';
import PremisesLiabilityImg from '@/public/images/services/premises-liability.webp';
import WrongfulDeathImg from '@/public/images/services/wrongful-death.webp';

export const portfolioData = {
  agency: {
    mainData: {
      title: 'What we handle',
      title2: 'Recent Cases Won',
      description:
        'Accidents don’t wait, and neither should you. Injury Service Now offers free case evaluations, available 24/7. Speak with a trusted Bay Area legal team that understands your situation and is ready to take action.',
    },
    projects: [
      {
        title: 'Car Accidents',
        slug: 'car-accidents',
        description:
          'If you’ve been injured in a car accident in the Bay Area, Injury Service Now is here to fight for the compensation you deserve. From insurance disputes to medical bills, we’ll protect your rights every step of the way.',
        services: [
          { name: 'Insurance Claim Disputes' },
          { name: 'Medical Bill Recovery' },
        ],
        client: 'Bay Area Clients',
        projectLink: {
          title: 'Learn More',
          url: '/',
        },
        duration: 'Ongoing',
        content:
          '<p>Car accidents can leave lasting physical, emotional, and financial effects. We provide aggressive representation to ensure clients are not taken advantage of by insurance companies.</p>',
        mainImage: CarAccidentsImg,
        media: [],
        images: [],
        categories: [{ name: 'Personal Injury' }, { name: 'Car Accidents' }],
      },
      {
        title: 'Rideshare Accidents (Uber & Lyft)',
        slug: 'rideshare-accidents',
        description:
          'Rideshare accidents can be complicated. Our attorneys know how to navigate Uber and Lyft’s insurance policies to get you the results you need.',
        services: [
          { name: 'Uber/Lyft Insurance Disputes' },
          { name: 'Passenger Injury Representation' },
        ],
        client: 'Rideshare Users',
        projectLink: {
          title: 'Learn More',
          url: '/',
        },
        duration: 'Ongoing',
        content:
          '<p>We specialize in handling the unique challenges that come with rideshare claims, ensuring you get maximum compensation regardless of driver fault.</p>',
        mainImage: RideshareAccidentsImg,
        media: [],
        images: [],
        categories: [
          { name: 'Personal Injury' },
          { name: 'Rideshare Accidents' },
        ],
      },
      {
        title: 'Truck Accidents',
        slug: 'truck-accidents',
        description:
          'Collisions with large trucks often cause devastating injuries. Injury Service Now holds negligent trucking companies accountable while fighting for your recovery.',
        services: [
          { name: 'Commercial Vehicle Claims' },
          { name: 'Catastrophic Injury Recovery' },
        ],
        client: 'Bay Area Victims',
        projectLink: {
          title: 'Learn More',
          url: '/',
        },
        duration: 'Ongoing',
        content:
          '<p>Our team investigates trucking company negligence, fatigue, and safety violations to build strong cases for victims of semi-truck and commercial vehicle collisions.</p>',
        mainImage: TruckAccidentsImg,
        media: [],
        images: [],
        categories: [
          { name: 'Truck Accidents' },
          { name: 'Severe Injury Claims' },
        ],
      },
      {
        title: 'Motorcycle Accidents',
        slug: 'motorcycle-accidents',
        description:
          'Motorcyclists face unfair blame after accidents. We fight bias and ensure riders get fair treatment and maximum compensation.',
        services: [
          { name: 'Bias Defense for Riders' },
          { name: 'Injury Compensation' },
        ],
        client: 'Bay Area Riders',
        projectLink: {
          title: 'Learn More',
          url: '/',
        },
        duration: 'Ongoing',
        content:
          '<p>We understand the challenges bikers face post-accident. Our firm pushes back against bias and defends your right to full compensation.</p>',
        mainImage: MotorcycleAccidentsImg,
        media: [],
        images: [],
        categories: [
          { name: 'Motorcycle Accidents' },
          { name: 'Personal Injury' },
        ],
      },
      {
        title: 'Bicycle Accidents',
        slug: 'bicycle-accidents',
        description:
          'Cyclists deserve safety on Bay Area streets. If you’ve been hit while riding, we’ll make sure your rights are protected.',
        services: [
          { name: 'Cyclist Injury Claims' },
          { name: 'Driver Negligence Cases' },
        ],
        client: 'Bay Area Cyclists',
        projectLink: {
          title: 'Learn More',
          url: '/',
        },
        duration: 'Ongoing',
        content:
          '<p>Our team fights for cyclists injured due to negligent drivers or unsafe infrastructure. You have the right to ride safely—and we’re here to uphold it.</p>',
        mainImage: BicycleAccidentsImg,
        media: [],
        images: [],
        categories: [
          { name: 'Bicycle Accidents' },
          { name: 'Cyclist Advocacy' },
        ],
      },
      {
        title: 'Train Accidents',
        slug: 'train-accidents',
        description:
          'Collisions and derailments involving trains can cause catastrophic injuries and life-altering consequences. Injury Service Now fights for victims of train accidents, holding negligent rail companies and operators accountable while pursuing the compensation you deserve.',
        services: [
          { name: 'Rail Company Negligence' },
          { name: 'Catastrophic Injury Litigation' },
        ],
        client: 'Train Accident Victims',
        projectLink: {
          title: 'Learn More',
          url: '/',
        },
        duration: 'Ongoing',
        content:
          '<p>We handle complex cases involving rail operator error, infrastructure failure, and safety violations, ensuring victims are compensated for severe injuries or wrongful death.</p>',
        mainImage: TrainAccidentsImg,
        media: [],
        images: [],
        categories: [
          { name: 'Train Accidents' },
          { name: 'Public Transportation Injuries' },
        ],
      },
      {
        title: 'Premises Liability',
        slug: 'premises-liability',
        description:
          'Slip and fall? Unsafe property conditions? We’ll hold negligent property owners accountable for your injuries.',
        services: [
          { name: 'Slip & Fall Claims' },
          { name: 'Unsafe Property Conditions' },
        ],
        client: 'Injured Tenants & Visitors',
        projectLink: {
          title: 'Learn More',
          url: '/',
        },
        duration: 'Ongoing',
        content:
          '<p>From poorly maintained walkways to unmarked hazards, we fight for compensation when property owners fail in their duty of care.</p>',
        mainImage: PremisesLiabilityImg,
        media: [],
        images: [],
        categories: [
          { name: 'Premises Liability' },
          { name: 'Negligence Claims' },
        ],
      },
      {
        title: 'Wrongful Death',
        slug: 'wrongful-death',
        description:
          'Losing a loved one is devastating. We fight for justice, accountability, and compensation for grieving families.',
        services: [
          { name: 'Wrongful Death Lawsuits' },
          { name: 'Family Compensation Claims' },
        ],
        client: 'Grieving Families',
        projectLink: {
          title: 'Learn More',
          url: '/',
        },
        duration: 'Ongoing',
        content:
          '<p>In the wake of a wrongful death, our firm steps in to support families seeking accountability and justice. We pursue compensation for lost wages, emotional trauma, and more.</p>',
        mainImage: WrongfulDeathImg,
        media: [],
        images: [],
        categories: [{ name: 'Wrongful Death' }, { name: 'Severe Negligence' }],
      },
    ],
  },
  business: {
    mainData: {
      title: 'Portfolio',
      title2: 'Recent Projects',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem obcaecati, placeat nemo natus deleniti iusto labore quod quisquam quasi iure dolore architecto maxime beatae',
    },
    projects: [
      {
        title: 'Project Title Here',
        slug: 'business-first',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'business-second',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'business-third',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
    ],
  },
  portfolio: {
    navigationList: [
      {
        title: 'First',
        classes: 'first',
        dataFilter: '.first',
      },
      {
        title: 'Second',
        classes: 'second',
        dataFilter: '.second',
      },
      {
        title: 'Third',
        classes: 'third',
        dataFilter: '.third',
      },
    ],
    projects: [
      {
        title: 'Project Title Here',
        slug: 'portfolio-first',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        category: 'first',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'portfolio-second',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        category: 'first',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'portfolio-third',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        category: 'second',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'portfolio-third',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        category: 'third',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
    ],
  },
  startup: {
    mainData: {
      title: 'Portfolio',
      title2: 'Recent Projects',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem obcaecati, placeat nemo natus deleniti iusto labore quod quisquam quasi iure dolore architecto maxime beatae',
    },
    projects: [
      {
        title: 'Project Title Here',
        slug: 'startup-first',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'startup-second',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'startup-third',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
    ],
  },
  marketing: {
    mainData: {
      title: 'Portfolio',
      title2: 'Recent Projects',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem obcaecati, placeat nemo natus deleniti iusto labore quod quisquam quasi iure dolore architecto maxime beatae',
    },
    projects: [
      {
        title: 'Project Title Here',
        slug: 'marketing-first',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'marketing-second',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'marketing-third',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
    ],
  },
  portfolioList: {
    navigationList: [
      {
        title: 'First',
        classes: 'first',
        dataFilter: '.first',
      },
      {
        title: 'Second',
        classes: 'second',
        dataFilter: '.second',
      },
      {
        title: 'Third',
        classes: 'third',
        dataFilter: '.third',
      },
    ],
    projects: [
      {
        title: 'Project Title Here',
        slug: 'portfolio-first',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        category: 'first',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'portfolio-second',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        category: 'first',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'portfolio-third',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        category: 'second',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
      {
        title: 'Project Title Here',
        slug: 'portfolio-third',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        category: 'third',
        services: [{ name: 'List item' }, { name: 'List item' }],
        client: 'FlaTheme',
        projectLink: {
          title: 'www.flatheme.net',
          url: 'https://www.flatheme.net',
        },
        duration: '121 hours',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
        mainImage: PortfolioImg,
        media: [
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
          { image: Image, alt: 'image' },
        ],
        images: [{ image: PortfolioImg }, { image: PortfolioImg }],
        categories: [{ name: 'Category' }, { name: 'Category' }],
      },
    ],
  },
};
