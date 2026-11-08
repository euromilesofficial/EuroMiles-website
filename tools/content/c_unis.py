from _h import *

PAGES = {}
HUBS = {}

HUBS['universities'] = dict(
    seo='Best Universities in Italy for Indian Students | EuroMiles',
    desc='Explore top Italian universities for Indian students: Politecnico di Milano, Bologna, Sapienza, Turin and Padua. Compare fees, programmes and cities.',
    h1='Italian <em>universities</em> worth your shortlist',
    lede='Italy has more than 90 universities. We help you pick the handful that match your marks, budget and career goal, and cut through the noise of rankings.',
    facts=[('Universities in Italy', '90+'), ('Oldest university', 'Bologna, 1088'), ('Top city hubs', 'Milan, Rome, Bologna'), ('Best for', 'STEM, design, medicine')],
    sections=[
        sec('How to read Italian university options',
            'Italian universities fall into three groups: <strong>large comprehensive universities</strong> (Bologna, Sapienza, Padua), <strong>polytechnics</strong> (Milan, Turin) that specialise in engineering, architecture and design, and <strong>private specialists</strong> such as Bocconi in business. Each suits a different student.',
            cards(('By ranking', 'See [[top-ranked-universities]] for the global tables and what they really measure.'),
                  ('By subject', 'Compare [[technical-universities]], [[english-medical-universities]] and [[business-universities]].'),
                  ('By city', 'Rent, culture and job markets differ. Read [[university-cities]].'))),
        sec('Featured universities',
            ul('[[politecnico-milano|Politecnico di Milano]]: engineering, architecture and design.',
               '[[university-bologna|University of Bologna]]: the world\u2019s oldest, broad and affordable.',
               '[[sapienza-rome|Sapienza University of Rome]]: Europe\u2019s largest by enrolment.',
               '[[politecnico-torino|Politecnico di Torino]]: engineering, automotive and AI.',
               '[[university-padua|University of Padua]]: science, medicine and a great student city.')),
        sec('Not sure which fits?', 'Use our [[university-match-tool|University Match Tool]] or [[free-assessment|book a free assessment]].'),
    ],
    faq=[
        ('How many universities should I apply to?', 'Most students apply to four to six, mixing reach, target and safe options.'),
        ('Do rankings matter for jobs?', 'Rankings help for employer recognition, but programme fit, city and internship access often matter more.'),
    ],
    cta=('Build your shortlist with an expert', 'We compare programmes, fees, scholarship odds and city costs for your exact profile.'),
)

PAGES['top-ranked-universities'] = page(
    'Top QS-Ranked Universities in Italy for Indian Students',
    'Italy\u2019s highest-ranked universities in QS and THE tables, with what each is best known for and how Indian students can get in.',
    'Top <em>QS-ranked</em> universities in Italy',
    'Politecnico di Milano, Bologna, Sapienza and Padua are consistently Italy\u2019s best performers in QS World University Rankings. Here is how to use rankings wisely.',
    [('Top Italian rank', 'Politecnico di Milano'), ('World-top-200 count', '8+ Italian universities'), ('Best subjects', 'Engineering, Design, Arch'), ('Source', 'QS &amp; THE')],
    [
        sec('Italy\u2019s ranking leaders',
            table('Leading Italian universities', ['University', 'City', 'Known for'],
                  ['Politecnico di Milano', 'Milan', 'Engineering, architecture, design'],
                  ['University of Bologna', 'Bologna', 'Broad research, humanities, business'],
                  ['Sapienza University of Rome', 'Rome', 'Physics, classics, medicine, engineering'],
                  ['University of Padua', 'Padua', 'Science, medicine, psychology'],
                  ['Politecnico di Torino', 'Turin', 'Engineering, automotive, ICT'],
                  ['University of Milan', 'Milan', 'Medicine, life sciences, law']),
            'Positions change every year. Check the latest QS and THE tables before applying.'),
        sec('Beyond the number',
            ul('Subject rankings often matter more than overall rank.', 'Class size, internship access and city living costs affect your experience.', 'Entry difficulty and scholarship access vary widely among top-ranked options.')),
        sec('How to shortlist', 'Combine ranking, programme fit and affordability. Use [[university-match-tool]] or read [[university-directory]].'),
    ],
    [('Which is the best university in Italy?', 'It depends on field: Polimi leads engineering and design, Bologna is strongest overall for breadth, Bocconi for business.'), ('Are rankings reliable?', 'They are a useful guide, but not a guarantee of fit or outcome.')],
)

