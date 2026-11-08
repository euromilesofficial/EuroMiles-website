from _h import *

PAGES = {}
HUBS = {}
SPECIAL = {}

HUBS['success-stories'] = dict(
    seo='Success Stories: Indian Students Placed in Italy | EuroMiles',
    desc='Verified admits, scholarships and visa approvals for Indian students in Italy, with parent perspectives and city-wise student experiences.',
    h1='Real students. Real <em>Italian outcomes</em>.',
    lede='Proof matters when you are trusting someone with your child\u2019s future. We share outcomes with consent, with documents, and without inflated claims.',
    facts=[('Shared with', 'Student consent'), ('Proof types', 'Letters, visas, awards'), ('Cities', 'Milan, Rome, Bologna, Turin'), ('Claims', 'Document-backed')],
    sections=[
        sec('Verified results',
            cards(('Admit letters', 'See [[university-admit-letters]].'), ('Scholarship awards', 'See [[scholarship-award-proof]].'), ('Visa approvals', 'See [[italian-visa-approvals]].'), ('Non-linear profiles', 'See [[gap-year-success-stories]].'))),
        sec('Voices and reviews',
            ul('[[student-video-testimonials|Student video testimonials]]', '[[parent-perspectives|Parent perspectives]]', '[[campus-life-tours|Campus and dorm tours]]', '[[verified-reviews|Verified Google and Trustpilot reviews]]')),
        sec('Students by city', 'Read how students settle in [[students-in-milan|Milan]], [[students-in-rome|Rome]], [[students-in-bologna-padua|Bologna and Padua]] and [[students-in-turin|Turin]].'),
    ],
    faq=[('Are the stories genuine?', 'We publish outcomes only with consent and supporting documents, with personal data redacted.'), ('Can I speak to a past student or parent?', 'Yes. Ask your counsellor for an introduction.')],
    cta=('Write your own success story', 'Start with a free profile assessment and a realistic plan for Italy.'),
)

def _proof(slug_title, seo, desc, h1, lede, facts, what, how):
    return page(seo, desc, h1, lede, facts,
        [sec('What we share', ul(*what)), sec('How we verify', how),
         note('Our promise', 'We never invent or exaggerate results. Outcomes depend on each student\u2019s profile, and no consultancy can guarantee an admit, scholarship or visa.')],
        [('Why are names hidden?', 'To protect student privacy. We share details only with written consent.')],
        related=['university-admit-letters', 'scholarship-award-proof', 'italian-visa-approvals', 'verified-reviews', 'parent-perspectives', 'student-video-testimonials'])

PAGES['university-admit-letters'] = _proof('', 'Top University Admit Letters | Indian Students in Italy',
    'Admission letters received by EuroMiles students from leading Italian universities, shared with consent and with personal data redacted.',
    'Top university <em>admit letters</em>',
    'Admit letters are the first proof of a strong application. Here is how we document and share them.',
    [('Format', 'Redacted letters'), ('Universities', 'Public + private'), ('Consent', 'Always'), ('Updated', 'Each intake')],
    ['Letters from public universities and polytechnics.', 'Programme, intake year and level (Bachelor\u2019s or Master\u2019s).', 'Profile type, such as marks band and test used.'],
    'Each letter is matched against the student\u2019s application file before it is published.')

PAGES['scholarship-award-proof'] = _proof('', '100% Scholarship Award Proof | EuroMiles Students',
    'Verified DSU and merit scholarship awards for Indian students in Italy, with award letters, bodies and academic years.',
    '100% scholarship <em>award proof</em>',
    'Scholarship outcomes are the most closely watched claim in this industry, so we back every one with an award document.',
    [('Evidence', 'Award letter'), ('Body', 'DSU / university'), ('Year', 'Stated'), ('Coverage', 'Stated')],
    ['Award letters from regional DSU bodies and universities.', 'The coverage type: tuition waiver, stipend, or both.', 'Academic year and region.'],
    'We confirm the body, year and amount from the original document. See [[regional-tuition-waivers]].')

