from _h import *

PAGES = {}
HUBS = {}

HUBS['study-in-italy'] = dict(
    seo='Study in Italy for Indian Students: Complete 2027 Guide',
    desc='Everything Indian students and parents need to study in Italy: fees from \u20ac156, DSU scholarships, admissions, visas, living costs and work rules.',
    h1='Study in Italy: the <em>complete</em> guide for Indian students',
    lede='Public tuition from \u20ac156, 500+ English-taught degrees, regional scholarships that can cover fees and living costs, and a post-study work permit. This is the plain-English roadmap for Indian students and parents planning an Italian degree.',
    facts=[('Public tuition', 'From \u20ac156/year'), ('English-taught degrees', '500+'), ('Work while studying', '20 hrs/week'), ('Post-study permit', '12 months')],
    sections=[
        sec('Why Italy is becoming India\u2019s smartest European choice',
            'Italy educates more than 1.8 million university students in some of the world\u2019s oldest and most respected institutions, yet its public universities charge a fraction of what the UK, USA or Australia do. For Indian families, that changes the question from <strong>\u201cCan we afford to send our child abroad?\u201d</strong> to <strong>\u201cWhich Italian university fits best?\u201d</strong>',
            ul('<strong>Affordable by design:</strong> public tuition is income-linked, and regional DSU scholarships can waive it entirely.',
               '<strong>Globally recognised degrees:</strong> Italian qualifications follow the Bologna Process, so they are valid across Europe.',
               '<strong>Strong in what Indians study:</strong> engineering, architecture, design, medicine, business and fashion.',
               '<strong>Real post-study options:</strong> a 12-month job-seeking permit after graduation, with a route to work permits.'),
            'EuroMiles works <strong>only on Italy</strong>. That focus means every guide below reflects what actually happens at Italian universities, consulates and visa centres, not generic \u201cstudy abroad\u201d advice.'),
        sec('How to use this guide',
            'Start with the <strong>Why Study in Italy</strong> pages to understand costs and rules, then move through <strong>Admissions &amp; Process</strong> in order. If you are already shortlisting, read [[@universities|our university guides]] and [[@programs|programme guides]]. When you are ready for a personalised plan, take the [[free-assessment|free profile assessment]].'),
    ],
    faq=[
        ('Is studying in Italy really cheaper than other countries?', 'Yes. Public university tuition typically ranges from \u20ac156 to about \u20ac4,000 a year depending on the university and family income, and regional scholarships can cover it fully. Rent and food are also lower than in the UK or USA.'),
        ('Do I need to learn Italian?', 'Not to be admitted: 500+ degrees are taught entirely in English. Learning basic Italian is strongly recommended for daily life, part-time work and post-study jobs.'),
        ('Which intake should Indian students target?', 'Almost all programmes start in September\u2013October. Applications and Universitaly pre-enrolment run from roughly December to June, so start preparing 9\u201312 months ahead.'),
    ],
    cta=('Not sure where to begin? Begin with a free assessment', 'Tell us your marks, field and budget. We will map the exact Italian universities, scholarships and deadlines that fit your profile.'),
)

