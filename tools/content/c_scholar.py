from _h import *

PAGES = {}
HUBS = {}

HUBS['scholarships'] = dict(
    seo='Italy Scholarships for Indian Students 2026/27 | DSU Guide',
    desc='Complete guide to Italian scholarships for Indian students: DSU tuition waivers, living stipends, merit awards, ISEE rules and 2026/27 deadlines.',
    h1='Italy <em>scholarships</em> that cut your cost',
    lede='Regional DSU scholarships can waive tuition and add a yearly stipend, meals and housing support. Most Indian families miss them because of paperwork errors, not eligibility.',
    facts=[('Tuition waiver', 'Up to 100%'), ('Stipend + services', 'Region dependent'), ('Key document', 'ISEE parificato'), ('Cycle', '2026/27 intake')],
    sections=[
        sec('Three types of funding',
            cards(('DSU tuition waiver', 'Income-based exemption from tuition. See [[regional-tuition-waivers]].'),
                  ('Living stipends', 'Cash support, meals and accommodation. See [[annual-living-stipends]].'),
                  ('Merit awards', 'University-funded awards for strong academics. See [[university-merit-awards]].'))),
        sec('Rules that decide your outcome',
            ul('Your ISEE parificato must be within the regional limit: [[isee-income-limits]].', 'Deadlines are strict and differ by region: [[scholarship-deadlines]].', 'Small filing errors cause rejection: [[scholarship-filing-mistakes]].')),
        sec('How EuroMiles helps', 'We check eligibility, prepare documents and file error-free. Start with a [[scholarship-eligibility|free eligibility assessment]].'),
    ],
    faq=[('Can Indian students really get a full scholarship in Italy?', 'Yes, many eligible students receive tuition waivers and support through regional DSU bodies, depending on income and academic criteria.'), ('Is the scholarship guaranteed?', 'No. It depends on eligibility, funds and correct filing. We never promise guaranteed awards.')],
    cta=('Check your scholarship eligibility', 'Share your family income and marks and we will estimate your DSU and merit options.'),
)

PAGES['regional-tuition-waivers'] = page(
    '100% Tuition Waivers in Italy: DSU Guide for Indians',
    'How Italian regional DSU tuition waivers work for Indian students: eligibility, ISEE thresholds, regions, documents and how to apply.',
    '<em>100% tuition</em> waivers in Italy',
    'Regional DSU bodies can exempt eligible students from university tuition entirely, leaving only a small regional tax and stamp duty.',
    [('Waiver', 'Up to 100%'), ('Basis', 'Income + merit'), ('Applied via', 'Regional DSU body'), ('Annual', 'Reapply each year')],
    [
        sec('What the waiver covers',
            'A DSU waiver removes or heavily reduces your university tuition. You usually still pay the regional tax (about \u20ac156) and a stamp duty. Waivers are renewed annually if you meet merit credits.'),
        sec('Main regional bodies',
            table('Where to apply', ['Region', 'Body', 'Typical cities'],
                  ['Emilia-Romagna', 'ER.GO', 'Bologna, Parma, Modena'],
                  ['Lombardy', 'Regional DSU (per university)', 'Milan, Pavia'],
                  ['Lazio', 'DiSCo', 'Rome'],
                  ['Piedmont', 'EDISU', 'Turin'],
                  ['Veneto', 'ESU', 'Padua, Venice'],
                  ['Tuscany', 'DSU Toscana', 'Florence, Pisa'])),
        sec('Eligibility basics',
            ul('Enrolled or admitted to a public university.', 'Economic status below the regional ISEE limit.', 'Academic merit for continuing students.')),
        warn('Always verify the current year', 'Limits and deadlines change annually. We confirm the official call (bando) for your region before advising.'),
    ],
    [('Do I need to apply separately from admission?', 'Yes. DSU is a separate application with its own deadline.'), ('Are waivers available in private universities?', 'Rarely. They are mostly for public universities.')],
    related=['isee-income-limits', 'scholarship-deadlines', 'annual-living-stipends', 'error-free-filing', 'university-cities', 'study-scholarships'],
)

