const app = Vue.createApp({
  data() {
    return {
      search: '',
      books: [
        {
          genre: 'Epilogue',
          title: "Or of her there before.",
          description:
            "Da noi maesta suoi nel cosa il e in esse. Mortale trapassare delle giudicio nome dare forse, da pieno pieno.",
          art: "https://picsum.photos/526/354",
        },
        {
          genre: 'Biography',
          title: "Herzen steigt versuch unbestimmten.",
          description:
            "Von von träume ich gerne oft helle du, der komm schwester ort gedanken, verwundert mund ort gefärbt ich ja dich,.",
          art: "https://picsum.photos/527/354",
        },
        {
          genre: 'Guten',
          title: "Diam lorem nonumy kasd et.",
          description:
            "Von von träume ich gerne oft helle du, der komm schwester ort gedanken, verwundert mund ort gefärbt ich ja dich,.",
          art: "https://picsum.photos/527/355",
        },
        {
          genre: 'Spezial',
          title: "Rebum ipsum rebum ea dolores..",
          description:
            "Von von träume ich gerne oft helle du, der komm schwester ort gedanken, verwundert mund ort gefärbt ich ja dich,.",
          art: "https://picsum.photos/527/356",
        },
        {
          genre: 'Later',
          title: "Voluptua sadipscing dolor accusam consetetur.",
          description:
            "Von von träume ich gerne oft helle du, der komm schwester ort gedanken, verwundert mund ort gefärbt ich ja dich,.",
          art: "https://picsum.photos/527/357",
        },
      ],
    };
  },
});

app.mount("#app");

