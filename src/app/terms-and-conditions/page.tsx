import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalContent, { type LegalSection } from "@/components/LegalContent";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions of Peer Mahal Construction (Seval Engineer Company) — scope of work, quotations, payment terms, variations, timelines, warranty, liability and governing law for construction and engineering services.",
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    headingUrdu: "شرائط کی قبولیت",
    paragraphs: [
      `These Terms & Conditions govern the use of ${site.domain} and all construction, engineering and consultancy services provided by ${site.name}, operating under ${site.legalName} ("the Company").`,
      "By browsing this website, submitting an enquiry, accepting a quotation or allowing us to commence work, you (the “Client”) agree to be bound by these terms, together with any signed agreement or approved BOQ for a specific project.",
      "Where a signed project agreement conflicts with these general terms, the signed agreement shall prevail for that project only.",
    ],
    paragraphsUrdu: [
      "یہ شرائط و ضوابط ہماری ویب سائٹ کے استعمال اور پیر محل کنسٹرکشن (سیوال انجینئر کمپنی) کی تمام تعمیراتی، انجینئرنگ اور مشاورتی خدمات پر لاگو ہوتی ہیں۔",
      "ویب سائٹ دیکھنے، درخواست بھیجنے، تخمینہ قبول کرنے یا کام شروع کروانے کا مطلب ہے کہ آپ ان شرائط اور کسی بھی دستخط شدہ معاہدے یا منظور شدہ بی او کیو کے پابند ہیں۔",
      "اگر دستخط شدہ معاہدہ ان عمومی شرائط سے مختلف ہو تو اس منصوبے کے لیے دستخط شدہ معاہدہ ہی معتبر ہوگا۔",
    ],
  },
  {
    heading: "Scope of Services",
    headingUrdu: "خدمات کا دائرہ کار",
    paragraphs: [
      "The Company provides the services listed on this website, including but not limited to civil construction, structural design, project management, site supervision, quantity surveying, BOQ & cost estimation, renovation, road & infrastructure works, structural inspection and engineering drawings.",
      "The exact scope for each project is defined in the approved drawings, specifications and Bill of Quantities. Any item not expressly included in the BOQ is considered outside the scope and will be charged separately.",
    ],
    paragraphsUrdu: [
      "کمپنی اس ویب سائٹ پر درج خدمات فراہم کرتی ہے، جن میں سول کنسٹرکشن، ساختی ڈیزائن، پروجیکٹ مینجمنٹ، سائٹ سپروژن، کوانٹٹی سروے، بی او کیو، تزئین و آرائش، سڑکیں، ساختی معائنہ اور انجینئرنگ نقشے شامل ہیں۔",
      "ہر منصوبے کا دائرہ کار منظور شدہ نقشوں، تفصیلات اور بی او کیو میں طے ہوتا ہے۔ جو کام بی او کیو میں شامل نہ ہو وہ اضافی تصور ہوگا اور اس کی الگ قیمت ہوگی۔",
    ],
  },
  {
    heading: "Quotations, Estimates & Rates",
    headingUrdu: "تخمینہ، کوٹیشن اور نرخ",
    paragraphs: [
      "All quotations are prepared on the basis of information and site conditions available at the time of the estimate and remain valid for the period stated on the quotation (normally 15 days).",
      "Estimates displayed or discussed verbally are indicative only. Only a written, signed quotation or BOQ is binding.",
      "Rates are subject to revision if there is a significant change in market prices of steel, cement, sand, crush or fuel, or if the client changes the approved design, specification or quality of finishing.",
    ],
    paragraphsUrdu: [
      "تمام تخمینے اس وقت دستیاب معلومات اور سائٹ کی حالت کی بنیاد پر تیار کیے جاتے ہیں اور عموماً ۱۵ دن تک قابلِ عمل رہتے ہیں۔",
      "زبانی بتائے گئے تخمینے صرف اندازہ ہوتے ہیں۔ صرف تحریری اور دستخط شدہ کوٹیشن یا بی او کیو قابلِ عمل ہے۔",
      "اگر سریا، سیمنٹ، ریت، بجری یا ایندھن کی قیمتوں میں نمایاں تبدیلی ہو، یا صارف ڈیزائن اور معیار تبدیل کرے تو نرخ نظرثانی کے تابع ہوں گے۔",
    ],
  },
  {
    heading: "Payment Terms",
    headingUrdu: "ادائیگی کی شرائط",
    paragraphs: [
      "Payments are made in stages linked to physical progress on site, as defined in the signed agreement.",
      "Work may be suspended if a stage payment is delayed beyond seven (7) days, and any resulting delay in the completion date shall not be the responsibility of the Company.",
    ],
    paragraphsUrdu: [
      "ادائیگیاں سائٹ پر ہونے والی حقیقی پیش رفت کے مطابق مرحلہ وار کی جاتی ہیں، جیسا کہ معاہدے میں طے ہو۔",
      "اگر کسی مرحلے کی ادائیگی سات دن سے زائد تاخیر کا شکار ہو تو کام روکا جا سکتا ہے اور اس سے پیدا ہونے والی تاخیر کی ذمہ داری کمپنی پر نہیں ہوگی۔",
    ],
    bullets: [
      "Advance / mobilisation payment before start of work",
      "Stage payments at foundation, each slab and finishing milestones",
      "Running bills for measured work in labour-rate contracts",
      "Final payment on completion and snag list clearance",
      "Security deposit (if any) released after the agreed defect period",
    ],
    bulletsUrdu: [
      "کام شروع کرنے سے پہلے پیشگی ادائیگی",
      "بنیاد، ہر چھت اور فنشنگ کے مراحل پر ادائیگی",
      "لیبر ریٹ معاہدوں میں پیمائش کے مطابق رننگ بل",
      "تکمیل اور خامیوں کی درستی کے بعد حتمی ادائیگی",
      "سیکیورٹی رقم (اگر ہو) مقررہ مدت کے بعد واپس",
    ],
  },
  {
    heading: "Client Responsibilities",
    headingUrdu: "صارف کی ذمہ داریاں",
    paragraphs: [
      "To allow work to proceed smoothly and safely, the Client is responsible for the following before and during construction.",
    ],
    paragraphsUrdu: [
      "کام کو بروقت اور محفوظ طریقے سے جاری رکھنے کے لیے صارف درج ذیل امور کا ذمہ دار ہے۔",
    ],
    bullets: [
      "Clear legal ownership of the plot and freedom from disputes",
      "Approved map / NOC from the relevant TMA or authority",
      "Provision of water and electricity connection at site (or agreed alternative)",
      "Timely approval of drawings, material samples and finishing selections",
      "Timely release of stage payments as per agreement",
      "Safe access to site for machinery, material delivery and staff",
    ],
    bulletsUrdu: [
      "پلاٹ کی واضح ملکیت اور تنازعات سے پاک ہونا",
      "متعلقہ ٹی ایم اے یا ادارے سے منظور شدہ نقشہ / این او سی",
      "سائٹ پر پانی اور بجلی کی فراہمی (یا طے شدہ متبادل)",
      "نقشوں، میٹریل کے نمونوں اور فنشنگ کے انتخاب کی بروقت منظوری",
      "معاہدے کے مطابق بروقت ادائیگی",
      "مشینری، میٹریل اور عملے کے لیے محفوظ راستہ",
    ],
  },
  {
    heading: "Variations & Additional Work",
    headingUrdu: "تبدیلیاں اور اضافی کام",
    paragraphs: [
      "Any change requested by the Client after approval of drawings or BOQ will be treated as a variation.",
      "Variations will be recorded in writing with their cost and time impact, and must be approved by the Client before execution. Demolition or redoing of already-executed work due to client-side changes is chargeable at actual cost.",
    ],
    paragraphsUrdu: [
      "نقشے یا بی او کیو کی منظوری کے بعد صارف کی طرف سے مانگی گئی کوئی بھی تبدیلی 'ویری ایشن' تصور ہوگی۔",
      "ہر تبدیلی کی لاگت اور وقت پر اثر تحریری طور پر ریکارڈ کیا جائے گا اور کام سے پہلے صارف کی منظوری لازمی ہوگی۔ پہلے سے مکمل شدہ کام کو گرانے یا دوبارہ کرنے کی لاگت صارف برداشت کرے گا۔",
    ],
  },
  {
    heading: "Project Timeline & Delays",
    headingUrdu: "منصوبے کا دورانیہ اور تاخیر",
    paragraphs: [
      "The Company will make every reasonable effort to complete the work within the agreed schedule.",
      "The completion date shall be extended fairly in case of delays caused by events outside our reasonable control, including but not limited to extreme weather, strikes, transport bans, government restrictions, unavailability of material in the market, late payments or late decisions by the Client.",
    ],
    paragraphsUrdu: [
      "کمپنی طے شدہ وقت میں کام مکمل کرنے کی پوری کوشش کرے گی۔",
      "شدید موسم، ہڑتال، ٹرانسپورٹ پابندی، سرکاری احکامات، مارکیٹ میں میٹریل کی عدم دستیابی، ادائیگی میں تاخیر یا صارف کے فیصلوں میں تاخیر کی صورت میں تکمیل کی تاریخ میں مناسب توسیع دی جائے گی۔",
    ],
  },
  {
    heading: "Material, Quality & Testing",
    headingUrdu: "میٹریل، معیار اور جانچ",
    paragraphs: [
      "Material brands and grades are specified in the BOQ. Where a brand is unavailable, an equivalent or better brand may be used after informing the Client.",
      "In labour-rate contracts where the Client supplies material, the Company is not responsible for defects arising from substandard material supplied by the Client, although we will report such issues in writing.",
      "Concrete cube tests, steel grade verification and other tests may be arranged; third-party laboratory charges are borne by the Client unless included in the BOQ.",
    ],
    paragraphsUrdu: [
      "میٹریل کے برانڈ اور معیار بی او کیو میں درج ہوتے ہیں۔ کسی برانڈ کی عدم دستیابی پر صارف کو آگاہ کر کے ہم پلہ یا بہتر برانڈ استعمال کیا جا سکتا ہے۔",
      "لیبر ریٹ معاہدوں میں جہاں میٹریل صارف فراہم کرے، ناقص میٹریل سے پیدا ہونے والی خرابیوں کی ذمہ داری کمپنی پر نہیں ہوگی، البتہ ہم تحریری طور پر نشاندہی کریں گے۔",
      "کنکریٹ کیوب ٹیسٹ، سریے کی جانچ اور دیگر ٹیسٹ کروائے جا سکتے ہیں؛ لیبارٹری اخراجات صارف برداشت کرے گا الا یہ کہ بی او کیو میں شامل ہوں۔",
    ],
  },
  {
    heading: "Warranty & Defects Liability",
    headingUrdu: "وارنٹی اور خامیوں کی ذمہ داری",
    paragraphs: [
      "The Company provides a twelve (12) month defects liability period from the date of handover for structural workmanship carried out under a full turnkey or with-material contract.",
      "This warranty does not cover normal wear and tear, damage caused by misuse, unauthorised alterations, work executed by other contractors, natural disasters, or defects arising from material supplied by the Client.",
      "Manufacturer warranties for items such as tiles, sanitary ware, electrical fittings and paints are passed on to the Client as provided by the respective manufacturer.",
    ],
    paragraphsUrdu: [
      "مکمل ٹرن کی یا میٹریل سمیت معاہدے کی صورت میں کمپنی حوالگی کی تاریخ سے بارہ ماہ تک ساختی کاریگری کی ذمہ داری قبول کرتی ہے۔",
      "یہ وارنٹی عام ٹوٹ پھوٹ، غلط استعمال، غیر مجاز تبدیلی، دوسرے ٹھیکیداروں کے کام، قدرتی آفات یا صارف کے فراہم کردہ ناقص میٹریل پر لاگو نہیں ہوتی۔",
      "ٹائل، سینیٹری، بجلی کی فٹنگ اور پینٹ جیسی اشیاء کی وارنٹی متعلقہ کمپنی کی پالیسی کے مطابق صارف کو منتقل کی جاتی ہے۔",
    ],
  },
  {
    heading: "Site Safety",
    headingUrdu: "سائٹ کی حفاظت",
    paragraphs: [
      "Our teams follow site safety practices including helmets, safe scaffolding and controlled access. Clients, family members and visitors must not enter active work areas without permission and protective equipment.",
      "The Company shall not be liable for injury to any unauthorised person entering the site.",
    ],
    paragraphsUrdu: [
      "ہماری ٹیمیں ہیلمٹ، محفوظ سکیفولڈنگ اور محدود رسائی سمیت حفاظتی اصولوں پر عمل کرتی ہیں۔ صارفین، اہلِ خانہ اور مہمان بغیر اجازت اور حفاظتی سامان کے زیرِ کام حصے میں داخل نہ ہوں۔",
      "بغیر اجازت سائٹ میں داخل ہونے والے کسی شخص کو نقصان پہنچنے کی ذمہ داری کمپنی پر نہیں ہوگی۔",
    ],
  },
  {
    heading: "Intellectual Property",
    headingUrdu: "دانشورانہ ملکیت",
    paragraphs: [
      "All drawings, structural calculations, BOQs, designs, text, photographs and graphics prepared by the Company or displayed on this website remain the intellectual property of the Company.",
      "Drawings issued to a Client may be used only for the specific project for which they were prepared and may not be resold, reused on another plot, or shared with other contractors without written permission.",
    ],
    paragraphsUrdu: [
      "کمپنی کے تیار کردہ تمام نقشے، ساختی حسابات، بی او کیو، ڈیزائن، تحریریں اور تصاویر کمپنی کی دانشورانہ ملکیت ہیں۔",
      "صارف کو دیے گئے نقشے صرف اسی منصوبے کے لیے استعمال ہو سکتے ہیں؛ انہیں فروخت کرنا، کسی دوسرے پلاٹ پر استعمال کرنا یا تحریری اجازت کے بغیر دوسرے ٹھیکیداروں کو دینا منع ہے۔",
    ],
  },
  {
    heading: "Limitation of Liability",
    headingUrdu: "ذمہ داری کی حد",
    paragraphs: [
      "The total liability of the Company for any claim arising out of a project shall not exceed the total value of the contract for that project.",
      "The Company shall not be liable for indirect or consequential losses such as loss of rent, loss of profit or loss of business opportunity.",
      "Information published on this website is for general guidance only and does not constitute engineering advice for a specific site. Always obtain a site-specific written opinion before taking a construction decision.",
    ],
    paragraphsUrdu: [
      "کسی منصوبے سے متعلق کسی بھی دعوے میں کمپنی کی مجموعی ذمہ داری اس منصوبے کے معاہدے کی کل مالیت سے زیادہ نہیں ہوگی۔",
      "کمپنی بالواسطہ نقصانات جیسے کرائے، منافع یا کاروباری موقع کے نقصان کی ذمہ دار نہیں ہوگی۔",
      "اس ویب سائٹ پر دی گئی معلومات عمومی رہنمائی کے لیے ہیں اور کسی مخصوص سائٹ کے لیے انجینئرنگ مشورہ نہیں۔ فیصلہ کرنے سے پہلے تحریری اور سائٹ سے متعلق رائے ضرور لیں۔",
    ],
  },
  {
    heading: "Suspension & Termination",
    headingUrdu: "کام کی معطلی اور خاتمہ",
    paragraphs: [
      "Either party may terminate the agreement by written notice in case of a serious breach that is not remedied within fifteen (15) days of notice.",
      "On termination, the Client shall pay for all work executed up to that date, material already purchased or ordered for the project, and any demobilisation cost reasonably incurred.",
    ],
    paragraphsUrdu: [
      "سنگین خلاف ورزی کی صورت میں، جو نوٹس کے پندرہ دن میں دور نہ کی جائے، کوئی بھی فریق تحریری نوٹس دے کر معاہدہ ختم کر سکتا ہے۔",
      "خاتمے کی صورت میں صارف اس تاریخ تک ہونے والے کام، منصوبے کے لیے خریدے یا آرڈر کیے گئے میٹریل اور مناسب اخراجات کی ادائیگی کا پابند ہوگا۔",
    ],
  },
  {
    heading: "Dispute Resolution & Governing Law",
    headingUrdu: "تنازعات کا حل اور قانون",
    paragraphs: [
      "The parties shall first attempt to resolve any dispute amicably through discussion at the Company's head office.",
      "If a dispute cannot be resolved amicably, it shall be referred to a mutually agreed independent civil engineer or arbitrator. These terms are governed by the laws of the Islamic Republic of Pakistan, and the courts at District Toba Tek Singh shall have jurisdiction.",
    ],
    paragraphsUrdu: [
      "فریقین پہلے کوشش کریں گے کہ کوئی بھی تنازعہ کمپنی کے مرکزی دفتر میں باہمی گفتگو سے خوش اسلوبی سے حل ہو جائے۔",
      "اگر تنازعہ باہمی طور پر حل نہ ہو تو اسے دونوں فریقین کے متفقہ آزاد سول انجینئر یا ثالث کے سپرد کیا جائے گا۔ یہ شرائط اسلامی جمہوریہ پاکستان کے قوانین کے تابع ہیں اور ضلع ٹوبہ ٹیک سنگھ کی عدالتوں کو دائرہ اختیار حاصل ہوگا۔",
    ],
  },
  {
    heading: "Changes to Terms & Contact",
    headingUrdu: "شرائط میں تبدیلی اور رابطہ",
    paragraphs: [
      "The Company may update these Terms & Conditions at any time. The version published on this page at the time you accept a quotation shall apply to that engagement.",
      `Questions about these terms may be sent to ${site.email} or discussed at our head office: ${site.address}. Phone / WhatsApp: ${site.phone}. Owner: ${site.owner}.`,
    ],
    paragraphsUrdu: [
      "کمپنی ان شرائط کو کسی بھی وقت اپ ڈیٹ کر سکتی ہے۔ کوٹیشن قبول کرتے وقت اس صفحے پر موجود شرائط ہی اس معاہدے پر لاگو ہوں گی۔",
      "ان شرائط سے متعلق سوالات ای میل کریں یا ہمارے مرکزی دفتر، مین روڈ، شہر پیر محل میں رابطہ کریں۔ فون / واٹس ایپ: ۰۳۰۰۶۵۲۲۷۵۰ — مالک: محمد عمران سہیل",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumb="Terms & Conditions"
        title="Terms & Conditions"
        titleUrdu="شرائط و ضوابط"
        subtitle="The terms that govern our quotations, contracts, payments, timelines, warranty and the use of peermahalconstruction.com."
        subtitleUrdu="ہمارے تخمینے، معاہدے، ادائیگی، دورانیہ، وارنٹی اور ویب سائٹ کے استعمال سے متعلق شرائط و ضوابط۔"
        image="industrial"
      />
      <LegalContent sections={sections} updated="1 January 2026" />
      <CtaBand />
    </>
  );
}

/** Re-check the public/images folder every 5 minutes so replaced photos appear without a rebuild. */
export const revalidate = 300;