PAGES['technical-universities'] = page(
    'Technical Universities & Polytechnics in Italy',
    'Compare Politecnico di Milano, Politecnico di Torino and other technical universities in Italy for engineering, architecture and AI degrees.',
    'Technical universities &amp; <em>polytechnics</em>',
    'Italy\u2019s polytechnics are the first stop for Indian students who want engineering, architecture, design, data science and AI in English.',
    [('Core polytechnics', 'Milan, Turin, Bari'), ('Language', 'Many English-taught'), ('Entry', 'Test or merit'), ('Best for', 'Engineering, design')],
    [
        sec('The leading technical institutions',
            cards(('Politecnico di Milano', 'Italy\u2019s top technical university, strong in industrial design and automotive.'),
                  ('Politecnico di Torino', 'Deep ties with Stellantis, Leonardo and Italian industry.'),
                  ('Politecnico di Bari', 'Affordable south Italian option with mechanical and electronics programmes.'),
                  ('Universit\u00e0 di Bologna Engineering', 'Broad range of English MSc programmes.'))),
        sec('What Indian engineers should know',
            ul('B.Tech graduates are well placed for Master\u2019s admissions.', 'Entry tests and portfolio are required for some Bachelor\u2019s routes.', 'Projects and industry internships are built into the course.')),
    ],
    [('Is a polytechnic better than a normal university?', 'Not better, just more specialised. Choose by programme and career goal.')],
    related=['politecnico-milano', 'politecnico-torino', 'engineering-and-ai', 'architecture-and-design', 'masters-degrees', 'entrance-exams'],
)

PAGES['english-medical-universities'] = page(
    'English-Taught Medicine Universities in Italy | EuroMiles',
    'Italian universities offering English-taught Medicine and Surgery for Indian students: entry system, fees, seats and the 6-year pathway.',
    'English-taught <em>medical universities</em>',
    'Italy has a long list of public and private universities teaching Medicine and Surgery in English. Seats are limited and rules are changing, so planning early matters.',
    [('Course length', '6 years'), ('Admission', 'National process'), ('Fees', '\u20ac156\u2013\u20ac4,000 public'), ('Seats for non-EU', 'Limited quota')],
    [
        sec('Where English-taught Medicine is offered',
            ul('University of Pavia, University of Milan, Vita-Salute San Raffaele and Humanitas in Lombardy.', 'Sapienza and Tor Vergata in Rome.', 'University of Bologna, Padua and Turin.', 'Naples, Bari and other southern universities.'),
            warn('Admission reform', 'Italy updated medicine admissions from 2025/26. We confirm seat counts and test formats for each cycle before advising families.')),
        sec('What it takes',
            'Indian students need a strong Class 12 with PCB, an English certificate and a high score in the national selection process. Preparation should begin at least 12 months before the exam.'),
    ],
    [('Can I practise in India after Italian MBBS-equivalent?', 'Graduates must clear the NExT/FMGE-equivalent requirements set by the NMC. Check current rules before applying.'), ('Is Italian needed for clinical rotations?', 'Yes, hospital training uses Italian, so students learn it during the course.')],
    related=['single-cycle-medicine', 'medicine-and-surgery', 'entrance-exams', 'entrance-exam-prep', 'study-scholarships', 'foundation-year'],
)

