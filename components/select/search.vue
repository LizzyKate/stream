<template>
  <div>
    <div
      class="d-flex flex-row bd-highlight my-3 mx-3 justify-content-between bg-black"
    >
      <div class="p-2 bd-highlight __pop" @click="recent()">
        New
      </div>
      <div class="p-2 bd-highlight __pop">
        Popular
      </div>
      <div class="p-2 bd-highlight __pop">
        Old
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    change(word) {
      this.choose = word
    },
    recent() {
      this.$store.dispatch('artist/recent')
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
