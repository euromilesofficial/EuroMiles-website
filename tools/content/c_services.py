from _h import *

PAGES = {}
HUBS = {}

HUBS['services-visa'] = dict(
    seo='Italy Study Services & Visa Help for Indian Students | EuroMiles',
    desc='End-to-end Italy admission, document legalisation, student visa and post-arrival services for Indian students. One team from first call to first week in Italy.',
    h1='Services &amp; <em>visa</em> support, end to end',
    lede='From university applications and CIMEA certificates to your national D visa and your first week in Italy, one Italy-only team handles every step.',
    facts=[('Journey stages', '3'), ('Focus', 'Italy only'), ('Visa type', 'National D visa'), ('Support', 'Before and after arrival')],
    sections=[
        sec('Three stages, one team',
            cards(('Academic legalisation', 'Applications, CIMEA, translations and exams. Start with [[university-portal-filing]].'),
                  ('National student visa', 'Financial dossier, mock interviews and slots. See [[financial-dossier]].'),
                  ('Post-arrival in Italy', 'Housing, permesso and banking. See [[student-accommodation]].'))),
        sec('Why Indian families choose us',
            ul('We work only on Italy, so our knowledge is deep and current.', 'Fees are explained upfront: [[transparent-fees]].', 'Parents get regular, plain-language updates.')),
        sec('Not sure where to start?', '[[free-assessment|Book a free assessment]] and we will map your complete journey.'),
    ],
    faq=[('Do you guarantee visas?', 'No consultancy can. We reduce risk through accurate documents and preparation.'), ('Can I use only some services?', 'Yes. You can choose individual services or the full end-to-end package.')],
    cta=('Plan your journey with one team', 'Get a stage-by-stage roadmap from admission to arrival.'),
)

PAGES['university-portal-filing'] = page(
    'University Portal Filing & Application Support for Italy',
    'We file your Italian university applications on Universitaly and university portals correctly, with deadlines tracked and documents checked.',
    'University <em>portal filing</em>',
    'Italian applications involve two portals: the university\u2019s own system and Universitaly pre-enrolment. We handle both without errors.',
    [('Portals', 'University + Universitaly'), ('Documents', 'Audited'), ('Deadlines', 'Tracked'), ('Updates', 'Weekly')],
    [
        sec('What we do',
            steps(('Profile and shortlist', 'We confirm programmes, tests and deadlines.'), ('Document preparation', 'Transcripts, certificates, SOP and CV are checked.'), ('Submission and follow-up', 'We file, track decisions and handle queries.'))),
        sec('Pre-enrolment on Universitaly', 'Visa applicants must complete Universitaly pre-enrolment. See [[application-guide]].'),
    ],
    [('Can I file myself?', 'Yes, but one portal error can cost a year. We reduce that risk.')],
    related=['application-guide', 'cimea-certificates', 'sworn-translations', 'entrance-exam-guidance', 'error-free-filing', 'university-admit-letters'],
)

PAGES['cimea-certificates'] = page(
    'CIMEA Certificates & Comparability for Indian Students',
    'How CIMEA comparability and statement-of-verification certificates work for Indian students, when you need them, and how we help.',
    'CIMEA &amp; <em>comparability</em> certificates',
    'Many Italian master\u2019s programmes and scholarship bodies ask for a CIMEA certificate to confirm your Indian degree\u2019s equivalence.',
    [('Issued by', 'CIMEA'), ('Used for', 'Master\u2019s, scholarships'), ('Needs', 'Verified documents'), ('Time', 'Weeks, plan early')],
    [
        sec('When you need it',
            ul('Master\u2019s applications requiring a degree comparability certificate.', 'Scholarship filings that ask for CIMEA documents.', 'Some universities accept their own evaluation instead.')),
        sec('How we help', 'We confirm if your target university needs it, prepare documents, and track the request. See [[university-cimea]].'),
    ],
    [('Is CIMEA mandatory?', 'Not for every university. We confirm requirements per programme.')],
    related=['university-cimea', 'sworn-translations', 'university-portal-filing', 'isee-income-limits', 'masters-degrees', 'application-guide'],
)

PAGES['sworn-translations'] = page(
    'Sworn Italian Translations of Indian Documents',
    'Sworn translations and legalisation of Indian academic and financial documents for Italian universities, visas and scholarships.',
    'Sworn Italian <em>translations</em>',
    'Italian authorities want official translations of Indian documents, often with apostille or legalisation first. We organise the entire chain.',
    [('Documents', 'Academic + financial'), ('Step 1', 'Apostille / legalise'), ('Step 2', 'Sworn translation'), ('Accepted by', 'Embassy, DSU, university')],
    [
        sec('Typical documents',
            ul('Class 10 and 12 marksheets and certificates.', 'Degree certificates and transcripts.', 'Income and tax documents for ISEE.', 'Birth and family certificates where required.')),
        sec('Why order matters', 'Wrong order, such as translating before legalising, can invalidate documents. Our checklist keeps the sequence correct.'),
    ],
    [('Can I translate in India?', 'It depends on the authority. We advise the accepted route.')],
    related=['cimea-certificates', 'isee-income-limits', 'university-portal-filing', 'financial-dossier', 'error-free-filing', 'scholarship-deadlines'],
)