PAGES['business-universities'] = page(
    'Best Business & Economics Universities in Italy',
    'Top business and economics universities in Italy for Indian students: Bocconi, Bologna, Padua, Ca\u2019 Foscari, with fees, tests and scholarships.',
    'Business &amp; <em>economics</em> universities',
    'From the private powerhouse Bocconi to affordable public options in Bologna and Padua, Italy offers strong business degrees at every price point.',
    [('Top private', 'Bocconi, LUISS'), ('Top public', 'Bologna, Padua'), ('Tests', 'TOLC-E / GMAT / SAT'), ('Best cities', 'Milan, Bologna')],
    [
        sec('Choosing between options',
            table('Business universities compared', ['University', 'Type', 'Tuition per year'],
                  ['Bocconi University', 'Private', '\u20ac14,000\u2013\u20ac17,000'],
                  ['LUISS Guido Carli', 'Private', '\u20ac10,000\u2013\u20ac12,000'],
                  ['University of Bologna', 'Public', '\u20ac156\u2013\u20ac3,500'],
                  ['University of Padua', 'Public', '\u20ac156\u2013\u20ac3,000'],
                  ['Ca\u2019 Foscari Venice', 'Public', '\u20ac156\u2013\u20ac3,000']),
            'Fees are indicative and vary by programme and year.'),
        sec('Why Indian students choose Italy for business',
            ul('Milan is one of Europe\u2019s finance and fashion capitals.', 'Strong links with luxury, automotive and design industries.', 'Lower cost than UK and USA with comparable recognition.')),
    ],
    [('Do I need GMAT?', 'Some Master\u2019s programmes ask for GMAT/GRE, others rely on a test of their own or on grades.')],
    related=['business-finance-economics', 'universities-milan', 'study-scholarships', 'masters-degrees', 'university-merit-awards', 'study-universities'],
)

PAGES['university-directory'] = page(
    'Complete A\u2013Z Directory of Italian Universities',
    'Browse an A\u2013Z directory of leading Italian universities for Indian students, grouped by city with programme strengths and English-taught availability.',
    'Complete A\u2013Z <em>university directory</em>',
    'A quick reference of major Italian universities that enrol international students, with their city and strengths.',
    None,
    [
        sec('Directory',
            table('Selected universities (alphabetical)', ['University', 'City', 'Strength'],
                  ['Bocconi University', 'Milan', 'Business, economics'],
                  ['Ca\u2019 Foscari University', 'Venice', 'Languages, economics'],
                  ['Humanitas University', 'Milan', 'Medicine'],
                  ['LUISS', 'Rome', 'Business, law'],
                  ['Politecnico di Milano', 'Milan', 'Engineering, design'],
                  ['Politecnico di Torino', 'Turin', 'Engineering'],
                  ['Sapienza University', 'Rome', 'Broad'],
                  ['University of Bologna', 'Bologna', 'Broad'],
                  ['University of Florence', 'Florence', 'Arts, architecture'],
                  ['University of Milan', 'Milan', 'Medicine, sciences'],
                  ['University of Padua', 'Padua', 'Science, medicine'],
                  ['University of Pavia', 'Pavia', 'Medicine, sciences'],
                  ['University of Trento', 'Trento', 'Computing, physics']),
            'This is a selective guide. We maintain full programme lists for every shortlisted university.'),
    ],
    [('Is every Italian university open to Indian students?', 'Most are, but English-taught availability varies. We check this for you.')],
    related=['top-ranked-universities', 'university-cities', 'program-finder', 'university-match-tool', 'study-programs', 'entrance-exams'],
)

PAGES['politecnico-milano'] = page(
    'Politecnico di Milano for Indian Students: Fees & Entry',
    'Study at Politecnico di Milano: tuition, English-taught programmes, admission tests, scholarships and campus life for Indian students.',
    'Politecnico di <em>Milano</em>',
    'Founded in 1863, Politecnico di Milano is Italy\u2019s leading technical university and a global name in engineering, architecture and design.',
    [('Founded', '1863'), ('Students', '\u2248 47,000'), ('QS rank (national)', '#1 in Italy'), ('Tuition', '\u2248 \u20ac900\u2013\u20ac4,000')],
    [
        sec('Why Polimi',
            ul('Top-ranked Italian university in QS overall and in many subject tables.', 'Wide range of English-taught Bachelor\u2019s and Master\u2019s programmes.', 'Located in Milan, Italy\u2019s industrial and fashion capital.', 'Strong employer links in automotive, aerospace and design.')),
        sec('Admissions',
            steps(('Bachelor\u2019s', 'Sit Polimi\u2019s own online test (TOL) or accepted TOLC, and a ranking decides entry.'),
                  ('Master\u2019s', 'Submit grades, transcripts and English proof. Selective programmes need a portfolio or GRE.'),
                  ('Scholarships', 'Polimi merit awards plus the Lombardy DSU scholarship. See [[study-scholarships]].'))),
        sec('Cost &amp; living', 'Expect \u20ac850\u2013\u20ac1,200 per month in Milan. See [[universities-milan]] and [[accommodation]].'),
    ],
    [('Is Polimi hard to get into?', 'Competitive, especially for design and architecture, but well-prepared Indian applicants are successful every year.'), ('Is the test mandatory?', 'For most Bachelor\u2019s programmes, yes.')],
    related=['technical-universities', 'engineering-and-ai', 'architecture-and-design', 'universities-milan', 'entrance-exams', 'masters-degrees'],
)

