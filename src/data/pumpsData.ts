import { PumpModel, CategoryInfo } from '../types/pump';

export const COMPANY_INFO = {
  name: 'Super Flow Submersible Pumps',
  parentCompany: 'Royal Manufacture',
  tagline: 'Precision Engineered for Uninterrupted Flow Since 2000',
  foundedYear: 2000,
  address: 'Padvala, Rajkot - 360024, Gujarat, India',
  phone: '+91 97822 96822',
  phoneClean: '919782296822',
  email: 'royalmanufacture7@gmail.com',
  website: 'www.royalmanufacture.in',
  certifications: [
    { title: 'ISO 9001:2008', desc: 'Quality Management System Standard' },
    { title: 'IS: 8034', desc: 'ISI Borewell Submersible Pumps Standard (CM/L7637668)' },
    { title: 'IS: 14220', desc: 'ISI Openwell Submersible Pumps Standard (CM/L7600101706)' },
    { title: 'CE Certified', desc: 'Conforms with European Health, Safety & Environmental Standards' }
  ]
};

export const CATEGORY_IMAGE_MAP: Record<string, string> = {
  'V-3': '/images/1.jpg',
  'V-4': '/images/2.jpg',
  'V-5': '/images/3.jpg',
  'V-6': '/images/1.jpg',
  'Openwell': '/images/3.jpg'
};

export const getPumpImage = (pump?: { id?: string; model?: string; category?: string } | null): string => {
  if (!pump) return '/images/1.jpg';
  if (pump.category && CATEGORY_IMAGE_MAP[pump.category]) {
    return CATEGORY_IMAGE_MAP[pump.category];
  }
  return '/images/1.jpg';
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'V-3',
    name: 'V-3 Submersible Pumps',
    tagline: 'High Head Slim Borewell Solution',
    boreSize: '3" Borewell (75mm)',
    powerRange: '0.50 HP to 1.5 HP (0.37 kW - 1.1 kW)',
    headMax: '10 to 100 Meters',
    flowMax: '110 to 15 LPM',
    modelCount: '16+ Configurations',
    image: '/images/1.jpg',
    description: 'Purpose-engineered for narrow 3" deep borewells. Equipped with sand-resistant Noryl impellers, epoxy-coated rotors, and CNC-machined components for high head domestic and garden delivery.',
    seriesList: ['V-3 High Head', 'RM3-2', 'RM3-4', 'RM3-5', 'RM3-7'],
    highlights: ['Sand-Resistant Glass Filled Noryl', 'Epoxy Anti-Corrosive Coating', '100m Deep Dynamic Head', 'Single Phase 160V-230V']
  },
  {
    id: 'V-4',
    name: 'V-4 Submersible Pumps',
    tagline: 'India\'s Most Trusted 4" Borewell Series',
    boreSize: '4" Borewell (100mm)',
    powerRange: '0.5 HP to 7.5 HP (0.37 kW - 5.5 kW)',
    headMax: '10 to 388 Meters',
    flowMax: '455 to 10 LPM',
    modelCount: '120+ Configurations',
    image: '/images/2.jpg',
    description: 'Our flagship 4" series available in Primium, Nano, Magic, Turbo (Low-Voltage 160V), and Mix Flow configurations. Engineered to withstand harsh voltage fluctuations.',
    seriesList: ['Primium', 'Turbo (Low Volt)', 'Nano', 'Magic', 'Primium Q-Type CI', 'SU-98 DAI'],
    highlights: ['160V Turbo Low-Voltage Tech', 'Stainless Steel AISI 202/410', 'High Axial Load Bearings', 'Single & Three Phase']
  },
  {
    id: 'V-5',
    name: 'V-5 Mix Flow Pumps',
    tagline: 'High Discharge 5" Borewell Pump Sets',
    boreSize: '5" Borewell (125mm)',
    powerRange: '3.0 HP to 7.5 HP (2.2 kW - 5.5 kW)',
    headMax: '6 to 96 Meters',
    flowMax: '740 to 150 LPM',
    modelCount: '24+ Configurations',
    image: '/images/3.jpg',
    description: 'Heavy duty mix flow hydraulics delivering massive volume water discharge up to 740 LPM. Ideal for agriculture, flood irrigation, and industrial bulk water transfers.',
    seriesList: ['RM5M-80 Series', 'RM5M-100 Series', 'RM5M-125 Series'],
    highlights: ['High Volume 740 LPM Flow', 'CED Coated CI Casings', '99.9% EC Grade Copper', 'Heavy Agricultural Duty']
  },
  {
    id: 'V-6',
    name: 'V-6 Heavy Duty Pumps',
    tagline: 'Industrial & Agricultural Powerhouse',
    boreSize: '6" Borewell (150mm)',
    powerRange: '3.0 HP to 25.0 HP (2.2 kW - 22.0 kW)',
    headMax: '12 to 434 Meters',
    flowMax: '1,625 to 60 LPM',
    modelCount: '80+ Configurations',
    image: '/images/1.jpg',
    description: 'Built with SS304 investment casting bowls, SS410 impellers, premium Silicon Carbide bearings, and T-Bolt Turbo construction for extreme depths up to 434 meters.',
    seriesList: ['Primium 50 Feet SS', 'Primium Jacket', 'Q-Type Mix Flow', 'Dilux Radial & Mix'],
    highlights: ['SS304 Investment Casting Bowls', 'Silicon Carbide Bearings', '434m (1400+ Ft) Head', 'Discharge up to 1625 LPM']
  },
  {
    id: 'Openwell',
    name: 'Horizontal & Vertical Openwell',
    tagline: 'Self-Priming Sump & Canal Pump Sets',
    boreSize: 'Open Sump / Canal / River',
    powerRange: '0.50 HP to 10.0 HP (0.37 kW - 7.5 kW)',
    headMax: '10 to 54 Meters',
    flowMax: '1,500 to 20 LPM',
    modelCount: '40+ Configurations',
    image: '/images/3.jpg',
    description: 'Submerged directly inside sump tanks, open wells, canals, and rivers. Completely eliminates suction piping and priming issues with SS & Cast Iron body options.',
    seriesList: ['Horizontal Openwell', 'V-7 Openwell SS/CI', 'V-9 Heavy Openwell'],
    highlights: ['100% Self-Priming Submerged', 'Copper & Aluminum Windings', 'Zero Suction Loss', 'Wide Sump Water Coverage']
  }
];