PAGES['italian-visa-approvals'] = _proof('', 'Italian Student Visa Approvals Gallery | EuroMiles',
    'Italian national student visas received by Indian students with EuroMiles, shown with sensitive details redacted.',
    'Italian <em>visa approvals</em> gallery',
    'Visa stickers and approval notices, shared with consent and fully redacted, to show our process in action.',
    [('Visa type', 'National D'), ('Centre', 'VFS India'), ('Redaction', 'Full'), ('Consent', 'Always')],
    ['Redacted visa stickers showing visa type and validity.', 'The intake year and city.', 'Timeline from file submission to decision.'],
    'We match each approval to a client file. See how we prepare in [[financial-dossier]] and [[visa-mock-interviews]].')

PAGES['gap-year-success-stories'] = page(
    'Gap Year & Low GPA Success Stories | Study in Italy',
    'Can you study in Italy with a gap year or lower marks? Real patterns of how non-linear profiles succeed with the right university, test and story.',
    'Gap year &amp; low GPA <em>stories</em>',
    'A gap year or average marks does not close the door on Italy. The right strategy often matters more than the perfect profile.',
    [('Gap years', 'Often accepted'), ('Key', 'Clear explanation'), ('Strategy', 'Right university'), ('Tests', 'Can offset marks')],
    [
        sec('What works',
            ul('Choosing universities that rank by test score, not marks.', 'A strong statement of purpose explaining the gap.', 'Certificates, courses or work experience during the gap.', 'Starting with a [[foundation-year]] where it helps.')),
        sec('What does not',
            ul('Hiding the gap or giving inconsistent explanations.', 'Applying only to the most selective universities.', 'Leaving preparation too late.')),
        sec('Be realistic', 'We assess your profile honestly and suggest the best-fit route. Start with a [[scholarship-eligibility|free assessment]].'),
    ],
    [('How long a gap is acceptable?', 'One to two years is common when well explained. Longer gaps need stronger evidence.')],
    related=['foundation-year', 'eligibility-criteria', 'entrance-exams', 'bachelors-degrees', 'verified-reviews', 'parent-perspectives'],
)

def _voice(seo, desc, h1, lede, facts, items, tip):
    return page(seo, desc, h1, lede, facts,
        [sec('What you will find', ul(*items)), sec('Why it matters', tip),
         note('Authentic by design', 'We publish voices only with consent and never script testimonials.')],
        [('Can I meet students before deciding?', 'We can often arrange a conversation with current students or parents.')],
        related=['university-admit-letters', 'scholarship-award-proof', 'parent-perspectives', 'verified-reviews', 'students-in-milan', 'students-in-bologna-padua'])

PAGES['student-video-testimonials'] = _voice('Student Video Testimonials | Indian Students in Italy',
    'Hear Indian students describe their journey to Italy in their own words: admissions, visa, arrival and life on campus.',
    'Student video <em>testimonials</em>',
    'Nothing beats hearing from students who have done it. Their stories cover the real highs and the real challenges.',
    [('Format', 'Short videos'), ('Topics', 'Admission to arrival'), ('Language', 'English / Hindi'), ('Consent', 'Always')],
    ['Why they chose Italy.', 'How the application and visa went.', 'Daily life, food, costs and friendships.'], 'Seeing a peer\u2019s experience helps you set realistic expectations.')

PAGES['parent-perspectives'] = _voice('Parent Perspectives & Reviews | EuroMiles',
    'Indian parents share how they evaluated Italy, managed finances, handled worries and supported their children abroad.',
    'Parent <em>perspectives</em> &amp; reviews',
    'Parents carry the biggest worries. Here are the questions they ask most, and what helped them decide.',
    [('Top concerns', 'Safety, cost, visa'), ('Support', 'Regular updates'), ('Format', 'Written + video'), ('Consent', 'Always')],
    ['How families compared Italy with other destinations.', 'Budgeting and fund transfer.', 'How we kept parents updated at each stage.'], 'Parents decide together with students, so we give them the same clarity.')

