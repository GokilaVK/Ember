import Route from '@ember/routing/route';

export default class ItemsRoute extends Route {
  model() {
    const itemsList = [
      {
        id: 1,
        name: 'Redmi Note 11 pro',
        brand: 'Redmi',
        released : '2021',
        rate: '$10k',
      },
      {
        id: 2,
        name: 'Realmi 7',
        brand: 'Realmi',
        released : '2015',
        rate: '$7k',
      },
      {
        id: 3,
        name: 'Nokia 10',
        brand: 'Nokia',
        released : '2019',
        rate: '$5k',
      },
      {
        id: 4,
        name: 'Samsang Galaxy',
        brand: 'Samsung',
        released : '2021',
        rate: '$15k',
      },
    ];
    return itemsList;
  }
}
