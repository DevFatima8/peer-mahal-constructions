export const site = {
  name: "Peer Mahal Construction",
  nameUrdu: "پیر محل کنسٹرکشن",
  legalName: "Seval Engineer Company",
  legalNameUrdu: "سیوال انجینئر کمپنی",
  domain: "peermahalconstruction.com",
  url: "https://peermahalconstruction.com",
  owner: "Mohammed Imran Sohail",
  ownerUrdu: "محمد عمران سہیل",
  ownerTitle: "Founder & Chief Executive Officer",
  ownerTitleUrdu: "بانی و چیف ایگزیکٹو آفیسر",
  phone: "03006522750",
  phoneIntl: "+923006522750",
  whatsapp: "923006522750",
  email: "info@peermahalconstruction.com",
  address: "Main Road, City Peer Mahal, District Toba Tek Singh, Punjab, Pakistan",
  addressUrdu: "مین روڈ، شہر پیر محل، ضلع ٹوبہ ٹیک سنگھ، پنجاب، پاکستان",
  hours: "Monday – Saturday: 8:00 AM – 7:00 PM",
  hoursUrdu: "پیر تا ہفتہ: صبح ۸ بجے تا شام ۷ بجے",
  established: "2009",
  tagline: "Build Strong. Build Safe. Build Once.",
  taglineUrdu: "مضبوط تعمیر، محفوظ تعمیر، معیاری تعمیر",
};

