<style lang="scss">
  .template-gallery {
    padding: 2rem;
    background-color: #3e3e3e;
    .template-item {
      .template-img {
        height: 40px;
      }
      .template-name {

        span {
          font-weight: bold;
          margin-top: 10px;
        }
      }
    }
  }
</style>
<template>
  <div class="template-gallery">
    <div v-for="template in templates" class="template-item" @click="select(template)">
      <img class="template-img" :src="template.image">
      <div class="template-name">
        <span>{{template.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        templates: [
          {
            image: '//placehold.it/80x40',
            name: 'Blank Template',
          },
          {
            image: '//placehold.it/80x40',
            name: 'Weekplan',
          },
          {
            image: '//placehold.it/80x40',
            name: 'Monthly Budget',
          },
        ],
      };
    },
    methods: {
      select(template) {
        // create template and redirect to it
        console.log(template);
        this.$router.push('/document/123');
      },
    },
  };
</script>