PAGES['annual-living-stipends'] = page(
    'Annual Living Stipends & Meals in Italy | DSU Support',
    'DSU living stipends for international students in Italy: cash grants, meal vouchers, subsidised housing and how much Indian students can receive.',
    'Annual <em>living stipends</em>',
    'Beyond tuition, DSU bodies provide yearly cash grants, subsidised meals and student-residence places that can cover much of your living costs.',
    [('Cash grant', 'Region dependent'), ('Meals', 'Subsidised'), ('Housing', 'Priority beds'), ('Renewal', 'Each year')],
    [
        sec('What you can receive',
            ul('A yearly scholarship paid in instalments (amount varies with income, location and housing status).', 'Free or discounted canteen meals.', 'Priority access to student residences.')),
        sec('How amounts differ',
            'Students living off-campus away from their family home generally receive the highest grants. Amounts differ by region and are updated each year. See [[regional-tuition-waivers]] for the application route.'),
        note('Plan your cash flow', 'Instalments are paid after you meet credit milestones, so keep a buffer for your first months. See [[accommodation]].'),
    ],
    [('When is the first payment?', 'Usually after enrolment and after the first instalment date set by the regional body.'), ('Can I work with a stipend?', 'Yes, within student work limits. See [[part-time-work]].')],
    related=['regional-tuition-waivers', 'isee-income-limits', 'scholarship-deadlines', 'accommodation', 'part-time-work', 'error-free-filing'],
)

PAGES['university-merit-awards'] = page(
    'University Merit Scholarships in Italy for Indians',
    'University-funded merit awards in Italy: Bologna, Politecnico di Milano, Padua and others. Eligibility, amounts and how to apply as an Indian student.',
    'University <em>merit awards</em>',
    'Many Italian universities offer merit scholarships or fee reductions to strong international applicants, independent of DSU income rules.',
    [('Basis', 'Academic merit'), ('Coverage', 'Partial to full fee'), ('Applied via', 'University'), ('Competition', 'High')],
    [
        sec('How merit awards work',
            ul('Applied for at admission or soon after.', 'Based on marks, test scores and sometimes a statement of purpose.', 'Offered by universities such as Bologna, Politecnico di Milano, Padua and others.', 'Renewable if you maintain credits.')),
        sec('Improving your odds',
            ul('Apply to the earliest round.', 'Submit a clear, well-translated academic record.', 'Strengthen your English score.', 'Apply to several universities.')),
    ],
    [('Can I get both DSU and merit awards?', 'Sometimes. Rules differ, and we check combinations for you.')],
    related=['regional-tuition-waivers', 'annual-living-stipends', 'masters-degrees', 'bachelors-degrees', 'scholarship-deadlines', 'top-ranked-universities'],
)

PAGES['scholarship-filing-mistakes'] = page(
    'Why DIY Scholarship Applications Get Rejected in Italy',
    'The most common reasons Indian students\u2019 Italian scholarship applications fail: ISEE errors, missing legalisation, late filing and more.',
    'Why DIY applications get <em>rejected</em>',
    'Most scholarship rejections come from paperwork mistakes, not low marks or income. Here are the errors we see most.',
    [('Top cause', 'Document errors'), ('Second', 'Missed deadlines'), ('Third', 'Wrong ISEE inputs'), ('Fix', 'Expert review')],
    [
        sec('Common mistakes',
            ul('Submitting documents without proper legalisation or sworn translation.', 'Incorrect income conversion in the ISEE parificato.', 'Uploading files in the wrong format or to the wrong portal.', 'Missing the regional deadline by even a day.', 'Inconsistent names or dates across documents.')),
        sec('How to avoid them', 'Prepare early and use a checklist. Our [[error-free-filing|error-free filing]] service checks every file before submission.'),
    ],
    [('Can a rejected application be corrected?', 'Sometimes through an appeal window, but many rejections are final for that year.')],
    related=['error-free-filing', 'isee-income-limits', 'scholarship-deadlines', 'sworn-translations', 'cimea-certificates', 'scholarship-eligibility'],
)

PAGES['isee-income-limits'] = page(
    'ISEE Parificato for Indian Students: Income Limits Explained',
    'Understand the ISEE parificato for Italian scholarships: how Indian family income and assets are converted, thresholds, documents and errors.',
    'Strict <em>ISEE</em> income limits',
    'The ISEE parificato converts your family\u2019s Indian income and assets into an Italian economic indicator that decides your fee band and scholarship eligibility.',
    [('Document', 'ISEE parificato'), ('Basis', 'Income + assets'), ('Issued by', 'Authorised CAF'), ('Needs', 'Legalised documents')],
    [
        sec('How it is built',
            steps(('Gather documents', 'Income certificates, tax returns, property and bank records for the household.'), ('Legalise and translate', 'Apostille or consular legalisation plus sworn Italian translation.'), ('Calculate', 'An authorised centre (CAF) or the university calculates the ISEE parificato.'))),
        sec('Why limits matter',
            'Each region sets a maximum ISEE for scholarships. A figure just over the limit can mean no waiver, so every input must be correct. See [[regional-tuition-waivers]].'),
        warn('Do not guess your numbers', 'Use official documents only. Wrong declarations can lead to disqualification. We check your documents before filing.'),
    ],
    [('Do both parents\u2019 incomes count?', 'Yes, the household composition is considered.'), ('Is the same ISEE valid for every region?', 'The document is the same, but limits differ by body.')],
    related=['regional-tuition-waivers', 'sworn-translations', 'cimea-certificates', 'error-free-filing', 'scholarship-deadlines', 'study-scholarships'],
)