PAGES['campus-life-tours'] = _voice('Campus Life & Dorm Tours in Italy | EuroMiles',
    'See what student life looks like at Italian campuses and residences: libraries, canteens, rooms and neighbourhoods.',
    'Campus life &amp; <em>dorm tours</em>',
    'See campuses, canteens and residences through the eyes of students living there.',
    [('Cities', 'Milan, Bologna, Turin'), ('Shows', 'Rooms, mensa, library'), ('Format', 'Photos + video'), ('Updated', 'Each year')],
    ['Student residences and shared flats.', 'University canteens and libraries.', 'Neighbourhoods and transport.'], 'A clear picture of daily life reduces anxiety. Read more in [[accommodation]] and [[part-time-work]].')

PAGES['verified-reviews'] = _voice('Verified Google & Trustpilot Reviews | EuroMiles',
    'Read independent reviews of EuroMiles on Google and Trustpilot from Indian students and parents.',
    'Verified Google &amp; <em>Trustpilot</em> reviews',
    'Independent reviews let you judge us on what real clients say, not on what we say.',
    [('Platforms', 'Google, Trustpilot'), ('Moderation', 'None by us'), ('Responses', 'We reply to all'), ('Updated', 'Ongoing')],
    ['Overall ratings and recent reviews.', 'How we respond to criticism.', 'Links to the original review pages.'], 'We encourage every client to review us honestly, positive or not.')

def _city(seo, desc, h1, lede, facts, items):
    return page(seo, desc, h1, lede, facts,
        [sec('What students tell us', ul(*items)), sec('Plan your move', 'Read the city guide and housing tips in [[university-cities]] and [[accommodation]].')],
        [('Can I connect with students in this city?', 'Yes, we can introduce you to current students where possible.')],
        related=['university-cities', 'accommodation', 'part-time-work', 'verified-reviews', 'parent-perspectives', 'campus-life-tours'])

PAGES['students-in-milan'] = _city('Our Students in Milan | Indian Students in Italy',
    'How Indian students live and study in Milan: universities, housing, costs, part-time work and community.',
    'Our students in <em>Milan</em>',
    'Milan attracts business, engineering and design students with its job market and international feel.',
    [('Budget', '\u20ac850\u2013\u20ac1,200'), ('Top universities', 'Polimi, Bocconi'), ('Community', 'Large Indian'), ('Jobs', 'Strongest')],
    ['Housing is the main challenge. Start early.', 'Internships are easiest to find here.', 'Public transport makes commuting simple.'])

PAGES['students-in-rome'] = _city('Our Students in Rome | Indian Students in Italy',
    'How Indian students live and study in Rome: Sapienza, Tor Vergata, Roma Tre, housing and daily life.',
    'Our students in <em>Rome</em>',
    'Rome offers history, large universities and a lively international community.',
    [('Budget', '\u20ac750\u2013\u20ac1,100'), ('Top universities', 'Sapienza, LUISS'), ('Strength', 'Humanities, medicine'), ('Scholarship body', 'DiSCo')],
    ['Neighbourhood choice affects commute and cost.', 'DiSCo residences are in high demand.', 'Plenty of cultural and part-time options.'])

PAGES['students-in-bologna-padua'] = _city('Our Students in Bologna & Padua | Indian Students',
    'Student experiences in Bologna and Padua: affordable living, strong scholarships and compact, safe student cities.',
    'Our students in <em>Bologna &amp; Padua</em>',
    'Two classic university towns with a student-centred lifestyle and strong scholarship support.',
    [('Budget', '\u20ac650\u2013\u20ac1,000'), ('Universities', 'Bologna, Padua'), ('Scholarship bodies', 'ER.GO, ESU'), ('Vibe', 'Compact, social')],
    ['Everything is within walking or cycling distance.', 'Scholarships are generous but competitive.', 'Trains connect to Venice, Florence and Milan.'])

