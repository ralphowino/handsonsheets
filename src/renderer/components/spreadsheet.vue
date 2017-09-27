<style lang="scss">
  @import '~handsontable/dist/handsontable.full.css';

  .table-wrapper {

    background-color: #fff;
  }

  .hot-table {
    color: #000;
    width: calc(100vw - 5px);
    overflow: hidden;
    height: calc(100vh - 65px);
  }
</style>
<template>
  <div class="table-wrapper">
    <div class="hot-table" ref="table"></div>
  </div>
</template>
<script>
  /* eslint-disable */
  import _ from 'lodash';
  import Handsontable from '../../../node_modules/handsontable/dist/handsontable.full';


  export default {
    data() {
      return {
        hot: undefined
      }
    },
    mounted() {

      this.hotTable = new Handsontable(this.$refs.table, this.settings);
    },
    props: {
      data: {
        required: true,
        type: Array,
      },
      settings: {
        required: true
      }
    },
    watch: {
      data() {
        this.hot.loadData(this.data);
      },
    },
  }
</script>