export type SpecRow = { label: string; value: string };

export type ProductItem = {
  name: string;
  model?: string;
  image: string; // "[image-xxx]" placeholder marker, replace with real image URL later
  description: string;
  specs?: SpecRow[];
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  items: ProductItem[];
  hasTable?: boolean;
  tableTitle?: string;
  table?: { headers: string[]; rows: string[][] };
};

const pImg = (name: string) => `[image-${name}]`;

export const brand = {
  name: 'HM Attachment',
  slogan: 'Excavator Attachments & Drilling Equipment',
  subtitle: 'Drilling Attachments | Electric Coupler',
  email: 'hm@hmattachment.com',
  website: 'www.hmattachment.com',
  short:
    'HM Attachment supplies excavator auger drives, drilling drives, augers, hitches, helical piles and drilling tools for construction, piling and drilling sites worldwide.',
};

// Yichen YA series Standard Auger Drive specification table (10 models)
export const augerDrivesTable = {
  headers: [
    'Model',
    'Excavator',
    'Max Torque',
    'Pressure',
    'Oil Flow',
    'Rated Power',
    'Output Speed',
    'Weight',
    'Hose',
    'Shaft',
  ] as string[],
  rows: [
    ['YA-2000', '0.5-2 ton', '1,900 Nm', '70-240 bar', '27-75 LPM', '19 kW', '30-95 RPM', '41 kg', '1/2" BSP', '65mm round / 2" hex / 57mm square'],
    ['YA-3300', '1-3 ton', '3,000 Nm', '70-240 bar', '27-75 LPM', '24 kW', '35-100 RPM', '41 kg', '1/2" BSP', '65mm round / 2" hex / 57mm square'],
    ['YA-5000', '3-4.5 ton', '5,000 Nm', '90-240 bar', '50-95 LPM', '42 kW', '42-95 RPM', '66 kg', '1/2" BSP', '55mm round / 2" hex / 57mm square'],
    ['YA-8000', '4-8 ton', '8,000 Nm', '140-260 bar', '60-135 LPM', '67 kW', '35-80 RPM', '124 kg', '1/2" or 3/4" BSP', '2.5" hex / 75mm square'],
    ['YA-10000', '5-10 ton', '10,000 Nm', '140-260 bar', '50-135 LPM', '80 kW', '35-80 RPM', '131 kg', '1/2" or 3/4" BSP', '2.5" hex / 75mm square'],
    ['YA-18000', '8-15 ton', '18,330 Nm', '160-240 bar', '80-170 LPM', '90 kW', '28-42 RPM', '155 kg', '3/4" BSP', '75mm square'],
    ['YA-31000', '15-22 ton', '30,090 Nm', '160-250 bar', '80-170 LPM', '94 kW', '12-28 RPM', '255 kg', '1" BSP', '75mm square'],
    ['YA-50000', '20-36 ton', '50,030 Nm', '220-350 bar', '100-300 LPM', '157 kW', '0-30 RPM', '460 kg', '1" BSP 1-1/4', '110mm square'],
    ['YA-80000', '25-40 ton', '83,000 Nm', '220-350 bar', '200-630 LPM', '167 kW', '0-20 RPM', '770 kg', 'SAE FS-20 G1-1/4', '110mm square'],
    ['YA-100000', '32-52 ton', '100,000 Nm', '250-350 bar', '300-477 LPM', '157 kW', '0-15 RPM', '1050 kg', 'SAE FS-20 G1-1/4', '110mm square'],
  ],
};

