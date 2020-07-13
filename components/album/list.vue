<template>
  <div class="__diff py-5">
    <div
      v-for="(play, i) in album"
      :key="i"
      class="rounded-pill __pause mt-3 ml-3"
    >
      <div
        class="d-flex flex-row bd-highlight justify-content-between align-items-center mx-3 pt-2"
      >
        <div class="p-2 bd-highlight">
          <div
            class="d-flex flex-row bd-highlight justify-content-between align-items-center"
          >
            <div class="bd-highlight">
              <img
                :src="`/img/${picture}`"
                class="rounded-circle __profile"
                alt=""
              />
            </div>
            <div class="bd-highlight ml-3 __pick">
              <h6>{{ name }}</h6>
              <p class="mb-0">{{ play.title }}</p>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight __resume">
          <i v-if="play.play" class="fas fa-play-circle" @click="resume(i)"></i>
          <i v-else class="fas fa-pause-circle" @click="resume(i)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      album: [
        {
          image: 'bob.jpg',
          name: 'Bob Marley',
          title: 'One Love',
          play: true,
        },
        {
          image: 'bob.jpg',
          name: 'Bob Marley',
          title: 'Live Yourself',
          play: true,
        },
        {
          image: 'bob.jpg',
          name: 'Bob Marley',
          title: 'No Woman, No Cry',
          play: true,
        },
        {
          image: 'bob.jpg',
          name: 'Bob Marley',
          title: 'Could You Be Loved',
          play: true,
        },
      ],
    }
  },
  methods: {
    resume(i) {
      this.album[i].play = !this.album[i].play
    },
  },
}
</script>
<style></style>
