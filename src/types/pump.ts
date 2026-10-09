export interface DischargePoint {
  lpm: number;
  head: number;
}

export interface PumpModel {
  id: string;
  model: string;
  category: 'V-3' | 'V-4' | 'V-5' | 'V-6' | 'Openwell';
  series: string; // e.g. "Primium", "Turbo", "Nano", "Magic", "Dilux", "Q-Type Mix Flow", "Horizontal SS", "Horizontal CI"
  hp: number;
  kw: number;
  stages: number;
  outlet: string; // e.g. "1.0\"", "1.25\"", "2.0\"", "2.5\""
  phase: 'Single Phase' | 'Two Phase' | 'Three Phase' | 'Multi-Phase';
  price1Phase?: number;
  price2Phase?: number;
  price3Phase?: number;
  headRange?: string; // e.g. "10 - 100 Mtr"
  dischargeRange?: string; // e.g. "110 - 15 LPM"
  flowData?: { [lpm: string]: number }; // LPM -> Head in meters
  voltage?: string;
  speed?: string;
  duty?: string;
  features?: string[];
  applications?: string[];
  moc?: {
    motorShaft?: string;
    motorBody?: string;
    casting?: string;
    thrustBearing?: string;
    motorBush?: string;
    stamping?: string;
    copper?: string;
    winding?: string;
    pumpShaft?: string;
    pumpBowl?: string;
    pumpImpeller?: string;
    suctionNRV?: string;
  };
}

export interface CategoryInfo {
  id: string;
  name: string;
  tagline: string;
  boreSize: string;
  powerRange: string;
  headMax: string;
  flowMax: string;
  image?: string;
  description: string;
  seriesList: string[];
  modelCount?: string;
  highlights?: string[];
  accentColor?: string;
}