export const navLinks = [
  { href: "/", label: "Home", urdu: "ہوم" },
  { href: "/services", label: "Services", urdu: "خدمات" },
  { href: "/about", label: "About Us", urdu: "ہمارے بارے میں" },
  { href: "/contact", label: "Contact", urdu: "رابطہ" },
  { href: "/privacy-policy", label: "Privacy Policy", urdu: "پرائیویسی پالیسی" },
  { href: "/terms-and-conditions", label: "Terms & Conditions", urdu: "شرائط و ضوابط" },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  titleUrdu: string;
  short: string;
  shortUrdu: string;
  details: string[];
  detailsUrdu: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "civil-construction",
    icon: "🏗️",
    title: "Civil Construction",
    titleUrdu: "سول کنسٹرکشن",
    short:
      "Complete turnkey civil works from excavation and foundation to grey structure and finishing, delivered under strict engineering control.",
    shortUrdu:
      "کھدائی اور بنیاد سے لے کر گرے اسٹرکچر اور فنشنگ تک مکمل تعمیراتی کام، انجینئرنگ نگرانی کے تحت۔",
    details: [
      "Excavation, PCC, RCC footings and raft foundations",
      "Grey structure with graded steel and tested concrete",
      "Brick masonry, plaster, flooring and finishing works",
      "Waterproofing, damp proof course and termite treatment",
      "Turnkey handover with as-built documentation",
    ],
    detailsUrdu: [
      "کھدائی، پی سی سی، آر سی سی فٹنگ اور رافٹ فاؤنڈیشن",
      "معیاری سریا اور ٹیسٹ شدہ کنکریٹ کے ساتھ گرے اسٹرکچر",
      "چنائی، پلستر، فرش اور فنشنگ کے کام",
      "واٹر پروفنگ، ڈی پی سی اور دیمک سے بچاؤ کا علاج",
      "مکمل دستاویزات کے ساتھ ٹرن کی حوالگی",
    ],
    image: "/content/civil-construction.jpg",
  },
  {
    slug: "structural-design",
    icon: "📐",
    title: "Structural Design",
    titleUrdu: "ساختی ڈیزائن",
    short:
      "Safe, economical and code-compliant structural design for residential, commercial and industrial buildings.",
    shortUrdu:
      "رہائشی، تجارتی اور صنعتی عمارتوں کے لیے محفوظ، کم لاگت اور معیاری ساختی ڈیزائن۔",
    details: [
      "RCC frame, shear wall and flat slab design",
      "Steel structure and pre-engineered building design",
      "Seismic and wind load analysis as per BCP / ACI codes",
      "Foundation design based on soil investigation reports",
      "Structural detailing and bar bending schedules",
    ],
    detailsUrdu: [
      "آر سی سی فریم، شیئر وال اور فلیٹ سلیب ڈیزائن",
      "اسٹیل اسٹرکچر اور پری انجینئرڈ بلڈنگ ڈیزائن",
      "بی سی پی / اے سی آئی کوڈز کے مطابق زلزلہ اور ہوا کے دباؤ کا تجزیہ",
      "مٹی کی رپورٹ کی بنیاد پر بنیادوں کا ڈیزائن",
      "ساختی تفصیلات اور بار بینڈنگ شیڈول",
    ],
    image: "/content/structural-design.jpg",
  },
  {
    slug: "project-management",
    icon: "🗂️",
    title: "Project Management",
    titleUrdu: "پروجیکٹ مینجمنٹ",
    short:
      "Planning, scheduling, procurement and cost control that keep your project on time and inside budget.",
    shortUrdu:
      "منصوبہ بندی، شیڈولنگ، خریداری اور لاگت کنٹرول تاکہ منصوبہ وقت اور بجٹ کے اندر مکمل ہو۔",
    details: [
      "Master schedule, milestones and CPM bar charts",
      "Material procurement planning and vendor evaluation",
      "Monthly progress reporting with photographic records",
      "Quality assurance and safety compliance on site",
      "Contract administration and variation control",
    ],
    detailsUrdu: [
      "ماسٹر شیڈول، سنگِ میل اور سی پی ایم بار چارٹس",
      "میٹریل کی خریداری کی منصوبہ بندی اور سپلائر کا جائزہ",
      "تصویری ریکارڈ کے ساتھ ماہانہ پیش رفت رپورٹ",
      "سائٹ پر معیار اور حفاظتی اصولوں کی پابندی",
      "کنٹریکٹ انتظام اور تبدیلیوں کا کنٹرول",
    ],
    image: "/content/project-management.jpg",
  },
  {
    slug: "site-supervision",
    icon: "👷",
    title: "Site Supervision",
    titleUrdu: "سائٹ سپروژن",
    short:
      "Daily engineering supervision that protects your investment from substandard material and poor workmanship.",
    shortUrdu:
      "روزانہ کی انجینئرنگ نگرانی جو آپ کی سرمایہ کاری کو ناقص میٹریل اور کمزور کاریگری سے بچاتی ہے۔",
    details: [
      "Layout, level and alignment checking",
      "Steel fixing inspection before every concrete pour",
      "Concrete slump and cube testing supervision",
      "Labour and contractor performance monitoring",
      "Daily site diary and weekly client briefing",
    ],
    detailsUrdu: [
      "لے آؤٹ، لیول اور الائنمنٹ کی جانچ",
      "ہر کنکریٹ سے پہلے سریا بندی کا معائنہ",
      "کنکریٹ سلمپ اور کیوب ٹیسٹ کی نگرانی",
      "مزدوروں اور ٹھیکیداروں کی کارکردگی کی نگرانی",
      "روزانہ سائٹ ڈائری اور ہفتہ وار کلائنٹ بریفنگ",
    ],
    image: "/content/site-supervision.jpg",
  },
  {
    slug: "quantity-surveying",
    icon: "📏",
    title: "Quantity Surveying",
    titleUrdu: "کوانٹٹی سروے",
    short:
      "Accurate measurement, valuation and billing so that you pay only for the work actually executed.",
    shortUrdu:
      "درست پیمائش، تخمینہ اور بلنگ تاکہ آپ صرف اسی کام کی ادائیگی کریں جو حقیقت میں ہوا ہے۔",
    details: [
      "Take-off sheets and detailed measurement books",
      "Interim payment certificates and running bills",
      "Rate analysis and market rate comparison",
      "Variation orders and final account settlement",
      "Wastage control and material reconciliation",
    ],
    detailsUrdu: [
      "ٹیک آف شیٹس اور تفصیلی پیمائش بک",
      "عبوری ادائیگی سرٹیفکیٹ اور رننگ بلز",
      "ریٹ کا تجزیہ اور مارکیٹ ریٹ کا موازنہ",
      "تبدیلی کے احکامات اور حتمی حساب کتاب",
      "ضیاع پر کنٹرول اور میٹریل کا حساب",
    ],
    image: "/content/quantity-surveying.jpg",
  },
  {
    slug: "boq-cost-estimation",
    icon: "🧮",
    title: "BOQ & Cost Estimation",
    titleUrdu: "بی او کیو اور لاگت کا تخمینہ",
    short:
      "Item-wise Bill of Quantities and realistic cost estimates prepared before you spend the first rupee.",
    shortUrdu:
      "پہلا روپیہ خرچ کرنے سے پہلے تیار کی گئی تفصیلی بی او کیو اور حقیقت پسندانہ لاگت کا تخمینہ۔",
    details: [
      "Item-wise BOQ for grey structure and finishing",
      "Material, labour and machinery cost breakdown",
      "Budget options: economy, standard and premium",
      "Cash flow forecast and stage-wise payment plan",
      "Tender documents and comparative statements",
    ],
    detailsUrdu: [
      "گرے اسٹرکچر اور فنشنگ کے لیے آئٹم وائز بی او کیو",
      "میٹریل، مزدوری اور مشینری کی لاگت کی تفصیل",
      "بجٹ کے اختیارات: اکانومی، اسٹینڈرڈ اور پریمیم",
      "کیش فلو کا اندازہ اور مرحلہ وار ادائیگی پلان",
      "ٹینڈر دستاویزات اور تقابلی گوشوارے",
    ],
    image: "/content/boq-cost-estimation.jpg",
  },
  {
    slug: "building-renovation",
    icon: "🛠️",
    title: "Building Renovation",
    titleUrdu: "عمارت کی تزئین و آرائش",
    short:
      "Remodeling, extension and modernisation of old houses, shops and offices without disturbing structural safety.",
    shortUrdu:
      "پرانے مکانات، دکانوں اور دفاتر کی تزئین، توسیع اور جدت — ساختی حفاظت کو متاثر کیے بغیر۔",
    details: [
      "Vertical extension feasibility and column strengthening",
      "Kitchen, bathroom and façade remodeling",
      "Roof treatment, leakage repair and waterproofing",
      "Electrical and plumbing rehabilitation",
      "Interior finishing, false ceiling and paint works",
    ],
    detailsUrdu: [
      "اوپر منزل کی گنجائش اور کالم مضبوط کرنے کا کام",
      "کچن، باتھ روم اور بیرونی ڈیزائن کی تبدیلی",
      "چھت کا علاج، سیلن کی مرمت اور واٹر پروفنگ",
      "بجلی اور پلمبنگ کی تجدید",
      "اندرونی فنشنگ، فالس سیلنگ اور رنگ و روغن",
    ],
    image: "/content/building-renovation.jpg",
  },
  {
    slug: "road-infrastructure",
    icon: "🛣️",
    title: "Road & Infrastructure Works",
    titleUrdu: "سڑکیں اور بنیادی ڈھانچہ",
    short:
      "Roads, streets, culverts, drainage and water supply networks executed to public sector specifications.",
    shortUrdu:
      "سڑکیں، گلیاں، پلیاں، نکاسیٔ آب اور پانی کی فراہمی کے نیٹ ورک — سرکاری معیار کے مطابق۔",
    details: [
      "Sub-grade preparation, sub-base and base course",
      "Asphalt carpeting and RCC / PCC road paving",
      "Storm water drains, sewers and manholes",
      "Culverts, retaining walls and small bridges",
      "Water supply lines, tube wells and overhead tanks",
    ],
    detailsUrdu: [
      "سب گریڈ کی تیاری، سب بیس اور بیس کورس",
      "اسفالٹ کارپٹنگ اور آر سی سی / پی سی سی سڑک",
      "بارشی نالیاں، سیوریج لائنیں اور مین ہولز",
      "پلیاں، ریٹیننگ وال اور چھوٹے پل",
      "پانی کی سپلائی لائنیں، ٹیوب ویل اور اوور ہیڈ ٹینک",
    ],
    image: "/content/infrastructure-roads.jpg",
  },
  {
    slug: "structural-inspection",
    icon: "🔍",
    title: "Structural Inspection",
    titleUrdu: "ساختی معائنہ",
    short:
      "Independent condition survey and structural assessment of existing buildings before purchase or renovation.",
    shortUrdu:
      "خریداری یا تزئین سے پہلے موجودہ عمارتوں کا غیر جانبدار معائنہ اور ساختی جائزہ۔",
    details: [
      "Visual distress mapping of cracks and settlement",
      "Rebound hammer and cover meter testing",
      "Load capacity assessment of slabs and beams",
      "Damp, seepage and corrosion investigation",
      "Written inspection report with repair recommendations",
    ],
    detailsUrdu: [
      "دراڑوں اور بیٹھنے کی نشاندہی کا مکمل جائزہ",
      "ری باؤنڈ ہیمر اور کور میٹر ٹیسٹنگ",
      "چھتوں اور بیم کی وزن برداشت کی صلاحیت کا جائزہ",
      "سیلن، رساؤ اور زنگ کی تحقیق",
      "مرمت کی تجاویز کے ساتھ تحریری معائنہ رپورٹ",
    ],
    image: "/content/structural-inspection.jpg",
  },
  {
    slug: "engineering-drawings",
    icon: "🖥️",
    title: "3D & Engineering Drawings",
    titleUrdu: "تھری ڈی اور انجینئرنگ نقشے",
    short:
      "Architectural, structural, electrical and plumbing drawings plus photo-real 3D elevations for approval.",
    shortUrdu:
      "آرکیٹیکچرل، اسٹرکچرل، الیکٹریکل اور پلمبنگ نقشے اور منظوری کے لیے حقیقت نما تھری ڈی ایلیویشن۔",
    details: [
      "2D architectural plans and working drawings",
      "Structural drawings with complete detailing",
      "Electrical, plumbing and sanitary layouts",
      "3D exterior elevation and interior visualisation",
      "Approval drawings for TMA / development authorities",
    ],
    detailsUrdu: [
      "ٹو ڈی آرکیٹیکچرل پلان اور ورکنگ ڈرائنگ",
      "مکمل تفصیل کے ساتھ ساختی نقشے",
      "الیکٹریکل، پلمبنگ اور سینیٹری لے آؤٹ",
      "تھری ڈی بیرونی ایلیویشن اور اندرونی منظر کشی",
      "ٹی ایم اے / ترقیاتی اداروں کے لیے منظوری کے نقشے",
    ],
    image: "/content/engineering-drawings.jpg",
  },
];