PAGES['study-universities'] = page(
    'Italian Public vs Private Universities: Fees & Value',
    'Public vs private universities in Italy for Indian students: tuition, scholarships, quality, admission rules and which option gives the best return.',
    'Italian <em>public</em> vs private universities',
    'Italy has two university tracks: low-cost state universities with income-linked fees, and private institutions charging far more. Here is how to choose, and why most Indian students are better served by the public route.',
    [('Public tuition', '\u20ac156\u2013\u20ac4,000/yr'), ('Private tuition', '\u20ac6,000\u2013\u20ac20,000+/yr'), ('Public share of students', 'Over 90%'), ('Scholarship access', 'Mostly public')],
    [
        sec('The two types of university',
            '<strong>Public (state) universities</strong> such as Bologna, Sapienza, Padua, Politecnico di Milano and Politecnico di Torino enrol the vast majority of Italian students. Fees are regulated and linked to family income and, for international students, to a document called the ISEE parificato.',
            '<strong>Private universities</strong> such as Bocconi, Cattolica, LUISS and Humanitas set their own fees. Many are excellent, particularly in business, but they cost several times more and carry fewer state-funded scholarships.',
            table('Public vs private at a glance', ['Factor', 'Public university', 'Private university'],
                  ['Annual tuition', '\u20ac156 to about \u20ac4,000', '\u20ac6,000 to \u20ac20,000+'],
                  ['DSU regional scholarship', 'Eligible', 'Usually not, or limited'],
                  ['Class size', 'Larger, more independent', 'Smaller, more guided'],
                  ['Admission', 'Entry tests or document merit', 'Own tests and interviews'],
                  ['Best for', 'Engineering, medicine, architecture, sciences', 'Business, economics, law, some medicine'])),
        sec('How fees are calculated at public universities',
            'Each public university publishes a fee table. Your fee depends on the <strong>ISEE</strong> (economic equivalence indicator). International students from non-EU countries submit an ISEE parificato built from Indian income and asset documents. A lower declared family income means a lower fee band, and the minimum is about \u20ac156 (the regional tax) plus stamp duty.',
            note('Why this matters for Indian families', 'Two students at the same university can pay very different fees. Preparing your income documents correctly, with legalisation and sworn translation, can reduce tuition by thousands of euros. See [[isee-income-limits]].')),
        sec('Which should you choose?',
            ul('Choose <strong>public</strong> if your priority is value, scholarships and strong STEM or medical programmes.',
               'Consider <strong>private</strong> if you want a business-school network, smaller classes, or a niche programme not offered publicly.',
               'Compare total cost, not just tuition: scholarships, rent, and expected salary after graduation.'),
            'Our counsellors compare options against your marks, budget and career goal. Browse [[top-ranked-universities]] or [[business-universities]] to start.'),
    ],
    [
        ('Are Italian public university degrees valued in India?', 'Yes. Degrees are recognised under the Bologna framework, and equivalence can be obtained through the Association of Indian Universities (AIU) when needed for Indian government jobs or further study.'),
        ('Can I get a scholarship at a private university?', 'Private universities often have their own merit awards, but the regional DSU scholarship is generally linked to public universities. Check each institution individually.'),
        ('Is the quality of public universities lower?', 'No. Several public institutions rank above most private ones in QS and Times Higher Education tables, especially in engineering, architecture and sciences.'),
    ],
    related=['study-scholarships', 'top-ranked-universities', 'isee-income-limits', 'low-tuition-programs', 'business-universities', 'university-directory'],
)

PAGES['study-scholarships'] = page(
    'Italy Tuition Fees & 100% Scholarships for Indians',
    'Italy tuition from \u20ac156 and DSU scholarships that can waive 100% of fees and add a living stipend. See what Indian students can really expect.',
    'Tuition fees &amp; <em>100% scholarships</em> in Italy',
    'Italy offers one of the few full-ride routes in Europe that does not depend on being a topper: the regional right-to-study (DSU) scholarship. Learn how tuition works and how families fund an entire degree.',
    [('Minimum tuition', '\u2248 \u20ac156/yr'), ('DSU waiver', 'Up to 100%'), ('Yearly stipend', '\u20ac2,000\u2013\u20ac7,000'), ('Basis', 'Need + merit')],
    [
        sec('What tuition really costs',
            'A typical public Bachelor\u2019s at a top Italian university costs between <strong>\u20ac900 and \u20ac3,000 a year</strong> for international students, with engineering and medicine sometimes higher. Students who qualify for the DSU scholarship pay only the regional tax and stamp duty.',
            stats(('\u20ac156', 'Lowest annual tuition'), ('\u20ac0', 'Tuition with DSU waiver'), ('\u20ac5,000+', 'Typical stipend in northern regions'), ('3\u20136 yrs', 'Duration of support'))),
        sec('Three scholarship layers',
            cards(('Regional DSU', 'Need-and-merit scholarship from regional agencies (ER.GO, EDISU, DiSCo and others). Pays a cash stipend, waives tuition and often includes a free meal or accommodation.'),
                  ('University merit awards', 'Universities such as Bologna, Padua and Politecnico offer fee waivers and cash prizes for high academic profiles.'),
                  ('Government and private grants', 'MAECI \u201cStudy in Italy\u201d grants and foundation awards add further options for outstanding candidates.')),
            'Read the full breakdown in [[regional-tuition-waivers]], [[annual-living-stipends]] and [[university-merit-awards]].'),
        sec('Your next step',
            'Eligibility depends on region, university and documents prepared months in advance. A common reason Indian students lose funding is incorrect income paperwork. Our [[scholarship-eligibility|eligibility guide]] shows exactly what is required.'),
    ],
    [
        ('Is a 100% scholarship in Italy guaranteed?', 'No. DSU funding is need-based and depends on your documented family income, academic progression and the region. Many eligible students receive it, but we never promise a guaranteed award.'),
        ('Do I need to be a topper to qualify?', 'For DSU, financial need counts most, along with meeting credit requirements each year. University merit awards do need a strong academic profile.'),
        ('When are scholarship applications filed?', 'Most DSU calls open in July\u2013September of the year you enrol, so documents must be ready before you leave India. See [[scholarship-deadlines]].'),
    ],
)

