import Brend from '../models/brend';

export const BRANDS = [
  new Brand('b1', 'Acura', '../images/acura-small.png'),
  new Brand('b2', 'Alfa Romeo', '../images/alfa-romeo-small.png'),
  new Brand('b3', 'Audi', '../images/audi-small.png'),
  new Brand('b4', 'BMW', '../images/bmw-small.png'),
  new Brand('b5', 'Buick', '../images/buick-small.png'),
  new Brand('b6', 'Cadillac', '../images/cadillac-small.png'),
  new Brand('b7', 'Chevrolet', '../images/chevrolet-small.png'),
  new Brand('b8', 'Chrysler', '../images/chrysler-small.png'),
  new Brand('b9', 'Citroen', '../images/citroen-small.png'),
  new Brand('b10', 'Daewoo', '../images/daewoo-small.png')
];

export const MODELS = [
  new Model(
    'm1',
    'b1',
    'Acura',
    [
      'Acura CSX',
      'Acura MDX',
      'Acura NSX',
      'Acura RDX',
      'Acura RL',
      'Acura RSX',
      'Acura TL',
      'Acura TSX',
      'Acura Vigor'
    ]
  ),
  new Model(
    'm2',
    'b2',
    'Alfa Romeo',
    [
      'Alfa Romeo 145',	
      'Alfa Romeo 146',
      'Alfa Romeo 164',
      'Alfa Romeo 4C',
      'Alfa Romeo 8C',
      'Alfa Romeo Alfa 147',
      'Alfa Romeo Alfa 155',
      'Alfa Romeo Alfa 156',
      'Alfa Romeo Alfa 159',
      'Alfa Romeo Alfa 164',
      'Alfa Romeo Alfa 166',
      'Alfa Romeo Alfa 33',	
      'Alfa Romeo Alfa 75',
      'Alfa Romeo Alfa 90',
      'Alfa Romeo Alfasud',
      'Alfa Romeo Alfetta',
      'Alfa Romeo Brera',
      'Alfa Romeo Crosswagon',
      'Alfa Romeo Giulia',
      'Alfa Romeo Giulietta',
      'Alfa Romeo GT',
      'Alfa Romeo GTV',
      'Alfa Romeo Junior',
      'Alfa Romeo Milano',
      'Alfa Romeo MiTo',
      'Alfa Romeo Spider',
      'Alfa Romeo Sprint'
    ]
  )
];
