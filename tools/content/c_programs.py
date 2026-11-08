from _h import *

PAGES = {}
HUBS = {}

HUBS['programs'] = dict(
    seo='Programmes in Italy: Bachelor\u2019s, Master\u2019s, PhD | EuroMiles',
    desc='Explore English-taught bachelor\u2019s, master\u2019s, PhD and medicine programmes in Italy for Indian students, with entry rules, fees and career outcomes.',
    h1='Programmes that <em>open doors</em> in Italy',
    lede='From a 3-year Bachelor\u2019s to a 6-year Medicine degree and funded PhDs, Italy offers every level of study, many of them in English and at public-university prices.',
    facts=[('Bachelor\u2019s', '3 years'), ('Master\u2019s', '2 years'), ('Medicine', '6 years'), ('PhD', '3 years, funded')],
    sections=[
        sec('Choose your level',
            cards(('Bachelor\u2019s (Laurea)', 'After Class 12. See [[bachelors-degrees]].'),
                  ('Master\u2019s (Laurea Magistrale)', 'After a 3\u20134 year degree. See [[masters-degrees]].'),
                  ('PhD &amp; research', 'Funded doctoral positions. See [[research-phd]].'),
                  ('Single-cycle Medicine', 'A 6-year integrated degree. See [[single-cycle-medicine]].'))),
        sec('Choose your field',
            ul('[[medicine-and-surgery|Medicine &amp; Surgery]]', '[[engineering-and-ai|Engineering &amp; AI]]', '[[architecture-and-design|Architecture &amp; Design]]', '[[business-finance-economics|Business, Finance &amp; Economics]]', '[[fashion-design|Fashion &amp; Design]]')),
        sec('Find your match', 'Use the [[program-finder|Program Finder]] or read about [[low-tuition-programs]] and [[dual-european-degrees]].'),
    ],
    faq=[('Do I need Italian for English-taught programmes?', 'No for admission, but learning it improves daily life and job prospects.'), ('Are English-taught degrees recognised?', 'Yes, they carry the same legal value as Italian-taught degrees.')],
    cta=('Not sure which programme fits?', 'Our counsellors will match your marks, goals and budget with the right Italian degree.'),
)

PAGES['bachelors-degrees'] = page(
    'Bachelor\u2019s Degrees in Italy for Indian Students',
    'Bachelor\u2019s (Laurea) in Italy after Class 12: 3-year duration, English-taught options, entry tests, fees and scholarships for Indian students.',
    'Bachelor\u2019s <em>degrees</em> in Italy',
    'Italy\u2019s Laurea is a three-year undergraduate degree that follows Class 12 and leads to a recognised European qualification.',
    [('Duration', '3 years'), ('ECTS credits', '180'), ('Entry', 'Class 12 + test'), ('Tuition', '\u20ac156\u2013\u20ac4,000')],
    [
        sec('How it works',
            'Italy\u2019s Bachelor\u2019s requires <strong>180 ECTS credits</strong>. Many courses mix lectures, labs and a final project. English-taught options exist in engineering, economics, computer science, design and life sciences.'),
        sec('Admission routes',
            ul('<strong>Test-based:</strong> TOLC, TIL, SAT or an in-house test.', '<strong>Document-based:</strong> Class 12 score and English proficiency.', '<strong>Portfolio-based:</strong> architecture, design and arts.')),
        sec('After your Bachelor\u2019s', 'Move into a [[masters-degrees|Master\u2019s]] in Italy or Europe, or apply for jobs with the [[post-study-work-visa|post-study permit]].'),
    ],
    [('Can I apply after Class 12 Commerce or Arts?', 'Yes, for economics, humanities and some design programmes. Science stream is required for engineering and medicine.'), ('How many marks are needed?', 'Most programmes expect 60\u201375% or higher, with tests deciding ranking.')],
    related=['eligibility-criteria', 'entrance-exams', 'foundation-year', 'english-taught-degrees', 'study-scholarships', 'application-guide'],
)

