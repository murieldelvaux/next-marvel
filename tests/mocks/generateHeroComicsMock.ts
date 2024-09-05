import { FindHeroComicsResponse } from "@/app/(features)/(hero)/[...heroId]/types/findHeroComics.types";
import { faker } from "@faker-js/faker";

export const generateHeroComicResponseMock = () => {
  const heroComics: FindHeroComicsResponse = {
    copyright: faker.lorem.words(2),
    data: {
      count: 1,
      limit: 1,
      total: 1,
      offset: 0,
      results: [
        {
          id: faker.number.int(),
          title: `${faker.person.firstName()} - ${faker.lorem.words(3)}`,
          description: faker.lorem.sentence(),
          digitalId: faker.number.int(),
          dates: [
            {
              date: faker.date.past().toString(),
              type: "onsaleDate",
            },
          ],
          thumbnail: {
            path: faker.internet.url(),
            extension: "jpg",
          },
        },
      ],
    },
  };

  return heroComics;
};