PAGES['students-in-turin'] = _city('Our Students in Turin | Indian Students in Italy',
    'How Indian students live in Turin: Politecnico di Torino, low rents, EDISU support and an industrial job market.',
    'Our students in <em>Turin</em>',
    'Turin is a value favourite for engineering and design students.',
    [('Budget', '\u20ac600\u2013\u20ac900'), ('Top university', 'Politecnico di Torino'), ('Scholarship body', 'EDISU'), ('Strength', 'Engineering, automotive')],
    ['Lowest rents among major cities.', 'Strong links with the automotive industry.', 'Mountains and lakes nearby.'])

def about(seo, desc, h1, lede, facts, secs, faq=None, related=None):
    return page(seo, desc, h1, lede, facts, secs, faq or [('How can I contact EuroMiles?', 'Call +91 98765 43210, WhatsApp us or email info@euromiles.in. Office hours are Monday to Saturday, 10:00 AM to 6:00 PM IST.')], related=related)

HUBS['about'] = dict(
    seo='About EuroMiles | Italy-Only Education Consultancy',
    desc='EuroMiles is an Italy-only international education consultancy for Indian students and parents. Meet our team, mission, fees and network.',
    h1='About <em>EuroMiles</em>',
    lede='We do one thing: help Indian students study in Italy. That focus lets us give deeper, more honest advice than a generic overseas consultancy.',
    facts=[('Focus', 'Italy only'), ('Audience', 'Indian students &amp; parents'), ('Head office', 'New Delhi'), ('Hours', 'Mon\u2013Sat, 10\u20136 IST')],
    sections=[
        sec('Who we are',
            cards(('Our story', '[[about-euromiles]]'), ('Mission', '[[our-mission]]'), ('Why Italy only', '[[italy-only-advantage]]'), ('Team', '[[about-team]]'))),
        sec('Trust and transparency',
            ul('[[university-network|Recognised university network]]', '[[transparent-fees|Transparent fee policy]]', '[[track-record|Proven track record]]', '[[accreditations|Accreditations and media]]')),
        sec('Connect and visit', 'Meet us via [[student-lounges]], [[senior-advisor]], [[partnerships]] or [[contact-euromiles]].'),
    ],
    faq=[('Where are you based?', 'Our head office is in New Delhi, India. We counsel students across India online and in person.')],
    cta=('Talk to an Italy specialist', 'A free call with no obligation. We will tell you honestly if Italy is right for you.'),
)

PAGES['about-euromiles'] = about('About EuroMiles | Italy Education Consultants for Indians',
    'Learn who EuroMiles is: an Italy-only education consultancy guiding Indian students and parents from first question to first week in Italy.',
    'About <em>EuroMiles</em>',
    'EuroMiles is an international education consultancy that works exclusively on study in Italy for Indian students and their parents.',
    [('Focus', 'Italy only'), ('Head office', 'New Delhi'), ('Serves', 'Students across India'), ('Programmes', 'Bachelor\u2019s, Master\u2019s, PhD')],
    [
        sec('What we do',
            'We guide students through every stage: choosing a programme, applying to universities, applying for scholarships, preparing the visa, and settling in Italy. Our counsellors speak both the language of Indian families and the rules of Italian institutions.'),
        sec('How we are different',
            ul('<strong>Italy-only:</strong> we do not spread our knowledge across ten countries.', '<strong>Honest advice:</strong> we tell you when a plan is unrealistic.', '<strong>Parent-friendly:</strong> clear updates and clear fees.', '<strong>End to end:</strong> from first call to first week in Italy.')),
    ], related=['our-mission', 'italy-only-advantage', 'about-team', 'transparent-fees', 'contact-euromiles', 'university-network'])

