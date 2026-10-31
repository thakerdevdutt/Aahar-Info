export type Language = 'en' | 'gu' | 'hi';

export type FoodCategory =
  | 'dairy'
  | 'oils_ghee'
  | 'spices'
  | 'grains'
  | 'pulses'
  | 'oilseeds'
  | 'vegetables'
  | 'fruits'
  | 'herbs_ayurvedic'
  | 'dry_fruits'
  | 'honey_sugar'
  | 'beverages'
  | 'other';

export interface LocalizedString {
  en: string;
  gu: string;
  hi: string;
}

export interface LocalizedStringList {
  en: string[];
  gu: string[];
  hi: string[];
}

export interface Adulterant {
  name: LocalizedString;
  riskLevel: 'Moderate' | 'High' | 'Severe';
  description: LocalizedString;
  healthRisks: LocalizedString;
}

export interface HomeTest {
  id: string;
  testName: LocalizedString;
  adulterantTargeted: LocalizedString;
  difficulty: 'Easy' | 'Intermediate';
  timeRequiredMinutes: number;
  requiredMaterials: LocalizedStringList;
  stepByStep: LocalizedStringList;
  pureSampleResult: LocalizedString;
  adulteratedSampleResult: LocalizedString;
  canDetect: LocalizedStringList;
  cannotDetect: LocalizedStringList;
  safetyPrecautions: LocalizedStringList;
}

export interface LabTestInfo {
  requiredTestName: LocalizedString;
  whyLabNeeded: LocalizedString;
  equipmentAndChemicals: LocalizedStringList;
  recommendedLabTypes: LocalizedStringList;
  approxCostINR: string;
  fssaiStandardRef: string;
  sampleSubmissionAdvice: LocalizedString;
}

export interface AyurvedicProperties {
  rasa: LocalizedString; // રસ (દા.ત. મધુર, કટુ, તીક્ત, કષાય)
  guna: LocalizedString; // ગુણ (દા.ત. લઘુ, ગુરુ, સ્નિગ્ધ, રૂક્ષ)
  virya: LocalizedString; // વીર્ય (દા.ત. શીત / ઉષ્ણ - Cold / Hot)
  vipaka: LocalizedString; // વિપાક (દા.ત. મધુર, આમ્લ, કટુ)
  doshaEffect: LocalizedString; // ત્રિદોષ પ્રભાવ (વાત, પિત્ત, કફ શામક/વર્ધક)
}

export interface HealthBenefitsAndRisks {
  ayurvedicProps?: AyurvedicProperties;
  benefits: LocalizedStringList; // મુખ્ય ફાયદા
  precautionsAndSideEffects: LocalizedStringList; // ગેરફાયદા, આડઅસર અને સાવચેતી
  whoShouldAvoid: LocalizedStringList; // કોણે ન ખાવું કે ઓછું ખાવું
}

export interface FoodItem {
  id: string;
  categoryId: FoodCategory;
  name: LocalizedString;
  subtitle: LocalizedString;
  alternateNames: string[];
  icon: string;
  riskSeverity: 'Critical' | 'High' | 'Medium';
  overview: LocalizedString;
  adulterants: Adulterant[];
  homeTests: HomeTest[];
  labTesting: LabTestInfo;
  healthDetails?: HealthBenefitsAndRisks;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  error?: boolean;
}