PAGES['scholarship-deadlines'] = page(
    '2026/27 Italy Scholarship Deadlines for Indian Students',
    'Key 2026/27 scholarship and DSU deadlines for Italy and how to plan your documents backwards from each date.',
    '2026/27 submission <em>deadlines</em>',
    'Scholarship calls open once a year and deadlines are strict. Plan backwards from the date so your documents are ready in time.',
    [('Intake', '2026/27'), ('Most calls', 'Summer'), ('Rule', 'No extensions'), ('Prepare', '3\u20134 months early')],
    [
        sec('A backwards planning timeline',
            steps(('6 months before', 'Start collecting income, property and academic documents.'), ('4 months before', 'Complete legalisation and sworn translations.'), ('2 months before', 'Prepare the ISEE parificato and draft your application.'), ('Deadline week', 'Submit with a buffer. Never file on the last day.'))),
        warn('Always check the official call', 'Exact dates differ by region and year. We confirm the current bando before every client application.'),
        sec('Where to check', 'Official regional DSU websites publish calls. Our team tracks them for you. See [[regional-tuition-waivers]].'),
    ],
    [('What if I miss the deadline?', 'In most cases you must wait for the next academic year.')],
    related=['regional-tuition-waivers', 'isee-income-limits', 'error-free-filing', 'application-guide', 'university-portal-filing', 'scholarship-eligibility'],
)

PAGES['error-free-filing'] = page(
    'Guaranteed Error-Free Scholarship Filing | EuroMiles',
    'EuroMiles\u2019s double-checked scholarship filing process for Italy: document audit, ISEE review and submission checks for Indian families.',
    'Error-free <em>filing</em>',
    'Our team prepares, audits and submits your scholarship application with a multi-step review so avoidable errors never reach the portal.',
    [('Checks', '3-stage review'), ('Documents', 'Full audit'), ('Submission', 'Before deadline'), ('Updates', 'Parent-friendly')],
    [
        sec('Our filing process',
            steps(('Eligibility review', 'We confirm income, marks and region fit.'), ('Document audit', 'Legalisation, translation and consistency checks.'), ('Supervised submission', 'Filing with a senior advisor and a copy for your records.'))),
        note('What this means', 'We aim for correct, complete filing every time. No consultancy can promise a scholarship award, because decisions rest with the regional body.'),
    ],
    [('Is the service paid?', 'See [[transparent-fees]] for our fee structure.')],
    related=['scholarship-filing-mistakes', 'isee-income-limits', 'scholarship-deadlines', 'scholarship-eligibility', 'transparent-fees', 'university-portal-filing'],
)

PAGES['scholarship-eligibility'] = page(
    'Free Scholarship Eligibility Assessment for Italy',
    'Get a free profile and eligibility assessment from EuroMiles: DSU scholarship chances, universities, budget and next steps for Indian students.',
    'Free profile &amp; <em>eligibility</em> assessment',
    'In one call, we review your marks, income and goals to estimate your scholarship options and a realistic budget.',
    None,
    [
        sec('What you receive',
            ul('Likely DSU and merit scholarship fit.', 'Universities matched to your profile.', 'A cost estimate for the first year.', 'A step-by-step timeline.')),
        sec('Ready?', '[[free-assessment|Book your free assessment]] or call +91 98765 43210.'),
    ],
    [('Is it really free?', 'Yes, with no obligation.')],
)

PAGES['student-award-proof'] = page(
    'Verified Scholarship Award Proof | EuroMiles Students',
    'How EuroMiles documents and verifies scholarship outcomes for Indian students in Italy, with consent-based award letters.',
    'Verified student <em>award proof</em>',
    'We believe claims should be backed by documents. Here is how we handle and share scholarship outcomes responsibly.',
    None,
    [
        sec('Our standard',
            ul('Award letters are shared only with student consent.', 'Personal data is redacted.', 'Outcomes are reported with the year and body.')),
        sec('See more', 'Browse [[scholarship-award-proof|scholarship award proof]] and [[university-admit-letters]].'),
    ],
    [('Can I speak to a past student?', 'Yes, subject to consent. Ask your counsellor.')],
)