PAGES['entrance-exam-guidance'] = page(
    'Entrance Exam Guidance for Italian Universities',
    'Choose, register and prepare for TOLC, TIL, SAT and medicine exams with EuroMiles guidance for Indian students.',
    'Entrance exam <em>guidance</em>',
    'We help you pick the right test, book slots from India and plan your preparation around your boards.',
    [('Tests', 'TOLC, TIL, SAT, Medicine'), ('Registration', 'We assist'), ('Prep', 'Study plans'), ('Mode', 'Online / on-site')],
    [
        sec('What we do',
            ul('Match tests to your target universities.', 'Handle registration and test centres.', 'Create a study plan and mock-test schedule.')),
        sec('More information', 'See [[entrance-exams]] and [[entrance-exam-prep]].'),
    ],
    [('Can I take tests from India?', 'Many are available online or at overseas centres.')],
    related=['entrance-exams', 'entrance-exam-prep', 'university-portal-filing', 'single-cycle-medicine', 'application-guide', 'bachelors-degrees'],
)

PAGES['financial-dossier'] = page(
    'Embassy Financial Dossier for Italy Student Visa',
    'How to prepare a strong financial dossier for the Italian student visa: proof of funds, sponsor documents, bank statements and common errors.',
    'Embassy <em>financial dossier</em>',
    'Visa officers must be sure you can fund your stay. A clear, consistent dossier is one of the biggest factors in approval.',
    [('Minimum means', '\u2248 \u20ac6,500\u2013\u20ac7,000/yr'), ('Proof', 'Bank, loan, scholarship'), ('Sponsor', 'Parents / guardian'), ('Updated', 'Yearly')],
    [
        sec('What the dossier includes',
            ul('Bank statements and fixed-deposit proofs.', 'Sponsor income documents and affidavit.', 'Scholarship or education-loan letters.', 'Source-of-funds explanation.')),
        warn('Check current amounts', 'The minimum amount is updated by Italian authorities. We confirm the current figure before you prepare.'),
        sec('Common issues', 'Sudden large deposits, mismatched names and missing translations cause delays. See [[visa-rejection-audit]].'),
    ],
    [('Can a loan be used?', 'Yes, with a sanction letter and supporting documents.')],
    related=['application-guide', 'visa-mock-interviews', 'visa-rejection-audit', 'vfs-slot-management', 'sworn-translations', 'study-scholarships'],
)

PAGES['visa-mock-interviews'] = page(
    '1-on-1 Italy Student Visa Mock Interviews',
    'Practise your Italian student visa interview with EuroMiles: realistic questions, feedback and confidence for Indian applicants.',
    '1-on-1 visa <em>mock interviews</em>',
    'Not every applicant is interviewed, but those who are must explain their plans clearly and consistently. We prepare you.',
    [('Format', '1-on-1 call'), ('Duration', '30\u201345 min'), ('Feedback', 'Written'), ('Covers', 'Study, funds, plans')],
    [
        sec('What we practise',
            ul('Why Italy and why this programme.', 'How you will fund your studies.', 'Accommodation and plans after graduation.', 'Consistency with your documents.')),
        sec('After the session', 'You receive a feedback summary and tips to improve before your real appointment. See [[vfs-slot-management]].'),
    ],
    [('Will I definitely be asked questions?', 'Not always, but you should be ready.')],
    related=['application-guide', 'financial-dossier', 'visa-rejection-audit', 'vfs-slot-management'],
)

PAGES['vfs-slot-management'] = page(
    'VFS & Consular Slot Management for Italy Visa',
    'Book Italy student visa appointments through VFS Global India: slot tracking, document checks and what to carry on the day.',
    'VFS &amp; consular <em>slot management</em>',
    'Appointment availability can be tight in peak months. We monitor, book and prepare you for the day.',
    [('Centre', 'VFS Global India'), ('Peak months', 'Jun\u2013Sep'), ('Biometrics', 'Required'), ('Documents', 'Checklist')],
    [
        sec('How we help',
            steps(('Slot monitoring', 'We track availability at your nearest centre.'), ('Booking', 'We secure the earliest suitable date.'), ('Appointment prep', 'Final document check and what to expect.'))),
        sec('Important', 'Apply only after admission and Universitaly pre-enrolment are complete. See [[application-guide]].'),
    ],
    [('Can I choose any centre?', 'Usually you apply at the centre covering your state of residence.')],
    related=['application-guide', 'financial-dossier', 'visa-mock-interviews', 'visa-rejection-audit', 'permesso-assistance'],
)