PAGES['study-programs'] = page(
    '500+ English-Taught Programs in Italy | EuroMiles',
    'Explore 500+ English-taught bachelor\u2019s and master\u2019s degrees in Italy across engineering, design, business, medicine and sciences. No Italian needed.',
    '500+ <em>English-taught</em> programmes in Italy',
    'You do not need to speak Italian to earn an Italian degree. More than 500 programmes at public universities are delivered fully in English, and the list grows every year.',
    [('English-taught degrees', '500+'), ('Levels', 'BSc, MSc, PhD'), ('Language test', 'IELTS / TOEFL / Duolingo*'), ('Top fields', 'Eng, Design, Business')],
    [
        sec('Where English-taught degrees are strongest',
            table('Popular English-taught fields', ['Field', 'Leading universities', 'Typical level'],
                  ['Engineering &amp; AI', 'Politecnico di Milano, Politecnico di Torino, Bologna, Padua', 'BSc / MSc'],
                  ['Architecture &amp; Design', 'Politecnico di Milano, Turin, IUAV Venice', 'BSc / MSc'],
                  ['Business &amp; Economics', 'Bologna, Bocconi, Padua, Ca\u2019 Foscari', 'BSc / MSc'],
                  ['Medicine &amp; Health', 'Pavia, Milan, Rome, Bologna, Padua', 'Single-cycle'],
                  ['Data Science &amp; Computing', 'Sapienza, Padua, Trento, Bologna', 'MSc'])),
        sec('English proficiency rules',
            'Most universities accept IELTS Academic 5.5\u20136.5 or equivalent TOEFL iBT, and some accept the Duolingo English Test or a school English medium certificate. Requirements vary by programme, so always confirm on the official course page. Our [[program-finder|Program Finder]] filters by language score.'),
        sec('How to choose a programme',
            ul('Start with your career goal, then check the programme\u2019s curriculum and faculty.',
               'Check admission method: document merit, entry test, or portfolio.',
               'Match tuition with scholarship options for that region.'),
            'Learn more about [[english-taught-degrees]] or compare [[bachelors-degrees]] and [[masters-degrees]].'),
    ],
    [
        ('Can I work in Italy after an English-taught degree?', 'Yes. You receive a 12-month job-seeking permit after graduation, and many students pick up basic Italian to improve employability.'),
        ('Is the English-taught degree the same as the Italian one?', 'Yes, it carries the same legal value and the same diploma, differing only in teaching language.'),
    ],
)