export type ClientSegment = {
  number: string;
  title: string;
  titleUrdu: string;
  items: string[];
  itemsUrdu: string[];
  image: string;
};

export const clientSegments: ClientSegment[] = [
  {
    number: "01",
    title: "Residential Clients",
    titleUrdu: "رہائشی صارفین",
    items: [
      "House construction",
      "Grey structure",
      "Renovation & remodeling",
      "Structural design",
      "Construction supervision",
    ],
    itemsUrdu: [
      "گھر کی تعمیر",
      "گرے اسٹرکچر کی تعمیر",
      "تزئین و آرائش اور تعمیرِ نو",
      "ساختی ڈیزائن",
      "تعمیراتی کام کی نگرانی",
    ],
    image: "/content/residential-clients.jpg",
  },
  {
    number: "02",
    title: "Commercial Businesses",
    titleUrdu: "تجارتی کاروبار",
    items: [
      "Offices",
      "Shops & plazas",
      "Shopping centers",
      "Hotels & restaurants",
      "Commercial buildings",
    ],
    itemsUrdu: [
      "دفاتر",
      "دکانیں اور پلازے",
      "شاپنگ سینٹرز",
      "ہوٹلز اور ریسٹورنٹس",
      "تجارتی عمارتیں",
    ],
    image: "/content/commercial-businesses.jpg",
  },
  {
    number: "03",
    title: "Industrial Clients",
    titleUrdu: "صنعتی صارفین",
    items: [
      "Factories",
      "Warehouses",
      "Industrial buildings",
      "Industrial flooring",
      "Site development",
    ],
    itemsUrdu: [
      "فیکٹریاں",
      "گودام",
      "صنعتی عمارتیں",
      "صنعتی فرش",
      "تعمیراتی سائٹ کی ترقی",
    ],
    image: "/content/industrial-clients.jpg",
  },
  {
    number: "04",
    title: "Real Estate Developers",
    titleUrdu: "رئیل اسٹیٹ ڈویلپرز",
    items: [
      "Housing societies",
      "Residential projects",
      "Commercial projects",
      "Infrastructure development",
      "Roads & drainage systems",
    ],
    itemsUrdu: [
      "ہاؤسنگ سوسائٹیز",
      "رہائشی منصوبے",
      "تجارتی منصوبے",
      "بنیادی ڈھانچے کی ترقی",
      "سڑکیں اور نکاسیٔ آب کے نظام",
    ],
    image: "/content/real-estate-development.jpg",
  },
  {
    number: "05",
    title: "Government & Public Sector",
    titleUrdu: "حکومتی اور عوامی شعبہ",
    items: [
      "Roads",
      "Bridges",
      "Schools & hospitals",
      "Public buildings",
      "Water supply & drainage projects",
    ],
    itemsUrdu: [
      "سڑکیں",
      "پل",
      "اسکول اور ہسپتال",
      "عوامی عمارتیں",
      "پانی کی فراہمی اور نکاسیٔ آب کے منصوبے",
    ],
    image: "/content/public-sector-infrastructure.jpg",
  },
  {
    number: "06",
    title: "Architects & Contractors",
    titleUrdu: "آرکیٹیکٹس اور ٹھیکیدار",
    items: [
      "Structural calculations",
      "Engineering drawings",
      "BOQs",
      "Cost estimation",
      "Site supervision",
    ],
    itemsUrdu: [
      "ساختی حسابات",
      "انجینئرنگ نقشے",
      "تعمیراتی مقدار کی فہرست",
      "لاگت کا تخمینہ",
      "تعمیراتی سائٹ کی نگرانی",
    ],
    image: "/content/contractor-collaboration.jpg",
  },
  {
    number: "07",
    title: "Property Owners / Investors",
    titleUrdu: "جائیداد کے مالکان اور سرمایہ کار",
    items: [
      "Building inspection",
      "Structural assessment",
      "Construction cost estimation",
      "Renovation advice",
      "Property condition surveys",
    ],
    itemsUrdu: [
      "عمارت کا معائنہ",
      "عمارت کے ڈھانچے کا جائزہ",
      "تعمیراتی لاگت کا تخمینہ",
      "تزئین و آرائش کے لیے مشورہ",
      "جائیداد کی موجودہ حالت کا جائزہ",
    ],
    image: "/content/property-investment.jpg",
  },
];