PAGES['our-mission'] = about('Our Origin & Mission | EuroMiles',
    'Why EuroMiles exists: to make Italian higher education accessible, affordable and well-understood for Indian families.',
    'Our origin &amp; <em>mission</em>',
    'Italy offers world-class education at some of Europe\u2019s lowest costs, yet many Indian families never hear about it. We exist to change that.',
    [('Mission', 'Access with clarity'), ('Values', 'Honesty, care'), ('Focus', 'Italy'), ('Promise', 'No false claims')],
    [
        sec('Why we started', 'Families were being steered towards the same few destinations, while Italy\u2019s public universities, scholarships and quality of life were poorly explained. We set out to build the clearest guide to Italy in India.'),
        sec('What we stand for',
            ul('Clear information before commitment.', 'Fair, itemised fees.', 'Student welfare after arrival.', 'No guaranteed-outcome claims we cannot keep.')),
    ], related=['about-euromiles', 'italy-only-advantage', 'transparent-fees', 'about-team', 'track-record', 'contact-euromiles'])

PAGES['italy-only-advantage'] = about('The Italy-Only Advantage | EuroMiles',
    'Why choosing an Italy-only consultancy gives Indian students deeper knowledge of universities, DSU scholarships, CIMEA and the Italian visa.',
    'The <em>Italy-only</em> advantage',
    'A consultant who handles ten countries cannot keep every rule current. We keep one country current, and it shows in your results.',
    [('Countries', 'One'), ('Depth', 'Rules, deadlines, people'), ('Benefit', 'Fewer errors'), ('Updates', 'Every cycle')],
    [
        sec('What specialisation gives you',
            ul('Current knowledge of DSU calls and ISEE rules.', 'Experience with CIMEA, Universitaly and VFS Italy.', 'Relationships with university international offices.', 'Practical knowledge of Italian cities.')),
        sec('The trade-off', 'If Italy is not right for you, we will say so rather than push it.'),
    ], related=['about-euromiles', 'our-mission', 'university-network', 'track-record', 'scholarship-eligibility', 'study-faqs'])

PAGES['leadership-advisors'] = about('Leadership & Advisors | EuroMiles',
    'The leadership and senior advisors behind EuroMiles, an Italy-only education consultancy for Indian students.',
    'Leadership &amp; <em>advisors</em>',
    'Senior advisors personally review every complex case, from scholarship strategy to visa risk.',
    [('Roles', 'Directors, advisors'), ('Review', 'Senior sign-off'), ('Languages', 'English, Hindi'), ('Base', 'New Delhi')],
    [
        sec('How leadership is involved',
            ul('Senior advisors review high-stakes files.', 'Leadership oversees fee policy and quality.', 'Parents can request a senior call.')),
        sec('Speak to a senior advisor', 'See [[senior-advisor]] to book a conversation.'),
    ], related=['about-team', 'senior-advisor', 'about-euromiles', 'our-mission', 'transparent-fees', 'contact-euromiles'])

PAGES['about-team'] = about('Meet the EuroMiles Team | Italy Counsellors',
    'Meet the EuroMiles counsellors, document specialists and visa experts helping Indian students reach Italy.',
    'Meet the <em>team</em>',
    'Our team combines counsellors, document specialists and visa experts so you deal with one coordinated group.',
    [('Counsellors', 'Profile and shortlist'), ('Document team', 'Legalisation, ISEE'), ('Visa team', 'Dossier, slots'), ('Italy desk', 'Latest rules')],
    [
        sec('Who you will work with',
            ul('A dedicated counsellor throughout your journey.', 'A document specialist for translations and legalisation.', 'A visa specialist for your dossier and interview.', 'A post-arrival contact in Italy.')),
        sec('Our standard', 'We train continuously on Italian rules and review every complex file with a senior advisor.'),
    ], related=['leadership-advisors', 'about-euromiles', 'senior-advisor', 'contact-euromiles', 'student-lounges', 'italy-only-advantage'])

