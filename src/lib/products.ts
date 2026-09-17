export type SpecRow = { label: string; value: string };

export type ProductItem = {
  name: string;
  model?: string;
  image: string; // "[image-xxx]" 占位标记，替换实拍图时指向真实图源
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
    'HM Attachment 专业制造挖掘机钻机属具、钻探设备与耐磨部件，为全球基建、打桩与钻井现场提供可靠动力。',
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
    short: '螺旋钻动力头',
    description:
      '液压螺旋钻动力头，扭矩覆盖 1,900–100,000 Nm，适配 0.5–52 吨级挖掘机，广泛用于桩基、护栏桩、杆塔与钻井作业。',
    image: pImg('auger-drives'),
    hasTable: true,
    tableTitle: 'Auger Drives 系列参数表 (10 Models)',
    table: augerDrivesTable,
    items: [
      {
        name: 'YA Series Auger Drive',
        model: 'YA-2000 ~ YA-100000',
        image: pImg('auger-drive-ya'),
        description:
          '液压马达 + 行星齿轮箱组合的螺旋钻动力头，10 款型号覆盖 0.5–52 吨挖掘机，扭矩最高达 100,000 Nm，结构紧凑、传动平稳，适合各类钻孔作业。',
        specs: [
          { label: 'Range', value: 'YA-2000 / YA-3300 / YA-5000 / YA-8000 / YA-10000 / YA-18000 / YA-31000 / YA-50000 / YA-80000 / YA-100000' },
          { label: 'Drive', value: 'Hydraulic motor + planetary gearbox' },
          { label: 'Mount', value: 'Excavator 0.5-52 ton' },
          { label: 'Torque', value: '1,900 – 100,000 N·m' },
          { label: 'Shaft', value: 'Round / hex / square shank (configurable)' },
        ],
      },
    ],
  },
  {
    slug: 'earth-augers',
    name: 'Earth Augers',
    short: '螺旋钻杆钻头',
    description:
      '与动力头配套的整体螺旋钻杆与钻头，多种钻型适配不同地质，直径范围 150mm–2000mm。',
    image: pImg('earth-augers'),
    items: [
      {
        name: 'W2 Earth/Clay Auger',
        model: 'W2',
        image: pImg('auger-w2'),
        description:
          '用于一般土质与黏土的整体螺旋钻，配备 ADP2 钻头与 AOT2 钻齿，常规钻孔用途。',
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
          '组合型整体螺旋钻，适应所有地质条件，采用锥形钻齿，配 AOP3 钻头与 AOT3 钻齿。',
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
          '重载型岩层螺旋钻，用于混凝土、页岩及可破碎岩石，配 AOP4 钻头与 AOT4 钻齿。',
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
    short: '钻探驱动',
    description:
      '高速钻孔动力头与水平钻孔驱动装置，为高速成孔与水平钻进提供可靠动力输出。',
    image: pImg('drilling-drives'),
    items: [
      {
        name: 'High Speed Auger Drive',
        model: 'HS series',
        image: pImg('hs-drive'),
        description:
          '高输出转速螺旋钻动力头，适合小直径、高转速的快速钻孔需求，提升单位时间成孔效率。',
        specs: [{ label: 'Output', value: 'High speed output for rapid drilling' }],
      },
      {
        name: 'Horizontal Drill Drive',
        model: 'HDD series',
        image: pImg('hd-drive'),
        description:
          '水平钻孔驱动装置，用于水平定向钻孔与横向贯入作业，传动稳定、止转可靠。',
        specs: [{ label: 'Mode', value: 'Horizontal / directional drilling' }],
      },
    ],
  },
  {
    slug: 'hitch',
    name: 'Hitch',
    short: '连接器',
    description:
      '高强度快换连接器，覆盖单销、双销、双销摇篮及滑移装载机等多种接口形式，更换属具快速可靠。',
    image: pImg('hitch'),
    items: [
      { name: 'Single Pin Hitch', model: 'Single Pin', image: pImg('hitch-single'), description: '单销快换连接器，结构简单、连接快捷可靠。' },
      { name: 'Double Pin Hitch', model: 'Double Pin', image: pImg('hitch-double'), description: '双销快换连接器，承载更稳定，适配重型属具。' },
      { name: 'Double Pin Cradle Hitch', model: 'Double Pin Cradle', image: pImg('hitch-cradle'), description: '双销摇篮式连接器，支撑面大、抗冲击能力突出。' },
      { name: 'Skid Steer Hitch', model: 'Skid Steer', image: pImg('hitch-skid'), description: '滑移装载机专用快换连接器，适配滑移机具安装。' },
    ],
  },
  {
    slug: 'wear-parts',
    name: 'Wear Parts',
    short: '耐磨部件',
    description:
      '螺旋钻钻齿与钻头全套耐磨部件，采用耐磨合金材质，适配对应钻型，延长连续作业时间。',
    image: pImg('wear-parts'),
    items: [
      {
        name: 'Auger Teeth & Pilots',
        model: 'ADP2 / AOP3 / AOP4 · AOT2 / AOT3 / AOT4',
        image: pImg('teeth-pilots'),
        description:
          '配套钻头与钻齿，包含 ADP2/AOP3/AOP4 钻头与 AOT2/AOT3/AOT4 钻齿，硬质合金耐磨抗冲击。',
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
    short: '电动快换',
    description:
      'HM 电动快换连接器，适配 5–9 吨挖掘机，电动驱动、三重自动锁止，无液压油泄漏风险。The Convenience of Automatic. The Reliability of Manual.',
    image: pImg('electric-coupler'),
    items: [
      {
        name: 'HM Electric Quick Coupler',
        model: '5-9 ton excavator',
        image: pImg('electric-coupler-hm'),
        description:
          '采用电动驱动系统替代液压回路，实现三重重自动锁止与手动备用模式，IP67 级防水，杜绝液压油泄漏。自动化的便捷 + 手动的可靠。',
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
    short: '配件',
    description:
      '配套属具与工具，含劈木机、树桩刨、取芯钻筒与水泥搅拌器等轻量展示产品。',
    image: pImg('accessories'),
    items: [
      { name: 'Log Splitter', model: 'Log Splitter', image: pImg('acc-log-splitter'), description: '劈木机，用于木材劈分作业。' },
      { name: 'Stump Planer', model: 'Stump Planer', image: pImg('acc-stump-planer'), description: '树桩刨，用于树桩铣削平整。' },
      { name: 'Core Barrel', model: 'Core Barrel', image: pImg('acc-core-barrel'), description: '取芯钻筒，用于岩层取芯钻孔。' },
      { name: 'Cement Mixer', model: 'Cement Mixer', image: pImg('acc-cement-mixer'), description: '水泥搅拌器，用于现场浆料搅拌。' },
    ],
  },
  {
    slug: 'applications',
    name: 'Applications',
    short: '应用场景',
    description:
      'HM Attachment 产品广泛应用于护栏打桩、园林绿化、植树、水井钻井、基础桩、杆塔及桅杆安装、螺旋桩、地源热泵、道路标牌、声屏障、太阳能与风力发电塔基等工程现场。',
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