import type { Author } from './types';

export const authors: Author[] = [
  {
    id: 'auth-001',
    name: 'María Elena',
    lastName: 'Rojas',
    title: 'Dra.',
    specialty: 'Antropología Social',
    bio: 'Doctora en Antropología por la Universidad Central de Venezuela. Investigadora especializada en etnografía de los Andes venezolanos y saberes tradicionales relacionados con la alimentación y la fermentación. Miembro del equipo editorial de FERMENTUM desde 2019.',
    photo: '/images/authors/maria-rojas.jpg',
    email: 'mrojas@humanic.ula.ve',
    orcid: '0000-0001-2345-6789',
    articles: ['art-001'],
    affiliations: ['Universidad de Los Andes', 'Centro de Investigación Humanic']
  },
  {
    id: 'auth-002',
    name: 'Carlos Andrés',
    lastName: 'Pérez',
    title: 'Dr.',
    specialty: 'Sociología',
    bio: 'Doctor en Sociología por la Universidad de Los Andes. Sus líneas de investigación incluyen estudios de la alimentación desde una perspectiva sociológica, cultura material y prácticas sociales en contextos rurales andinos.',
    photo: '/images/authors/carlos-perez.jpg',
    email: 'cperez@humanic.ula.ve',
    orcid: '0000-0002-3456-7890',
    articles: ['art-001'],
    affiliations: ['Universidad de Los Andes']
  },
  {
    id: 'auth-003',
    name: 'Luis Fernando',
    lastName: 'Torres',
    title: 'Dr.',
    specialty: 'Economía Regional',
    bio: 'Doctor en Economía con énfasis en desarrollo regional. Ha publicado extensamente sobre el impacto de las cadenas productivas locales en el crecimiento económico de zonas rurales de Venezuela. Coordinador de la línea de investigación en Economía y Desarrollo de Humanic.',
    photo: '/images/authors/luis-torres.jpg',
    email: 'ltorres@humanic.ula.ve',
    orcid: '0000-0003-4567-8901',
    articles: ['art-002'],
    affiliations: ['Universidad de Los Andes', 'Centro de Investigación Humanic']
  },
  {
    id: 'auth-004',
    name: 'Diana Carolina',
    lastName: 'Silva',
    title: 'Dra.',
    specialty: 'Microbiología',
    bio: 'Doctora en Ciencias Biológicas. Experta en bioprospección de microorganismos fermentativos nativos y biotecnología aplicada a productos regionales. Lidera proyectos de investigación sobre caracterización de levaduras autóctonas.',
    photo: '/images/authors/diana-silva.jpg',
    email: 'dsilva@humanic.ula.ve',
    orcid: '0000-0004-5678-9012',
    articles: ['art-003'],
    affiliations: ['Universidad de Los Andes']
  },
  {
    id: 'auth-005',
    name: 'Patricia Andrea',
    lastName: 'Vega',
    title: 'MSc.',
    specialty: 'Geografía Cultural',
    bio: 'Magíster en Geografía con especialización en patrimonio territorial. Su trabajo se centra en la documentación y preservación de paisajes culturales alimentarios y rutas del patrimonio en los Andes venezolanos.',
    photo: '/images/authors/patricia-vega.jpg',
    email: 'pvega@humanic.ula.ve',
    orcid: '0000-0005-6789-0123',
    articles: ['art-004'],
    affiliations: ['Universidad de Los Andes']
  },
  {
    id: 'auth-006',
    name: 'Carolina Pilar',
    lastName: 'Moreno',
    title: 'Dra.',
    specialty: 'Ciencias de la Alimentación',
    bio: 'Doctora en Ciencia y Tecnología de Alimentos. Especialista en análisis sensorial de productos fermentados y técnicas de evaluación de calidad organoléptica en contextos de producción artesanal.',
    photo: '/images/authors/carolina-moreno.jpg',
    email: 'cmoreno@humanic.ula.ve',
    orcid: '0000-0006-7890-1234',
    articles: ['art-005'],
    affiliations: ['Universidad de Los Andes']
  }
];

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find(author => author.id === id);
};

export const getAuthorsBySpecialty = (specialty: string): Author[] => {
  return authors.filter(author => 
    author.specialty.toLowerCase().includes(specialty.toLowerCase())
  );
};