PAGES['university-network'] = about('Recognised University Network | EuroMiles',
    'EuroMiles works with Italian public and private universities and understands their admission processes for Indian students.',
    'Recognised <em>university network</em>',
    'We maintain working relationships with admission offices and stay current on programme changes.',
    [('Universities', 'Public + private'), ('Contact', 'International offices'), ('Updates', 'Every intake'), ('Independence', 'Student-first')],
    [
        sec('How we work with universities',
            ul('We follow each university\u2019s official admission rules.', 'We submit complete, accurate applications.', 'We never guarantee a seat on a university\u2019s behalf.')),
        sec('Your best interest first', 'We recommend universities by fit, not by commission. See [[transparent-fees]].'),
    ], related=['partnerships', 'university-directory', 'top-ranked-universities', 'transparent-fees', 'track-record', 'about-euromiles'])

PAGES['transparent-fees'] = about('Transparent Fee Policy | EuroMiles Italy Consultancy',
    'EuroMiles\u2019s fee principles: itemised services, no hidden costs and clear refund terms for Indian families.',
    'Transparent <em>fee policy</em>',
    'You should know what you will pay before you commit. Our fees are itemised, explained and agreed in writing.',
    [('Structure', 'Itemised'), ('Hidden costs', 'None'), ('Agreement', 'In writing'), ('Estimate', 'Free on call')],
    [
        sec('Our principles',
            ul('A written fee schedule before you pay.', 'Separate charges for each service stage.', 'Third-party costs (fees, VFS, translations) shown separately.', 'No payment demanded for promised scholarships or visas.')),
        warn('Be careful with promises', 'Beware of any consultancy guaranteeing admissions, scholarships or visas. These decisions belong to universities and authorities.'),
        sec('Get an estimate', '[[contact-euromiles|Contact us]] for a personalised quote.'),
    ], related=['error-free-filing', 'part-time-work', 'contact-euromiles', 'about-euromiles', 'our-mission', 'track-record'])

PAGES['track-record'] = about('Proven Track Record | EuroMiles Results',
    'How EuroMiles measures and reports results for Indian students heading to Italy, with a commitment to verified outcomes.',
    'Proven <em>track record</em>',
    'We measure success by students who arrive, settle and graduate, not by file counts.',
    [('Measured by', 'Verified outcomes'), ('Reporting', 'Documented'), ('Claims', 'Conservative'), ('See', 'Success stories')],
    [
        sec('How we report',
            ul('Admits, awards and visas backed by documents.', 'Outcomes presented with year and context.', 'Honest about cases that did not succeed.')),
        sec('See the evidence', 'Browse [[university-admit-letters]], [[scholarship-award-proof]] and [[verified-reviews]].'),
    ], related=['university-admit-letters', 'scholarship-award-proof', 'italian-visa-approvals', 'verified-reviews', 'about-euromiles', 'accreditations'])

PAGES['accreditations'] = about('Accreditations & Media | EuroMiles',
    'Accreditations, memberships and media mentions of EuroMiles, an international education consultancy for Italy.',
    'Accreditations &amp; <em>media</em>',
    'Memberships and recognitions help you verify who you are dealing with.',
    [('Registered', 'India'), ('Verify', 'Ask for documents'), ('Media', 'Listed here'), ('Updated', 'Periodically')],
    [
        sec('Verify before you pay', 'Ask any consultancy for its registration, office address and client references. We are happy to share ours on request.'),
        sec('Contact us', 'Email info@euromiles.in for our company details.'),
    ], related=['transparent-fees', 'track-record', 'contact-euromiles', 'about-euromiles', 'university-network', 'verified-reviews'])