PAGES['visa-rejection-audit'] = page(
    'Italy Student Visa Rejection Risk Audit',
    'Our risk audit reviews your visa file for the issues behind most Italy student visa rejections, before you apply or re-apply.',
    'Visa rejection <em>risk audit</em>',
    'A second pair of expert eyes on your file can catch weak points before a visa officer does.',
    [('Review', 'Full file'), ('Covers', 'Funds, intent, documents'), ('Output', 'Risk report'), ('For', 'First-time + re-applicants')],
    [
        sec('What we check',
            ul('Consistency across admission, funds and accommodation.', 'Source of funds and sponsor documents.', 'Study plan and SOP clarity.', 'Previous refusals and how to address them.')),
        sec('If you were refused', 'We analyse the refusal reasons and plan a stronger re-application. See [[financial-dossier]].'),
    ],
    [('Does an audit guarantee approval?', 'No. It reduces avoidable risk.')],
    related=['financial-dossier', 'visa-mock-interviews', 'vfs-slot-management', 'application-guide', 'sworn-translations'],
)

PAGES['student-accommodation'] = page(
    'Verified Student Accommodation in Italy | EuroMiles',
    'Find verified student housing in Italy before you arrive: residences, shared flats, contracts and scam-proof booking for Indian students.',
    'Verified student <em>accommodation</em>',
    'Housing is the biggest early worry for families. We help you secure safe, legitimate accommodation before you fly.',
    [('Options', 'Residence, shared flat'), ('Contract', 'Reviewed'), ('Deposit', '1\u20132 months'), ('Proof for visa', 'Provided')],
    [
        sec('How we help',
            ul('Shortlist verified listings in your city.', 'Review rental contracts and deposit terms.', 'Provide accommodation proof for your visa file.', 'Support for temporary stays on arrival.')),
        sec('Learn more', 'See the [[accommodation]] guide for city-wise costs.'),
    ],
    [('How do I avoid scams?', 'Never pay a deposit without a contract and verified owner. We check both.')],
    related=['accommodation', 'university-cities', 'airport-welcome', 'permesso-assistance', 'financial-dossier', 'regional-tuition-waivers'],
)

PAGES['permesso-assistance'] = page(
    'Permesso di Soggiorno Assistance for Indian Students',
    'Step-by-step help with the Italian residence permit (permesso di soggiorno): post office kit, documents, fingerprints and renewals.',
    '<em>Permesso di soggiorno</em> assistance',
    'Within eight working days of arrival you must apply for your residence permit. We guide you through each step.',
    [('Deadline', '8 working days'), ('Where', 'Poste Italiane + Questura'), ('Needs', 'Kit, photos, insurance'), ('Valid', '1 year, renewable')],
    [
        sec('The process',
            steps(('Collect the kit', 'Pick up the application kit from a designated post office.'), ('Submit documents', 'Passport, visa, insurance, funds, enrolment proof and fees.'), ('Questura appointment', 'Fingerprints and identification, then collection.'))),
        sec('Related', 'See [[health-insurance]] and [[codice-fiscale-banking]].'),
    ],
    [('What if I miss the deadline?', 'Act quickly and contact us. Delays can complicate your stay.')],
    related=['codice-fiscale-banking', 'health-insurance', 'airport-welcome', 'student-accommodation', 'post-study-work-visa', 'application-guide'],
)

PAGES['codice-fiscale-banking'] = page(
    'Codice Fiscale & Bank Account for Students in Italy',
    'Get your codice fiscale and open an Italian bank account as an Indian student: documents, banks, timing and tips.',
    'Codice fiscale &amp; <em>banking</em>',
    'Your tax code and a local bank account unlock rent, mobile plans and part-time work. We help you set both up fast.',
    [('Codice fiscale', 'Free'), ('Issued by', 'Agenzia delle Entrate'), ('Bank needs', 'Passport, permit receipt'), ('Time', '1\u20132 weeks')],
    [
        sec('Steps',
            steps(('Apply for the tax code', 'Often possible at the consulate before travel or in Italy.'), ('Choose a bank', 'Compare student accounts and fees.'), ('Open your account', 'Bring passport, tax code, address proof and enrolment letter.'))),
        sec('Tip', 'Keep a small buffer in your Indian account while setting up. See [[annual-living-stipends]].'),
    ],
    [('Is the codice fiscale mandatory?', 'Practically yes: it is needed for contracts and work.')],
    related=['permesso-assistance', 'student-accommodation', 'part-time-work', 'airport-welcome', 'annual-living-stipends', 'health-insurance'],
)

PAGES['airport-welcome'] = page(
    'Airport Welcome & Orientation in Italy | EuroMiles',
    'Arrive confidently: airport pickup coordination, SIM cards, transport, first-week orientation and local contacts in Italy.',
    'Airport welcome &amp; <em>orientation</em>',
    'Landing in a new country is easier with a plan. We coordinate your first 72 hours so parents can relax.',
    [('Pickup', 'Coordinated'), ('SIM', 'Day one'), ('Orientation', 'First week'), ('Local contact', 'Provided')],
    [
        sec('What is included',
            ul('Arrival checklist and transport guidance.', 'Mobile SIM and connectivity tips.', 'Check-in support at your accommodation.', 'City orientation and emergency contacts.')),
        sec('For parents', 'You receive an arrival confirmation once your child is safely settled.'),
    ],
    [('Is pickup available in every city?', 'We coordinate in major university cities. Ask your counsellor.')],
    related=['student-accommodation', 'permesso-assistance', 'codice-fiscale-banking', 'part-time-work', 'university-cities', 'health-insurance'],
)
