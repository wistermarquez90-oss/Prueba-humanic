import type { Volume } from './types';

export const volumes: Volume[] = [
  {
    id: 'vol-2024-2',
    year: 2024,
    volume: 12,
    issue: 2,
    title: 'Fermentación y Desarrollo Regional',
    description: 'Dossier especial dedicado al análisis del impacto económico y social de las prácticas fermentativas en el desarrollo de regiones andinas.',
    publishedDate: '2024-12-01',
    articleIds: ['art-001', 'art-002']
  },
  {
    id: 'vol-2024-1',
    year: 2024,
    volume: 12,
    issue: 1,
    title: 'Biotecnología y Biodiversidad',
    description: 'Número dedicado a la bioprospección de microorganismos fermentativos nativos y su potencial aplicación en la industria alimentaria.',
    publishedDate: '2024-06-15',
    articleIds: ['art-003']
  },
  {
    id: 'vol-2023-3',
    year: 2023,
    volume: 11,
    issue: 3,
    title: 'Patrimonio Cultural y Turismo',
    description: 'Edición que explora las dimensiones patrimoniales y turísticas de las prácticas vitivinícolas tradicionales.',
    publishedDate: '2023-11-20',
    articleIds: ['art-004']
  },
  {
    id: 'vol-2023-2',
    year: 2023,
    volume: 11,
    issue: 2,
    title: 'Ciencia y Calidad Sensorial',
    description: 'Número centrado en metodologías científicas para la evaluación de la calidad de productos fermentados artesanales.',
    publishedDate: '2023-08-10',
    articleIds: ['art-005']
  },
  {
    id: 'vol-2023-1',
    year: 2023,
    volume: 11,
    issue: 1,
    title: 'Agroecología y Sostenibilidad',
    description: 'Edición dedicada a las prácticas agroecológicas y sostenibilidad en la producción vitivinícola de altura.',
    publishedDate: '2023-04-05',
    articleIds: ['art-006']
  }
];

export const getLatestVolume = (): Volume => {
  return volumes[0];
};

export const getVolumesByYear = (year: number): Volume[] => {
  return volumes.filter(vol => vol.year === year);
};