export const stats = [
  { value: "15+", label: "Years of Experience", urdu: "سال کا تجربہ" },
  { value: "450+", label: "Projects Completed", urdu: "مکمل شدہ منصوبے" },
  { value: "300+", label: "Happy Clients", urdu: "مطمئن صارفین" },
  { value: "40+", label: "Engineers & Workers", urdu: "انجینئرز اور کارکن" },
];

export const processSteps = [
  {
    step: "01",
    title: "Free Consultation & Site Visit",
    titleUrdu: "مفت مشاورت اور سائٹ وزٹ",
    text: "Our engineer visits your plot, listens to your requirements and explains realistic options and timelines.",
    textUrdu:
      "ہمارا انجینئر آپ کے پلاٹ کا دورہ کرتا ہے، آپ کی ضروریات سنتا ہے اور حقیقت پسندانہ آپشنز بتاتا ہے۔",
  },
  {
    step: "02",
    title: "Design & Drawings",
    titleUrdu: "ڈیزائن اور نقشہ جات",
    text: "Architectural, structural and MEP drawings are prepared and revised until you are fully satisfied.",
    textUrdu:
      "آرکیٹیکچرل، اسٹرکچرل اور ایم ای پی نقشے تیار کیے جاتے ہیں اور آپ کی تسلی تک تبدیل کیے جاتے ہیں۔",
  },
  {
    step: "03",
    title: "BOQ & Transparent Costing",
    titleUrdu: "بی او کیو اور شفاف لاگت",
    text: "You receive an item-wise BOQ with rates, so there are no hidden charges at any stage.",
    textUrdu:
      "آپ کو ریٹ کے ساتھ تفصیلی بی او کیو دی جاتی ہے تاکہ کسی مرحلے پر کوئی پوشیدہ خرچہ نہ ہو۔",
  },
  {
    step: "04",
    title: "Agreement & Scheduling",
    titleUrdu: "معاہدہ اور شیڈول",
    text: "A written agreement fixes scope, quality specification, payment stages and completion date.",
    textUrdu:
      "تحریری معاہدے میں کام کی تفصیل، معیار، ادائیگی کے مراحل اور تکمیل کی تاریخ طے کی جاتی ہے۔",
  },
  {
    step: "05",
    title: "Execution & Quality Control",
    titleUrdu: "تعمیر اور معیار کی جانچ",
    text: "Work starts under daily supervision with material testing and weekly progress reporting.",
    textUrdu:
      "کام روزانہ نگرانی، میٹریل ٹیسٹنگ اور ہفتہ وار رپورٹنگ کے ساتھ شروع کیا جاتا ہے۔",
  },
  {
    step: "06",
    title: "Handover & After-Sales Support",
    titleUrdu: "حوالگی اور بعد از تعمیر سروس",
    text: "Snag list clearance, cleaning, documentation handover and one year structural defect support.",
    textUrdu:
      "خامیوں کی درستی، صفائی، دستاویزات کی حوالگی اور ایک سال کی ساختی سپورٹ۔",
  },
];