PAGES['masters-degrees'] = page(
    'Master\u2019s Degrees in Italy for Indian Graduates',
    'Master\u2019s in Italy for Indian graduates: 2-year Laurea Magistrale, English-taught options, GRE/GMAT, fees, scholarships and career outcomes.',
    'Master\u2019s <em>degrees</em> in Italy',
    'The Laurea Magistrale is a two-year postgraduate degree that builds on your Bachelor\u2019s and is among Europe\u2019s best-value master\u2019s routes.',
    [('Duration', '2 years'), ('ECTS credits', '120'), ('Entry', 'Bachelor\u2019s + English'), ('Tuition', '\u20ac156\u2013\u20ac4,000')],
    [
        sec('Who can apply',
            ul('Graduates with a 3-year or 4-year bachelor\u2019s degree in a relevant field.', 'Students in their final year (conditional offers).', 'Candidates with an IELTS 6.0+ or equivalent.')),
        sec('Popular master\u2019s fields',
            table('In-demand master\u2019s programmes', ['Field', 'Examples', 'Where'],
                  ['Engineering', 'Mechanical, Aerospace, Electronics', 'Polimi, Polito, Bologna'],
                  ['Computing &amp; AI', 'Data Science, Cybersecurity, AI', 'Sapienza, Padua, Trento'],
                  ['Business', 'Finance, Marketing, Management', 'Bocconi, Bologna, Padua'],
                  ['Design', 'Product, Fashion, Interior', 'Polimi, IUAV, Marangoni'])),
        sec('Funding', 'Regional DSU and merit awards help graduates too. See [[study-scholarships]].'),
    ],
    [('Is work experience required?', 'Not for most programmes, though it helps for management degrees.'), ('Can I switch field?', 'Sometimes, if you meet prerequisite credits. Check each course.')],
    related=['eligibility-criteria', 'research-phd', 'masters-degrees', 'engineering-and-ai', 'business-finance-economics', 'post-study-work-visa'],
)

PAGES['research-phd'] = page(
    'PhD & Research in Italy: Funded Positions for Indians',
    'Study a funded PhD in Italy: 3-year doctoral positions, scholarship stipends, research proposals and how Indian graduates can apply.',
    'Research &amp; <em>PhD</em> in Italy',
    'Italian doctoral programmes pay a monthly stipend, require no tuition and give access to some of Europe\u2019s best labs.',
    [('Duration', '3 years'), ('Stipend', '\u2248 \u20ac1,200+/month'), ('Tuition', 'Waived'), ('Entry', 'Master\u2019s + proposal')],
    [
        sec('How a PhD works in Italy',
            'Universities announce PhD calls (bandi) once a year, usually between spring and autumn. Selection involves a CV review, a research proposal and an interview. Funded positions are limited, so a strong proposal and referee letters matter.'),
        sec('What you need',
            ul('Master\u2019s degree with a strong academic record.', 'A focused research proposal.', 'Two academic references.', 'English proficiency certificate.')),
        sec('Starting early', 'Contact potential supervisors in your field months before the call opens. We help you identify suitable labs.'),
    ],
    [('Do PhD students receive a salary?', 'They receive a stipend, which is exempt from tuition fees.'), ('Is Italian required?', 'Not for most research labs working in English.')],
    related=['masters-degrees', 'post-study-work-visa', 'engineering-and-ai', 'top-ranked-universities', 'university-merit-awards', 'application-guide'],
)

PAGES['single-cycle-medicine'] = page(
    'Single-Cycle Medicine Degree in Italy for Indians',
    'Single-cycle degrees in Italy: 6-year Medicine, Dentistry, Pharmacy, Law and Architecture. Entry rules, fees and pathway for Indian students.',
    'Single-cycle <em>Medicine</em> &amp; integrated degrees',
    'In Italy, Medicine, Dentistry, Pharmacy, Veterinary and Architecture are single-cycle degrees: one continuous course without a separate Bachelor\u2019s and Master\u2019s.',
    [('Medicine duration', '6 years'), ('Dentistry', '6 years'), ('Pharmacy', '5 years'), ('Entry', 'National process')],
    [
        sec('What single-cycle means',
            'Instead of two cycles, you study one long programme and graduate with a Master\u2019s-level qualification (Laurea Magistrale a ciclo unico). This is the route to becoming a doctor, dentist or pharmacist.'),
        warn('Medicine entry is changing', 'The Ministry reformed medical admissions from 2025/26. We confirm current rules for each intake before advising families.'),
        sec('Preparing', 'Strong PCB grades, English proficiency and early entrance-test prep are essential. See [[entrance-exam-prep]].'),
    ],
    [('Is this the same as MBBS?', 'It is a comparable medical degree. Indian graduates must follow NMC rules for practice in India.')],
    related=['medicine-and-surgery', 'english-medical-universities', 'entrance-exams', 'entrance-exam-prep', 'foundation-year', 'accommodation'],
)

