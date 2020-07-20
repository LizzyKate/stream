export const state = () => ({
  New: [
    // {
    //   id: 120313,
    //   name: 'Simi',
    //   picture_medium:
    //     'https://cdns-images.dzcdn.net/images/artist/622ccf087ac49d1f6e68e8d5a9e1c014/250x250-000000-80-0-0.jpg',
    // },
    // {
    //   id: 3933641,
    //   name: 'Wizkid',
    //   picture_medium:
    //     'https://cdns-images.dzcdn.net/images/artist/59279fff2d2104fe0308847563b5a426/250x250-000000-80-0-0.jpg',
    // },
    // {
    //   id: 5259966,
    //   name: 'Rema',
    //   picture_medium:
    //     'https://cdns-images.dzcdn.net/images/artist/98eabfbc839005a99781834a0ca83f98/250x250-000000-80-0-0.jpg',
    // },
    // {
    //   id: 56094992,
    //   name: 'Omah lay',
    //   picture_medium:
    //     'https://cdns-images.dzcdn.net/images/artist/27689794815bf64b0a839e59a65512f6/250x250-000000-80-0-0.jpg',
    // },
    // {
    //   img: 'pearl.jpg',
    //   album: 'Album',
    //   name: 'Pearl Jam',
    // },
  ],
  popular: [],
  old: [],
})

export const actions = {
  async recent() {
    try {
      const vibes = await this.$axios.$get('/chart')
      console.log(vibes)
    } catch (error) {
      console.log(error)
    }
  },
}