PAGES['post-study-work-visa'] = page(
    '1-Year Post-Study Work Permit in Italy | Indian Guide',
    'How the 12-month post-study work permit in Italy works for Indian graduates: eligibility, application, conversion to a work visa and job search tips.',
    'The 1-year <em>post-study work permit</em> in Italy',
    'After graduating in Italy, you can stay up to 12 months to find a job or start a business. Here is how the permit works and how Indian graduates convert it into long-term work rights.',
    [('Permit length', '12 months'), ('Applies after', 'Degree or Master\u2019s'), ('Work rights', 'Full-time allowed'), ('Next step', 'Work permit / EU Blue Card')],
    [
        sec('What the permit allows',
            'Under Italian immigration rules, non-EU graduates can apply for a <strong>residence permit for employment search or entrepreneurial activity</strong>, valid for 12 months after completing a degree at an Italian university. During this period you may work and look for a role without needing a separate sponsor.'),
        sec('How to apply',
            steps(('Before your permit expires', 'Apply at the Questura through the Poste Italiane kit before your student permit ends. Do not wait for graduation day.'),
                  ('Prepare documents', 'Degree certificate or proof of final exam, passport, valid permit, proof of means, insurance and accommodation details.'),
                  ('Attend the appointment', 'Fingerprints are taken at the Questura. A receipt allows you to stay and work while the permit is processed.')),
            warn('Timing matters', 'A permit applied for late can leave you without legal status. We remind every EuroMiles student about this deadline.')),
        sec('Converting to a long-term work route',
            'Once you secure a job offer, the permit can be converted into a work permit, often outside the annual quota (Decreto Flussi) for Italian graduates. High earners may qualify for the <strong>EU Blue Card</strong>. Many graduates also continue to a PhD or second Master\u2019s.',
            'Read about earning during your studies in [[part-time-work]].'),
    ],
    [
        ('Can I work full-time during the 12 months?', 'Yes, the job-search permit allows employment, including full-time work.'),
        ('Do I need Italian to find a job?', 'English is enough for many multinational and tech roles, but Italian significantly widens opportunities.'),
        ('Can my family join me?', 'Family reunification rules depend on income and permit type. Speak to a counsellor before planning.'),
    ],
)

PAGES['application-guide'] = page(
    'How to Apply to Italian Universities: 8-Step Guide',
    'Step-by-step application guide for Indian students applying to Italian universities: shortlisting, tests, Universitaly, CIMEA, scholarships and visa.',
    'Step-by-step <em>application guide</em> for Italy',
    'Applying to Italy is a process with several systems working together: the university portal, Universitaly, CIMEA, the scholarship agency and the consulate. Follow these eight steps in order.',
    [('Start', '9\u201312 months before'), ('Main intake', 'September\u2013October'), ('Key portals', 'University + Universitaly'), ('Fee', 'Free assessment')],
    [
        sec('The 8-step journey',
            steps(('1. Profile assessment', 'Review marks, English level, budget and goal to choose degree level and field.'),
                  ('2. Shortlist universities', 'Pick 4\u20136 universities across ambition levels. See [[university-directory]].'),
                  ('3. Entrance test or merit review', 'Register for TOLC, TIL, SAT or other tests where required. See [[entrance-exams]].'),
                  ('4. University application', 'Submit transcripts, English score, statement of purpose and ID on the university portal.'),
                  ('5. Universitaly pre-enrolment', 'Complete the mandatory ministry pre-enrolment. See [[university-cimea]].'),
                  ('6. CIMEA / document validation', 'Obtain a statement of comparability or declaration of value and legalise documents.'),
                  ('7. Scholarship and ISEE filing', 'Prepare income papers and apply for DSU. See [[study-scholarships]].'),
                  ('8. Visa and departure', 'Book the VFS appointment, finalise housing and insurance. See [[financial-dossier]].'))),
        sec('Common mistakes to avoid',
            cross('Applying only to one university.', 'Missing Universitaly pre-enrolment, which blocks the visa.', 'Using unattested or untranslated documents.', 'Underestimating the time for ISEE and scholarship paperwork.')),
    ],
    [
        ('When should I start applying?', 'Ideally 9\u201312 months before your intended September intake. Some universities close their first window as early as January.'),
        ('How many universities should I apply to?', 'Four to six is a balanced number. This protects you against entrance test outcomes and seat limits.'),
    ],
)

