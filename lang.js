// The pages are written in English. In French, every element whose inner HTML, or text whose words, is a key of FR
// takes its value, and English comes back from what was kept at load; an English text with no key stays English.
// The choice is kept in localStorage, and the browser's language picks it on a first visit.
// Each French text is about as wide as its English one, so both break into the same number of lines
const FR = {
  'M3 Labs | Custom software, reconciliation and automation': 'M3 Labs | Logiciels sur mesure, réconciliation et automatisation',
  'Legal notice | M3 Labs': 'Mentions légales | M3 Labs',
  'What I build': 'Services',
  'My work': 'Projets',
  'How we work': 'Méthode',
  'Pricing': 'Tarifs',
  'Email me': 'Email',
  'Book a call': 'Réserver un appel',
  'A 30-minute call': 'Appel de 30 minutes',

  'Stop renting software.<br><span class="blue">Start owning it.</span>': 'Ne louez plus d’outils externes.<br><span class="blue">Possédez les vôtres.</span>',
  'Tell me what your team does <strong>by hand</strong>. I build the <strong>software</strong> that does it for you, and you keep <strong>the code</strong>.':
    'Dites-moi ce que votre équipe fait <strong>à la main</strong>. Je crée le <strong>logiciel</strong> qui s’en charge, et <strong>le code</strong> est à vous.',
  'Let\'s get started': 'Commencer mon projet',
  'For example:': 'Par exemple :',
  'Read, sort and answer my emails for me.': 'Lire, trier et répondre à mes mails.',
  'Build me a dashboard made for my business.': 'Créer le dashboard de mon activité.',
  'Create my invoices and chase the unpaid ones.': 'Faire mes factures et relancer les impayés.',
  'Plan my week ahead in my calendar.': 'Planifier ma semaine dans l’agenda.',
  'Track my spending and prep my books for the accountant.': 'Suivre mes dépenses et tout préparer pour le comptable.',
  'Sort my photos into albums for me.': 'Ranger mes photos dans des albums.',
  'Freelance software engineer in Paris and Aix-en-Provence, France.': 'Ingénieur logiciel indépendant, à Paris et à Aix-en-Provence.',

  // the app drawn beside the title
  'Reconciliation': 'Réconciliation',
  'Ledger': 'Journal',
  'Dashboard': 'Dashboard',
  'Mail automation': 'Mails automatisés',
  'Mac OS apps': 'Apps macOS',
  'Daily reconciliation': 'Réconciliation du jour',
  'Fund A against Prime broker, 23 Oct': 'Fonds A vs prime broker, 23 oct.',
  '1,284 positions': '1 284 positions',
  '1,282 matched, 2 breaks': '1 282 réconciliées, 2 écarts',
  'Fund': 'Fonds',
  'Broker': 'Courtier',
  'Status': 'Statut',
  'Matched': 'Réconcilié',
  'Break −20': 'Écart −20',
  'Break': 'Écart',
  'EUR cash': 'Cash EUR',
  '1.42M': '1,42 M',
  '1.39M': '1,39 M',
  'Finance ledger': 'Journal comptable',
  'Fund A, every entry, 23 Oct': 'Fonds A, écritures du 23 oct.',
  '3,412 entries': '3 412 écritures',
  'each one traced to the file it came from': 'chacune reliée à son fichier d’origine',
  'Entry': 'Écriture',
  'Amount': 'Montant',
  'Buy ROG SW': 'Achat ROG SW',
  'Sell BMW GY': 'Vente BMW GY',
  'Dividend INGA': 'Dividende INGA',
  'Broker fee': 'Courtage',
  'FX forward': 'Change à terme',
  'Custodian': 'Dépositaire',
  'Statement': 'Relevé',
  'Firm dashboard': 'Dashboard du cabinet',
  'Martin & Co accountants, 23 Oct': 'Cabinet Martin & Associés, 23 oct.',
  '4 alerts': '4 alertes',
  'Bank feeds, inbox and tax dates, every hour': 'Banque, mails et impôts, toutes les heures',
  '<b>2 bank lines match no invoice</b>Dupont SARL, €1,240': '<b>2 lignes bancaires sans facture</b>Dupont SARL, 1 240 €',
  '<b>6 receipts by mail, 2 unreadable</b>Leroy Bakery': '<b>6 justificatifs reçus, 2 illisibles</b>Boulangerie Leroy',
  '<b>VAT return due Friday</b>Garnier &amp; Fils': '<b>TVA à déclarer vendredi</b>Garnier &amp; Fils',
  '<b>October payroll sent</b>14 clients': '<b>Paies d’octobre envoyées</b>14 clients',
  'Inbox triage': 'Tri des mails',
  'Operations inbox, last 24 hours': 'Boîte Opérations, dernières 24 h',
  '201 filed on their own, 13 left for you': '201 classés tout seuls, 13 pour vous',
  'From': 'De',
  'Subject': 'Objet',
  'Daily statement': 'Relevé du jour',
  'Filed': 'Classé',
  'Fund admin': 'Administrateur',
  'NAV pack': 'VL du jour',
  'Fee question': 'Question frais',
  'For you': 'Pour vous',
  'Trade confirm': 'Avis d’opéré',
  'Auditor': 'Auditeur',
  'Year-end audit': 'Audit annuel',
  'Agent sessions': 'Sessions d’agents',
  'Every session on this Mac': 'Toutes les sessions du Mac',
  '3 working, 2 waiting for you': '3 actives, 2 vous attendent',
  'Last step': 'Dernière étape',
  'Ran the tests': 'Tests lancés',
  'Working': 'En cours',
  'Booked the trades': 'Ordres comptabilisés',
  'Asked a question': 'Question posée',
  'Waiting': 'En attente',
  'Sorted 40 mails': '40 mails triés',
  'Built version 2.1': 'Version 2.1 compilée',

  'Software for the work you repeat.': 'Le travail répété, codé une fois.',
  'Six kinds of things I know well and can build for you, end to end: from the data model to the screen your team uses.':
    'Six domaines que je maîtrise et que je construis de bout en bout, du modèle de données à l’écran de votre équipe.',
  'Reconciliation engines': 'Réconciliation des flux',
  'Positions, trades and cash checked against your brokers\', custodian\'s and administrator\'s files every day. It starts when the files land, explains each break and alerts you.':
    'Positions, ordres et cash comparés chaque jour aux fichiers de vos courtiers, dépositaire et administrateur. Dès leur arrivée, il explique les écarts et vous alerte.',
  'Finance ledgers': 'Journal comptable',
  'Trades, positions and cash in one place, every change kept, every number traceable to the file it came from.':
    'Ordres, positions et cash réunis, chaque modification conservée, chaque chiffre relié à son fichier source.',
  'Automation': 'Automatisation',
  'File feeds, mail, reports and the web tasks you copy and paste today: scheduled, logged and checked, so nobody has to watch them.':
    'Flux de fichiers, mails, rapports et tâches web faites au copier-coller : planifiés, tracés et vérifiés, sans personne pour les surveiller.',
  'AI integration': 'IA intégrée',
  'Language models wired into your tools with the guardrails in code: structured outputs, validation, and only the data you choose ever sent out.':
    'Des modèles de langage branchés sur vos outils, avec les garde-fous dans le code : sorties structurées, validation, et rien ne sort sans votre accord.',
  'Dashboards and internal tools': 'Dashboards et outils internes',
  'Web apps that replace the shared spreadsheet, in Next.js, Django or Odoo, built so your team can keep them up to date.':
    'Des applis web qui remplacent l’Excel partagé, en Next.js, Django ou Odoo, conçues pour que votre équipe les tienne à jour.',
  'Native apps and engines': 'Apps natives et moteurs',
  'macOS apps in Swift, Android in Kotlin, and C++ when speed matters, down to a Vulkan rendering engine and a compiler written from scratch.':
    'Apps macOS en Swift, Android en Kotlin, et C++ quand la vitesse compte, jusqu’à un moteur de rendu Vulkan et un compilateur faits maison.',

  'Selected projects.': 'Quelques projets.',
  '2026 · personal': '2026 · personnel',
  '2024 · team of 5': '2024 · équipe de 5',
  'Building the firm\'s own finance ledger, so it can stop paying another company for one.':
    'Le journal comptable interne de la société, pour qu’elle cesse de payer un éditeur.',
  'Reconciliation engine': 'Réconciliation',
  'An automated reconciliation engine with a dashboard and alerts.': 'Un moteur qui réconcilie tout seul, avec un dashboard et des alertes.',
  'LLM inbox triage: one batched call scores every mail, and plain code, not the model, decides what may be deleted. About $0.05 a month to run.':
    'Tri de mails par LLM : un appel groupé note chaque mail, et c’est le code, pas le modèle, qui décide quoi supprimer. Environ 0,05 $ par mois.',
  'A macOS app that shows the state of every AI agent session at a glance and brings back the matching terminal in one click.':
    'Une app macOS qui montre d’un coup d’œil l’état de chaque session d’agent IA, et rouvre le bon terminal en un clic.',
  'A rendering engine where scenes are programs: shapes declared and animated in Python, rendered frame by frame to video.':
    'Un moteur de rendu où chaque scène est un programme : formes déclarées et animées en Python, et rendues image par image.',
  'A programming language with its own compiler and virtual machine, written from scratch. Released as v1.0.0 with a manual and a VS Code extension.':
    'Un langage de programmation avec son compilateur et sa machine virtuelle, écrits de zéro. Publié en v1.0.0 avec un manuel et une extension VS Code.',
  'Compilers': 'Compilateurs',
  'Bytecode VM': 'Bytecode',

  'Three steps, no surprises.': 'Trois étapes, zéro surprise.',
  'A free 30-minute call': 'Appel gratuit de 30 min',
  'You show me the task and where its data lives. I tell you whether software is the right fix, and what it would take.':
    'Vous me montrez la tâche et ses données. Je vous dis si un logiciel est la solution, et ce que ça demande.',
  'A written quote': 'Un devis écrit',
  'Scope, price and delivery date agreed in writing before any work starts.': 'Périmètre, prix et date de livraison fixés par écrit avant tout démarrage.',
  'Weekly demos, code you own': 'Une démo hebdo, code à vous',
  'You see it run on your own data every week. At the end, the code, the documentation and the access are yours.':
    'Vous le voyez tourner sur vos données chaque semaine. À la fin, code, documentation et accès vous reviennent.',

  'Pay once. <span class="blue">Own it for good.</span>': 'Payez une fois. <span class="blue">Gardez-le à vie.</span>',
  'Boost: half the time': 'Boost : 2× plus vite',
  'Task': 'Tâche',
  'Start here': 'Commencez ici',
  'A matter of days.': 'En quelques jours.',
  'A matter of hours.': 'En quelques heures.',
  'A matter of weeks.': 'En quelques semaines.',
  '€440–1,100': '440–1 100 €',
  '€640–1,600': '640–1 600 €',
  '€2,200–5,500': '2 200–5 500 €',
  '€3,200–8,000': '3 200–8 000 €',
  '€5,500+': 'Dès 5 500 €',
  '2 to 4 days': '2 à 4 jours',
  '24 to 48 hours': '24 à 48 heures',
  '2 to 4 weeks': '2 à 4 semaines',
  '5 to 10 days': '5 à 10 jours',
  'to production': 'pour livrer',
  '€55': '55 €',
  '€80': '80 €',
  '· €55/h': '· 55 €/h',
  'Choose Task': 'Choisir Tâche',
  'Choose App': 'Choisir App',
  'Choose Ecosystem': 'Choisir Écosystème',
  'Build': 'Livré',
  'Own': 'À vous',
  '<b>1</b> task your team does by hand': '<b>1</b> tâche faite à la main',
  'Runs on <b>your own data</b>': 'Tourne sur <b>vos données</b>',
  '<b>1</b> demo before it goes live': '<b>1</b> démo avant le lancement',
  'The source code': 'Le code source',
  'Its documentation': 'Sa documentation',
  'Every access and account': 'Tous les accès et comptes',
  '<b>1</b> app built around your work': '<b>1</b> app faite pour votre métier',
  'A demo <b>every week</b>': 'Une démo <b>par semaine</b>',
  'Ecosystem': 'Écosystème',
  'All you need.': 'Tout compris.',
  'App by app': 'App par app',
  ', each one quoted first': ', chiffrées tour à tour',
  'Apps that <b>feed each other</b>': 'Des apps <b>qui se parlent</b>',

  'What does your team do by hand every week?': 'Que faites-vous à la main chaque semaine ?',
  'Write me, or ask for the free 30-minute call.': 'Écrivez-moi, ou demandez l’appel gratuit de 30 min.',
  'Legal notice': 'Mentions légales',
  'Home': 'Retour',

  // legal.html
  'Publisher': 'Éditeur',
  ', entrepreneur individuel (EI). Trade name: M3 Labs.': ', entrepreneur individuel (EI), sous le nom M3 Labs.',
  'Phone +33 6 69 47 87 54': 'Tél. +33 6 69 47 87 54',
  'Publication director: Marius Rousset.': 'Directeur de publication : M. Rousset.',
  'Host': 'Hébergeur',
  'GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States. Phone +1 415 857 5430. https://github.com':
    'GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis. Téléphone +1 415 857 5430. https://github.com',
  'Personal data': 'Données personnelles',
  'This site sets no cookies and runs no analytics. The host may log visitors\' IP addresses for security, as described in GitHub\'s privacy statement. A mail you send to contact@m3labs.fr is forwarded to Marius Rousset\'s Gmail mailbox, read by him only and used only to answer you. To have it deleted, write to the same address.':
    'Aucun cookie ni mesure d’audience sur ce site. L’hébergeur peut enregistrer l’IP des visiteurs par sécurité, selon la politique de confidentialité de GitHub. Un mail que vous envoyez à contact@m3labs.fr arrive dans la boîte Gmail de Marius Rousset, lu par lui seul, pour vous répondre. Pour l’effacer, écrivez à la même adresse.',
};
let lang = 'en';
const t = s => lang === 'fr' && FR[s] || s;
{
  const swaps = [], fr = k => FR[k] || (/^[−+]?\d{1,3}(,\d{3})+$/.test(k) ? k.replace(/,/g, ' ') : null);
  const collect = el => {
    for (const n of el.childNodes) {
      if (n.nodeType === 3) { const k = n.data.trim(), f = k && fr(k); if (f) swaps.push([n, 'data', n.data, n.data.replace(k, f)]); }
      else if (n.nodeType === 1 && !/^(SCRIPT|svg)$/.test(n.tagName)) {
        const k = n.innerHTML.trim(), f = fr(k);
        f ? swaps.push([n, 'innerHTML', n.innerHTML, n.innerHTML.replace(k, f)]) : collect(n);
      }
    }
  };
  collect(document.body);
  for (const a of document.querySelectorAll('a[href^="mailto:"]')) {
    const f = FR[new URL(a.href).searchParams.get('subject')];
    if (f) swaps.push([a, 'href', a.href, a.href.replace(/subject=[^&]*/, 'subject=' + encodeURIComponent(f))]);
  }
  swaps.push([document, 'title', document.title, FR[document.title] || document.title]);
  const buttons = document.querySelectorAll('.lang button');
  const set = l => {
    lang = l;
    document.documentElement.lang = l;
    for (const [n, k, en, f] of swaps) n[k] = l === 'fr' ? f : en;
    for (const b of buttons) b.setAttribute('aria-pressed', b.dataset.lang === l);
    document.dispatchEvent(new Event('langchange'));
  };
  for (const b of buttons) b.addEventListener('click', () => { localStorage.setItem('lang', b.dataset.lang); set(b.dataset.lang); });
  set(localStorage.getItem('lang') || (navigator.language.startsWith('fr') ? 'fr' : 'en'));
}
