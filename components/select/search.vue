<template>
  <div>
    <div
      class="d-flex flex-row bd-highlight my-3 mx-3 justify-content-between bg-black"
    >
      <div
        v-for="(look, i) in search"
        :key="i"
        :class="{ create: look.code === choose }"
        class="p-2 bd-highlight __pop"
        @click="change(look.code)"
      >
        {{ look.see }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choose: 'popular',
      search: [
        {
          code: 'new',
          see: 'New',
        },
        {
          code: 'popular',
          see: 'Popular',
        },
        {
          code: 'old',
          see: 'Old',
        },
      ],
    }
  },
  methods: {
    change(word) {
      this.choose = word
    },
  },
}
</script>
<style scoped>
.create {
  background: #2b2b2b;
  color: white;
}
</style>