export const categories: Category[] = [
  {
    slug: 'drives',
    name: 'Auger Drives',
    short: 'Auger Drives',
    description:
      'Standard, high speed and horizontal auger drives. YA series from 1,900 N·m to 100,000 N·m for 0.5-52 ton excavators.',
    image: pImg('drives'),
    items: [
      { name: 'Standard Auger Drive', model: 'YA-2000 ~ YA-100000', image: pImg('auger-drive-ya'), description: 'Hydraulic motor and planetary gearbox auger drive covering ten models and 0.5-52 ton excavators.' },
      { name: 'High Speed Auger Drive', image: pImg('hs-drive'), description: 'Specially designed for high-speed applications for unparalleled productivity.' },
      { name: 'Horizontal Drill Auger Drive', image: pImg('hd-drive'), description: 'Designed for horizontal drilling and foundation penetrations.' },
    ],
  },
  {
    slug: 'earth-augers',
    name: 'Earth Augers',
    short: 'Soil Augers',
    description:
      'W2, W3 and W4 augers plus pilots and teeth for general, combination and rock drilling. Diameter from 150mm to 2000mm.',
    image: pImg('earth-augers'),
    items: [
      { name: 'W2 Earth Auger', model: 'W2', image: pImg('auger-w2'), description: 'All-purpose earth auger for general drilling in earth, clay, shale and soft rock. Multi-faced tungsten.' },
      { name: 'W3 Combination Auger', model: 'W3', image: pImg('auger-w3'), description: 'Cost effective taper teeth for ripping in fracturable rock, permafrost and general earth.' },
      { name: 'W4 Rock Auger', model: 'W4', image: pImg('auger-w4'), description: 'Heavy duty rock auger with high efficiency cutting heads and quality wear parts.' },
    ],
  },
  {
    slug: 'hitch',
    name: 'Hitch',
    short: 'Hitch',
    description:
      'Four hitch connector types for all excavator ranges.',
    image: pImg('hitch'),
    items: [
      { name: 'Single Pin Hitch', image: pImg('hitch-single'), description: 'Lightweight, non-bulky and economical.' },
      { name: 'Double Pin Hitch', image: pImg('hitch-double'), description: 'Loose and fixed pin, standard and quick hitch.' },
      { name: 'Double Pin Cradle Hitch', image: pImg('hitch-cradle'), description: 'For YA2000-YA100000 range, eliminates auger swing.' },
      { name: 'Skid Steer Loader Frame', image: pImg('hitch-skid'), description: 'Slide operation for YA2000-YA5000.' },
    ],
  },
  {
    slug: 'helical-piles',
    name: 'Helical Piles',
    short: 'Helical Piles',
    description:
      'AP series helical piles from 18-46 ton capacity, with installation system and torque sensing accessories.',
    image: pImg('helical-piles'),
    items: [
      { name: 'Helical Piles', model: 'AP-18 / AP-22 / AP-36 / AP-46', image: pImg('helical-pile'), description: 'Screw piles with galvanized, bare or epoxy coating for 18-46 ton loads.' },
      { name: 'Torque Indicator', model: 'ATS series', image: pImg('torque-indicator'), description: 'Wireless torque measurement from 10,000 to 100,000 N·m.' },
    ],
  },
  {
    slug: 'tools',
    name: 'Tools',
    short: 'Drilling Tools',
    description:
      'Log splitter, stump planer, core barrel, cement mixer bowl and hole cleaner drilling and ground tools.',
    image: pImg('tools'),
    items: [
      { name: 'Log Splitter', model: 'ALS-180', image: pImg('tool-log-splitter'), description: 'Self-guiding log splitter for 1-5 ton machines.' },
      { name: 'Stump Planer', model: 'ASP series', image: pImg('tool-stump-planer'), description: 'Z-shaped blade stump planer with two-stage cutting.' },
      { name: 'Core Barrel', model: 'ACB series', image: pImg('tool-core-barrel'), description: 'Core barrel from 350-1200mm cutting diameter.' },
      { name: 'Cement Mixer Bowl', model: 'ACM series', image: pImg('tool-cement-mixer'), description: '180L concrete mixer bowl for on-site mixing.' },
      { name: 'Hole Cleaner', image: pImg('tool-hole-cleaner'), description: 'Pre-pile hole cleaning tool.' },
    ],
  },
  {
    slug: 'electric-coupler',
    name: 'Electric Coupler',
    short: 'Electric Coupler',
    description:
      'Electric quick coupler for 5-9 ton excavators. Dual operating modes — electric drive for daily work, manual backup to avoid downtime.',
    image: pImg('electric-coupler'),
    items: [
      {
        name: 'HM Electric Quick Coupler',
        model: '5-9 ton excavator',
        image: pImg('electric-coupler-hm'),
        description:
          'An electric drive system replaces the hydraulic circuit with triple auto-lock and manual backup mode. IP67 waterproof with no hydraulic oil leakage.',
        specs: [
          { label: 'For', value: '5-9 ton excavators' },
          { label: 'Drive', value: 'Electric drive system' },
          { label: 'Lock', value: 'Triple auto-lock' },
          { label: 'Backup', value: 'Manual backup mode' },
          { label: 'Leakage', value: 'No hydraulic oil leakage' },
          { label: 'Rating', value: 'IP67 waterproof' },
        ],
      },
    ],
  },
  {
    slug: 'applications',
    name: 'Applications',
    short: 'Applications',
    description:
      'HM Attachment products serve fence piling, landscaping, tree planting, well boring, foundation piles, pole and mast installation, screw piles, ground source heat pumps, road signage, sound barriers, solar and wind turbine foundations.',
    image: pImg('applications'),
    items: [
      'Fence piling',
      'Landscaping',
      'Tree planting',
      'Well boring',
      'Foundation piles',
      'Pole and mast installation',
      'Screw pile installations',
      'Ground source heat pumps',
      'Road signage',
      'Sound barriers',
      'Solar energy installation',
      'Wind turbine installation',
    ].map((name): ProductItem => ({
      name,
      image: pImg('application'),
      description: '',
    })),
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function categoryItemsBySlug(slug: string): ProductItem[] | undefined {
  return getCategory(slug)?.items;
}

export const homeStats = [
  { value: '10', label: 'Auger Drive Models' },
  { value: '100K Nm', label: 'Max Torque' },
  { value: '0.5-52T', label: 'Excavator Range' },
];