PAGES['university-bologna'] = page(
    'University of Bologna for Indian Students | Alma Mater',
    'The University of Bologna, founded 1088: English-taught degrees, fees, ER.GO scholarships, admissions and student life for Indian applicants.',
    'University of <em>Bologna</em>',
    'The world\u2019s oldest university in continuous operation, Bologna is a leading research institution and a student city loved by Indian students.',
    [('Founded', '1088'), ('Students', '\u2248 85,000+'), ('Scholarship body', 'ER.GO'), ('Cost', 'Medium')],
    [
        sec('What makes Bologna special',
            ul('Wide choice of English-taught Master\u2019s in business, engineering, AI and humanities.', 'Multi-campus structure with Forl\u00ec, Cesena, Ravenna and Rimini.', 'ER.GO scholarships are among Italy\u2019s most generous.', 'A walkable, student-focused city.')),
        sec('Admissions snapshot',
            'Bachelor\u2019s applicants usually apply through an academic ranking or a TOLC. Master\u2019s applicants submit documents on the Studenti Online portal. Deadlines are staggered, so check each programme.'),
    ],
    [('How much is tuition?', 'About \u20ac156 up to roughly \u20ac3,000 depending on ISEE.'), ('Is Bologna expensive?', 'Moderate. Rent is lower than in Milan.')],
    related=['universities-bologna', 'study-scholarships', 'masters-degrees', 'business-universities', 'regional-tuition-waivers', 'accommodation'],
)

PAGES['sapienza-rome'] = page(
    'Sapienza University of Rome for Indian Students',
    'Sapienza University of Rome: Europe\u2019s largest university. Fees, English-taught programmes, admissions, scholarships and Rome student life.',
    'Sapienza <em>University of Rome</em>',
    'With over 100,000 students, Sapienza is Europe\u2019s largest university and an academic leader in physics, classics, engineering and medicine.',
    [('Founded', '1303'), ('Students', '100,000+'), ('Location', 'Rome'), ('Scholarship body', 'DiSCo Lazio')],
    [
        sec('Strengths',
            ul('Top subject rankings in classics, archaeology, physics and engineering.', 'English-taught MSc in Data Science, Cybersecurity, Engineering and more.', 'Rome offers museums, government institutions and a global job market.')),
        sec('Practicalities',
            'Applications for international students are made through the university portal and Universitaly. DiSCo Lazio scholarships support eligible students.'),
    ],
    [('Is Rome affordable?', 'Rome is cheaper than Milan, though central rents can be high. Look at student-friendly neighbourhoods.')],
    related=['universities-rome', 'english-medical-universities', 'engineering-and-ai', 'regional-tuition-waivers', 'accommodation', 'masters-degrees'],
)

PAGES['politecnico-torino'] = page(
    'Politecnico di Torino for Indian Students | Fees & Entry',
    'Politecnico di Torino: English-taught engineering, architecture and design, TIL-I admission test, DSU scholarships and cost of living in Turin.',
    'Politecnico di <em>Torino</em>',
    'Turin\u2019s polytechnic combines top engineering with one of Italy\u2019s lowest costs of living and strong industry links.',
    [('Founded', '1859'), ('Students', '\u2248 38,000'), ('Scholarship body', 'EDISU Piemonte'), ('Cost', 'Low')],
    [
        sec('Why Indian students choose Turin',
            ul('Strong English-taught engineering and computer science.', 'Close ties with the automotive sector.', 'Lower rent than Milan or Rome.', 'EDISU Piemonte offers generous support.')),
        sec('Admissions',
            'Bachelor\u2019s applicants take the TIL (Test in Laboratorio) or an accepted equivalent. Master\u2019s applicants are assessed on academic record and English proficiency.'),
    ],
    [('How does it compare with Polimi?', 'Similar academic strength with lower living costs and slightly easier entry.')],
    related=['technical-universities', 'engineering-and-ai', 'universities-turin', 'entrance-exams', 'regional-tuition-waivers', 'masters-degrees'],
)

