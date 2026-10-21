export type Animal = {
  id: string;
  name: string;
  age: string;
  ageValue: number;
  sex: 'Macho' | 'Hembra';
  type: 'Perro' | 'Gato';
  image: string;
  description: string;
};

export const animals: Animal[] = [
  {
    id: 'luna',
    name: 'Luna',
    age: '2 años',
    ageValue: 2,
    sex: 'Hembra',
    type: 'Perro',
    image: 'https://images.pexels.com/photos/16652367/pexels-photo-16652367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Luna es una perrita llena de energía que adora los paseos largos y los mimos. Está lista para encontrar una familia que le dé todo el amor que merece.',
  },
  {
    id: 'rocky',
    name: 'Rocky',
    age: '4 años',
    ageValue: 4,
    sex: 'Macho',
    type: 'Perro',
    image: 'https://images.pexels.com/photos/35978469/pexels-photo-35978469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Rocky es un compañero leal y tranquilo. Le encanta descansar junto a sus humanos y dar paseos relajados. Necesita un hogar con paciencia y mucho amor.',
  },
  {
    id: 'max',
    name: 'Max',
    age: '1 año',
    ageValue: 1,
    sex: 'Macho',
    type: 'Perro',
    image: 'https://images.pexels.com/photos/8365407/pexels-photo-8365407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Max es un cachorro juguetón que busca una familia activa. Le encantan los juguetes, correr y conocer gente nueva.',
  },
  {
    id: 'nina',
    name: 'Nina',
    age: '3 años',
    ageValue: 3,
    sex: 'Hembra',
    type: 'Perro',
    image: 'https://images.pexels.com/photos/30015440/pexels-photo-30015440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Nina es dulce y protectora. Se lleva muy bien con niños y otros animales. Está lista para ser la guardiana de tu hogar.',
  },
  {
    id: 'milo',
    name: 'Milo',
    age: '5 años',
    ageValue: 5,
    sex: 'Macho',
    type: 'Perro',
    image: 'https://images.pexels.com/photos/7182026/pexels-photo-7182026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Milo es un perro tranquilo y observador. Disfruta de la compañía humana y de los momentos de calma. Ideal para hogares serenos.',
  },
  {
    id: 'coco',
    name: 'Coco',
    age: '6 meses',
    ageValue: 0.5,
    sex: 'Hembra',
    type: 'Gato',
    image: 'https://images.pexels.com/photos/32623314/pexels-photo-32623314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Coco es una gatita curiosa y cariñosa. Le encanta explorar rincones nuevos y recibir mimos. Está lista para llenar tu hogar de alegría.',
  },
  {
    id: 'bella',
    name: 'Bella',
    age: '2 años',
    ageValue: 2,
    sex: 'Hembra',
    type: 'Gato',
    image: 'https://images.pexels.com/photos/32623333/pexels-photo-32623333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Bella es una gata elegante con ojos penetrantes. Es independiente pero muy afectuosa cuando gana confianza. Busca un hogar tranquilo.',
  },
  {
    id: 'toby',
    name: 'Toby',
    age: '1 año',
    ageValue: 1,
    sex: 'Macho',
    type: 'Gato',
    image: 'https://images.pexels.com/photos/32623320/pexels-photo-32623320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Toby es un gato juguetón y aventurero. Adora los juguetes con plumas y trepar. Necesita espacio para explorar y mucho cariño.',
  },
  {
    id: 'daisy',
    name: 'Daisy',
    age: '3 años',
    ageValue: 3,
    sex: 'Hembra',
    type: 'Gato',
    image: 'https://images.pexels.com/photos/32623327/pexels-photo-32623327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Daisy es una gata serena y misteriosa. Le gusta observar desde lugares altos y recibir atención a su propio ritmo. Ideal para hogares pacíficos.',
  },
];