PAGES['foundation-year'] = page(
    'Foundation Year in Italy for Indian Students',
    'Italy foundation year for Indian students with 10+2 or 10+3: how it works, entry, tuition, universities, and pathway into bachelor\u2019s degrees.',
    'Foundation <em>year</em> in Italy',
    'A foundation year bridges the gap between Indian schooling and an Italian Bachelor\u2019s degree, and often includes Italian language training.',
    [('Duration', '1 year'), ('Entry', 'Class 12 or diploma'), ('Language', 'English or Italian'), ('Next step', 'Bachelor\u2019s')],
    [
        sec('Who needs it',
            ul('Students with a 10+3 diploma.', 'Candidates with lower Class 12 marks.', 'Students who want to strengthen Italian or science before a degree.')),
        sec('What you study',
            'Courses cover academic English, Italian, mathematics and subject basics. Successful completion can give direct access to partner universities.'),
    ],
    [('Is a foundation year compulsory?', 'No. Most students with Class 12 go directly to a Bachelor\u2019s.'), ('Does it cost more?', 'Private foundation programmes can cost \u20ac4,000\u2013\u20ac8,000.')],
    related=['eligibility-criteria', 'bachelors-degrees', 'single-cycle-medicine', 'application-guide', 'study-programs', 'accommodation'],
)

PAGES['medicine-and-surgery'] = page(
    'Study Medicine & Surgery in Italy | Indian Students',
    'Study Medicine and Surgery in Italy: English-taught MD programmes, fees, admission, NMC rules and career outcomes for Indian students.',
    '<em>Medicine</em> &amp; Surgery in Italy',
    'Italian medical schools combine low tuition with strong clinical training, but entry is competitive and rules are evolving.',
    [('Duration', '6 years'), ('Teaching', 'English options'), ('Tuition', '\u20ac156\u2013\u20ac4,000'), ('Residency', 'Italy / EU / India')],
    [
        sec('Why Italy',
            ul('Public tuition is a fraction of private medical colleges in India.', 'Clinical exposure from year three.', 'EU-recognised degree.')),
        sec('What to plan',
            ul('Class 12 PCB with strong marks.', 'English proficiency certificate.', 'Early entry-test preparation.', 'Learning Italian for hospital rotations.')),
        note('Return to India', 'Graduates must clear NMC screening before practising in India. We explain current rules during counselling.'),
    ],
    [('How difficult is entry?', 'It is highly competitive. Applying to multiple universities improves your chances.')],
    related=['single-cycle-medicine', 'english-medical-universities', 'entrance-exams', 'entrance-exam-prep', 'accommodation', 'study-scholarships'],
)

PAGES['engineering-and-ai'] = page(
    'Engineering & AI Degrees in Italy | EuroMiles',
    'Study engineering, AI, robotics and data science in Italy: top universities, English-taught degrees, fees and career outcomes for Indians.',
    'Engineering &amp; <em>AI</em> in Italy',
    'Italy is home to world-leading engineering schools and an industrial base spanning automotive, aerospace, robotics and energy.',
    [('Top schools', 'Polimi, Polito, Bologna'), ('Duration', '3 + 2 years'), ('Tuition', '\u20ac900\u2013\u20ac4,000'), ('Entry', 'TOLC / TIL / merit')],
    [
        sec('Popular specialisations',
            ul('Mechanical and Automotive Engineering', 'Aerospace and Space Engineering', 'Computer Science, AI and Data Science', 'Electronics and Robotics', 'Energy and Environmental Engineering')),
        sec('Careers',
            'Italian industry hires engineers in Ferrari, Leonardo, Pirelli, Stellantis, ENI and a thriving start-up scene. Graduates can also join European firms using their EU-recognised degree.'),
    ],
    [('Is Italian needed for jobs?', 'English is enough for many tech roles, though Italian opens more opportunities.')],
    related=['technical-universities', 'politecnico-milano', 'politecnico-torino', 'masters-degrees', 'entrance-exams', 'post-study-work-visa'],
)