PAGES['student-lounges'] = about('Visit Our Student Lounges | EuroMiles',
    'Meet the EuroMiles team in person: visit our student lounge and counselling space in New Delhi.',
    'Visit our <em>student lounges</em>',
    'Prefer to talk face to face? Visit our counselling space to meet advisors and ask questions with your parents.',
    [('Location', 'New Delhi'), ('Hours', 'Mon\u2013Sat, 10\u20136'), ('Visit', 'By appointment'), ('Parents', 'Welcome')],
    [
        sec('Plan your visit',
            ul('Book a slot so an advisor is ready for you.', 'Bring your marksheets and any questions.', 'Parents are encouraged to attend.')),
        sec('Cannot visit?', 'Book an online call via [[senior-advisor]].'),
    ], related=['senior-advisor', 'contact-euromiles', 'about-team', 'about-euromiles', 'partnerships', 'scholarship-eligibility'])

PAGES['senior-advisor'] = about('Book a Senior Advisor | EuroMiles',
    'Book a one-on-one call with a senior EuroMiles advisor for scholarship strategy, university shortlisting or visa review.',
    'Book a <em>senior advisor</em>',
    'For complex cases such as gap years, low marks, scholarship strategy or visa refusal, speak with a senior advisor.',
    [('Format', 'Video or phone'), ('Duration', '30\u201345 min'), ('Cost', 'Free first call'), ('Languages', 'English, Hindi')],
    [
        sec('Best for',
            ul('Scholarship and ISEE strategy.', 'Gap-year or low-marks profiles.', 'Visa refusals and re-applications.', 'Parents with detailed questions.')),
        sec('How to book', 'Use the consultation button on this page or [[free-assessment|request an assessment]].'),
    ], related=['leadership-advisors', 'about-team', 'contact-euromiles', 'scholarship-eligibility', 'visa-rejection-audit', 'gap-year-success-stories'])

PAGES['partnerships'] = about('University & School Partners | EuroMiles',
    'Partner with EuroMiles: collaboration opportunities for Italian universities, Indian schools and coaching institutes.',
    'University &amp; school <em>partnerships</em>',
    'We collaborate with universities, schools and coaching centres to bring accurate Italy information to students.',
    [('For', 'Universities, schools'), ('Formats', 'Webinars, workshops'), ('Reach', 'Indian students'), ('Contact', 'info@euromiles.in')],
    [
        sec('Ways to partner',
            ul('Italy information sessions for schools.', 'Joint webinars with universities.', 'Workshops on scholarships and visas.')),
        sec('Get in touch', 'Email info@euromiles.in or use [[contact-euromiles]].'),
    ], related=['university-network', 'contact-euromiles', 'about-euromiles', 'student-lounges', 'about-team', 'accreditations'])

PAGES['contact-euromiles'] = about('Contact EuroMiles | Italy Study Counsellors in India',
    'Contact EuroMiles by phone, WhatsApp, Telegram or email. Head office in New Delhi, open Monday to Saturday 10 AM to 6 PM IST.',
    'Contact &amp; <em>dedicated support</em>',
    'Reach our Italy counsellors by phone, WhatsApp, Telegram or email. We reply within one working day.',
    [('Phone', '+91 98765 43210'), ('Email', 'info@euromiles.in'), ('Office', 'New Delhi'), ('Hours', 'Mon\u2013Sat, 10\u20136 IST')],
    [
        sec('Ways to reach us',
            ul('Call +91 98765 43210 or +91 87654 32109.', 'WhatsApp or Telegram us for quick questions.', 'Email info@euromiles.in with your marks and goals.', 'Use [[free-assessment|the assessment form]] for a tailored reply.')),
        sec('Existing clients', 'Contact your dedicated counsellor directly for faster responses.'),
    ], related=['part-time-work', 'senior-advisor', 'student-lounges', 'about-team', 'transparent-fees', 'about-euromiles'] if False else ['senior-advisor', 'student-lounges', 'about-team', 'transparent-fees', 'about-euromiles', 'scholarship-eligibility'])


