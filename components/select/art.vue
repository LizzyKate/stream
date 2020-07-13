<template>
  <div>
    <div class="d-flex flex-column bd-highlight mb-3 __grid-container">
      <div v-for="(art, i) in Artist" :key="i" class="p-2 bd-highlight">
        <div class="d-flex flex-row bd-highlight __item">
          <n-link :to="'/album/' + art.name" class="p-2 bd-highlight __grid">
            <img :src="`img/${art.img}`" alt="" class="w-100" />
          </n-link>
          <div class="p-2 bd-highlight __word">
            <n-link :to="'/album/' + art.name">
              <h6>{{ art.album }}</h6>
              <p class="mb-0">{{ art.name }}</p>
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Artist: [
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
}
</script>
<style></style>