export const whyUs = [
  {
    icon: "🏅",
    title: "Qualified Civil Engineers",
    titleUrdu: "تجربہ کار سول انجینئرز",
    text: "Every project is led by a qualified civil engineer, not just a mason or labour contractor.",
    textUrdu:
      "ہر منصوبے کی قیادت ایک تجربہ کار سول انجینئر کرتا ہے، نہ کہ صرف مستری یا لیبر ٹھیکیدار۔",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    titleUrdu: "شفاف قیمتیں",
    text: "Item-wise BOQ, market-verified rates and written agreements — zero hidden cost.",
    textUrdu:
      "آئٹم وائز بی او کیو، مارکیٹ ریٹ اور تحریری معاہدہ — کوئی پوشیدہ خرچہ نہیں۔",
  },
  {
    icon: "🧱",
    title: "Tested Material Only",
    titleUrdu: "صرف ٹیسٹ شدہ میٹریل",
    text: "Graded steel, brand cement and lab-tested concrete mix used on every single pour.",
    textUrdu:
      "ہر کنکریٹ میں معیاری سریا، برانڈڈ سیمنٹ اور لیب ٹیسٹ شدہ مکس استعمال ہوتا ہے۔",
  },
  {
    icon: "⏱️",
    title: "On-Time Completion",
    titleUrdu: "وقت پر تکمیل",
    text: "Milestone-based schedules and daily manpower planning keep the project moving.",
    textUrdu:
      "سنگِ میل پر مبنی شیڈول اور روزانہ مزدور منصوبہ بندی کام کو رواں رکھتی ہے۔",
  },
  {
    icon: "🦺",
    title: "Safety First Culture",
    titleUrdu: "حفاظت سب سے پہلے",
    text: "Helmets, scaffolding standards and site safety briefings are mandatory on all our sites.",
    textUrdu:
      "ہیلمٹ، معیاری سکیفولڈنگ اور حفاظتی بریفنگ ہماری تمام سائٹس پر لازمی ہیں۔",
  },
  {
    icon: "🤝",
    title: "After-Sales Support",
    titleUrdu: "بعد از تعمیر سروس",
    text: "One year structural support after handover, plus lifetime technical advice.",
    textUrdu:
      "حوالگی کے بعد ایک سال ساختی سپورٹ اور تاحیات تکنیکی مشورہ۔",
  },
];

