export const MEDIA = {
  logo: './logo.png',
  hero: './foto3.jpeg',
  tubing: './foto2.jpeg',
  institutional: './foto8.jpeg',
  video: './video.mp4',
  videoPoster: './video-poster.jpg',
} as const

export const GALLERY_PHOTOS = [
  { src: './foto4.jpeg', alt: 'Sala de compressores e rede de ar comprimido' },
  { src: './foto1.jpeg', alt: 'Rede de ar comprimido instalada com tubulações e válvulas' },
  { src: './foto5.jpeg', alt: 'Montagem de tubulação de ar comprimido em altura' },
  { src: './foto6.jpeg', alt: 'Distribuição de ar comprimido em ambiente industrial' },
] as const

// Cards da seção "Serviços de Engenharia".
// Para publicar cada card: coloque a imagem em /public (mesma pasta dos demais assets)
// e informe o caminho relativo em `src` (ex.: './engenharia-1.jpg'),
// o título em `title` e uma descrição opcional em `text`.
export type EngineeringCard = {
  title: string
  text?: string
  src: string
  alt: string
}

export const ENGINEERING_CARDS: EngineeringCard[] = [
  { title: 'Projetos e dimensionamento de rede de distribuição de ar comprimido', src: './1.jpeg', alt: 'Vista em planta da sala de compressores' },
  { title: 'Projeto da Sala de Compressores 3D', src: './2.jpeg', alt: 'Projeto 3D da sala de compressores' },
  { title: 'Caça vazamentos em linha de Ar Comprimido', src: './3.jpeg', alt: 'Caça vazamentos em linha de ar comprimido' },
  { title: 'Fabricação e Montagem de Dutos de Exaustão', src: './4.png', alt: 'Fabricação e montagem de dutos de exaustão' },
]
