<style>

</style>
<template>
  <div>
    <hs-header></hs-header>
    <template-gallery></template-gallery>
  </div>
</template>
<script>
  import hsHeader from './header.vue';
  import TemplateGallery from './templates/gallery.vue';

  export default {
    components: {
      hsHeader,
      TemplateGallery,
    },
    data() {
      return {};
    },
  };
</script>