def free_assessment(m):
    items = [('Home', '/'), ('Free Profile Assessment', '/free-assessment/')]
    f = '''<form class="sp-form" id="assess" novalidate>
<div class="sp-field"><label for="a-name">Student name</label><input id="a-name" name="name" autocomplete="name" required></div>
<div class="sp-field"><label for="a-phone">WhatsApp number</label><input id="a-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required></div>
<div class="sp-field"><label for="a-level">Level you want</label><select id="a-level" name="level"><option>Bachelor\u2019s</option><option>Master\u2019s</option><option>Medicine</option><option>PhD</option></select></div>
<div class="sp-field"><label for="a-field">Field of interest</label><input id="a-field" name="field" placeholder="e.g. Mechanical Engineering"></div>
<div class="sp-field"><label for="a-marks">Latest marks / CGPA</label><input id="a-marks" name="marks"></div>
<div class="sp-field"><label for="a-budget">Yearly budget (\u20b9)</label><input id="a-budget" name="budget" inputmode="numeric"></div>
<button class="sp-btn sp-btn-gold" type="submit">Send on WhatsApp</button>
<p class="sp-form-note">Opens WhatsApp with your details prefilled for our counsellor. Prefer email? Write to <a href="mailto:info@euromiles.in">info@euromiles.in</a>.</p>
</form>
<script>document.getElementById('assess').addEventListener('submit',function(e){e.preventDefault();var d=new FormData(this),n=(d.get('name')||'').trim(),p=(d.get('phone')||'').trim();if(!n||!p){alert('Please enter your name and WhatsApp number.');return;}var t='Hello EuroMiles, I would like a free profile assessment.%0AName: '+encodeURIComponent(n)+'%0APhone: '+encodeURIComponent(p)+'%0ALevel: '+encodeURIComponent(d.get('level'))+'%0AField: '+encodeURIComponent(d.get('field')||'-')+'%0AMarks: '+encodeURIComponent(d.get('marks')||'-')+'%0ABudget: '+encodeURIComponent(d.get('budget')||'-');window.open('https://wa.me/919876543210?text='+t,'_blank','noopener');});</script>'''
    body = (m.hero('Free profile <em>assessment</em>', 'Tell us a little about you. A senior counsellor will reply with a realistic shortlist of Italian universities, scholarship chances and a first-year budget.', 'Free, no obligation', items, [('Reply time', 'Within 1 working day'), ('Cost', 'Free'), ('Covers', 'Universities, scholarships, visa'), ('Language', 'English / Hindi')], actions=False) +
            '<div class="sp-body"><div class="sp-wrap"><div class="sp-layout"><article class="sp-article" id="visa"><p class="sp-updated">Takes about two minutes</p><h2>Share your profile</h2>' + f +
            '<h2>What you will receive</h2><ul class="sp-list"><li>Universities matched to your marks and budget.</li><li>Your likely DSU and merit scholarship options.</li><li>A realistic cost estimate for year one.</li><li>A timeline of tests, deadlines and visa steps.</li></ul>'
            '<h2 id="visa-help">Need help with your visa?</h2><p>Mention it in your message and our visa team will review your situation. Learn more in the <a href="/study-in-italy/application-guide/">visa guide</a>.</p></article>' + m.side([]) + '</div></div></div>')
    ld = [m.ORG_LD, m.breadcrumb_ld(items)]
    html = m.document(path='/free-assessment/', seo_title='Free Profile Assessment for Studying in Italy | EuroMiles',
                      desc='Get a free profile and eligibility assessment for studying in Italy: universities, DSU scholarship chances and budget, from Italy-only counsellors.',
                      main=body, jsonld=ld, og_type='website')
    return {'path': '/free-assessment/', 'html': html}

SPECIAL['free-assessment'] = free_assessment