PAGES['eligibility-criteria'] = page(
    '12-Year Eligibility Rule for Italy Explained | EuroMiles',
    'Does Italy accept 12 years of schooling from India? Understand the 12-year rule, Class 12 CBSE/ISC/State boards, foundation year and bridging options.',
    'The 12-year <em>eligibility rule</em> explained',
    'Italian universities require 12 years of schooling for direct bachelor\u2019s admission. Indian students with Class 12 meet this rule, but there are exceptions and country-specific conditions worth knowing.',
    [('Schooling needed', '12 years'), ('Indian boards', 'CBSE, ICSE/ISC, State'), ('Class 12 marks', 'Usually 60%+'), ('Alternative', 'Foundation year')],
    [
        sec('What the rule says',
            'To enrol in a Bachelor\u2019s or single-cycle degree, a non-EU student must hold a school-leaving qualification that gives access to university in the home country, after <strong>12 years of total education</strong>. Class 12 from a recognised Indian board satisfies this.'),
        sec('Who needs extra steps',
            ul('Students who completed <strong>only 10+2 via open schooling or non-recognised boards</strong> may need extra validation.',
               'Students with a <strong>10+3 diploma</strong> typically apply to a Foundation Year or have credits assessed.',
               'Class 11 students can start preparing now and apply after Class 12 results.'),
            note('Bachelor\u2019s vs Master\u2019s eligibility', 'For a Master\u2019s, Italian universities generally need a 3-year bachelor\u2019s (or 4-year Indian B.Tech/BE) in a relevant field, plus a minimum credit and GPA profile.')),
        sec('What if you are one year short?', 'A <a href="/programs/foundation-year/">foundation year</a> at an Italian institution is the standard solution. It can lead directly into a degree at the same university or partner institutions.'),
    ],
    [
        ('Can I apply with Class 12 predicted marks?', 'Many universities allow conditional applications, but enrolment requires the final result before the visa stage.'),
        ('Is a 4-year B.Tech enough for a Master\u2019s?', 'Yes, a 4-year Indian engineering degree comfortably meets entry requirements for most Italian Master\u2019s programmes.'),
        ('Are Indian marks converted?', 'Yes, universities convert percentages to Italian grades during document review.'),
    ],
)

PAGES['university-cimea'] = page(
    'Universitaly & CIMEA Legalisation: Indian Student Guide',
    'How Universitaly pre-enrolment, CIMEA statements of comparability and document legalisation work for Indian students, with a clear checklist.',
    '<em>Universitaly</em> &amp; CIMEA legalisation',
    'Two systems decide whether your application becomes a visa: the Ministry\u2019s Universitaly portal and CIMEA, which evaluates foreign qualifications. Here is how both work.',
    [('Universitaly', 'Mandatory'), ('CIMEA', 'Qualification check'), ('Documents', 'Legalised + translated'), ('Time', '4\u20138 weeks')],
    [
        sec('What Universitaly does',
            'Universitaly is the Italian Ministry\u2019s portal where non-EU students living abroad submit their <strong>pre-enrolment request</strong>. The university validates it, and the consulate uses it to issue your Type D student visa. Skipping it is the most common reason visas are refused.'),
        sec('What CIMEA does',
            'CIMEA is the Italian ENIC-NARIC centre. It issues <strong>statements of comparability and verification</strong> that confirm your Indian qualification is genuine and equivalent. Some universities require it, others verify documents themselves.',
            table('Typical document set', ['Document', 'Requirement'],
                  ['Class 10 &amp; 12 marksheets', 'Attested, translated if requested'],
                  ['Degree and transcripts (Master\u2019s)', 'Apostilled by MEA and translated'],
                  ['Passport', 'Valid for at least the study period'],
                  ['English proficiency', 'IELTS / TOEFL / Duolingo'],
                  ['Statement of comparability', 'From CIMEA or Declaration of Value'])),
        sec('How we support you', 'EuroMiles handles Universitaly accounts, uploads and CIMEA submissions. See [[cimea-certificates]] and [[university-portal-filing]].'),
    ],
    [
        ('What is a Declaration of Value?', 'It is an embassy-issued document stating the value of your foreign qualification. Many universities now accept CIMEA statements in its place.'),
        ('Is MEA apostille needed?', 'Yes for many degree documents. India is a Hague Convention member, so an apostille is accepted by Italy.'),
    ],
)

