<template>
  <div>
    <Banner :image="currentSong.img" :album="currentSong.album" />
    <List :name="currentSong.name" :picture="currentSong.img" />
  </div>
</template>

<script>
import Banner from './ban'
import List from './list'
export default {
  components: {
    Banner,
    List,
  },
  data() {
    return {
      Artist: [
        {
          img: 'bob.jpg',
          album: 'No Woman, No cry',
          name: 'Bob Marley',
        },
        {
          img: 'pearl.jpg',
          album: 'Album',
          name: 'Pearl Jam',
        },
        {
          img: 'nir.jpg',
          album: 'Album',
          name: 'Nirvirna',
        },
        {
          img: 'bob.jpg',
          album: 'Album',
          name: 'Bob Marley',
        },
        {
          img: 'pearl.jpg',
          album: 'Album',
          name: 'Pearl Jam',
        },
        {
          img: 'nir.jpg',
          album: 'Album',
          name: 'Nirvirna',
        },
      ],
    }
  },
  computed: {
    currentSong() {
      return this.Artist.find((e) => e.name === this.$route.params.id)
    },
  },
}
</script>
<style></style>
