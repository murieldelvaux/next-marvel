import { FindAllHerosPaginatedResponse } from "@/app/(features)/(home)/types/findAllHerosPaginated.types";
import { faker } from "@faker-js/faker";

export const generateHeroPaginatedResponseMock = () => {
  const heros: FindAllHerosPaginatedResponse = {
    copyright: faker.lorem.words(2),
    data: {
      count: 1,
      limit: 1,
      total: 1,
      offset: 0,
      results: [
        {
          id: faker.number.int(),
          name: faker.person.fullName(),
          description: faker.lorem.sentence(),
          thumbnail: {
            path: faker.internet.url(),
            extension: "jpg",
          },
          comics: {
            available: 1,
            collectionURI: faker.internet.url(),
            items: [
              {
                resourceURI: faker.internet.url(),
                name: faker.lorem.words(),
              },
            ],
            returned: 1,
          },
          series: {
            available: 1,
            collectionURI: faker.internet.url(),
            items: [
              {
                resourceURI: faker.internet.url(),
                name: faker.lorem.words(),
              },
            ],
            returned: 1,
          },
          stories: {
            available: 1,
            collectionURI: faker.internet.url(),
            items: [
              {
                resourceURI: faker.internet.url(),
                name: faker.lorem.words(),
              },
            ],
            returned: 1,
          },
        },
      ],
    },
  };

  return heros;
};
