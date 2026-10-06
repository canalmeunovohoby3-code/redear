export const MEDIA = {
  logo: '/logo.png',
  hero: '/foto3.jpeg',
  tubing: '/foto2.jpeg',
  institutional: '/foto8.jpeg',
  video: '/video.mp4',
  videoPoster: '/video-poster.jpg',
} as const

export const GALLERY_PHOTOS = [
  { src: '/foto4.jpeg', alt: 'Sala de compressores e rede de ar comprimido' },
  { src: '/foto1.jpeg', alt: 'Rede de ar comprimido instalada com tubulações e válvulas' },
  { src: '/foto5.jpeg', alt: 'Montagem de tubulação de ar comprimido em altura' },
  { src: '/foto6.jpeg', alt: 'Distribuição de ar comprimido em ambiente industrial' },
] as const

// Cards da seção "Serviços de Engenharia".
// Para publicar cada card: coloque a imagem em /public e informe o caminho em `src`
// (ex.: '/engenharia-1.jpg') e o texto em `title`.
export const ENGINEERING_CARDS = [
  { title: 'Vista em planta da Sala de Compressores', src: '/1.png', alt: 'Vista em planta da sala de compressores' },
  { title: 'Projeto da Sala de Compressores 3D', src: '/2.png', alt: 'Projeto 3D da sala de compressores' },
  { title: 'Título do serviço 03', src: '', alt: 'Serviço de engenharia RedeAr' },
  { title: 'Título do serviço 04', src: '', alt: 'Serviço de engenharia RedeAr' },
] as const
