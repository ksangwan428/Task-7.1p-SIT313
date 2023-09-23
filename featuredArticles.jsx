
import { faker } from '@faker-js/faker';

const featuredArticles = [
  {
    key: 0,
    image: faker.image.image(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
  },
  {
    key: 1,
    image: faker.image.image(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
  },
  {
    key: 2,
    image: faker.image.image(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
  },
];

export default featuredArticles;