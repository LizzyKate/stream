<template>
  <div>
    <div class="d-flex flex-column bd-highlight mb-3 __grid-container">
      <div v-for="(art, i) in Artist" :key="i" class="p-2 bd-highlight">
        <div class="d-flex flex-row bd-highlight __item">
          <div class="p-2 bd-highlight __grid">
            <img :src="`img/${art.img}`" alt="" class="w-100" />
          </div>
          <div class="p-2 bd-highlight __word">
            <p class="mb-0">{{ art.name }}</p>
          </div>
        </div>
      </div>
      <div class="p-2 bd-highlight">
        <div class="d-flex flex-row bd-highlight">
          <div class="p-2 bd-highlight __grid">
            <img src="/img/bob.jpg" alt="" class="w-100" />
          </div>
          <div class="p-2 bd-highlight __word">
            <p class="mb-0">Bob Marley</p>
          </div>
        </div>
      </div>
      <div class="p-2 bd-highlight">
        <div class="d-flex flex-row bd-highlight">
          <div class="p-2 bd-highlight __grid">
            <img src="/img/bob.jpg" alt="" class="w-100" />
          </div>
          <div class="p-2 bd-highlight __word">
            <p class="mb-0">Bob Marley</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="grid-container">
      <div class="grid-item">
        <img src="/img/bob.jpg" alt="" class="w-100" />
        <p class="mb-0">Bob Marley</p>
      </div>
      <div class="grid-item">
        <img src="/img/pearl.jpg" alt="" class="w-100" />
        <p class="mb-0">Pearl Jam</p>
      </div>
      <div class="grid-item">
        <img src="/img/nir.jpg" alt="" class="w-100" />
        <p class="mb-o">Nirvana</p>
      </div>
      <div class="grid-item">
        <img src="/img/bob.jpg" alt="" class="w-100" />
        <p class="mb-0">Bob Marley</p>
      </div>
      <div class="grid-item">
        <img src="/img/pearl.jpg" alt="" class="w-100" />
        <p class="mb-0">Pearl Jam</p>
      </div>
      <div class="grid-item">
        <img src="/img/nir.jpg" alt="" class="w-100" />
        <p class="mb-o">Nirvana</p>
      </div>
      <div class="grid-item">
        <img src="/img/bob.jpg" alt="" class="w-100" />
        <p class="mb-0">Bob Marley</p>
      </div>
      <div class="grid-item">
        <img src="/img/pearl.jpg" alt="" class="w-100" />
        <p class="mb-0">Pearl Jam</p>
      </div>
      <div class="grid-item">
        <img src="/img/nir.jpg" alt="" class="w-100" />
        <p class="mb-o">Nirvana</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      Artist: [
        {
          img: 'bob.jpg',
          name: 'Bob Marley',
        },
        {
          img: 'pearl.jpg',
          name: 'Pearl Jam',
        },
        {
          img: 'nir.jpg',
          name: 'Nirvirna',
        },
        {
          img: 'bob.jpg',
          name: 'Bob Marley',
        },
        {
          img: 'pearl.jpg',
          name: 'Pearl Jam',
        },
        {
          img: 'nir.jpg',
          name: 'Nirvirna',
        },
      ],
    }
  },
}
</script>
<style></style>
