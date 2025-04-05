import React from 'react';
import ProductCard from './ProductCard';

// Placeholder data - replace with actual data fetching later
const products = [
  { id: 1, name: 'Santoku', description: 'MULTIPURPOSE KNIFE (6½"/17CM)', price: 'CHF 326.00', imageUrl: '/images/santoku.jpg' },
  { id: 2, name: 'The Dragonfly', description: 'EDGE-GRAIN CHOPPING BOARD (36 X 25 X 2CM)', price: 'CHF 114.00', imageUrl: '/images/chopping-board.jpg' },
  { id: 3, name: 'Knife Rack', description: 'WALL-MOUNTED MAGNETIC KNIFE STORAGE', price: 'From CHF 95.00', imageUrl: '/images/knife-rack.jpg' },
];

const Bestsellers: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-light uppercase tracking-widest text-gray-600 mb-12">Bestsellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;