PAGES['architecture-and-design'] = page(
    'Architecture & Design Degrees in Italy | Indian Students',
    'Study architecture, interior and product design in Italy: Politecnico di Milano, Turin, IUAV, portfolio tips and fees for Indian students.',
    'Architecture &amp; <em>Design</em> in Italy',
    'Italy has shaped global architecture and design for centuries, and its universities remain world leaders.',
    [('Top schools', 'Polimi, IUAV, Turin'), ('Duration', '3 + 2 years'), ('Entry', 'Portfolio / test'), ('Tuition', '\u20ac900\u2013\u20ac4,000')],
    [
        sec('What you can study',
            ul('Architecture and Building Engineering', 'Interior and Spatial Design', 'Product and Industrial Design', 'Urban Planning and Landscape')),
        sec('Preparing your application',
            'Strong portfolios, creative tests and English proficiency decide entry. Start building your portfolio at least six months before applying.'),
    ],
    [('Is a portfolio always required?', 'It depends on the university. Some use a test, others a portfolio review or both.')],
    related=['technical-universities', 'politecnico-milano', 'fashion-design', 'universities-milan', 'bachelors-degrees', 'entrance-exams'],
)

PAGES['business-finance-economics'] = page(
    'Business, Finance & Economics Degrees in Italy',
    'Study business, finance and economics in Italy: Bocconi, Bologna, Padua, entry tests, fees, scholarships and careers for Indian students.',
    'Business, Finance &amp; <em>Economics</em>',
    'Milan is a European finance hub, and Italian business schools offer degrees with strong industry links in luxury, banking and consulting.',
    [('Top schools', 'Bocconi, Bologna, Padua'), ('Tests', 'TOLC-E, GMAT, SAT'), ('Duration', '3 + 2 years'), ('Tuition', '\u20ac900\u2013\u20ac17,000')],
    [
        sec('Popular programmes',
            ul('International Economics and Management', 'Finance and Banking', 'Marketing and Luxury Management', 'Business Analytics and Data')),
        sec('Value comparison', 'Public universities cost far less than private ones with similar curricula. See [[business-universities]] for details.'),
    ],
    [('Do I need maths?', 'Most programmes require maths at Class 12 level.')],
    related=['business-universities', 'universities-milan', 'university-bologna', 'masters-degrees', 'study-scholarships', 'entrance-exams'],
)

PAGES['fashion-design'] = page(
    'Fashion & Design Degrees in Italy | Indian Students',
    'Study fashion design, luxury management and textiles in Italy: Milan, Florence, Polimoda, Marangoni, fees and portfolio tips.',
    '<em>Fashion</em> &amp; Design in Italy',
    'Italy is the home of Made in Italy luxury. Fashion students learn in Milan and Florence, close to the world\u2019s leading houses.',
    [('Top cities', 'Milan, Florence'), ('Schools', 'Polimoda, Marangoni, NABA'), ('Tuition', '\u20ac8,000\u2013\u20ac20,000 private'), ('Entry', 'Portfolio + interview')],
    [
        sec('Pathways',
            ul('Fashion Design and Textile Design', 'Fashion Business and Luxury Management', 'Accessories and Footwear', 'Fashion Communication')),
        sec('Costs and funding',
            'Private fashion schools cost significantly more than public universities. Public options such as Politecnico di Milano offer design programmes at lower cost. See [[low-tuition-programs]].'),
    ],
    [('Is a portfolio compulsory?', 'Yes, for most design and fashion programmes.')],
    related=['architecture-and-design', 'universities-milan', 'universities-florence', 'masters-degrees', 'university-merit-awards', 'study-programs'],
)

PAGES['english-taught-degrees'] = page(
    '500+ English-Taught Degrees in Italy | Full Guide',
    'Full guide to 500+ English-taught degrees in Italy: bachelor\u2019s, master\u2019s, medicine and doctoral programmes with entry requirements.',
    '500+ <em>English-taught</em> degrees',
    'A broad list of programmes where all lectures, exams and theses are in English.',
    [('Total programmes', '500+'), ('Bachelor\u2019s', '100+'), ('Master\u2019s', '350+'), ('Language', 'English')],
    [
        sec('Where to find them',
            ul('University websites: filter by \u201cEnglish\u201d.', 'Universitaly portal course search.', 'EuroMiles Program Finder (see [[program-finder]]).')),
        sec('Entry', 'You will usually need IELTS 5.5\u20136.5 or an accepted equivalent. See [[study-programs]].'),
    ],
    [('Do I need to learn Italian anyway?', 'Not for admission, but it greatly improves daily life.')],
    related=['bachelors-degrees', 'masters-degrees', 'low-tuition-programs', 'program-finder', 'application-guide', 'study-scholarships'],
)