PAGES['university-padua'] = page(
    'University of Padua for Indian Students | Fees & Entry',
    'University of Padua, founded 1222: English-taught degrees, medicine, science, scholarships, tuition and living costs for Indian students.',
    'University of <em>Padua</em>',
    'Galileo taught here. Padua is a research-intensive university in a calm, affordable student city near Venice.',
    [('Founded', '1222'), ('Students', '\u2248 70,000'), ('Scholarship body', 'ESU Padova'), ('Cost', 'Low\u2013medium')],
    [
        sec('Highlights',
            ul('Top-ranked for science, medicine and psychology.', 'English-taught Bachelor\u2019s and Master\u2019s in Economics, Engineering and Data Science.', 'Venice and Verona are a short train ride away.')),
        sec('Admissions',
            'Bachelor\u2019s programmes often use a ranking or an aptitude test. Master\u2019s applicants apply on the Uniweb portal and register on Universitaly.'),
    ],
    [('Is Padua good for budget?', 'Yes, rent and food are cheaper than Milan or Bologna.')],
    related=['universities-padua', 'english-medical-universities', 'regional-tuition-waivers', 'accommodation', 'masters-degrees', 'bachelors-degrees'],
)

CITY = {
 'milan': ('Milan', 'Universities in Milan for Indian Students', 'Milan is Italy\u2019s business, fashion and design capital and home to Politecnico, Bocconi and the University of Milan.', '\u20ac850\u2013\u20ac1,200', ['Politecnico di Milano', 'Bocconi University', 'University of Milan (Statale)', 'Milano-Bicocca', 'Humanitas and San Raffaele', 'NABA, Domus, Marangoni'], 'Highest rents, strongest job market.', 'Lombardy / DSU Lombardia'),
 'rome': ('Rome', 'Universities in Rome for Indian Students', 'Rome offers Sapienza, Tor Vergata, Roma Tre and LUISS, with history, government institutions and a large international community.', '\u20ac750\u2013\u20ac1,100', ['Sapienza University', 'Tor Vergata', 'Roma Tre', 'LUISS Guido Carli', 'Campus Bio-Medico', 'John Cabot (private)'], 'Strong humanities, medicine and international relations.', 'Lazio / DiSCo'),
 'bologna': ('Bologna', 'Universities in Bologna for Indian Students', 'Bologna is Italy\u2019s classic student city, built around the world\u2019s oldest university.', '\u20ac700\u2013\u20ac1,000', ['University of Bologna', 'Bologna Business School', 'Accademia di Belle Arti'], 'Warm student life, generous scholarships.', 'Emilia-Romagna / ER.GO'),
 'turin': ('Turin', 'Universities in Turin for Indian Students', 'Turin pairs Politecnico di Torino and the University of Turin with some of the lowest living costs among big cities.', '\u20ac600\u2013\u20ac900', ['Politecnico di Torino', 'University of Turin', 'IAAD Design', 'ESCP (campus)'], 'Best value for engineering and design.', 'Piedmont / EDISU'),
 'padua': ('Padua', 'Universities in Padua for Indian Students', 'Padua is a compact, safe university town with a world-famous university and easy rail links to Venice.', '\u20ac650\u2013\u20ac950', ['University of Padua', 'Padova Business School', 'Conservatorio Pollini'], 'Calm, affordable and academically strong.', 'Veneto / ESU Padova'),
 'florence': ('Florence', 'Universities in Florence for Indian Students', 'Florence is the capital of art, architecture and fashion education in Italy.', '\u20ac750\u2013\u20ac1,100', ['University of Florence', 'Polimoda', 'Istituto Marangoni Firenze', 'Accademia di Belle Arti', 'Florence Institute of Design'], 'Best for fashion, art, restoration and architecture.', 'Tuscany / DSU Toscana'),
}
for k, (name, seo, lede, budget, unis, note_t, agency) in CITY.items():
    PAGES['universities-' + k] = page(
        seo + ' | EuroMiles',
        'Study in %s: universities, tuition, monthly costs of %s, scholarships and student life for Indian students.' % (name, budget),
        'Universities in <em>%s</em>' % name,
        lede,
        [('Monthly budget', budget), ('Scholarship body', agency.split(' / ')[1]), ('Region', agency.split(' / ')[0]), ('Highlight', note_t.split(',')[0].split('.')[0])],
        [
            sec('Where you can study in %s' % name, ul(*unis), 'Availability of English-taught programmes varies by university, so always confirm on the course page.'),
            sec('Cost &amp; lifestyle', 'Expect a monthly budget of <strong>%s</strong>. %s Our [[accommodation]] guide breaks this down further.' % (budget, note_t),
                note('Scholarships in %s' % name, 'The regional agency (%s) manages the DSU scholarship. See [[regional-tuition-waivers]].' % agency.split(' / ')[1])),
        ],
        [('Is %s a good choice for Indian students?' % name, 'Yes. %s' % note_t), ('How do I choose between cities?', 'Balance course fit, budget, scholarship access and career goals. Use [[university-match-tool]].')],
        related=['university-cities', 'university-directory', 'accommodation', 'study-scholarships', 'top-ranked-universities', 'application-guide'],
    )