export const testimonials = [
  {
    name: "Ch. Abdul Rehman",
    role: "House Owner, Peer Mahal",
    roleUrdu: "مکان مالک، پیر محل",
    text: "They built my 10 marla house exactly on the agreed BOQ. The engineer visited daily and every concrete pour was checked in front of me.",
    textUrdu:
      "انہوں نے میرا ۱۰ مرلہ گھر بالکل طے شدہ بی او کیو کے مطابق بنایا۔ انجینئر روزانہ آتا تھا اور ہر کنکریٹ میرے سامنے چیک ہوتی تھی۔",
  },
  {
    name: "Malik Tanveer Ahmad",
    role: "Plaza Owner, Toba Tek Singh",
    roleUrdu: "پلازہ مالک، ٹوبہ ٹیک سنگھ",
    text: "Our three-storey commercial plaza was completed two weeks before schedule. Structural design saved us a good amount of steel.",
    textUrdu:
      "ہمارا تین منزلہ کمرشل پلازہ شیڈول سے دو ہفتے پہلے مکمل ہوا۔ ساختی ڈیزائن نے کافی سریا بچایا۔",
  },
  {
    name: "Rana Zeeshan Ali",
    role: "Factory Owner, Faisalabad Road",
    roleUrdu: "فیکٹری مالک، فیصل آباد روڈ",
    text: "Industrial flooring and warehouse shed work was very professional. Documentation and billing were completely transparent.",
    textUrdu:
      "صنعتی فرش اور گودام کے شیڈ کا کام نہایت پیشہ ورانہ تھا۔ دستاویزات اور بلنگ مکمل شفاف تھی۔",
  },
];

