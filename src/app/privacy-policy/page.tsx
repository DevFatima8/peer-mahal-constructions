import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalContent, { type LegalSection } from "@/components/LegalContent";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Peer Mahal Construction (Seval Engineer Company) — how we collect, use, store, share and protect the personal information of visitors and clients on peermahalconstruction.com.",
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    headingUrdu: "تعارف",
    paragraphs: [
      `This Privacy Policy explains how ${site.name}, operating under ${site.legalName} ("we", "us", "our"), collects, uses, stores, shares and protects information when you visit ${site.domain}, contact us by phone or WhatsApp, or engage us for construction and engineering services.`,
      "By using this website or submitting an enquiry form, you agree to the practices described in this policy. If you do not agree with any part of this policy, please do not use the website or submit your information to us.",
      "This policy applies to our website, our WhatsApp business communication, our email correspondence and the client records maintained at our head office in City Peer Mahal.",
    ],
    paragraphsUrdu: [
      "یہ پرائیویسی پالیسی بتاتی ہے کہ پیر محل کنسٹرکشن (سیوال انجینئر کمپنی) آپ کی معلومات کیسے حاصل کرتی، استعمال کرتی، محفوظ رکھتی اور ان کی حفاظت کرتی ہے، جب آپ ہماری ویب سائٹ استعمال کرتے ہیں یا ہم سے فون، واٹس ایپ یا ای میل پر رابطہ کرتے ہیں۔",
      "اس ویب سائٹ کے استعمال یا فارم بھیجنے کا مطلب یہ ہے کہ آپ اس پالیسی سے اتفاق کرتے ہیں۔ اگر آپ کسی حصے سے متفق نہیں تو براہِ کرم ویب سائٹ استعمال نہ کریں اور اپنی معلومات ہمیں فراہم نہ کریں۔",
      "یہ پالیسی ہماری ویب سائٹ، واٹس ایپ رابطے، ای میل خط و کتابت اور شہر پیر محل میں موجود دفتری ریکارڈ پر لاگو ہوتی ہے۔",
    ],
  },
  {
    heading: "Information We Collect",
    headingUrdu: "ہم کون سی معلومات حاصل کرتے ہیں",
    paragraphs: [
      "We only collect information that is necessary to respond to your enquiry, prepare an estimate and deliver our services professionally.",
    ],
    paragraphsUrdu: [
      "ہم صرف وہی معلومات حاصل کرتے ہیں جو آپ کے سوال کا جواب دینے، تخمینہ تیار کرنے اور پیشہ ورانہ خدمات فراہم کرنے کے لیے ضروری ہوں۔",
    ],
    bullets: [
      "Name, phone number, WhatsApp number and email address",
      "City, project location, plot size and site details",
      "Type of service required and approximate budget range",
      "Drawings, photographs or documents you voluntarily share with us",
      "Basic technical data such as browser type, device type and pages visited",
    ],
    bulletsUrdu: [
      "نام، فون نمبر، واٹس ایپ نمبر اور ای میل ایڈریس",
      "شہر، منصوبے کا مقام، پلاٹ کا سائز اور سائٹ کی تفصیلات",
      "مطلوبہ خدمت کی قسم اور تقریبی بجٹ",
      "نقشے، تصاویر یا دستاویزات جو آپ خود ہمیں بھیجتے ہیں",
      "بنیادی تکنیکی معلومات جیسے براؤزر، ڈیوائس اور دیکھے گئے صفحات",
    ],
  },
  {
    heading: "How We Use Your Information",
    headingUrdu: "ہم آپ کی معلومات کیسے استعمال کرتے ہیں",
    paragraphs: [
      "Your information is used strictly for legitimate business purposes connected with your enquiry or project.",
      "We do not use your data for automated decision-making or profiling of any kind.",
    ],
    paragraphsUrdu: [
      "آپ کی معلومات صرف آپ کے سوال یا منصوبے سے متعلق جائز کاروباری مقاصد کے لیے استعمال ہوتی ہیں۔",
      "ہم آپ کے ڈیٹا کو کسی خودکار فیصلہ سازی یا پروفائلنگ کے لیے استعمال نہیں کرتے۔",
    ],
    bullets: [
      "To contact you and arrange a free site visit",
      "To prepare drawings, BOQ, cost estimates and proposals",
      "To manage contracts, billing, records and after-sales support",
      "To improve our website content and service quality",
      "To comply with legal, tax and regulatory obligations",
    ],
    bulletsUrdu: [
      "آپ سے رابطہ کرنے اور مفت سائٹ وزٹ کا انتظام کرنے کے لیے",
      "نقشے، بی او کیو، لاگت کا تخمینہ اور تجاویز تیار کرنے کے لیے",
      "معاہدے، بلنگ، ریکارڈ اور بعد از تعمیر سروس کے لیے",
      "ویب سائٹ اور خدمات کے معیار کو بہتر بنانے کے لیے",
      "قانونی، ٹیکس اور ضابطہ جاتی تقاضے پورے کرنے کے لیے",
    ],
  },
  {
    heading: "Sharing of Information",
    headingUrdu: "معلومات کی شراکت",
    paragraphs: [
      "We do not sell, rent or trade your personal information to any third party for marketing purposes.",
      "Information may be shared only with our own engineers, surveyors and supervisors working on your project, with approved sub-contractors or material suppliers where strictly required, and with government or regulatory authorities where required by law.",
      "Any third party who receives your information is expected to keep it confidential and use it only for the purpose for which it was shared.",
    ],
    paragraphsUrdu: [
      "ہم آپ کی ذاتی معلومات کسی تیسرے فریق کو مارکیٹنگ کے لیے فروخت، کرائے پر یا تبادلے میں نہیں دیتے۔",
      "معلومات صرف آپ کے منصوبے پر کام کرنے والے ہمارے انجینئرز، سرویئرز اور سپروائزرز، ضرورت کے مطابق منظور شدہ ذیلی ٹھیکیداروں یا سپلائرز، اور قانونی تقاضے کی صورت میں سرکاری اداروں کے ساتھ شیئر کی جا سکتی ہیں۔",
      "کوئی بھی فریق جسے آپ کی معلومات دی جائیں، اس سے توقع کی جاتی ہے کہ وہ انہیں خفیہ رکھے اور صرف اسی مقصد کے لیے استعمال کرے۔",
    ],
  },
  {
    heading: "Data Storage & Security",
    headingUrdu: "ڈیٹا کی حفاظت",
    paragraphs: [
      "Enquiries submitted through our website are stored in a secured database. Office records, drawings and contracts are kept in our head office with restricted access.",
      "We apply reasonable technical and organisational measures to protect your data from unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
      "We retain enquiry and project data only for as long as necessary for business, warranty, accounting and legal purposes.",
    ],
    paragraphsUrdu: [
      "ویب سائٹ کے ذریعے موصول ہونے والی درخواستیں محفوظ ڈیٹابیس میں رکھی جاتی ہیں۔ دفتری ریکارڈ، نقشے اور معاہدے محدود رسائی کے ساتھ ہمارے مرکزی دفتر میں محفوظ ہوتے ہیں۔",
      "ہم آپ کے ڈیٹا کو غیر مجاز رسائی، تبدیلی یا نقصان سے بچانے کے لیے مناسب تکنیکی اور انتظامی اقدامات کرتے ہیں، تاہم انٹرنیٹ پر کوئی بھی طریقہ مکمل طور پر محفوظ نہیں ہوتا۔",
      "ہم آپ کا ڈیٹا صرف اتنے عرصے کے لیے رکھتے ہیں جتنا کاروباری، وارنٹی، حسابی اور قانونی ضروریات کے لیے لازم ہو۔",
    ],
  },
  {
    heading: "Cookies & Website Analytics",
    headingUrdu: "کوکیز اور ویب سائٹ تجزیات",
    paragraphs: [
      "Our website may use basic cookies and analytics tools to understand which pages are most useful to visitors and to keep the site working correctly.",
      "Cookies do not give us access to your device or to any personal file. You may disable cookies in your browser settings, although some parts of the website may then not display as intended.",
    ],
    paragraphsUrdu: [
      "ہماری ویب سائٹ بنیادی کوکیز اور تجزیاتی ٹولز استعمال کر سکتی ہے تاکہ معلوم ہو سکے کہ کون سے صفحات زیادہ مفید ہیں اور سائٹ درست کام کرے۔",
      "کوکیز سے ہمیں آپ کے آلے یا ذاتی فائلوں تک رسائی نہیں ملتی۔ آپ اپنے براؤزر سے کوکیز بند کر سکتے ہیں، البتہ اس صورت میں ویب سائٹ کے کچھ حصے درست نظر نہ آئیں۔",
    ],
  },
  {
    heading: "WhatsApp & Phone Communication",
    headingUrdu: "واٹس ایپ اور فون رابطہ",
    paragraphs: [
      `When you contact us on WhatsApp at ${site.phone}, your message, phone number and any files you send are received by our office team and stored for project record purposes.`,
      "Calls may be noted in our enquiry register for follow-up. We do not record calls without informing you.",
    ],
    paragraphsUrdu: [
      "جب آپ ہمیں واٹس ایپ نمبر ۰۳۰۰۶۵۲۲۷۵۰ پر پیغام بھیجتے ہیں تو آپ کا پیغام، نمبر اور بھیجی گئی فائلیں ہماری دفتری ٹیم کو موصول ہوتی ہیں اور ریکارڈ کے لیے محفوظ کی جاتی ہیں۔",
      "کالز کو فالو اپ کے لیے ہمارے رجسٹر میں درج کیا جا سکتا ہے۔ ہم آپ کو بتائے بغیر کال ریکارڈ نہیں کرتے۔",
    ],
  },
  {
    heading: "Photographs of Completed Projects",
    headingUrdu: "مکمل شدہ منصوبوں کی تصاویر",
    paragraphs: [
      "We may photograph work in progress and completed structures for quality records and for our portfolio. Client names, exact addresses and private interior details are not published without written permission.",
      "If you do not want your project shown in our portfolio or social media, simply inform us in writing and we will exclude it.",
    ],
    paragraphsUrdu: [
      "ہم زیرِ تعمیر اور مکمل شدہ کام کی تصاویر معیار کے ریکارڈ اور اپنے پورٹ فولیو کے لیے لے سکتے ہیں۔ صارف کا نام، مکمل پتہ اور نجی اندرونی تفصیلات تحریری اجازت کے بغیر شائع نہیں کی جاتیں۔",
      "اگر آپ نہیں چاہتے کہ آپ کا منصوبہ ہمارے پورٹ فولیو یا سوشل میڈیا پر دکھایا جائے تو ہمیں تحریری طور پر آگاہ کریں، ہم اسے شامل نہیں کریں گے۔",
    ],
  },
  {
    heading: "Your Rights",
    headingUrdu: "آپ کے حقوق",
    paragraphs: [
      "You may request access to the personal information we hold about you, ask for corrections, or request deletion where we are not legally required to retain it.",
      `To exercise any of these rights, contact us at ${site.email} or call ${site.phone}. We will respond within a reasonable time.`,
    ],
    paragraphsUrdu: [
      "آپ ہم سے اپنی معلومات دیکھنے، درستگی کرانے یا حذف کرانے کی درخواست کر سکتے ہیں، بشرطیکہ ہم قانونی طور پر انہیں محفوظ رکھنے کے پابند نہ ہوں۔",
      "ان حقوق کے استعمال کے لیے ہمیں ای میل کریں یا ۰۳۰۰۶۵۲۲۷۵۰ پر رابطہ کریں۔ ہم مناسب وقت میں جواب دیں گے۔",
    ],
  },
  {
    heading: "Children's Privacy",
    headingUrdu: "بچوں کی پرائیویسی",
    paragraphs: [
      "Our services are intended for adults and businesses. We do not knowingly collect personal information from children under the age of 18. If such information is provided to us by mistake, it will be deleted upon notification.",
    ],
    paragraphsUrdu: [
      "ہماری خدمات بالغ افراد اور اداروں کے لیے ہیں۔ ہم جان بوجھ کر ۱۸ سال سے کم عمر بچوں کی معلومات جمع نہیں کرتے۔ اگر ایسی معلومات غلطی سے موصول ہوں تو اطلاع پر حذف کر دی جائیں گی۔",
    ],
  },
  {
    heading: "Third-Party Links",
    headingUrdu: "دیگر ویب سائٹس کے لنکس",
    paragraphs: [
      "Our website may contain links to maps, WhatsApp, social media or supplier websites. We are not responsible for the privacy practices or content of those external sites. Please review their policies separately.",
    ],
    paragraphsUrdu: [
      "ہماری ویب سائٹ پر نقشہ جات، واٹس ایپ، سوشل میڈیا یا سپلائرز کی ویب سائٹس کے لنکس ہو سکتے ہیں۔ ان بیرونی سائٹس کے مواد یا پالیسی کے ہم ذمہ دار نہیں۔ براہِ کرم ان کی پالیسی الگ سے دیکھیں۔",
    ],
  },
  {
    heading: "Changes to This Policy & Contact",
    headingUrdu: "پالیسی میں تبدیلی اور رابطہ",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The revised version will be posted on this page with an updated date.",
      `For any privacy-related question, please contact: ${site.name} (${site.legalName}), ${site.address}. Phone / WhatsApp: ${site.phone}. Email: ${site.email}.`,
    ],
    paragraphsUrdu: [
      "ہم وقتاً فوقتاً اس پالیسی کو اپ ڈیٹ کر سکتے ہیں۔ نظرثانی شدہ پالیسی اسی صفحے پر نئی تاریخ کے ساتھ شائع کی جائے گی۔",
      "پرائیویسی سے متعلق کسی بھی سوال کے لیے رابطہ کریں: پیر محل کنسٹرکشن (سیوال انجینئر کمپنی)، مین روڈ، شہر پیر محل، ضلع ٹوبہ ٹیک سنگھ۔ فون / واٹس ایپ: ۰۳۰۰۶۵۲۲۷۵۰",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        crumb="Privacy Policy"
        title="Privacy Policy"
        titleUrdu="پرائیویسی پالیسی"
        subtitle="How Peer Mahal Construction collects, uses, stores and protects your personal information when you contact us or use peermahalconstruction.com."
        subtitleUrdu="پیر محل کنسٹرکشن آپ کی ذاتی معلومات کیسے حاصل، استعمال اور محفوظ کرتی ہے — مکمل تفصیل۔"
        image="drawings"
      />
      <LegalContent sections={sections} updated="1 January 2026" />
      <CtaBand />
    </>
  );
}

/** Re-check the public/images folder every 5 minutes so replaced photos appear without a rebuild. */
export const revalidate = 300;
