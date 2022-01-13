export default {
  Query: {
    getUser: () => {
      return {
        id: "Foo",
      };
    },
    countries: () => {
      return [
        {
          id: 1,
          code: "UA",
          name: "Ukraine",
          emoji: "🇺🇦",
        },
      ];
    },
  },
};