PAGES['entrance-exams'] = page(
    'Italy Entrance Exams: IMAT, TOLC & TIL Explained',
    'Complete guide to Italian entrance tests for Indian students: IMAT for medicine, TOLC for engineering and business, TIL, SAT and portfolio assessments.',
    'Entrance exams: <em>IMAT, TOLC &amp; TIL</em>',
    'Many Italian degrees admit students through a test, not just marks. Know which exam your programme needs and how to prepare for it.',
    [('Medicine', 'National test / semester filter'), ('Engineering', 'TOLC-I / TIL-I / TOL'), ('Business', 'TOLC-E / SAT / GMAT'), ('Prep time', '3\u20136 months')],
    [
        sec('The main tests',
            table('Entrance tests by field', ['Field', 'Common test', 'What it checks'],
                  ['Medicine &amp; Surgery (English)', 'National ministry admission system', 'Biology, chemistry, physics, maths, logic'],
                  ['Engineering', 'TOLC-I, TIL-I, university tests', 'Maths, logic, reading, physics'],
                  ['Economics / Business', 'TOLC-E, SAT, GMAT', 'Maths, logic, English'],
                  ['Architecture &amp; Design', 'TOLC-A or portfolio', 'Spatial reasoning, creativity'],
                  ['Sciences', 'TOLC-S, TOLC-B', 'Maths, biology, chemistry'])),
        note('Medicine rules are changing', 'Italy reformed medicine admissions from 2025/26. Seat allocation and test format must be confirmed each cycle, and our team tracks Ministry notices before advising families.'),
        sec('Preparing well',
            ul('Take official sample papers early.', 'Use timed practice for logical reasoning.', 'Book test dates early; international test centres in India fill up fast.'),
            'See [[entrance-exam-prep]] and [[entrance-exam-guidance]] for our coaching approach.'),
    ],
    [
        ('Can I give TOLC from India?', 'Yes, CISIA runs remote and test-centre TOLC sessions for international students.'),
        ('Is the test mandatory for all programmes?', 'No. Many master\u2019s programmes admit by document review and interview.'),
    ],
)

PAGES['accommodation'] = page(
    'Cost of Living in Italy for Indian Students (2027)',
    'Monthly cost of living and accommodation in Milan, Rome, Bologna, Turin and Padua for Indian students, with rent, food and transport budgets.',
    'Cost of living &amp; <em>accommodation</em> in Italy',
    'A realistic monthly budget in Italy ranges from \u20ac700 to \u20ac1,200. Rent decides most of that, and the city you choose decides the rent.',
    [('Budget range', '\u20ac700\u2013\u20ac1,200/mo'), ('Visa minimum', '\u2248 \u20ac7,000/yr'), ('Cheapest cities', 'Turin, Padua'), ('Costliest', 'Milan')],
    [
        sec('City-wise monthly budgets',
            table('Estimated monthly cost per student (EUR)', ['City', 'Shared room', 'Food &amp; transport', 'Total'],
                  ['Milan', '\u20ac500\u2013\u20ac800', '\u20ac300\u2013\u20ac400', '\u20ac850\u2013\u20ac1,200'],
                  ['Rome', '\u20ac400\u2013\u20ac700', '\u20ac280\u2013\u20ac380', '\u20ac750\u2013\u20ac1,100'],
                  ['Bologna', '\u20ac400\u2013\u20ac600', '\u20ac250\u2013\u20ac350', '\u20ac700\u2013\u20ac1,000'],
                  ['Turin', '\u20ac300\u2013\u20ac500', '\u20ac250\u2013\u20ac350', '\u20ac600\u2013\u20ac900'],
                  ['Padua', '\u20ac350\u2013\u20ac550', '\u20ac250\u2013\u20ac350', '\u20ac650\u2013\u20ac950']),
            'Figures are indicative averages for a single student. Rents rise at the start of each academic year, so booking early saves money.'),
        sec('Housing options',
            cards(('University and DSU residences', 'Cheapest option, allocated by merit and income. Apply early.'),
                  ('Private student residences', 'Furnished, bills included, easier for new arrivals.'),
                  ('Shared apartments', 'Most popular after the first semester. Needs a rental contract and deposit.')),
            'Our [[student-accommodation|accommodation team]] helps with verified listings so you avoid scams.'),
    ],
    [
        ('How much money should I show for the visa?', 'The visa requires proof of about \u20ac7,000 per year (confirmed annually). See [[financial-dossier]].'),
        ('Is food expensive?', 'Cooking at home is affordable; university canteens charge around \u20ac3\u2013\u20ac5 per meal.'),
    ],
)