export const faqs = [
  {
    q: "How much does construction cost per square foot?",
    qUrdu: "تعمیر کی فی مربع فٹ لاگت کتنی ہے؟",
    a: "Cost depends on grey structure vs finishing, material grade and design complexity. After a free site visit we issue an item-wise BOQ with exact rates so you know the real number before starting.",
    aUrdu:
      "لاگت گرے اسٹرکچر یا فنشنگ، میٹریل کے معیار اور ڈیزائن پر منحصر ہے۔ مفت سائٹ وزٹ کے بعد ہم تفصیلی بی او کیو دیتے ہیں تاکہ کام شروع کرنے سے پہلے درست لاگت معلوم ہو۔",
  },
  {
    q: "Do you work on labour rate as well as turnkey contract?",
    qUrdu: "کیا آپ لیبر ریٹ اور ٹرن کی دونوں طرح کام کرتے ہیں؟",
    a: "Yes. We offer labour-rate contracts, with-material (turnkey) contracts and supervision-only packages. You choose whichever suits your budget and availability.",
    aUrdu:
      "جی ہاں۔ ہم لیبر ریٹ، مکمل میٹریل سمیت (ٹرن کی) اور صرف نگرانی کے پیکجز پیش کرتے ہیں۔ آپ اپنی سہولت کے مطابق انتخاب کر سکتے ہیں۔",
  },
  {
    q: "Which areas do you serve?",
    qUrdu: "آپ کن علاقوں میں خدمات فراہم کرتے ہیں؟",
    a: "Our head office is in City Peer Mahal, and we regularly work across Toba Tek Singh, Kamalia, Gojra, Faisalabad, Jhang, Chichawatni and nearby districts of Punjab.",
    aUrdu:
      "ہمارا مرکزی دفتر شہر پیر محل میں ہے اور ہم ٹوبہ ٹیک سنگھ، کمالیہ، گوجرہ، فیصل آباد، جھنگ، چیچہ وطنی اور گردونواح میں کام کرتے ہیں۔",
  },
  {
    q: "Do you provide approved drawings for TMA submission?",
    qUrdu: "کیا آپ ٹی ایم اے منظوری کے نقشے بھی بناتے ہیں؟",
    a: "Yes, we prepare complete architectural and structural drawing sets in the format required by local TMA and development authorities.",
    aUrdu:
      "جی ہاں، ہم مقامی ٹی ایم اے اور ترقیاتی اداروں کی مطلوبہ فارمیٹ میں مکمل آرکیٹیکچرل اور اسٹرکچرل نقشے تیار کرتے ہیں۔",
  },
  {
    q: "Is there any warranty after completion?",
    qUrdu: "کیا تکمیل کے بعد کوئی وارنٹی ہوتی ہے؟",
    a: "We provide one year of structural defect support after handover, and permanent technical guidance for any future maintenance question.",
    aUrdu:
      "ہم حوالگی کے بعد ایک سال کی ساختی سپورٹ دیتے ہیں اور مستقبل کی دیکھ بھال کے لیے مستقل تکنیکی رہنمائی فراہم کرتے ہیں۔",
  },
];
