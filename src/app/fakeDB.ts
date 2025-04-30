import { type Product } from './product/product.model';

export const products: Product[] = [
  {
    id: 1,
    name: 'Basic T-Shirt',
    price: 59.9,
    image:
      'https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Camiseta básica 100% algodão, perfeita para uso diário com conforto e estilo.',
    onSale: true,
  },
  {
    id: 2,
    name: 'Running Shoes',
    price: 229.9,
    image:
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Tênis esportivo leve e respirável, ideal para corridas e treinos intensos.',
    onSale: false,
  },
  {
    id: 3,
    name: 'Bluetooth Headphones',
    price: 149.0,
    image:
      'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.',
    onSale: false,
  },
  {
    id: 4,
    name: 'School Backpack',
    price: 89.9,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Mochila resistente com design ergonômico e amplo espaço interno para materiais escolares.',
    onSale: false,
  },
  {
    id: 5,
    name: 'Fitness Smartwatch',
    price: 199.9,
    image:
      'https://images.unsplash.com/photo-1696688713460-de12ac76ebc6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Smartwatch com rastreamento de atividades, monitoramento de sono e frequência cardíaca.',
    onSale: true,
  },
];
