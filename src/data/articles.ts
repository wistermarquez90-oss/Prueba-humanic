import type { Article } from './types';

export const articles: Article[] = [
  {
    id: 'art-001',
    title: 'Fermentación y sociedad: Una perspectiva sociocultural del vino en los Andes venezolanos',
    abstract: 'Este estudio examina las prácticas de fermentación tradicional en comunidades andinas de Venezuela, analizando su significado sociocultural y su papel en la construcción de identidades locales. A través de un enfoque etnográfico, se identifican los saberes ancestrales asociados a la producción artesanal de vino de frutas tropicales.',
    authors: ['María Elena Rojas', 'Carlos Andrés Pérez'],
    year: 2024,
    volume: 12,
    issue: 2,
    tags: ['Ciencias Sociales', 'Antropología', 'Etnografía', 'Saberes Ancestrales'],
    pdfUrl: '/documents/art-001.pdf',
    doi: '10.5281/zenodo.1234567',
    citations: 8
  },
  {
    id: 'art-002',
    title: 'Impacto económico de la microempresa vitivinícola en el desarrollo regional del estado Mérida',
    abstract: 'Se analiza la contribución de las microempresas productoras de vino artesanal al desarrollo económico local en tres municipios del estado Mérida, Venezuela. Mediante modelos econométricos, se cuantifica el efecto multiplicador de estas actividades en la generación de empleo y el comercio local.',
    authors: ['Luis Fernando Torres', 'Ana Beatriz Mendoza'],
    year: 2024,
    volume: 12,
    issue: 2,
    tags: ['Economía', 'Desarrollo Regional', 'Emprendimiento', 'Microempresas'],
    pdfUrl: '/documents/art-002.pdf',
    doi: '10.5281/zenodo.1234568',
    citations: 15
  },
  {
    id: 'art-003',
    title: 'Bioprospección de levaduras nativas para la fermentación de mostos tropicales',
    abstract: 'Investigación sobre el aislamiento y caracterización de cepas de levaduras nativas presentes en la región andina venezolana, evaluando su potencial para la fermentación de mostos de frutas tropicales como mango, guayaba y parchita.',
    authors: ['Diana Carolina Silva', 'José Manuel Gómez', 'Rafael Eduardo Díaz'],
    year: 2024,
    volume: 12,
    issue: 1,
    tags: ['Biología', 'Microbiología', 'Biotecnología', 'Fermentación'],
    pdfUrl: '/documents/art-003.pdf',
    doi: '10.5281/zenodo.1234569',
    citations: 23
  },
  {
    id: 'art-004',
    title: 'Patrimonio cultural inmaterial: Las rutas del vino en la cordillera andina',
    abstract: 'Propuesta de catalogación de las rutas vitivinícolas artesanales como patrimonio cultural inmaterial, documentando las técnicas tradicionales de elaboración, los paisajes culturales asociados y las dinámicas comunitarias de transmisión intergeneracional del conocimiento.',
    authors: ['Patricia Andrea Vega', 'Santiago Alejandro Ruiz'],
    year: 2023,
    volume: 11,
    issue: 3,
    tags: ['Patrimonio Cultural', 'Turismo', 'Geografía', 'Ciencias Sociales'],
    pdfUrl: '/documents/art-004.pdf',
    doi: '10.5281/zenodo.1234570',
    citations: 12
  },
  {
    id: 'art-005',
    title: 'Análisis sensorial comparativo de vinos artesanales: Metodologías y perfiles organolépticos',
    abstract: 'Estudio que establece metodologías de análisis sensorial aplicadas a vinos artesanales producidos en la región, identificando perfiles organolépticos característicos y factores que influyen en la calidad percibida por panelistas entrenados y consumidores.',
    authors: ['Carolina Pilar Moreno', 'Eduardo José Vargas'],
    year: 2023,
    volume: 11,
    issue: 2,
    tags: ['Ciencias de la Alimentación', 'Análisis Sensorial', 'Calidad'],
    pdfUrl: '/documents/art-005.pdf',
    doi: '10.5281/zenodo.1234571',
    citations: 19
  },
  {
    id: 'art-006',
    title: 'Sostenibilidad y prácticas agroecológicas en viñedos de altura: Casos de estudio en Venezuela',
    abstract: 'Evaluación de prácticas agroecológicas implementadas en pequeños viñedos de la región andina venezolana, analizando indicadores de sostenibilidad ambiental, económica y social a través de un enfoque de agricultura regenerativa.',
    authors: ['Andrea Lucía Castillo', 'Miguel Ángel Rincón'],
    year: 2023,
    volume: 11,
    issue: 1,
    tags: ['Agroecología', 'Sostenibilidad', 'Medio Ambiente', 'Agricultura'],
    pdfUrl: '/documents/art-006.pdf',
    doi: '10.5281/zenodo.1234572',
    citations: 31
  }
];

export const getFeaturedArticles = (): Article[] => {
  return articles.slice(0, 3);
};

export const getArticlesByYear = (year: number): Article[] => {
  return articles.filter(article => article.year === year);
};

export const getArticlesByVolume = (volume: number): Article[] => {
  return articles.filter(article => article.volume === volume);
};

export const getArticlesByTag = (tag: string): Article[] => {
  return articles.filter(article => 
    article.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};
