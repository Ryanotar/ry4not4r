import jaImage from '../assets/ja.JPG';
import geniale from '../assets/geniale.jpg';
import cyber from '../assets/cyber.jpg';

const projects = [
  {
  title: 'JA Italia',
  category: 'ImpresainAzione',
  description: [
  "In team, abbiamo sviluppato SmartSafety, una piattaforma avanzata per il monitoraggio e la gestione in tempo reale di situazioni critiche, progettata per garantire sicurezza e interventi tempestivi."  ],
  image: jaImage,
  },
  {
    title: 'IA al Sì Geniale',
    category: 'Giardino delle invenzioni',
    description: [
    "Ho parlato dell’evoluzione dell’intelligenza artificiale, con un focus sui modelli linguistici di tipo autoregressivo, capaci di generare testo coerente e contestuale. Ho introdotto i concetti fondamentali di apprendimento supervisionato e rinforzato. A supporto, ho presentato il progetto MENACE (Matchbox Educable Noughts And Crosses Engine)."  ],
    image: geniale,
  },
  {
    title: 'CyberSecurity',
    category: 'Severi && Eset',
    description: [
    "Abbiamo approfondito il tema della cybersicurezza analizzando le principali vulnerabilità dei sistemi informatici, tra cui attacchi di tipo phishing, malware, exploit zero-day e tecniche di social engineering."  ],
    image: cyber,
  },
];

export default projects;
