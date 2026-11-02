/* Editable FAQ content. Additional questions checked against official sources on 27 October 2026.
   Each category must keep exactly five question objects: the copy below overwrites the five
   static <article class="s8-question"> blocks already in index.html for that category, so add or
   remove the HTML articles at the same time or section-eight.js will log a sync warning. */
window.EuroMilesFaqConfig = [
  {
    "id": "admissions",
    "label": "Admissions",
    "icon": "cap",
    "description": "Eligibility, academic requirements and entrance tests.",
    "questions": [
      {
        "question": "Am I eligible to study in Italy after Class 12?",
        "paragraphs": [
          "Yes, you can apply to many Italian universities after Class 12 for bachelor’s programmes, provided you have a recognised upper-secondary qualification that meets the specific academic requirements of the programme.",
          "Eligibility criteria can vary by university, degree programme and subject background. Some programmes may also require an entrance test or additional academic documents."
        ],
        "tip": "Your eligibility depends on the specific university and programme. Share your academic profile and we’ll help you check the best options for you.",
        "cta": "Check my eligibility",
        "source": {
          "url": "https://www.unibo.it/en/study/enrolment-fees-and-other-procedures/degree-programmes/enrolling-in-first-cycle-and-single-cycle-degree-programmes/enrolling-in-a-first-cycle-or-single-cycle-degree-programme-if-you-come-from-a-non-eu-country",
          "label": "University admission requirements"
        }
      },
      {
        "question": "What percentage or academic profile do I need?",
        "paragraphs": [
          "There is no single minimum percentage for every Italian university. Each course sets its own criteria, and meeting the minimum does not always secure a place.",
          "We review marks, relevant subjects, qualifications, backlogs and study gaps against the course’s published requirements. For a master’s, your previous degree and subject credits also matter."
        ],
        "tip": "A realistic shortlist starts with your full academic record, not a percentage alone.",
        "cta": "Review my academic profile",
        "source": {
          "url": "https://www.universitaly.it/it/studenti-stranieri",
          "label": "Official international student procedures"
        }
      },
      {
        "question": "Do I need an entrance exam such as SAT, CEnT-S, IMAT or another test?",
        "paragraphs": [
          "The required test depends on the course and intake. Some courses select students using an entrance test; others assess qualifications, portfolios or interviews.",
          "Check the current admission call before booking any exam. CISIA’s CEnT-S has replaced several former English TOLC formats; SAT, medicine tests and other exams apply only where the university’s current call accepts or requires them."
        ],
        "tip": "Plan the test, result deadline and application round together so a missed exam does not delay your intake.",
        "cta": "Plan my applications",
        "source": {
          "url": "https://www.cisiaonline.it/cent/tutto-sul-CEnT/tutto-sul-CEnT",
          "label": "CISIA CEnT-S guidance"
        }
      },
      {
        "question": "When should I start preparing my university applications?",
        "paragraphs": [
          "Start by checking your chosen programme’s current admission call, document requirements and application rounds. Universities and programmes set their own deadlines, so one Italy-wide application date is not enough.",
          "Allow time for language evidence, entrance tests and qualification documents. If you need a study visa, also plan Universitaly pre-enrolment and the consular process separately."
        ],
        "tip": "Build a timeline around your actual programme and intake before paying application or test fees.",
        "cta": "Plan my admission timeline",
        "source": {
          "url": "https://www.universitaly.it/it/studenti-stranieri",
          "label": "Official international student procedures"
        }
      },
      {
        "question": "Do I need CIMEA documents, a Declaration of Value or translations?",
        "paragraphs": [
          "The university decides which documents it needs to assess your qualification. Translation, proof of authenticity and evidence of the qualification’s value are separate requirements; the accepted methods and exemptions can differ.",
          "Check the university’s instructions before ordering a CIMEA service or a Declaration of Value. Do not assume that every applicant needs both documents or the same translations."
        ],
        "tip": "Confirm the document checklist for your qualification and university before starting paid procedures.",
        "cta": "Check my qualification documents",
        "source": {
          "url": "https://www.unibo.it/en/study/enrolment-fees-and-other-procedures/degree-programmes/translation-authenticity-and-value-of-foreign-qualifications",
          "label": "Foreign qualification document guidance"
        }
      }
    ]
  },
  {
    "id": "programmes",
    "label": "Programmes",
    "icon": "book",
    "description": "English-taught courses, language requirements and the right fit.",
    "questions": [
      {
        "question": "Can I study in English without knowing Italian?",
        "paragraphs": [
          "English-taught programmes are available, but confirm the teaching language of your chosen course and its individual modules before applying.",
          "An English-taught degree does not remove every language barrier. Learning Italian can help with daily life, placements and work; Italian-taught courses have their own language requirements."
        ],
        "tip": "Choose a course you can study confidently, and build an Italian-learning plan alongside it.",
        "cta": "Find my programme",
        "source": {
          "url": "https://www.unibo.it/en/study/enrolment-fees-and-other-procedures/language-requirement-for-programme-enrolment/",
          "label": "University language requirements"
        }
      },
      {
        "question": "Is IELTS compulsory, or can I use a medium-of-instruction letter?",
        "paragraphs": [
          "Language evidence is course-specific. Universities may accept selected tests, previous study in English or exemptions, but a medium-of-instruction letter is not accepted everywhere.",
          "Check the accepted evidence, required level and document deadline in the course’s admission call. Do not assume that one university’s exemption also applies to another university or to your visa assessment."
        ],
        "tip": "Verify the language route before spending on a test or relying on an exemption.",
        "cta": "Check my language requirements",
        "source": {
          "url": "https://www.unibo.it/en/study/enrolment-fees-and-other-procedures/language-requirement-for-programme-enrolment/",
          "label": "Official language guidance"
        }
      },
      {
        "question": "How do I choose a programme that fits my background and career?",
        "paragraphs": [
          "Start with the curriculum, entry requirements and learning outcomes. A familiar course title can hide a very different mix of modules, mathematics, laboratory work or design projects.",
          "Compare your subject background with the prerequisites, then review placements, the city’s costs and your career goals. Admission to a master’s may require specific subject credits, so changing fields needs a careful eligibility check."
        ],
        "tip": "Shortlist by academic fit, career direction and affordability together.",
        "cta": "Build my programme shortlist",
        "source": {
          "url": "https://www.universitaly.it/it/studenti-stranieri",
          "label": "Universitaly course and admission guidance"
        }
      },
      {
        "question": "Is a Laurea Magistrale the same as a Professional Master’s programme?",
        "paragraphs": [
          "No. A Laurea Magistrale is an Italian second-cycle degree. A Master universitario, often called a Professional Master’s, is a different postgraduate qualification focused on specialist training.",
          "Compare the exact qualification awarded, entry requirements and progression options. A course advertised in English as a “master” should not be assumed to have the same academic purpose as every other master’s course."
        ],
        "tip": "Choose the qualification that supports your intended career or further-study route, not just the course title.",
        "cta": "Compare my postgraduate options",
        "source": {
          "url": "https://www.unibo.it/en/study/phd-professional-masters-specialisation-schools-and-other-programmes/professional-master",
          "label": "Professional Master’s qualification guidance"
        }
      },
      {
        "question": "How do bachelor’s, master’s and single-cycle degrees differ?",
        "paragraphs": [
          "Italian first-cycle degrees are generally three-year bachelor’s programmes, while second-cycle degrees are generally two-year master’s programmes. Some subjects use a longer single-cycle degree instead.",
          "The right entry route depends on the qualification you already hold and the course you want to study. Check the official course structure and admission requirements rather than choosing by duration alone."
        ],
        "tip": "Match your current qualification to the correct study cycle before building your shortlist.",
        "cta": "Find my study level",
        "source": {
          "url": "https://www.unibo.it/en/study/guide-to-choosing-your-programme/the-university-system",
          "label": "Guide to the Italian university system"
        }
      }
    ]
  },
  {
    "id": "cost-scholarships",
    "label": "Cost & Scholarships",
    "icon": "coins",
    "description": "Tuition, family budgets, DSU funding and upfront costs.",
    "questions": [
      {
        "question": "What should my family budget for beyond tuition fees?",
        "paragraphs": [
          "Build a full-year budget for tuition, rent, utilities, food, transport, insurance and study materials. Also allow for travel, accommodation deposits and document preparation before departure.",
          "Costs differ by city and housing arrangement. University fee reductions may depend on your family finances and supporting documents; compare the published fee rules with your own circumstances."
        ],
        "tip": "Keep an arrival reserve and an emergency buffer. A low tuition fee alone does not make the whole journey free.",
        "cta": "Plan my study budget",
        "source": {
          "url": "https://www.unibo.it/en/study/life-at-university-and-in-the-city/living-in-the-city/living-costs-in-bologna",
          "label": "University living-cost guidance"
        }
      },
      {
        "question": "What is a DSU scholarship, and is it guaranteed?",
        "paragraphs": [
          "Regional right-to-study schemes may provide financial support, meals, accommodation or fee benefits. Each region publishes its own call, eligibility rules, deadlines and award conditions.",
          "Expect checks on household finances and academic progress. International families may need income, asset and family documents prepared in the required form. Applying does not guarantee an award or an accommodation place."
        ],
        "tip": "Follow the regional call for your university, rather than a generic scholarship promise.",
        "cta": "Explore my funding options",
        "source": {
          "url": "https://www.dsu.toscana.it/borsa-di-studio",
          "label": "DSU Toscana scholarship guidance"
        }
      },
      {
        "question": "Can I travel before the scholarship arrives, and what must parents prepare?",
        "paragraphs": [
          "Plan for initial costs independently of any hoped-for scholarship payment. Tuition instalments, a rent deposit and living expenses can fall due before funding is awarded or paid.",
          "Prepare the financial documents required by the fee or scholarship scheme early. Keep university fees, scholarship eligibility and visa funding evidence as separate requirements; success in one process does not automatically satisfy another."
        ],
        "tip": "Agree on a fallback family budget before accepting an offer.",
        "cta": "Check my funding plan",
        "source": {
          "url": "https://www.unibo.it/en/study/enrolment-fees-and-other-procedures/degree-programmes/tuition-fees-and-exemptions",
          "label": "University fees and exemptions"
        }
      },
      {
        "question": "Are scholarship deadlines separate from university admission deadlines?",
        "paragraphs": [
          "Yes. A regional scholarship competition has its own call, eligibility rules and application timetable. Completing a university application does not mean you have submitted a scholarship application.",
          "Read the relevant region’s current call and check how enrolment status, financial documents and any accommodation request must be handled. Do not wait for a final admission outcome without first checking the funding deadline."
        ],
        "tip": "Keep separate checklists for university admission, scholarship applications and accommodation.",
        "cta": "Plan my scholarship applications",
        "source": {
          "url": "https://www.dsu.toscana.it/borsa-di-studio",
          "label": "DSU Toscana scholarship call and guidance"
        }
      },
      {
        "question": "Will I automatically keep my scholarship for the whole degree?",
        "paragraphs": [
          "Do not assume that one award guarantees funding for every year. Regional schemes set financial and academic conditions, including progress requirements that depend on the year and type of study.",
          "Check the current call for application or renewal steps, assessment dates and the circumstances in which benefits can be reduced or withdrawn. The rules of one region should not be applied to another."
        ],
        "tip": "Treat academic progress and funding deadlines as part of the same study plan.",
        "cta": "Understand scholarship conditions",
        "source": {
          "url": "https://www.dsu.toscana.it/borsa-di-studio",
          "label": "Scholarship eligibility and benefit conditions"
        }
      }
    ]
  },
  {
    "id": "visa",
    "label": "Visa & Process",
    "icon": "document",
    "description": "Universitaly, financial evidence and a complete student visa file.",
    "questions": [
      {
        "question": "Does an admission offer or Universitaly approval guarantee my visa?",
        "paragraphs": [
          "No. An offer confirms an academic outcome; a study visa is a separate decision made by the competent Italian visa office.",
          "Applicants who need a university-enrolment study visa normally complete the applicable Universitaly pre-enrolment process. Keep your academic record, study plan and visa documents consistent."
        ],
        "tip": "Prepare admission and visa requirements together, without treating an offer as a visa guarantee.",
        "cta": "Review my visa pathway",
        "source": {
          "url": "https://www.universitaly.it/it/studenti-stranieri",
          "label": "Official pre-enrolment procedures"
        }
      },
      {
        "question": "Which financial and supporting documents will my parents and I need?",
        "paragraphs": [
          "Use the checklist of the Italian mission responsible for your application. It may cover admission and pre-enrolment, finances, accommodation, insurance, your passport and academic documents.",
          "Check the current financial threshold and accepted evidence directly with that mission. Qualification verification, translations or legalisation may also be required; the exact route depends on the university and your documents."
        ],
        "tip": "A clear, traceable financial record matters more than last-minute assumptions about sponsorship.",
        "cta": "Prepare my visa checklist",
        "source": {
          "url": "https://www.esteri.it/en/ministero/sportello_info/domandefrequenti/studiare-in-italia/",
          "label": "Italian Ministry study-visa guidance"
        }
      },
      {
        "question": "How early should I start, and what if a document or visa is delayed?",
        "paragraphs": [
          "Work backwards from the course’s enrolment deadline and latest permitted arrival date. Allow time for academic checks, Universitaly validation, document preparation and visa appointments.",
          "If a delay occurs, contact the university about its options before changing travel plans. For a refusal, review the stated reasons and official next steps; a fresh application needs to address the actual issue."
        ],
        "tip": "Keep a written timeline with a backup plan for your intake.",
        "cta": "Build my application timeline",
        "source": {
          "url": "https://www.universitaly.it/it/first-steps",
          "label": "Universitaly enrolment steps"
        }
      },
      {
        "question": "What must I do about my residence permit after arriving in Italy?",
        "paragraphs": [
          "A study visa and a residence permit serve different purposes. For a long stay requiring a permit, the Italian Ministry of the Interior states that the application must be made within eight working days of entry.",
          "Before departure, check the process that applies to your situation and prepare the documents needed for the application. Your university’s international office can help explain local submission and appointment arrangements."
        ],
        "tip": "Put the residence-permit application on your arrival checklist; do not wait until your visa is close to expiry.",
        "cta": "Plan my arrival formalities",
        "source": {
          "url": "https://www.interno.gov.it/it/temi/immigrazione-e-asilo/modalita-dingresso/visto-e-permesso-soggiorno",
          "label": "Italian Ministry of the Interior: residence permits"
        }
      },
      {
        "question": "Do I need health insurance for my stay in Italy?",
        "paragraphs": [
          "Check the health-cover requirements for your visa and residence-permit application before buying a policy. University guidance describes routes such as suitable private insurance and, where applicable, registration with Italy’s national health service.",
          "The options have different conditions, costs and coverage periods. Confirm that your chosen cover is accepted for your application and understand what medical treatment and exclusions it includes."
        ],
        "tip": "Check cover dates and administrative requirements alongside your travel and arrival plans.",
        "cta": "Check my arrival preparation",
        "source": {
          "url": "https://www.unibo.it/en/study/life-at-university-and-in-the-city/health-and-assistance/health-and-medical-assistance-in-bologna-cesena-forli-ravenna-e-rimini/medical-assistance-for-international-students",
          "label": "Health-cover guidance for international students"
        }
      }
    ]
  },
  {
    "id": "life-after-study",
    "label": "Life After Study",
    "icon": "people",
    "description": "Career planning, staying in Italy and settling in with confidence.",
    "questions": [
      {
        "question": "Can I stay in Italy to look for work after graduating?",
        "paragraphs": [
          "Your next step depends on your qualification, permit status and the residence route available when you graduate. A student visa does not by itself give unlimited permission to stay.",
          "If you have an eligible job offer and a valid study permit, conversion to a work route may be possible. Start checking the requirements with the competent immigration office before your permit expires."
        ],
        "tip": "Plan your post-study route early, alongside your career preparation.",
        "cta": "Discuss my post-study plans",
        "source": {
          "url": "https://integrazionemigranti.gov.it/it-it/Ricerca-news/Dettaglio-news/id/3301/Conversione-del-permesso-di-soggiorno-da-studio-a-lavoro-Cosa-e-cambiato-con-il-decreto-Cutro",
          "label": "Official study-to-work guidance"
        }
      },
      {
        "question": "Will an Italian degree guarantee a job in Italy or elsewhere in Europe?",
        "paragraphs": [
          "No degree guarantees a job. Your field, experience, language skills, portfolio and the employer’s requirements all shape your prospects.",
          "Use the university’s careers service and build relevant projects, placements and professional connections during your studies. Working in another country also means checking that country’s qualification and immigration requirements."
        ],
        "tip": "Choose a course for its learning and opportunities, and build a career plan from the first year.",
        "cta": "Plan my career pathway",
        "source": {
          "url": "https://www.universitaly.it/it/studenti-stranieri",
          "label": "Official university and qualification guidance"
        }
      },
      {
        "question": "How can parents help with housing, safety and the first months abroad?",
        "paragraphs": [
          "Start the accommodation search early through university services and recognised providers. Review the contract, location, deposit and what is included before transferring money.",
          "Agree on an arrival plan, regular check-ins and an emergency budget. Keep copies of important documents and use university international-student services for local orientation and support."
        ],
        "tip": "Confirm housing and practical support before departure so the student can focus on settling in.",
        "cta": "Plan my arrival support",
        "source": {
          "url": "https://www.unibo.it/en/study/life-at-university-and-in-the-city/housing-and-residences/housing",
          "label": "University housing services"
        }
      },
      {
        "question": "How can my university help me prepare for employment?",
        "paragraphs": [
          "Look for career guidance, employer events, internship information and job-placement services at your university. These can help you understand opportunities and prepare stronger applications.",
          "Start during your degree: develop a suitable CV, practise interviews and build relevant skills and experience. Access to a careers service is useful support, but it is not a promise of employment."
        ],
        "tip": "Build your career plan alongside your studies instead of waiting until graduation.",
        "cta": "Plan my student-to-career journey",
        "source": {
          "url": "https://www.unibo.it/en/study/towards-the-job-market/from-study-to-work-how-to-prepare",
          "label": "University career preparation and placement services"
        }
      },
      {
        "question": "Will I need recognition of my degree to work in another country?",
        "paragraphs": [
          "The answer depends on the destination and occupation. Professional recognition is especially important where a profession is regulated; the relevant authority determines the requirements.",
          "For a planned move, check with the destination country’s competent authority or ENIC-NARIC information centre. An Italian qualification should not be treated as automatic permission to practise every profession abroad."
        ],
        "tip": "If your career is regulated, check recognition requirements before choosing a programme.",
        "cta": "Discuss my long-term study goals",
        "source": {
          "url": "https://enic-naric.net/page-professional-recognition",
          "label": "ENIC-NARIC professional recognition guidance"
        }
      }
    ]
  },
  {
    "id": "part-time-jobs",
    "label": "Part-Time Jobs",
    "icon": "briefcase",
    "description": "Work limits, finding a role and balancing earnings with study.",
    "questions": [
      {
        "question": "Can Indian students work part-time while studying in Italy?",
        "paragraphs": [
          "A valid Italian residence permit for study allows employed work up to 20 hours per week, subject to an annual maximum of 1,040 hours.",
          "Check your permit conditions and use a lawful employment arrangement. Keep classes, exams and the academic progress required for your course or funding at the centre of your schedule."
        ],
        "tip": "Part-time work can complement your budget, but your degree remains the priority.",
        "cta": "Understand my work options",
        "source": {
          "url": "https://www.integrazionemigranti.gov.it/it-it/Ricerca-news/Dettaglio-news/id/3085",
          "label": "Official student-work guidance"
        }
      },
      {
        "question": "Can part-time earnings cover my tuition and living expenses?",
        "paragraphs": [
          "Do not base your study budget on a job you have not secured. Hiring can take time, working hours are limited and earnings depend on the role, location and actual hours available.",
          "Prepare enough funding for your planned costs and an emergency reserve. Treat any later income as additional support, rather than money already available for rent or fees."
        ],
        "tip": "An affordable study plan should still work if you earn nothing during the first months.",
        "cta": "Build a realistic family budget",
        "source": {
          "url": "https://www.unibo.it/en/study/life-at-university-and-in-the-city/living-in-the-city/living-costs-in-bologna",
          "label": "University living-cost planning"
        }
      },
      {
        "question": "How do I find work if I do not speak Italian yet?",
        "paragraphs": [
          "Start with the university’s careers service, campus opportunities and reputable employers. Use a clear CV, check the written terms and avoid offers that ask you to pay for a job.",
          "Some roles use English, but learning Italian expands the jobs you can apply for and helps with workplace communication. Choose hours and a commute that you can sustain alongside classes."
        ],
        "tip": "Begin language practice early and look for a suitable job, rather than accepting the first offer.",
        "cta": "Plan my student-work journey",
        "source": {
          "url": "https://integrazionemigranti.gov.it/it-it/Ricerca-news/Dettaglio-news/id/3301/Conversione-del-permesso-di-soggiorno-da-studio-a-lavoro-Cosa-e-cambiato-con-il-decreto-Cutro",
          "label": "Student employment and permit guidance"
        }
      },
      {
        "question": "Are campus jobs and student collaboration opportunities available?",
        "paragraphs": [
          "Some universities publish calls for paid student collaboration in libraries, offices and other services. These opportunities have their own eligibility rules, application dates and selection processes.",
          "For example, Bologna’s student-collaboration scheme uses income, merit and enrolment criteria. Availability and conditions differ between institutions, so do not count on a campus role as guaranteed income."
        ],
        "tip": "Check your university’s official calls and keep an independent budget for essential expenses.",
        "cta": "Plan study and work together",
        "source": {
          "url": "https://www.unibo.it/en/study/study-grants-and-subsidies/call-for-applications-and-ranking-lists-for-student-collaboration-150-hours",
          "label": "Official university student-collaboration opportunities"
        }
      },
      {
        "question": "How can I recognise a suspicious job offer?",
        "paragraphs": [
          "Check the employer’s identity and verify an offer through its official contact channels. Be careful with unexpected messages, unrealistic promises and requests for sensitive financial information during recruitment.",
          "EURES advises researching unfamiliar companies and checking suspicious communications. A claimed connection to a university or employment service should be independently verified before you share documents or make a commitment."
        ],
        "tip": "Use official university careers services and verified employer channels when looking for work.",
        "cta": "Discuss work-readiness planning",
        "source": {
          "url": "https://eures.europa.eu/how-spot-fraudulent-job-offers-and-misinformation-2023-06-15_en",
          "label": "EURES guidance on fraudulent job offers"
        }
      }
    ]
  },
  {
    "id": "erasmus",
    "label": "Erasmus & Internships",
    "icon": "globe",
    "description": "Exchange semesters, international placements and funding.",
    "questions": [
      {
        "question": "Can an Indian student at an Italian university apply for Erasmus+?",
        "paragraphs": [
          "Yes, Indian students enrolled in eligible degree programmes at participating Italian universities can apply through their university’s Erasmus+ calls. Selection and available places depend on the university’s rules.",
          "Ask your university’s international office about its current call, partner institutions, selection rules and available destinations. There is no single central application for all Erasmus+ study exchanges."
        ],
        "tip": "Check your university’s opportunities before planning an exchange semester.",
        "cta": "Explore my exchange options",
        "source": {
          "url": "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad",
          "label": "Official Erasmus+ study guidance"
        }
      },
      {
        "question": "What is the difference between an Erasmus study exchange and an internship?",
        "paragraphs": [
          "A study exchange means taking an agreed study period at a partner institution. A traineeship is a work placement in an eligible organisation, with its own learning objectives and approval process.",
          "Your university must explain the application route, recognition of credits and any placement agreement. Erasmus+ can also support eligible recent-graduate traineeships, subject to the programme’s selection and timing rules."
        ],
        "tip": "Choose the experience that fits your degree and career goals, then confirm how it will be recognised.",
        "cta": "Plan my international experience",
        "source": {
          "url": "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/trainees",
          "label": "Official Erasmus+ traineeship guidance"
        }
      },
      {
        "question": "Are Erasmus grants enough, and do I need permission to travel or work abroad?",
        "paragraphs": [
          "Grant support varies by destination, duration and the applicable call. Funding can help with extra costs, but compare it with travel, housing and living expenses before committing.",
          "Confirm your learning or traineeship agreement, insurance and destination-country entry or residence requirements. An Italian study permit is not a blanket authorisation to take any job or internship in another country."
        ],
        "tip": "Get the academic, financial and immigration checks in place before booking travel.",
        "cta": "Check my mobility plan",
        "source": {
          "url": "https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-1/higher-education-mobility-projects",
          "label": "Erasmus+ mobility programme rules"
        }
      },
      {
        "question": "How are Erasmus study activities and credits agreed before departure?",
        "paragraphs": [
          "Your Erasmus mobility should be planned through a Learning Agreement with the relevant institutions. It records the agreed study or training activities and how they fit into your degree.",
          "Confirm the academic arrangements before travelling and use the approved process for any changes. Speak to your university’s international office about recognition, documents and your responsibilities during the exchange."
        ],
        "tip": "Agree the academic plan before booking travel so the mobility supports your degree.",
        "cta": "Plan my exchange pathway",
        "source": {
          "url": "https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-1/higher-education-mobility-projects",
          "label": "Erasmus+ mobility and Learning Agreement rules"
        }
      },
      {
        "question": "Can I take an Erasmus traineeship after graduating?",
        "paragraphs": [
          "Recent graduates may be eligible for an Erasmus traineeship if their university offers that route. The programme guide requires selection during the final year of study and completion within one year of graduation.",
          "The institution may choose not to offer recent-graduate traineeships, and the placement counts towards the relevant study-cycle mobility allowance. Check your university’s call before you graduate."
        ],
        "tip": "Ask about recent-graduate traineeships during your final year rather than after leaving university.",
        "cta": "Explore my traineeship options",
        "source": {
          "url": "https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-1/higher-education-mobility-projects",
          "label": "Erasmus+ recent-graduate traineeship rules"
        }
      }
    ]
  }
];

// WhatsApp link for advisor consultation.
window.EuroMilesFaqContact = { whatsappUrl: "https://wa.me/918130304649" };