PAGES['part-time-work'] = page(
    'Part-Time Jobs for Students in Italy: 20-Hour Rule',
    'Student work rules in Italy: 20 hours per week, 1,040 hours per year, permitted jobs, wages and tax for Indian students.',
    'Part-time jobs &amp; the <em>20-hour rule</em>',
    'With a valid student permit you can work up to 20 hours per week. Here is what you can earn, where to look and the rules to follow.',
    [('Weekly limit', '20 hours'), ('Annual limit', '1,040 hours'), ('Typical wage', '\u20ac7\u2013\u20ac12/hr'), ('Tax', 'IRPEF + codice fiscale')],
    [
        sec('The rules in plain language',
            'A student residence permit allows employment for up to <strong>20 hours per week, capped at 1,040 hours in a year</strong>. You need a codice fiscale and a written contract. Working more than allowed can put your permit at risk.'),
        sec('Where students typically work',
            ul('Cafes, restaurants and hotels (English-speaking roles are common in Milan, Rome, Florence).', 'University tutoring, library or admin roles (150-hour programme).', 'Delivery and retail.', 'Remote freelance work (declare income correctly).'),
            note('Realistic expectation', 'Part-time income helps with groceries and extras. It should not be your main funding plan, because visa and scholarship rules still require proof of means.')),
    ],
    [('Can I work in my first semester?', 'Yes, once you have your permit receipt and codice fiscale.'), ('Do I pay tax?', 'Small incomes fall under low bands. Declare earnings through the CAF.')],
)

PAGES['health-insurance'] = page(
    'Student Health Insurance in Italy: SSN & Private Cover',
    'How Indian students get health insurance in Italy: visa insurance, SSN registration for about \u20ac150, private plans and what they cover.',
    'Student <em>health insurance</em> (SSN)',
    'Health cover is mandatory for the visa and for your permit. Registering with the national health service is affordable and covers most needs.',
    [('Visa cover', '\u20ac30,000 minimum'), ('SSN fee', '\u2248 \u20ac150/yr'), ('Valid for', 'Calendar year'), ('Register at', 'ASL office')],
    [
        sec('Two stages of insurance',
            steps(('Before the visa', 'Buy a travel/health policy covering emergency treatment and repatriation with at least \u20ac30,000 cover for the first months.'),
                  ('After arrival', 'Register for the Servizio Sanitario Nazionale (SSN) at the local ASL with your permit receipt and codice fiscale.'))),
        sec('What SSN covers',
            ul('GP and specialist visits at low or no cost.', 'Hospital care and emergency treatment.', 'Subsidised medicines (small co-pay).'),
            'Many students keep a private plan for dentistry and faster appointments.'),
    ],
    [('Is SSN mandatory?', 'Either SSN or an equivalent private policy is required for your permit.'), ('Does it cover family?', 'No, each student registers individually.')],
)

PAGES['study-faqs'] = page(
    'Study in Italy FAQs for Indian Students & Parents',
    'Answers to the most common questions from Indian students and parents about studying in Italy: costs, visa, scholarships, safety, work and jobs.',
    'Study in Italy: <em>FAQs</em> for Indian families',
    'Parents and students ask the same practical questions every year. Here are straight answers from our Italy-only counsellors.',
    None,
    [sec('Costs, safety and daily life', 'Quick answers to the most searched questions. Open any question below for details. For anything personal, [[free-assessment|talk to a counsellor]].')],
    [
        ('Is Italy safe for Indian students?', 'Italy is generally safe, with a large Indian student community in Milan, Bologna, Rome and Padua. Normal city precautions apply.'),
        ('Will I find Indian food?', 'Yes. Major cities have Indian grocery stores and restaurants, and many students cook at home.'),
        ('Can I study without IELTS?', 'Some universities accept Duolingo or a school English certificate, but IELTS broadens options.'),
        ('How much money do I need for the visa?', 'About \u20ac7,000 per year in proven funds, as revised each year.'),
        ('Can I switch courses later?', 'Within the same university, sometimes. Changing visa category requires approval.'),
        ('Do Indian banks give education loans for Italy?', 'Yes, many banks including SBI, HDFC Credila and Avanse finance Italian degrees.'),
        ('What is the cost of EuroMiles services?', 'Your first assessment is free, and our fee structure is published on [[transparent-fees]].'),
    ],
    related=['application-guide', 'study-scholarships', 'accommodation', 'financial-dossier', 'eligibility-criteria', 'part-time-work'],
)