export const ALL_PUMPS: PumpModel[] = [
  // ================= V-3 HIGH HEAD =================
  {
    id: 'rm3-20510',
    model: 'RM3-20510',
    category: 'V-3',
    series: 'V-3 High Head',
    hp: 0.5,
    kw: 0.37,
    stages: 10,
    outlet: '1.0"',
    phase: 'Single Phase',
    price1Phase: 9940,
    headRange: '10 - 46 Mtr',
    dischargeRange: '68 - 15 LPM',
    voltage: '160V - 230V, 50Hz AC',
    speed: '2800 RPM',
    duty: 'S1 Continuous',
    flowData: { '68': 10, '62': 15, '54': 20, '45': 25, '38': 30, '30': 35, '15': 40, '0': 46 },
    features: ['Glass Filled NORYL Sand Resistance', 'Epoxy Coated Anti-Corrosive Rotor', 'CED Coated CI Parts', 'Water Lubricated Thrust Bearing'],
    applications: ['Domestic & Municipal Supply', 'Solar Water Pumping', 'Sprinkler System', 'Fountains & Gardens']
  },
  {
    id: 'rm3-207515',
    model: 'RM3-207515',
    category: 'V-3',
    series: 'V-3 High Head',
    hp: 0.75,
    kw: 0.55,
    stages: 15,
    outlet: '1.0"',
    phase: 'Single Phase',
    price1Phase: 10930,
    headRange: '15 - 69 Mtr',
    dischargeRange: '68 - 15 LPM',
    voltage: '160V - 230V',
    speed: '2800 RPM',
    flowData: { '68': 15, '62': 23, '54': 30, '45': 38, '38': 45, '30': 53, '15': 60, '0': 69 }
  },
  {
    id: 'rm3-2120',
    model: 'RM3-2120',
    category: 'V-3',
    series: 'V-3 High Head',
    hp: 1.0,
    kw: 0.75,
    stages: 20,
    outlet: '1.0"',
    phase: 'Single Phase',
    price1Phase: 12190,
    headRange: '20 - 91 Mtr',
    dischargeRange: '68 - 15 LPM',
    flowData: { '68': 20, '62': 30, '54': 40, '45': 50, '38': 60, '30': 70, '15': 80, '0': 91 }
  },
  {
    id: 'rm3-21525',
    model: 'RM3-21525',
    category: 'V-3',
    series: 'V-3 High Head',
    hp: 1.5,
    kw: 1.10,
    stages: 25,
    outlet: '1.0"',
    phase: 'Single Phase',
    price1Phase: 12900,
    headRange: '25 - 114 Mtr',
    dischargeRange: '68 - 15 LPM',
    flowData: { '68': 25, '62': 38, '54': 50, '45': 63, '38': 75, '30': 88, '15': 100, '0': 114 }
  },
  {
    id: 'rm3-5056',
    model: 'RM3-5056',
    category: 'V-3',
    series: 'V-3 High Head',
    hp: 0.5,
    kw: 0.37,
    stages: 6,
    outlet: '1.25"',
    phase: 'Single Phase',
    price1Phase: 9799,
    headRange: '6 - 37 Mtr',
    dischargeRange: '95 - 32 LPM',
    flowData: { '95': 6, '92': 9, '82': 12, '75': 15, '65': 18, '50': 21, '32': 24, '0': 37 }
  },
  {
    id: 'rm3-51515',
    model: 'RM3-51515',
    category: 'V-3',
    series: 'V-3 High Head',
    hp: 1.5,
    kw: 1.10,
    stages: 15,
    outlet: '1.25"',
    phase: 'Single Phase',
    price1Phase: 12600,
    headRange: '15 - 91 Mtr',
    dischargeRange: '95 - 32 LPM',
    flowData: { '95': 15, '92': 23, '82': 30, '75': 38, '65': 45, '50': 53, '32': 60, '0': 91 }
  },
  {
    id: 'rm3-71514',
    model: 'RM3-71514',
    category: 'V-3',
    series: 'V-3 High Head',
    hp: 1.5,
    kw: 1.10,
    stages: 14,
    outlet: '1.25"',
    phase: 'Single Phase',
    price1Phase: 12600,
    headRange: '14 - 85 Mtr',
    dischargeRange: '110 - 40 LPM',
    flowData: { '110': 14, '90': 22, '82': 28, '80': 35, '70': 42, '50': 49, '40': 56, '0': 85 }
  },

  // ================= V-4 PRIMIUM =================
  {
    id: 'rm-10510',
    model: 'RM-10510',
    category: 'V-4',
    series: 'Primium',
    hp: 0.5,
    kw: 0.37,
    stages: 10,
    outlet: '1.0" (25mm)',
    phase: 'Single Phase',
    price1Phase: 13250,
    headRange: '21 - 60 Mtr',
    dischargeRange: '54 - 18 LPM',
    voltage: '160V - 230V / 350V - 415V',
    speed: '2800 RPM',
    duty: 'S1 Continuous',
    flowData: { '54': 21, '48': 27, '41': 34, '37': 40, '27': 46, '18': 52, '0': 60 },
    features: ['Fully Corrosive Resistant SS Stator', 'Epoxy Coated Hygenic Rotor', 'Water Lubricated High Axial Bearing', 'CED Coated CI Pump Parts']
  },
  {
    id: 'rm-11018',
    model: 'RM-11018',
    category: 'V-4',
    series: 'Primium',
    hp: 1.0,
    kw: 0.75,
    stages: 18,
    outlet: '1.0" (25mm)',
    phase: 'Single Phase',
    price1Phase: 18020,
    headRange: '38 - 108 Mtr',
    dischargeRange: '54 - 18 LPM',
    flowData: { '54': 38, '48': 49, '41': 60, '37': 72, '27': 82, '18': 93, '0': 108 }
  },
  {
    id: 'rm-11525',
    model: 'RM-11525',
    category: 'V-4',
    series: 'Primium',
    hp: 1.5,
    kw: 1.12,
    stages: 25,
    outlet: '1.0" (25mm)',
    phase: 'Multi-Phase',
    price1Phase: 21230,
    price3Phase: 18350,
    headRange: '53 - 150 Mtr',
    dischargeRange: '54 - 18 LPM',
    flowData: { '54': 53, '48': 69, '41': 84, '37': 100, '27': 114, '18': 130, '0': 150 }
  },
  {
    id: 'rm-13035',
    model: 'RM-13035',
    category: 'V-4',
    series: 'Primium',
    hp: 3.0,
    kw: 2.24,
    stages: 35,
    outlet: '1.0" (25mm)',
    phase: 'Multi-Phase',
    price1Phase: 27270,
    price3Phase: 25150,
    headRange: '75 - 210 Mtr',
    dischargeRange: '54 - 18 LPM',
    flowData: { '54': 75, '48': 92, '41': 117, '37': 140, '27': 160, '18': 181, '0': 210 }
  },
  {
    id: 'rm-15045',
    model: 'RM-15045',
    category: 'V-4',
    series: 'Primium',
    hp: 5.0,
    kw: 3.70,
    stages: 45,
    outlet: '1.0" (25mm)',
    phase: 'Three Phase',
    price3Phase: 32400,
    headRange: '96 - 270 Mtr',
    dischargeRange: '54 - 18 LPM',
    flowData: { '54': 96, '48': 123, '41': 151, '37': 180, '27': 206, '18': 233, '0': 270 }
  },
  {
    id: 'rm-42020',
    model: 'RM-42020',
    category: 'V-4',
    series: 'Primium',
    hp: 2.0,
    kw: 1.49,
    stages: 20,
    outlet: '1.25" (32mm)',
    phase: 'Multi-Phase',
    price1Phase: 22950,
    price3Phase: 20800,
    headRange: '43 - 120 Mtr',
    dischargeRange: '107 - 31 LPM',
    flowData: { '107': 43, '99': 55, '85': 67, '70': 80, '53': 91, '31': 104, '0': 120 }
  },
  {
    id: 'rm-75025',
    model: 'RM-75025',
    category: 'V-4',
    series: 'Primium',
    hp: 5.0,
    kw: 3.73,
    stages: 25,
    outlet: '2.0" (50mm)',
    phase: 'Three Phase',
    price3Phase: 30350,
    headRange: '46 - 150 Mtr',
    dischargeRange: '190 - 78 LPM',
    flowData: { '190': 46, '175': 61, '151': 76, '110': 100, '95': 109, '78': 122, '0': 150 }
  },
  {
    id: 'rm-18515',
    model: 'RM-18515',
    category: 'V-4',
    series: 'Primium',
    hp: 5.0,
    kw: 3.70,
    stages: 15,
    outlet: '2.0" (50mm)',
    phase: 'Three Phase',
    price3Phase: 29600,
    headRange: '20 - 80 Mtr',
    dischargeRange: '336 - 84 LPM',
    flowData: { '336': 20, '312': 27, '250': 35, '195': 45, '162': 55, '84': 62, '0': 80 }
  },

  // ================= V-4 PRIMIUM Q-TYPE CI =================
  {
    id: 'rm-20206',
    model: 'RM-20206',
    category: 'V-4',
    series: 'Primium Q-type CI',
    hp: 2.0,
    kw: 1.5,
    stages: 6,
    outlet: '2.5" (65mm)',
    phase: 'Multi-Phase',
    price1Phase: 25990,
    price2Phase: 25235,
    price3Phase: 27085,
    headRange: '12 - 35 Mtr',
    dischargeRange: '455 - 150 LPM',
    flowData: { '455': 12, '405': 15, '370': 18, '320': 21, '275': 24, '200': 27, '150': 30, '0': 35 }
  },
  {
    id: 'rm-20511',
    model: 'RM-20511',
    category: 'V-4',
    series: 'Primium Q-type CI',
    hp: 5.0,
    kw: 3.70,
    stages: 11,
    outlet: '2.5" (65mm)',
    phase: 'Three Phase',
    price3Phase: 35715,
    headRange: '22 - 64 Mtr',
    dischargeRange: '455 - 150 LPM',
    flowData: { '455': 22, '405': 28, '370': 33, '320': 39, '275': 44, '200': 50, '150': 55, '0': 64 }
  },

  // ================= V-4 NANO SERIES =================
  {
    id: 'nano-rm11018',
    model: 'RM-11018 Nano',
    category: 'V-4',
    series: 'Nano',
    hp: 1.0,
    kw: 0.75,
    stages: 18,
    outlet: '1.0" (25mm)',
    phase: 'Single Phase',
    price1Phase: 16950,
    headRange: '38 - 108 Mtr',
    dischargeRange: '47 - 15 LPM',
    flowData: { '47': 38, '42': 49, '36': 60, '33': 72, '24': 82, '15': 93, '0': 108 }
  },
  {
    id: 'nano-rm42020',
    model: 'RM-42020 Nano',
    category: 'V-4',
    series: 'Nano',
    hp: 2.0,
    kw: 1.49,
    stages: 20,
    outlet: '1.25" (32mm)',
    phase: 'Single Phase',
    price1Phase: 21240,
    headRange: '43 - 120 Mtr',
    dischargeRange: '98 - 29 LPM',
    flowData: { '98': 43, '90': 55, '78': 67, '64': 80, '49': 91, '29': 104, '0': 120 }
  },
  {
    id: 'nano-rm73015',
    model: 'RM-73015 Nano',
    category: 'V-4',
    series: 'Nano',
    hp: 3.0,
    kw: 2.24,
    stages: 15,
    outlet: '2.0" (50mm)',
    phase: 'Single Phase',
    price1Phase: 24090,
    headRange: '27 - 90 Mtr',
    dischargeRange: '180 - 75 LPM',
    flowData: { '180': 27, '167': 37, '144': 46, '105': 60, '90': 66, '75': 73, '0': 90 }
  },

  // ================= V-4 MAGIC SERIES =================
  {
    id: 'magic-rm10510',
    model: 'RM-10510 Magic',
    category: 'V-4',
    series: 'Magic',
    hp: 0.5,
    kw: 0.37,
    stages: 10,
    outlet: '1.0" (25mm)',
    phase: 'Single Phase',
    price1Phase: 11740,
    headRange: '21 - 60 Mtr',
    dischargeRange: '47 - 15 LPM',
    flowData: { '47': 21, '42': 27, '36': 34, '33': 40, '24': 46, '15': 52, '0': 60 }
  },
  {
    id: 'magic-rm22024',
    model: 'RM-22024 Magic',
    category: 'V-4',
    series: 'Magic',
    hp: 2.0,
    kw: 1.49,
    stages: 25,
    outlet: '1.0" (25mm)',
    phase: 'Single Phase',
    price1Phase: 18290,
    headRange: '53 - 150 Mtr',
    dischargeRange: '69 - 28 LPM',
    flowData: { '69': 53, '65': 69, '56': 84, '44': 100, '40': 114, '28': 130, '0': 150 }
  },

  // ================= V-4 TURBO (LOW VOLTAGE) =================
  {
    id: 'turbo-rm1s-225',
    model: 'RM1S-225 Turbo',
    category: 'V-4',
    series: 'Turbo (Low Volt)',
    hp: 2.0,
    kw: 1.5,
    stages: 25,
    outlet: '1.0" (25mm)',
    phase: 'Single Phase',
    price1Phase: 27480,
    headRange: '75 - 175 Mtr',
    dischargeRange: '68 - 20 LPM',
    voltage: '1-Ph: 220V down to 160V | 3-Ph: 380V down to 220V',
    flowData: { '68': 75, '55': 100, '48': 113, '40': 125, '35': 138, '31': 150, '20': 175 }
  },
  {
    id: 'turbo-rm2-545',
    model: 'RM2-545 Turbo',
    category: 'V-4',
    series: 'Turbo (Low Volt)',
    hp: 5.0,
    kw: 3.7,
    stages: 45,
    outlet: '1.0" (25mm)',
    phase: 'Three Phase',
    price3Phase: 38933,
    headRange: '135 - 315 Mtr',
    dischargeRange: '77 - 26 LPM',
    flowData: { '77': 135, '68': 178, '62': 202, '52': 225, '45': 247, '38': 268, '26': 315 }
  },
  {
    id: 'turbo-rm19-7540',
    model: 'RM19-7540 Turbo',
    category: 'V-4',
    series: 'Turbo (Low Volt)',
    hp: 7.5,
    kw: 5.5,
    stages: 40,
    outlet: '2.0" (50mm)',
    phase: 'Three Phase',
    price3Phase: 45500,
    headRange: '80 - 220 Mtr',
    dischargeRange: '180 - 90 LPM',
    flowData: { '180': 80, '170': 100, '160': 120, '140': 160, '130': 180, '110': 200, '90': 220 }
  },
  {
    id: 'turbo-rm40-6514',
    model: 'RM40-6514 Mixflow Turbo',
    category: 'V-4',
    series: 'Turbo (Low Volt)',
    hp: 6.5,
    kw: 4.5,
    stages: 14,
    outlet: '2.5" (65mm)',
    phase: 'Three Phase',
    price3Phase: 41500,
    headRange: '14 - 63 Mtr',
    dischargeRange: '465 - 120 LPM',
    flowData: { '465': 14, '400': 28, '375': 35, '320': 42, '280': 49, '230': 53, '160': 56, '120': 63 }
  },

  // ================= V-5 MIX FLOW =================
  {
    id: 'rm5m-8033',
    model: 'RM5M-8033',
    category: 'V-5',
    series: 'RM5M-80 Series',
    hp: 3.0,
    kw: 2.20,
    stages: 4,
    outlet: '2.5"',
    phase: 'Multi-Phase',
    price1Phase: 35570,
    headRange: '8 - 40 Mtr',
    dischargeRange: '620 - 220 LPM',
    flowData: { '620': 8, '590': 12, '626': 16, '480': 20, '430': 24, '350': 28, '220': 32, '0': 40 }
  },
  {
    id: 'rm5m-100758',
    model: 'RM5M-100758',
    category: 'V-5',
    series: 'RM5M-100 Series',
    hp: 7.5,
    kw: 5.50,
    stages: 8,
    outlet: '2.5"',
    phase: 'Three Phase',
    price3Phase: 47730,
    headRange: '16 - 80 Mtr',
    dischargeRange: '700 - 245 LPM',
    flowData: { '700': 16, '655': 24, '615': 32, '540': 40, '470': 48, '380': 56, '245': 64, '0': 80 }
  },

  // ================= V-6 PRIMIUM 50 FEET SS =================
  {
    id: 'v6-rm50306',
    model: 'RM 50306 (SS-50)',
    category: 'V-6',
    series: 'Primium 50 Feet SS',
    hp: 3.0,
    kw: 2.2,
    stages: 6,
    outlet: '2.0"',
    phase: 'Three Phase',
    price3Phase: 42410,
    headRange: '84 - 33 Mtr',
    dischargeRange: '190 - 40 LPM',
    flowData: { '40': 84, '80': 78, '90': 73, '110': 69, '135': 60, '160': 48, '190': 33 }
  },
  {
    id: 'v6-rm501530',
    model: 'RM 501530 (SS-50)',
    category: 'V-6',
    series: 'Primium 50 Feet SS',
    hp: 15.0,
    kw: 11.0,
    stages: 30,
    outlet: '2.0"',
    phase: 'Three Phase',
    price3Phase: 111100,
    headRange: '418 - 165 Mtr',
    dischargeRange: '190 - 40 LPM',
    flowData: { '40': 418, '80': 390, '90': 365, '110': 345, '135': 300, '160': 240, '190': 165 }
  },
  {
    id: 'v6-rm602032',
    model: 'RM 602032 (SS-60)',
    category: 'V-6',
    series: 'Primium 50 Feet SS',
    hp: 20.0,
    kw: 15.0,
    stages: 32,
    outlet: '2.5"',
    phase: 'Three Phase',
    price3Phase: 126530,
    headRange: '450 - 210 Mtr',
    dischargeRange: '225 - 75 LPM',
    flowData: { '75': 450, '115': 420, '130': 395, '150': 360, '175': 308, '205': 270, '225': 210 }
  },
  {
    id: 'v6-rm2002010',
    model: 'RM 2002010 (SS-200)',
    category: 'V-6',
    series: 'Primium 50 Feet SS',
    hp: 20.0,
    kw: 15.0,
    stages: 10,
    outlet: '2.5"',
    phase: 'Three Phase',
    price3Phase: 89825,
    headRange: '150 - 35 Mtr',
    dischargeRange: '810 - 130 LPM',
    flowData: { '130': 150, '375': 140, '410': 132, '510': 120, '590': 100, '690': 74, '810': 35 }
  },

  // ================= V-6 Q-TYPE MIX FLOW =================
  {
    id: 'v6-rm-262102020',
    model: 'RM-262102020',
    category: 'V-6',
    series: 'Q-Type Mix Flow',
    hp: 20.0,
    kw: 15.0,
    stages: 20,
    outlet: '3.0"',
    phase: 'Three Phase',
    price3Phase: 107144,
    headRange: '80 - 200 Mtr',
    dischargeRange: '630 - 200 LPM',
    flowData: { '630': 80, '580': 100, '550': 120, '500': 140, '430': 160, '380': 180, '200': 200 }
  },
  {
    id: 'v6-rm-30225208',
    model: 'RM-30225208',
    category: 'V-6',
    series: 'Q-Type Mix Flow',
    hp: 20.0,
    kw: 13.10,
    stages: 8,
    outlet: '4.0"',
    phase: 'Three Phase',
    price3Phase: 86880,
    headRange: '40 - 88 Mtr',
    dischargeRange: '1300 - 550 LPM',
    flowData: { '1300': 40, '1200': 48, '1100': 56, '950': 64, '880': 72, '700': 80, '550': 88 }
  },

  // ================= HORIZONTAL OPENWELL =================
  {
    id: 'rm7-052525',
    model: 'RM7-052525 Openwell SS',
    category: 'Openwell',
    series: 'V-7 Horizontal SS',
    hp: 0.5,
    kw: 0.37,
    stages: 1,
    outlet: '1.0" x 1.0"',
    phase: 'Single Phase',
    price1Phase: 6770,
    headRange: '10 - 22 Mtr',
    dischargeRange: '135 - 42 LPM',
    flowData: { '10': 135, '12': 130, '14': 120, '16': 105, '18': 90, '20': 75, '22': 42 }
  },
  {
    id: 'rm7-506550',
    model: 'RM7-506550 Openwell SS Copper',
    category: 'Openwell',
    series: 'V-7 Horizontal SS',
    hp: 5.0,
    kw: 3.70,
    stages: 1,
    outlet: '2.5" x 2.0"',
    phase: 'Multi-Phase',
    price1Phase: 22230,
    price3Phase: 20860,
    headRange: '10 - 32 Mtr',
    dischargeRange: '780 - 230 LPM',
    flowData: { '10': 780, '12': 765, '14': 755, '16': 745, '18': 735, '20': 725, '22': 715, '24': 690, '26': 525, '28': 485, '30': 350, '32': 230 }
  },
  {
    id: 'rm9-1008080',
    model: 'RM9-1008080 Heavy Openwell',
    category: 'Openwell',
    series: 'V-9 Heavy Openwell',
    hp: 10.0,
    kw: 7.50,
    stages: 1,
    outlet: '3.0" x 3.0"',
    phase: 'Three Phase',
    price3Phase: 44850,
    headRange: '20 - 40 Mtr',
    dischargeRange: '1500 - 485 LPM',
    flowData: { '20': 1500, '22': 1445, '24': 1375, '26': 1300, '28': 1225, '30': 1140, '32': 1045, '34': 950, '36': 810, '38': 665, '40': 485 }
  }
];

