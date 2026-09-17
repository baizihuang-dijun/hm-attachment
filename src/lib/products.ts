export type SpecRow = { label: string; value: string };

export type ProductItem = {
  name: string;
  model?: string;
  image: string; // "[image]" 占位标记，后续替换为实拍图 URL
  description: string;
  specs?: SpecRow[];
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string; // 分类占位图
  items: ProductItem[];
  hasTable?: boolean;
  tableTitle?: string;
  table?: { headers: string[]; rows: string[][] };
};

const pImg = (name: string) => `[image-${name}]`;

export const brand = {
  name: 'HM Attachment',
  slogan: 'Excavator Attachments & Drilling Equipment',
  short:
    '弈晨工程机械专业制造挖掘机钻机属具、钻探设备与耐磨部件，为全球基建、打桩与钻井现场提供可靠动力。',
};

// 10 款 Auger Drives 参数表（按弈晨样册口径整理，参数字段为样例口径，实拍图待替换）
const augerDrivesTable = {
  headers: [
    'Model',
    'Excavator (ton)',
    'Max Torque (N·m)',
    'Max Auger Dia. (mm)',
    'Rated Speed (rpm)',
    'Drive Type',
    'Weight (kg)',
  ] as string[],
  rows: [
    ['HD-30', '3–5', '3000', '500', '45–90', 'Hydraulic', '160'],
    ['HD-45', '5–7', '4500', '600', '40–80', 'Hydraulic', '210'],
    ['HD-65', '7–9', '6500', '800', '36–72', 'Hydraulic', '285'],
    ['HD-85', '9–12', '8500', '1000', '32–64', 'Hydraulic', '360'],
    ['HD-110', '12–16', '11000', '1200', '28–56', 'Hydraulic', '470'],
    ['HD-140', '16–20', '14000', '1400', '25–50', 'Hydraulic', '590'],
    ['HD-180', '20–25', '18000', '1600', '22–44', 'Hydraulic', '740'],
    ['HD-240', '25–32', '24000', '2000', '19–38', 'Hydraulic', '960'],
    ['HD-300', '32–40', '30000', '2200', '16–32', 'Hydraulic', '1240'],
    ['HD-380', '40+', '38000', '2500', '14–28', 'Hydraulic', '1580'],
  ],
};

