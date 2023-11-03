import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const faqs = [
  {
    id: 1,
    question: 'What is Medrack?',
    answer: `
    Medrack is a Pharmacy Platform that delivers your medicines, the same day, for free – all from your convenience- with automated refills, four free counseling sessions monthly from an assigned care specialist. 
    Our major priority is on patients with Long-term care needs, ensuring they do not run out of medications and are properly catered for by our assigned care specialist. We also provide a wide range of medications, supplements/Vitamins, Special Care Packs, Easy-to-use Diagnostic kits and Over-the-counter (OTCS) medicines.
    We source our products only from wholesalers and Manufacturers certified and approved by the appropriate bodies – Pharmaceutical Council of Nigeria (PCN) and/or National Agency for Food and Drug Administration and Control (NAFDAC) - in other to avoid counterfeit medicines
    `
  },
  {
    id: 2,
    question: `I don't have a prescription?`,
    answer: `
    This I not a problem, as we can recommend the appropriate Physician for a
    paid virtual consultation and get you an e-prescription, which would be
    sent to us. We have a range of standby virtual medical consultants for your special health need.

    `
  },
  {
    id: 3,
    question: 'How do your Special Care plans work?',
    answer: `
    Our special care plans are tailored on an individual base to persons with long-term
    care needs such as Diabetics, hypertensives, Ulcer Patients etc., were we cater
    to their medicine availability, refills and appropriate follow up on their well-being.

    `
  },
  {
    id: 4,
    question: 'Are medicines from Medrack more expensive than in a traditional retail Pharmacy?',
    answer: `
    No, medications from Medrack are not more expensive than in a traditional retail Pharmacy.
    Users can get a Loyalty card which gives them access to discounts on all products based on
    purchase history.
    `
  },
  {
    id: 5,
    question: 'What is Pillbox?',
    answer: `
    Pillbox is a social enterprise by Medrack that handles all prescription medication deliveries for free – for persons who qualify- or at a fixed rate of $0.5 for non-qualified users, in areas where we operate.
    The funds raised from pillbox go into partly maintaining the enterprise and also for creating more impact driven products and services in areas where we operate.
    Pillbox is opened to well-meaning individuals for sponsorship and advancement to create more impact in areas where we operate.
    For interested sponsors, use the sponsorship box below.

    `
  },
  {
    id: 6,
    question: 'How long does the delivery take?',
    answer: `
    Delivery within areas where we operate would take a maximum of two hours and for'
    areas where we don't operate we do not operate it will be dependent on proximity
    to our closest landmark.

    `
  },
  {
    id: 7,
    question: 'How does one qualify for the free delivery service from Pillbox?',
    answer: `
    To qualify for free delivery service; user must be resident in areas where we
    operate or the receiver of the medicine must be resident in the areas were we operate.
    Also, medicines must be purchased from our online store.


    `
  },
]