PAGES['low-tuition-programs'] = page(
    'Low-Tuition Programmes in Italy | Under \u20ac2,000',
    'Find low-tuition and affordable degrees in Italy under \u20ac2,000 per year, with scholarships that reduce costs further for Indian students.',
    '<em>Low-tuition</em> programmes in Italy',
    'Many public universities in Italy charge under \u20ac2,000 a year. Here is how to find and fund them.',
    [('Typical fee', '\u20ac156\u2013\u20ac2,000'), ('Cheapest regions', 'South &amp; Centre'), ('With DSU', 'Often \u20ac0'), ('Extra costs', 'Rent, food')],
    [
        sec('Where to look',
            ul('Universities in southern regions often have lower fees.', 'Public universities with income-based bands.', 'Programmes with regional scholarships.')),
        sec('Beware hidden costs', 'Tuition is only part of the budget. See [[accommodation]] for total costs.'),
    ],
    [('Is low tuition lower quality?', 'No. Fees depend on public regulation, not quality.')],
    related=['study-scholarships', 'regional-tuition-waivers', 'accommodation', 'english-taught-degrees', 'study-universities', 'university-cities'],
)

PAGES['entrance-exam-prep'] = page(
    'Entrance Exam Prep for Italy: TOLC, TIL, Medicine',
    'Prepare for Italian entrance exams from India: TOLC, TIL, SAT and medicine tests with study plans, mock tests and expert coaching.',
    'Entrance exam <em>preparation</em>',
    'Entrance tests decide admission at many Italian universities. A structured prep plan can improve your ranking significantly.',
    [('Prep window', '3\u20136 months'), ('Format', 'Online mock tests'), ('Subjects', 'Maths, logic, science'), ('Mode', 'Live + self-paced')],
    [
        sec('A 12-week study plan',
            steps(('Weeks 1\u20134', 'Revise core maths, physics and chemistry concepts.'), ('Weeks 5\u20138', 'Practice logic and reading with timed sections.'), ('Weeks 9\u201312', 'Take full mock tests and review mistakes.'))),
        sec('Support', 'Our [[entrance-exam-guidance|guidance programme]] matches you with the right test and plan. See [[entrance-exams]] for test formats.'),
    ],
    [('Can I prepare while studying for boards?', 'Yes, with a balanced plan. Start early.')],
    related=['entrance-exams', 'single-cycle-medicine', 'engineering-and-ai', 'application-guide', 'bachelors-degrees', 'foundation-year'],
)

PAGES['dual-european-degrees'] = page(
    'Dual & Joint European Degrees from Italy | EuroMiles',
    'Dual-degree and Erasmus Mundus joint master\u2019s from Italy: study in two or more European countries and earn double qualifications.',
    'Dual &amp; <em>European</em> degrees',
    'Some Italian programmes let you study in two countries and graduate with two degrees, or one joint degree recognised across Europe.',
    [('Duration', '1\u20132 years extra'), ('Countries', '2 or more'), ('Funding', 'Erasmus Mundus'), ('Entry', 'Competitive')],
    [
        sec('Types',
            ul('<strong>Double degree:</strong> two qualifications from two universities.', '<strong>Joint degree:</strong> one qualification issued by a consortium.', '<strong>Erasmus Mundus:</strong> scholarship-backed joint master\u2019s.')),
        sec('Why choose it', 'Broader networks, mobility and stronger CVs. Our team can identify programmes that fit your field. See [[masters-degrees]].'),
    ],
    [('Are scholarships available?', 'Erasmus Mundus offers full scholarships to a small number of applicants.')],
    related=['masters-degrees', 'research-phd', 'university-merit-awards', 'top-ranked-universities', 'english-taught-degrees', 'program-finder'],
)

PAGES['program-finder'] = page(
    'Program Finder Tool: Search English-Taught Degrees in Italy',
    'Use the EuroMiles Program Finder to match Italian degrees to your field, budget, English score and scholarship goals.',
    'Program <em>Finder</em> tool',
    'Tell us what you want to study and what you can spend. We will shortlist matching programmes.',
    None,
    [
        sec('How it works',
            steps(('Choose field and level', 'Bachelor\u2019s, Master\u2019s or Medicine.'), ('Share budget and marks', 'We filter by fees and entry rules.'), ('Receive your list', 'A counsellor sends a shortlist with deadlines.'))),
        sec('Explore on your own', 'Start with [[english-taught-degrees]] or [[low-tuition-programs]].'),
    ],
    [('Is it free?', 'Yes, it is part of our free profile assessment.')],
)