export const CERTIFICATIONS = [
  {
    code: 'ISO 9001:2008',
    name: 'Quality Management Certification',
    issuer: 'International Organization for Standardization',
    badge: 'Certified Quality',
    desc: 'Ensures strict adherence to continuous manufacturing quality control, precision CNC standards, and submerged load testing.'
  },
  {
    code: 'IS: 8034 (CM/L7637668)',
    name: 'Borewell Submersible Pump Sets',
    issuer: 'Bureau of Indian Standards (BIS)',
    badge: 'ISI Mark',
    desc: 'Certified high electrical efficiency, energy conservation ratings, and hydraulic performance for deepwell submersible pumps.'
  },
  {
    code: 'IS: 14220 (CM/L7600101706)',
    name: 'Openwell Submersible Pump Sets',
    issuer: 'Bureau of Indian Standards (BIS)',
    badge: 'ISI Mark',
    desc: 'Standardized build quality for agricultural and domestic openwell pump sets operating under submerged conditions.'
  },
  {
    code: 'CE Compliance',
    name: 'European Conformity Standards',
    issuer: 'CE European Directives',
    badge: 'CE Certified',
    desc: 'Compliance with electrical safety, dielectric breakdown insulation, and environmental durability requirements.'
  }
];

export const APPLICATIONS_DATA = [
  {
    title: 'Agriculture & Farm Irrigation',
    icon: 'Wheat',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
    desc: 'Uninterrupted water delivery for drip systems, sprinkler networks, flood irrigation, and canal pumping with low voltage tolerance.',
    recommendedPumps: ['V-4 Turbo Low Volt', 'V-5 Mix Flow', 'V-6 Q-Type', 'V-9 Openwell']
  },
  {
    title: 'Domestic & Multi-Story Buildings',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
    desc: 'High head pressure delivery for apartments, residential colonies, overhead storage tanks, and municipal booster systems.',
    recommendedPumps: ['V-3 High Head', 'V-4 Primium', 'V-4 Nano', 'V-4 Magic']
  },
  {
    title: 'Solar Pumping Solutions',
    icon: 'SunMedium',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    desc: 'High electrical efficiency motors matched with solar VFD drives for clean energy daytime water extraction.',
    recommendedPumps: ['V-3 Solar Series', 'V-4 Primium', 'V-4 Turbo']
  },
  {
    title: 'Industrial & Construction Sites',
    icon: 'Factory',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
    desc: 'Rugged Stainless Steel and Cast Iron pumps for heavy duty mine dewatering, factory cooling towers, and infrastructure projects.',
    recommendedPumps: ['V-6 Primium 50 Feet SS', 'V-6 Jacket', 'V-6 Q-Type Mix Flow']
  },
  {
    title: 'Gardens, Fountains & Public Facilities',
    icon: 'Trees',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
    desc: 'Continuous silent duty pumps engineered for city parks, public water fountains, community swimming sumps, and landscaping.',
    recommendedPumps: ['V-3 High Head', 'V-4 Nano', 'V-7 Horizontal SS']
  }
];
