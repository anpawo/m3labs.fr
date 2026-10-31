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
  'Book a call': 'Réserver un appel',

  'Stop renting software.<br><span class="blue">Start owning it.</span>': 'Ne louez plus d’outils.<br><span class="blue">Possédez-les.</span>',
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
  'General Ledger': 'Grand livre',
  'Dashboard': 'Dashboard',
  'Mail automation': 'Mails automatisés',
  'Mac OS apps': 'Apps macOS',
  'Trade date': 'Date d’opération',
  '23 Oct 2026': '23 oct. 2026',
  'Trades': 'Ordres',
  'Breaks': 'Écarts',
  'To book': 'À saisir',
  'Cleaned up': 'Résolus',
  'Side': 'Sens',
  'Buy': 'Achat',
  'Sell': 'Vente',
  'Break': 'Écart',
  'Quantity': 'Quantité',
  'Fund only': 'Fonds seul',
  'Month': 'Mois',
  'October 2026': 'Octobre 2026',
  '23 Oct': '23 oct.',
  '22 Oct': '22 oct.',
  '21 Oct': '21 oct.',
  '20 Oct': '20 oct.',
  'Subscription': 'Souscription',
  'Buy INGA NA': 'Achat INGA NA',
  'Custody fee': 'Droits de garde',
  'Balance': 'Solde',
  'Firm': 'Cabinet',
  'Martin & Co': 'Martin & Associés',
  'Receipts': 'Justificatifs',
  'Alerts': 'Alertes',
  'Draft ready': 'Brouillon prêt',
  'Missing statement': 'Relevé manquant',
  'Chased': 'Relancé',
  'Exec broker': 'Courtier exécutant',
  'Yesterday': 'Hier',
  'Break found': 'Écart trouvé',
  'All': 'Toutes',
  'now': 'à l’instant',
  'Done': 'Terminée',
  'Chased 3 invoices': '3 factures relancées',
  'Invoices': 'Factures',
  'Report': 'Rapport',
  'Sent the PDF': 'PDF envoyé',
  'Fund': 'Fonds',
  'Broker': 'Courtier',
  'Entry': 'Écriture',
  'Amount': 'Montant',
  'Buy ROG SW': 'Achat ROG SW',
  'Sell BMW GY': 'Vente BMW GY',
  'Dividend INGA': 'Dividende INGA',
  'Broker fee': 'Courtage',
  'FX forward': 'Change à terme',
  'Custodian': 'Dépositaire',
  'Statement': 'Relevé',
  '<b>2 bank lines match no invoice</b>Dupont SARL, €1,240': '<b>2 lignes bancaires sans facture</b>Dupont SARL, 1 240 €',
  '<b>6 receipts by mail, 2 unreadable</b>Leroy Bakery': '<b>6 justificatifs reçus, 2 illisibles</b>Boulangerie Leroy',
  '<b>VAT return due Friday</b>Garnier &amp; Fils': '<b>TVA à déclarer vendredi</b>Garnier &amp; Fils',
  '<b>October payroll sent</b>14 clients': '<b>Paies d’octobre envoyées</b>14 clients',
  'Filed': 'Classé',
  'Fund admin': 'Administrateur',
  'NAV pack': 'VL du jour',
  'Fee question': 'Question frais',
  'For you': 'Pour vous',
  'Trade confirm': 'Avis d’opéré',
  'Auditor': 'Auditeur',
  'Year-end audit': 'Audit annuel',
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
  'A free call': 'Un appel gratuit',
  'By phone or by video, 30 minutes at most. You show me the task and where its data lives. I tell you whether software is the right fix, and what it would take.':
    'Par téléphone ou en vidéo, 30 minutes au plus. Vous me montrez la tâche et ses données. Je vous dis si un logiciel est la solution, et ce que ça demande.',
  'A written quote': 'Un devis écrit',
  'Scope, price and delivery date agreed in writing before any work starts.': 'Périmètre, prix et date de livraison fixés par écrit avant tout démarrage.',
  'Weekly demos, code you own': 'Une démo hebdo, code à vous',
  'You see it run on your own data every week. At the end, the code, the documentation and the access are yours.':
    'Vous le voyez tourner sur vos données chaque semaine. À la fin, code, documentation et accès vous reviennent.',

  'Pay once. <span class="blue">Own it for good.</span>': 'Payez une fois. <span class="blue">Gardez-le à vie.</span>',
  'Boost: half the time': 'Boost : 2× plus vite',
  'Task': 'Tâche',
  'Recommended': 'Recommandé',
  'A matter of days.': 'En quelques jours.',
  'A matter of hours.': 'En quelques heures.',
  'A matter of weeks.': 'En quelques semaines.',
  '€800–1,200': '800–1 200 €',
  '€1,200–1,800': '1 200–1 800 €',
  '€3,000–6,000': '3 000–6 000 €',
  '€4,500–9,000': '4 500–9 000 €',
  '€8,000+': 'Dès 8 000 €',
  'under a week': 'moins d’une semaine',
  '24 to 48 hours': '24 à 48 heures',
  '2 to 4 weeks': '2 à 4 semaines',
  '5 to 10 days': '5 à 10 jours',
  'Ready in': 'Livrable en',
  'Choose Task': 'Choisir Tâche',
  'Choose App': 'Choisir App',
  'Choose Ecosystem': 'Choisir Écosystème',
  'Yours on every plan': 'À vous, dans chaque offre',
  '<b>The code</b> and its docs': '<b>Le code</b> et sa doc',
  '<b>Every account</b>, in your name': '<b>Tous les comptes</b>, à votre nom',
  '<b>Your data</b>, under NDA': '<b>Vos données</b>, sous NDA',
  '<b>3 months</b> of free fixes': '<b>3 mois</b> de correctifs offerts',
  '<b>1</b> manual task, <b>automated</b>': '<b>1</b> tâche manuelle, <b>automatisée</b>',
  'A demo on <b>your data</b> before go-live': 'Démo sur <b>vos données</b> avant lancement',
  'Runs by itself, <b>alerts you</b> if it fails': 'Tourne seul, <b>vous alerte</b> en cas de panne',
  '<b>1</b> app built around your work': '<b>1</b> app faite pour votre métier',
  'A demo <b>every week</b>': 'Une démo <b>par semaine</b>',
  'Logins and roles for <b>your team</b>': 'Comptes et droits pour <b>votre équipe</b>',
  'Your team <b>trained</b> on it': 'Votre équipe <b>formée</b> à l’outil',
  'Ecosystem': 'Écosystème',
  'All you need.': 'Tout compris.',
  'App by app': 'App par app',
  ', each one quoted first': ', chiffrées tour à tour',
  'Apps that share <b>one database</b>': 'Des apps sur <b>une base commune</b>',
  '<b>1</b> dashboard over them all': '<b>1</b> tableau de bord commun',
  'Every figure <b>traced to its source</b>': 'Chaque chiffre <b>relié à sa source</b>',
  'Runs <b>beside your current tool</b> first': 'D’abord <b>en parallèle de votre outil</b>',
  'Backups, <b>restore tested</b>': 'Sauvegardes, <b>restauration testée</b>',

  'Let\'s talk about your project.': 'Parlons de votre projet.',
  'Legal notice': 'Mentions légales',
  'Home': 'Accueil',
  'Terms': 'Conditions',
  'Privacy': 'Confidentialité',

  // the contact popup
  'Message me on LinkedIn': 'M’écrire sur LinkedIn',
  'Email me at contact@m3labs.fr': 'M’écrire à contact@m3labs.fr',
  'Address copied': 'Adresse copiée',
  'Video': 'Vidéo',
  'Your details': 'Vos coordonnées',
  'Name': 'Nom',
  'Phone': 'Téléphone',
  'What is it about? <small>Optional</small>': 'De quoi s’agit-il ? <small>Facultatif</small>',
  'Book this call': 'Réserver cet appel',
  'Booked.': 'C’est réservé.',

  // legal.html
  'Publisher': 'Éditeur',
  ', entrepreneur individuel (EI). Trade name: M3 Labs.': ', entrepreneur individuel (EI), sous le nom M3 Labs.',
  'Phone +33 6 69 47 87 54': 'Tél. +33 6 69 47 87 54',
  'Publication director: Marius Rousset.': 'Directeur de publication : M. Rousset.',
  'Host': 'Hébergeur',
  'GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States. Phone +1 415 857 5430. https://github.com':
    'GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis. Téléphone +1 415 857 5430. https://github.com',
  'Personal data': 'Données personnelles',
  'How M3 Labs handles personal data (what it collects, why, for how long, and your rights) is set out in the <a href="privacy.html">privacy policy</a>.':
    'La façon dont M3 Labs traite les données personnelles (ce qu’il recueille, pourquoi, combien de temps, et vos droits) est décrite dans la <a href="privacy.html">politique de confidentialité</a>.',
};
// terms.html and privacy.html carry their own French, too long to load on every page
Object.assign(FR, self.FR_PAGE);

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
  for (const i of document.querySelectorAll('[placeholder]')) { const f = FR[i.placeholder]; if (f) swaps.push([i, 'placeholder', i.placeholder, f]); }
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
