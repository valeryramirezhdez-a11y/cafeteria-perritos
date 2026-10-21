export type MenuItem = {
  id: string;
  name: string;
  animal: string;
  price: number;
  image: string;
  category: 'calientes' | 'fríos' | 'frappes' | 'comida' | 'vegano';
};

export const menuItems: MenuItem[] = [
  // Cafés calientes
  {
    id: 'espresso-luna',
    name: 'Espresso Luna',
    animal: 'Luna',
    price: 35,
    image: 'https://images.pexels.com/photos/38523136/pexels-photo-38523136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'calientes',
  },
  {
    id: 'americano-max',
    name: 'Americano Max',
    animal: 'Max',
    price: 40,
    image: 'https://images.pexels.com/photos/7855562/pexels-photo-7855562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'calientes',
  },
  {
    id: 'latte-coco',
    name: 'Latte Coco',
    animal: 'Coco',
    price: 50,
    image: 'https://images.pexels.com/photos/459489/pexels-photo-459489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'calientes',
  },
  {
    id: 'cappuccino-nina',
    name: 'Cappuccino Nina',
    animal: 'Nina',
    price: 52,
    image: 'https://images.pexels.com/photos/6747870/pexels-photo-6747870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'calientes',
  },
  // Cafés fríos
  {
    id: 'cold-brew-rocky',
    name: 'Cold Brew Rocky',
    animal: 'Rocky',
    price: 55,
    image: 'https://images.pexels.com/photos/13735958/pexels-photo-13735958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'fríos',
  },
  {
    id: 'iced-latte-milo',
    name: 'Iced Latte Milo',
    animal: 'Milo',
    price: 58,
    image: 'https://images.pexels.com/photos/13302015/pexels-photo-13302015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'fríos',
  },
  {
    id: 'caramel-macchiato-bella',
    name: 'Caramel Macchiato Bella',
    animal: 'Bella',
    price: 62,
    image: 'https://images.pexels.com/photos/15086188/pexels-photo-15086188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'fríos',
  },
  // Frappes
  {
    id: 'frappe-choco-toby',
    name: 'Frappé de Chocolate Toby',
    animal: 'Toby',
    price: 70,
    image: 'https://images.pexels.com/photos/23708982/pexels-photo-23708982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'frappes',
  },
  {
    id: 'frappe-clasico-daisy',
    name: 'Frappé Clásico Daisy',
    animal: 'Daisy',
    price: 68,
    image: 'https://images.pexels.com/photos/17558646/pexels-photo-17558646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'frappes',
  },
  {
    id: 'frappe-caramelo-rex',
    name: 'Frappé de Caramelo Rex',
    animal: 'Rex',
    price: 72,
    image: 'https://images.pexels.com/photos/1889571/pexels-photo-1889571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'frappes',
  },
  // Comida ligera
  {
    id: 'sandwich-pollo-lola',
    name: 'Sándwich de Pollo Lola',
    animal: 'Lola',
    price: 85,
    image: 'https://images.pexels.com/photos/24796900/pexels-photo-24796900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'comida',
  },
  {
    id: 'cuernito-mantequilla-chispas',
    name: 'Cuernito de Mantequilla Chispas',
    animal: 'Chispas',
    price: 45,
    image: 'https://images.pexels.com/photos/20002837/pexels-photo-20002837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'comida',
  },
  {
    id: 'waffle-fresas-nube',
    name: 'Waffle de Fresas Nube',
    animal: 'Nube',
    price: 78,
    image: 'https://images.pexels.com/photos/33566710/pexels-photo-33566710.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'comida',
  },
  {
    id: 'sandwich-gourmet-thor',
    name: 'Sándwich Gourmet Thor',
    animal: 'Thor',
    price: 90,
    image: 'https://images.pexels.com/photos/12664774/pexels-photo-12664774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'comida',
  },
  {
    id: 'waffle-belga-manchas',
    name: 'Waffle Belga Manchas',
    animal: 'Manchas',
    price: 75,
    image: 'https://images.pexels.com/photos/25067704/pexels-photo-25067704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'comida',
  },
  // Veganos
  {
    id: 'avocado-toast-kiwi',
    name: 'Avocado Toast Kiwi',
    animal: 'Kiwi',
    price: 70,
    image: 'https://images.pexels.com/photos/6327126/pexels-photo-6327126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'vegano',
  },
  {
    id: 'bowl-vegano-pip',
    name: 'Bowl Vegano Pip',
    animal: 'Pip',
    price: 82,
    image: 'https://images.pexels.com/photos/13574407/pexels-photo-13574407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'vegano',
  },
  {
    id: 'smoothie-bowl-zeus',
    name: 'Smoothie Bowl Zeus',
    animal: 'Zeus',
    price: 75,
    image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'vegano',
  },
  {
    id: 'toast-tomate-freya',
    name: 'Toast de Tomate Freya',
    animal: 'Freya',
    price: 68,
    image: 'https://images.pexels.com/photos/6327123/pexels-photo-6327123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'vegano',
  },
];

export type PromoItem = {
  id: string;
  name: string;
  animal: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
  category: 'calientes' | 'fríos' | 'frappes' | 'comida' | 'vegano';
};

export const promoItems: PromoItem[] = [
  {
    id: 'promo-latte-coco',
    name: 'Latte Coco',
    animal: 'Coco',
    originalPrice: 50,
    discountPrice: 42,
    image: 'https://images.pexels.com/photos/459489/pexels-photo-459489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'calientes',
  },
  {
    id: 'promo-frappe-toby',
    name: 'Frappé de Chocolate Toby',
    animal: 'Toby',
    originalPrice: 70,
    discountPrice: 59,
    image: 'https://images.pexels.com/photos/23708982/pexels-photo-23708982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'frappes',
  },
  {
    id: 'promo-sandwich-lola',
    name: 'Sándwich de Pollo Lola',
    animal: 'Lola',
    originalPrice: 85,
    discountPrice: 72,
    image: 'https://images.pexels.com/photos/24796900/pexels-photo-24796900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'comida',
  },
  {
    id: 'promo-avocado-kiwi',
    name: 'Avocado Toast Kiwi',
    animal: 'Kiwi',
    originalPrice: 70,
    discountPrice: 59,
    image: 'https://images.pexels.com/photos/6327126/pexels-photo-6327126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'vegano',
  },
  {
    id: 'promo-caramel-bella',
    name: 'Caramel Macchiato Bella',
    animal: 'Bella',
    originalPrice: 62,
    discountPrice: 52,
    image: 'https://images.pexels.com/photos/15086188/pexels-photo-15086188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'fríos',
  },
  {
    id: 'promo-waffle-nube',
    name: 'Waffle de Fresas Nube',
    animal: 'Nube',
    originalPrice: 78,
    discountPrice: 66,
    image: 'https://images.pexels.com/photos/33566710/pexels-photo-33566710.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'comida',
  },
];
