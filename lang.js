// The pages are written in English. In French, every element whose inner HTML, or text whose words, is a key of FR
// takes its value, and English comes back from what was kept at load; an English text with no key stays English.
// The choice is kept in localStorage, and the browser's language picks it on a first visit
const FR = {
  'M3 Labs | Custom software, reconciliation and automation': 'M3 Labs | Logiciels sur mesure, rapprochement et automatisation',
  'Legal notice | M3 Labs': 'Mentions légales | M3 Labs',
  'What I build': 'Ce que je construis',
  'My work': 'Mes projets',
  'How we work': 'Comment on travaille',
  'Pricing': 'Tarifs',
  'Email me': 'M’écrire',
  'Book a call': 'Prendre RDV',
  'A 30-minute call': 'Un appel de 30 minutes',

  'Stop renting software.<br><span class="blue">Start owning it.</span>': 'Arrêtez de louer vos logiciels.<br><span class="blue">Possédez-les.</span>',
  'Tell me what your team does <strong>by hand</strong>. I build the <strong>software</strong> that does it for you, and you keep <strong>the code</strong>.':
    'Dites-moi ce que votre équipe fait <strong>à la main</strong>. Je construis le <strong>logiciel</strong> qui le fait à sa place, et <strong>le code</strong> reste à vous.',
  'I need that': 'Il me faut ça',
  'What to automate': 'À automatiser',
  'For example:': 'Par exemple :',
  'or': 'ou',
  'Read, sort and answer my emails for me.': 'Lire, trier et répondre à mes mails à ma place.',
  'Build me a dashboard made for my business.': 'Créer un tableau de bord fait pour mon entreprise.',
  'Create my invoices and chase the unpaid ones.': 'Créer mes factures et relancer les impayés.',
  'Plan my week ahead in my calendar.': 'Planifier ma semaine à l’avance dans mon agenda.',
  'Track my spending and get my books ready for the accountant.': 'Suivre mes dépenses et préparer ma compta pour l’expert-comptable.',
  'Sort my photos into albums for me.': 'Trier mes photos en albums à ma place.',
  'Freelance software engineer in Aix-en-Provence and Paris, France.': 'Ingénieur logiciel freelance à Aix-en-Provence et Paris.',

  // the app drawn beside the title
  'Reconciliation': 'Rapprochement',
  'Ledger': 'Grand livre',
  'Dashboard': 'Tableau de bord',
  'Mail automation': 'Automatisation mail',
  'Mac OS apps': 'Apps macOS',
  'Daily reconciliation': 'Rapprochement quotidien',
  'Fund A against Prime broker, 23 Oct': 'Fonds A contre prime broker, 23 oct.',
  '1,284 positions': '1 284 positions',
  '1,282 matched, 2 breaks': '1 282 rapprochées, 2 écarts',
  'Fund': 'Fonds',
  'Broker': 'Courtier',
  'Status': 'Statut',
  'Matched': 'Rapproché',
  'Break −20': 'Écart −20',
  'Break': 'Écart',
  'EUR cash': 'Cash EUR',
  '1.42M': '1,42 M',
  '1.39M': '1,39 M',
  'Finance ledger': 'Grand livre financier',
  'Fund A, every entry, 23 Oct': 'Fonds A, chaque écriture, 23 oct.',
  '3,412 entries': '3 412 écritures',
  'each one traced to the file it came from': 'chacune reliée à son fichier d’origine',
  'Entry': 'Écriture',
  'Amount': 'Montant',
  'Buy ROG SW': 'Achat ROG SW',
  'Sell BMW GY': 'Vente BMW GY',
  'Dividend INGA': 'Dividende INGA',
  'Broker fee': 'Frais de courtage',
  'FX forward': 'Change à terme',
  'Custodian': 'Dépositaire',
  'Statement': 'Relevé',
  'Firm dashboard': 'Tableau de bord du cabinet',
  'Martin & Co accountants, 23 Oct': 'Cabinet Martin & Associés, 23 oct.',
  '4 alerts': '4 alertes',
  'Bank feeds, inbox and tax dates, every hour': 'Banque, boîte mail et échéances fiscales, toutes les heures',
  '<b>2 bank lines match no invoice</b>Dupont SARL, €1,240': '<b>2 lignes bancaires sans facture</b>Dupont SARL, 1 240 €',
  '<b>6 receipts by mail, 2 unreadable</b>Leroy Bakery': '<b>6 justificatifs par mail, 2 illisibles</b>Boulangerie Leroy',
  '<b>VAT return due Friday</b>Garnier &amp; Fils': '<b>Déclaration de TVA vendredi</b>Garnier &amp; Fils',
  '<b>October payroll sent</b>14 clients': '<b>Paie d’octobre envoyée</b>14 clients',
  'Inbox triage': 'Tri de la boîte mail',
  'Operations inbox, last 24 hours': 'Boîte des opérations, dernières 24 h',
  '201 filed on their own, 13 left for you': '201 classés seuls, 13 pour vous',
  'From': 'De',
  'Subject': 'Objet',
  'Daily statement': 'Relevé quotidien',
  'Filed': 'Classé',
  'Fund admin': 'Administrateur',
  'NAV pack': 'Pack VL',
  'Fee question': 'Question sur les frais',
  'For you': 'Pour vous',
  'Trade confirm': 'Confirmation d’ordre',
  'Auditor': 'Auditeur',
  'Year-end audit': 'Audit annuel',
  'Agent sessions': 'Sessions d’agents',
  'Every session on this Mac': 'Toutes les sessions de ce Mac',
  '3 working, 2 waiting for you': '3 au travail, 2 vous attendent',
  'Last step': 'Dernière étape',
  'Ran the tests': 'Tests lancés',
  'Working': 'Au travail',
  'Booked the trades': 'Ordres comptabilisés',
  'Asked a question': 'Question posée',
  'Waiting': 'En attente',
  'Sorted 40 mails': '40 mails triés',
  'Built version 2.1': 'Version 2.1 compilée',

  'Software for the work you repeat.': 'Des logiciels pour le travail que vous répétez.',
  'Six kinds of things I know well and can build for you, end to end: from the data model to the screen your team uses.':
    'Six domaines que je connais bien et que je peux construire pour vous de bout en bout, du modèle de données à l’écran qu’utilise votre équipe.',
  'Reconciliation engines': 'Moteurs de rapprochement',
  'Positions, trades and cash checked against your brokers\', custodian\'s and administrator\'s files every day. It starts when the files land, explains each break and alerts you.':
    'Positions, ordres et cash comparés chaque jour aux fichiers de vos courtiers, de votre dépositaire et de votre administrateur. Il démarre dès que les fichiers arrivent, explique chaque écart et vous alerte.',
  'Finance ledgers': 'Grands livres financiers',
  'Trades, positions and cash in one place, every change kept, every number traceable to the file it came from.':
    'Ordres, positions et cash au même endroit, chaque modification conservée, chaque chiffre relié à son fichier d’origine.',
  'Automation': 'Automatisation',
  'File feeds, mail, reports and the web tasks you copy and paste today: scheduled, logged and checked, so nobody has to watch them.':
    'Flux de fichiers, mails, rapports et les tâches web que vous faites aujourd’hui par copier-coller : planifiés, journalisés et vérifiés, sans que personne ait à les surveiller.',
  'AI integration': 'Intégration d’IA',
  'Language models wired into your tools with the guardrails in code: structured outputs, validation, and only the data you choose ever sent out.':
    'Des modèles de langage branchés sur vos outils, avec les garde-fous dans le code : sorties structurées, validation, et seules les données que vous choisissez sortent.',
  'Dashboards and internal tools': 'Tableaux de bord et outils internes',
  'Web apps that replace the shared spreadsheet, in Next.js, Django or Odoo, built so your team can keep them up to date.':
    'Des applications web qui remplacent le tableur partagé, en Next.js, Django ou Odoo, pensées pour que votre équipe les tienne à jour.',
  'Native apps and engines': 'Applications natives et moteurs',
  'macOS apps in Swift, Android in Kotlin, and C++ when speed matters, down to a Vulkan rendering engine and a compiler written from scratch.':
    'Apps macOS en Swift, Android en Kotlin, et du C++ quand la vitesse compte, jusqu’à un moteur de rendu Vulkan et un compilateur écrit de zéro.',

  'Selected projects.': 'Projets sélectionnés.',
  '2026 · personal': '2026 · personnel',
  '2024 · team of 5': '2024 · équipe de 5',
  'Building the firm\'s own finance ledger, so it can stop paying another company for one.':
    'Je construis le grand livre financier de la société, pour qu’elle arrête d’en payer un à une autre entreprise.',
  'Reconciliation engine': 'Moteur de rapprochement',
  'An automated reconciliation engine with a dashboard and alerts.': 'Un moteur de rapprochement automatisé, avec tableau de bord et alertes.',
  'LLM inbox triage: one batched call scores every mail, and plain code, not the model, decides what may be deleted. About $0.05 a month to run.':
    'Tri de boîte mail par LLM : un seul appel groupé note chaque mail, et c’est du code simple, pas le modèle, qui décide ce qui peut être supprimé. Environ 0,05 $ par mois.',
  'A macOS app that shows the state of every AI agent session at a glance and brings back the matching terminal in one click.':
    'Une app macOS qui montre l’état de chaque session d’agent IA d’un coup d’œil et ramène le bon terminal en un clic.',
  'A rendering engine where scenes are programs: shapes declared and animated in Python, rendered frame by frame to video.':
    'Un moteur de rendu où les scènes sont des programmes : des formes déclarées et animées en Python, rendues image par image en vidéo.',
  'A programming language with its own compiler and virtual machine, written from scratch. Released as v1.0.0 with a manual and a VS Code extension.':
    'Un langage de programmation avec son propre compilateur et sa machine virtuelle, écrit de zéro. Publié en v1.0.0 avec un manuel et une extension VS Code.',
  'Compilers': 'Compilateurs',
  'Bytecode VM': 'VM bytecode',

  'Three steps, no surprises.': 'Trois étapes, aucune surprise.',
  'A free 30-minute call': 'Un appel gratuit de 30 minutes',
  'You show me the task and where its data lives. I tell you whether software is the right fix, and what it would take.':
    'Vous me montrez la tâche et où se trouvent ses données. Je vous dis si un logiciel est la bonne solution, et ce qu’il faudrait.',
  'A written quote': 'Un devis écrit',
  'Scope, price and delivery date agreed in writing before any work starts.': 'Périmètre, prix et date de livraison fixés par écrit avant tout travail.',
  'Weekly demos, code you own': 'Des démos chaque semaine, un code à vous',
  'You see it run on your own data every week. At the end, the code, the documentation and the access are yours.':
    'Vous le voyez tourner sur vos propres données chaque semaine. À la fin, le code, la documentation et les accès sont à vous.',

  'Pay once. <span class="blue">Own it for good.</span>': 'Payez une fois. <span class="blue">Gardez-le pour de bon.</span>',
  'Boost: half the time': 'Boost : deux fois plus vite',
  'Task': 'Tâche',
  'Start here': 'Commencez ici',
  'A matter of days.': 'Une affaire de jours.',
  'A matter of hours.': 'Une affaire d’heures.',
  'A matter of weeks.': 'Une affaire de semaines.',
  '€440–1,100': '440–1 100 €',
  '€640–1,600': '640–1 600 €',
  '€2,200–5,500': '2 200–5 500 €',
  '€3,200–8,000': '3 200–8 000 €',
  '€5,500+': 'Dès 5 500 €',
  '2 to 4 days': '2 à 4 jours',
  '24 to 48 hours': '24 à 48 heures',
  '2 to 4 weeks': '2 à 4 semaines',
  '5 to 10 days': '5 à 10 jours',
  'to production': 'jusqu’à la prod',
  '€55': '55 €',
  '€80': '80 €',
  '· €55/h': '· 55 €/h',
  'Choose Task': 'Choisir Tâche',
  'Choose App': 'Choisir App',
  'Choose Ecosystem': 'Choisir Écosystème',
  'Build': 'Livré',
  'Own': 'À vous',
  '<b>1</b> task your team does by hand': '<b>1</b> tâche que votre équipe fait à la main',
  'Runs on <b>your own data</b>': 'Tourne sur <b>vos propres données</b>',
  '<b>1</b> demo before it goes live': '<b>1</b> démo avant la mise en ligne',
  'The source code': 'Le code source',
  'Its documentation': 'Sa documentation',
  'Every access and account': 'Tous les accès et comptes',
  '<b>1</b> app built around your work': '<b>1</b> app construite autour de votre travail',
  'A demo <b>every week</b>': 'Une démo <b>chaque semaine</b>',
  'Ecosystem': 'Écosystème',
  'All you need.': 'Tout ce qu’il vous faut.',
  'App by app': 'App par app',
  ', each one quoted first': ', chacune chiffrée avant',
  'Apps that <b>feed each other</b>': 'Des apps qui <b>s’alimentent entre elles</b>',

  'What does your team do by hand every week?': 'Que fait votre équipe à la main chaque semaine ?',
  'Write me, or ask for the free 30-minute call.': 'Écrivez-moi, ou demandez l’appel gratuit de 30 minutes.',
  'Legal notice': 'Mentions légales',
  'Home': 'Accueil',

  // legal.html
  'Publisher': 'Éditeur',
  ', entrepreneur individuel (EI). Trade name: M3 Labs.': ', entrepreneur individuel (EI). Nom commercial : M3 Labs.',
  'Phone +33 6 69 47 87 54': 'Téléphone +33 6 69 47 87 54',
  'Publication director: Marius Rousset.': 'Directeur de la publication : Marius Rousset.',
  'Host': 'Hébergeur',
  'GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States. Phone +1 415 857 5430. https://github.com':
    'GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis. Téléphone +1 415 857 5430. https://github.com',
  'Personal data': 'Données personnelles',
  'This site sets no cookies and runs no analytics. The host may log visitors\' IP addresses for security, as described in GitHub\'s privacy statement. A mail you send to contact@m3labs.fr is forwarded to Marius Rousset\'s Gmail mailbox, read by him only and used only to answer you. To have it deleted, write to the same address.':
    'Ce site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience. L’hébergeur peut enregistrer l’adresse IP des visiteurs pour des raisons de sécurité, comme le décrit la déclaration de confidentialité de GitHub. Un mail envoyé à contact@m3labs.fr est transféré vers la boîte Gmail de Marius Rousset, lu par lui seul et utilisé uniquement pour vous répondre. Pour le faire supprimer, écrivez à la même adresse.',
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