PAGES['university-cities'] = page(
    'University Cities in Italy: Compare Costs & Lifestyle',
    'Compare Italy\u2019s university cities for Indian students: Milan, Rome, Bologna, Turin, Padua, Florence and more, with cost, scholarship and job-market notes.',
    'All <em>university cities</em> in Italy',
    'Your city shapes your budget, social life and internship options as much as your university does.',
    None,
    [
        sec('Compare at a glance',
            table('City comparison', ['City', 'Budget / month', 'Best for', 'Scholarship body'],
                  ['Milan', '\u20ac850\u2013\u20ac1,200', 'Business, design, jobs', 'DSU Lombardia'],
                  ['Rome', '\u20ac750\u2013\u20ac1,100', 'Humanities, medicine', 'DiSCo'],
                  ['Bologna', '\u20ac700\u2013\u20ac1,000', 'Student life, balance', 'ER.GO'],
                  ['Turin', '\u20ac600\u2013\u20ac900', 'Engineering, value', 'EDISU'],
                  ['Padua', '\u20ac650\u2013\u20ac950', 'Science, safety', 'ESU Padova'],
                  ['Florence', '\u20ac750\u2013\u20ac1,100', 'Art, fashion', 'DSU Toscana'])),
        sec('Read the city guides',
            ul('[[universities-milan|Milan]]', '[[universities-rome|Rome]]', '[[universities-bologna|Bologna]]', '[[universities-turin|Turin]]', '[[universities-padua|Padua]]', '[[universities-florence|Florence]]')),
    ],
    [('Which city is cheapest?', 'Turin and Padua usually offer the lowest total monthly cost.')],
)

PAGES['university-match-tool'] = page(
    'University Match Tool: Find Your Italian University',
    'Use EuroMiles\u2019 University Match Tool to find Italian universities that fit your marks, budget, field and scholarship needs.',
    'University <em>Match Tool</em>',
    'Answer a few questions about your profile and receive a shortlist of Italian universities with fees, tests and scholarship options.',
    None,
    [
        sec('How it works',
            steps(('Share your profile', 'Education level, marks, field of interest and English score.'),
                  ('Set your budget', 'Annual spending limit and loan or scholarship needs.'),
                  ('Get a shortlist', 'A counsellor reviews matches and sends a personalised report within 48 hours.')),
            'The match is built by Italy specialists, not a generic algorithm, and it is <strong>free</strong>.'),
        sec('Prefer to explore on your own?', 'Browse the [[university-directory]] or compare [[top-ranked-universities]].'),
    ],
    [('Is the tool free?', 'Yes, with no obligation.'), ('How accurate is it?', 'Recommendations reflect current admission rules, but final fit depends on your documents and test results.')],
)
