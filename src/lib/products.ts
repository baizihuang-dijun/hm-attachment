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
  email: 'bai@hmattachment.com',
  website: 'www.hmattachment.com',
  short:
    'HM Attachment manufactures excavator auger drives, drilling equipment and wear parts, delivering reliable power to construction, piling and drilling sites worldwide.',
};

const augerDrivesTable = {
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
    slug: 'auger-drives',
    name: 'Auger Drives',
    short: 'Rotary Drilling',
    description:
      'Hydraulic auger drives from 1,900 N·m to 100,000 N·m, compatible with 0.5-52 ton excavators for piling, fence, pole and well drilling operations.',
    image: pImg('auger-drives'),
    hasTable: true,
    tableTitle: 'Auger Drives Specification (10 Models)',
    table: augerDrivesTable,
    items: [
      {
        name: 'YA Series Auger Drive',
        model: 'YA-2000 ~ YA-100000',
        image: pImg('auger-drive-ya'),
        description:
          'Hydraulic motor and planetary gearbox auger drive. Ten models cover 0.5-52 ton excavators with torque up to 100,000 N·m for reliable, powerful drilling.',
        specs: [
          { label: 'Range', value: 'YA-2000 / YA-3300 / YA-5000 / YA-8000 / YA-10000 / YA-18000 / YA-31000 / YA-50000 / YA-80000 / YA-100000' },
          { label: 'Drive', value: 'Hydraulic motor + planetary gearbox' },
          { label: 'Mount', value: 'Excavator 0.5-52 ton' },
          { label: 'Torque', value: '1,900 - 100,000 N·m' },
          { label: 'Shaft', value: 'Round / hex / square shank (configurable)' },
        ],
      },
    ],
  },
  {
    slug: 'earth-augers',
    name: 'Earth Augers',
    short: 'Soil Augers',
    description:
      'Complete auger flights and augers for hydraulic drives, with multiple flight types for different ground conditions. Diameter range 150mm to 2000mm.',
    image: pImg('earth-augers'),
    items: [
      {
        name: 'W2 Earth/Clay Auger',
        model: 'W2',
        image: pImg('auger-w2'),
        description:
          'Continuous flight auger for earth and clay, general drilling applications. Fitted with ADP2 pilot and AOT2 teeth.',
        specs: [
          { label: 'Ground', value: 'Earth / clay, general drilling' },
          { label: 'Pilot', value: 'ADP2' },
          { label: 'Teeth', value: 'AOT2' },
        ],
      },
      {
        name: 'W3 Combination Auger',
        model: 'W3',
        image: pImg('auger-w3'),
        description:
          'Combination auger for all ground conditions. Tapered teeth, fitted with AOP3 pilot and AOT3 teeth.',
        specs: [
          { label: 'Ground', value: 'Combination, all ground conditions' },
          { label: 'Pilot', value: 'AOP3' },
          { label: 'Teeth', value: 'AOT3, tapered teeth' },
        ],
      },
      {
        name: 'W4 Rock Auger',
        model: 'W4',
        image: pImg('auger-w4'),
        description:
          'Heavy-duty rock auger for concrete, shale and fracturable rock. Fitted with AOP4 pilot and AOT4 teeth.',
        specs: [
          { label: 'Ground', value: 'Concrete / shale / fracturable rock' },
          { label: 'Pilot', value: 'AOP4' },
          { label: 'Teeth', value: 'AOT4, heavy duty' },
        ],
      },
    ],
  },
  {
    slug: 'drilling-drives',
    name: 'Drilling Drives',
    short: 'Drilling Power',
    description:
      'High speed auger drives and horizontal drill drives delivering reliable rotational power for fast and directional drilling.',
    image: pImg('drilling-drives'),
    items: [
      {
        name: 'High Speed Auger Drive',
        model: 'HS series',
        image: pImg('hs-drive'),
        description:
          'High-output auger drive suited to small-diameter, high-speed drilling for greater per-hour productivity.',
        specs: [{ label: 'Output', value: 'High speed output for rapid drilling' }],
      },
      {
        name: 'Horizontal Drill Drive',
        model: 'HDD series',
        image: pImg('hd-drive'),
        description:
          'Horizontal drill drive for horizontal directional bores and cross drilling, with stable torque and reliable anti-rotation.',
        specs: [{ label: 'Mode', value: 'Horizontal / directional drilling' }],
      },
    ],
  },
  {
    slug: 'hitch',
    name: 'Hitch',
    short: 'Quick Couplers',
    description:
      'High-strength quick hitching systems including single pin, double pin, double pin cradle and skid steer configurations for fast, secure attachment changes.',
    image: pImg('hitch'),
    items: [
      { name: 'Single Pin Hitch', model: 'Single Pin', image: pImg('hitch-single'), description: 'Single pin quick hitch with a simple, fast and reliable connection.' },
      { name: 'Double Pin Hitch', model: 'Double Pin', image: pImg('hitch-double'), description: 'Double pin quick hitch for higher load stability and heavy attachments.' },
      { name: 'Double Pin Cradle Hitch', model: 'Double Pin Cradle', image: pImg('hitch-cradle'), description: 'Double pin cradle hitch with a larger support area for heavy shock loads.' },
      { name: 'Skid Steer Hitch', model: 'Skid Steer', image: pImg('hitch-skid'), description: 'Quick hitch for skid steer loaders and their attachment mounting.' },
    ],
  },
  {
    slug: 'wear-parts',
    name: 'Wear Parts',
    short: 'Consumables',
    description:
      'Complete set of auger teeth and pilots in wear-resistant alloys, matched to each auger type to extend continuous operation time.',
    image: pImg('wear-parts'),
    items: [
      {
        name: 'Auger Teeth & Pilots',
        model: 'ADP2 / AOP3 / AOP4 · AOT2 / AOT3 / AOT4',
        image: pImg('teeth-pilots'),
        description:
          'Matched pilots and teeth, including ADP2/AOP3/AOP4 pilots and AOT2/AOT3/AOT4 teeth, in wear-resistant alloy and tungsten carbide.',
        specs: [
          { label: 'Pilots', value: 'ADP2, AOP3, AOP4' },
          { label: 'Teeth', value: 'AOT2, AOT3, AOT4' },
          { label: 'Material', value: 'Wear-resistant alloy + tungsten carbide' },
        ],
      },
    ],
  },
  {
    slug: 'electric-coupler',
    name: 'Electric Coupler',
    short: 'Electric Coupler',
    description:
      'HM Electric Quick Coupler for 5-9 ton excavators with an electric drive system, triple auto-lock and manual backup. The convenience of automatic, the reliability of manual.',
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
    slug: 'accessories',
    name: 'Accessories',
    short: 'Attachments',
    description:
      'Complementary attachments and tools incl. log splitter, stump planer, core barrel and cement mixer.',
    image: pImg('accessories'),
    items: [
      { name: 'Log Splitter', model: 'Log Splitter', image: pImg('acc-log-splitter'), description: 'Log splitter attachment for splitting timber.' },
      { name: 'Stump Planer', model: 'Stump Planer', image: pImg('acc-stump-planer'), description: 'Stump planer for milling and levelling tree stumps.' },
      { name: 'Core Barrel', model: 'Core Barrel', image: pImg('acc-core-barrel'), description: 'Core barrel for rock coring and sampling.' },
      { name: 'Cement Mixer', model: 'Cement Mixer', image: pImg('acc-cement-mixer'), description: 'Cement mixer attachment for on-site slurry mixing.' },
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