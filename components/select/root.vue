<template>
  <div class="position-relative">
    <Navlist class="fixed-top" />
    <Banner />
    <Search />
    <Art />
  </div>
</template>

<script>
import Navlist from './nav'
import Banner from './ban'
import Search from './search'
import Art from './art'
export default {
  components: {
    Navlist,
    Banner,
    Search,
    Art,
  },
}
</script>
<style></style>