export const categories: Category[] = [
  {
    slug: 'auger-drives',
    name: 'Auger Drives',
    short: '螺旋钻动力头',
    description:
      '专为挖掘机配套的液压螺旋钻动力头，扭矩覆盖 3–38 kN·m，适配 3–40 吨级挖掘机，广泛用于建筑桩基、市政管道与通信杆塔钻孔。',
    image: pImg('auger-drives'),
    hasTable: true,
    tableTitle: 'Auger Drives 系列参数表 (10 Models)',
    table: augerDrivesTable,
    items: [
      {
        name: 'HD Series Auger Drive',
        model: 'HD-30 ~ HD-380',
        image: pImg('auger-drive-hd'),
        description:
          '高速法向扭矩输出的液压螺旋钻动力头，齿轮减速箱 + 液压马达组合，结构紧凑、传动平稳，适合建筑桩基与钻孔作业。',
        specs: [
          { label: 'Model Range', value: 'HD-30 / HD-45 / HD-65 / HD-85 / HD-110 / HD-140 / HD-180 / HD-240 / HD-300 / HD-380' },
          { label: 'Drive Type', value: 'Hydraulic motor + planetary gearbox' },
          { label: 'Mount', value: 'Excavator 3–40 ton' },
          { label: 'Torque Range', value: '3,000 – 38,000 N·m' },
          { label: 'Optional', value: 'Auto torque limiter, PCD pilot version' },
        ],
      },
    ],
  },
  {
    slug: 'earth-augers',
    name: 'Earth Augers',
    short: '螺旋钻杆钻头',
    description:
      '与动力头配套的螺旋钻杆、钻头与加长节，多种直径与螺距可选，适应不同地质的连续螺旋钻孔作业。',
    image: pImg('earth-augers'),
    items: [
      {
        name: 'Continous Flight Auger',
        model: 'CFA-300 ~ CFA-1500',
        image: pImg('cfa-auger'),
        description:
          '连续螺旋叶片钻杆，直径 300–1500mm，适用于黏土、砂土及一般土层的连续螺旋钻孔。',
        specs: [
          { label: 'Diameter', value: '300 / 400 / 500 / 600 / 800 / 1000 / 1250 / 1500 mm' },
          { label: 'Flight', value: 'Single / double flight, hard-point pilot' },
          { label: 'Connection', value: 'Hex / round shank (customizable)' },
        ],
      },
      {
        name: 'Pilot & Hard Rock Bits',
        model: 'BP / HR series',
        image: pImg('auger-bits'),
        description:
          '锥形感应钻头与硬质岩层破岩钻头，选配可换硬质合金齿，提升在砾石、风化岩层的钻进效率。',
        specs: [
          { label: 'Type', value: 'Pilot bit, hard rock bit, wing bit' },
          { label: 'Tooth', value: 'Tungsten carbide insert, replaceable' },
        ],
      },
    ],
  },
  {
    slug: 'drilling-drives',
    name: 'Drilling Drives',
    short: '钻探驱动装置',
    description:
      '面向大孔径与深孔钻探需求的双马达/大扭矩钻探驱动动力头，支持凯式与连续螺旋两种作业方式。',
    image: pImg('drilling-drives'),
    items: [
      {
        name: 'Kelly Bar Drilling Drive',
        model: 'KD-160 / KD-240 / KD-380',
        image: pImg('kelly-drive'),
        description:
          '凯式钻探动力头，配合伸缩式凯式钻杆，实现大直径灌注桩成孔作业，扭矩大、抗冲击能力突出。',
        specs: [
          { label: 'Torque', value: '160 / 240 / 380 kN·m' },
          { label: 'Mode', value: 'Kelly drilling, rotary drilling' },
          { label: 'Max Diameter', value: 'Up to 3000 mm' },
        ],
      },
      {
        name: 'CFA Drilling Rig Drive',
        model: 'RF series',
        image: pImg('cfa-drive'),
        description:
          '长螺旋钻机配套钻探驱动，大通径中心可灌注混凝土，适配长螺旋压灌桩施工。',
        specs: [
          { label: 'Center Hole', value: 'Concrete pumping through shaft' },
          { label: 'Application', value: 'CFA / long auger pile' },
        ],
      },
    ],
  },
  {
    slug: 'hitch',
    name: 'Hitch',
    short: '快换连接器',
    description:
      '高强度挖掘机连接器与快换接头，采用高锰钢/低合金钢铸造，强度高、更换属具快速可靠。',
    image: pImg('hitch'),
    items: [
      {
        name: 'Hydraulic Quick Hitch',
        model: 'HQ series',
        image: pImg('hydraulic-hitch'),
        description:
          '液压快换连接器，驾驶室内一键切换属具，安全销联动锁止，适配主流挖掘机连接间距。',
        specs: [
          { label: 'Tonnage', value: 'Excavator 2–50 ton' },
          { label: 'Lock', value: 'Hydraulic + mechanical safety pin' },
          { label: 'Standard', value: 'Pin spacing per ISO (customizable)' },
        ],
      },
      {
        name: 'Mechanical Hitch',
        model: 'MH series',
        image: pImg('mechanical-hitch'),
        description:
          '经济型机械快换，手动销轴连接，结构简单、维护成本低。',
        specs: [{ label: 'Tonnage', value: 'Excavator 2–30 ton' }],
      },
    ],
  },
  {
    slug: 'wear-parts',
    name: 'Wear Parts',
    short: '耐磨耐磨件',
    description:
      '钻齿、钻头、刀头、护套等高耐磨消耗部件，采用耐磨合金材质，延长设备连续作业时间。',
    image: pImg('wear-parts'),
    items: [
      {
        name: 'Drill & Auger Teeth',
        model: 'DT series',
        image: pImg('drill-teeth'),
        description:
          '硬质合金耐磨钻齿，适配不同型号动力头与钻头，耐磨抗冲击。',
        specs: [{ label: 'Material', value: 'Tungsten carbide + alloy holder' }],
      },
      {
        name: 'Wear Shroud / Guide',
        model: 'WS series',
        image: pImg('wear-shroud'),
        description:
          '钻杆护套与导向耐磨件，采用高铬耐磨钢板，防护钻进磨损。',
        specs: [{ label: 'Material', value: 'High-chrome wear plate' }],
      },
    ],
  },
  {
    slug: 'electric-coupler',
    name: 'Electric Coupler',
    short: '电动快换',
    description:
      '电动控制快换连接器，无需额外液压管路，电控锁止，安装便捷、适配电动与小型设备。',
    image: pImg('electric-coupler'),
    items: [
      {
        name: 'Electric Quick Coupler',
        model: 'EQ series',
        image: pImg('electric-coupler-eq'),
        description:
          '电控快换连接器，低压电信号驱动锁止油缸，省去辅助液压回路，适合小型与新能源设备。',
        specs: [
          { label: 'Tonnage', value: 'Excavator 2–13 ton' },
          { label: 'Actuation', value: '12/24V electric signal drive' },
        ],
      },
    ],
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    short: '配套配件',
    description:
      '动力头、钻机配套的各类配件，包括延长节、稳定架、限位阀块、液压管路与密封件等。',
    image: pImg('accessories'),
    items: [
      {
        name: 'Extension & Stabilizer',
        model: 'EX / ST series',
        image: pImg('extensions'),
        description:
          '钻杆延长节与稳定架，保证深孔作业时的对中度与稳定性。',
        specs: [{ label: 'Fit', value: '600–1500 mm auger' }],
      },
      {
        name: 'Hydraulic Accessories',
        model: 'ACC series',
        image: pImg('hyd-accessories'),
        description: '限位阀块、管路接头、密封件与油口适配件，保障系统联接可靠。',
        specs: [{ label: 'Type', value: 'Valve block / hose / seal kit' }],
      },
    ],
  },
  {
    slug: 'applications',
    name: 'Applications',
    short: '应用场景',
    description:
      'HM Attachment 产品广泛服务于建筑桩基、市政管网、通信电力、道路桥梁与钻井勘探等工程现场。',
    image: pImg('applications'),
    items: [
      { name: 'Building Pile Foundation', model: 'Piling', image: pImg('app-piling'), description: '承台桩、灌注桩成孔作业。' },
      { name: 'Municipal & Utility Pipes', model: 'Utility', image: pImg('app-utility'), description: '市政管道、检查井、路灯基座钻孔。' },
      { name: 'Telecom & Power Poles', model: 'Telecom', image: pImg('app-telecom'), description: '通信杆塔、电力杆塔基础钻孔。' },
      { name: 'Road & Bridge Construction', model: 'Road', image: pImg('app-road'), description: '护栏桩、桥梁基础与防护桩施工。' },
    ],
  },
  {
    slug: 'about',
    name: 'About / Contact',
    short: '关于与联系',
    description:
      '弈晨工程机械专注挖掘机螺旋转机属具与钻探设备的研发制造，以可靠品质服务全球市场。',
    image: pImg('about'),
    items: [
      {
        name: 'About HM Attachment',
        model: 'Company',
        image: pImg('company'),
        description:
          '弈晨（HM Attachment）是专业的挖掘机属具与钻探设备制造商，产品涵盖螺旋钻动力头、钻杆钻头、快换连接器、耐磨件等品类，为全球施工与钻井现场提供稳定、高效、耐用的解决方案。',
      },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function categoryItemsBySlug(slug: string): ProductItem[] | undefined {
  return getCategory(slug)?.items;
}