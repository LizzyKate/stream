<template>
  <div class="__album">
    <div
      class="d-flex flex-row bd-highlight justify-content-between align-items-center mb-3"
    >
      <div class="p-2 bd-highlight ml-3">
        <i class="fas fa-less-than text-white"></i>
      </div>
      <div class="p-2 bd-highlight mr-3">
        <i class="fas fa-search text-white"></i>
      </div>
    </div>
    <div
      class="d-flex flex-row bd-highlight justify-content-center align-items-center __track"
    >
      <div class="p-2 bd-highlight">
        <h6 class="text-white text-center">Album</h6>
        <client-only>
          <audio controls>
            <source
              src="https://www.w3schools.com/html/horse.ogg"
              type="audio/ogg"
            />
          </audio>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style></style>
