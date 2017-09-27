<style lang="scss">
  .complete-example {
    height: 540px;
    display: flex;
    flex-flow: column;
    position: relative;
    overflow: hidden;
    z-index: 1;

    .md-fab {
      margin: 0;
      position: absolute;
      bottom: -20px;
      left: 16px;
    }

    .md-title {
      color: #fff;
    }

    .md-list {
      overflow: auto;
    }

    .md-list-action .md-icon {
      color: rgba(#000, .26);
    }

    .md-avatar-icon .md-icon {
      color: #fff !important;
    }

    .md-sidenav .md-list-text-container > :nth-child(2) {
      color: rgba(#fff, .54);
    }

    .md-account-header {
      .md-list-item:hover .md-button:hover {
        background-color: inherit;
      }

      .md-avatar-list .md-list-item-container:hover {
        background: none !important;
      }
    }
  }
</style>
<template>
  <div>
    <md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="light-blue" class="md-transparent">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 style="flex: 1" class="md-title">Untitled Sheet</h2>
        <md-button class="md-icon-button">
          <md-icon>comments</md-icon>
        </md-button>
        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </div>
    </md-whiteframe>

    <md-toolbar class="md-dense md-accent">
      <md-button  class="md-icon-button">
        <md-icon>undo</md-icon>
      </md-button>
      <md-button class="md-icon-button" >
        <md-icon>redo</md-icon>
      </md-button>
      <md-button-toggle>
        <md-button class="md-icon-button md-toggle">
          <md-icon>format_bold</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>format_italic</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>strikethrough_s</md-icon>
        </md-button>

        <md-button class="md-icon-button md-toggle">
          <md-icon>title</md-icon>
        </md-button>
      </md-button-toggle>
    </md-toolbar>
    <spreadsheet :data="document.data" :settings="document.settings"></spreadsheet>

  </div>
</template>
<script>
  //  import _ from 'lodash';
  import Spreadsheet from '@/components/spreadsheet';

  export default {
    components: {
      Spreadsheet,
    },
    data() {
      return {
        document: {
          data: [],
          settings: {
            allowEmpty: true,
            allowHtml: undefined,
            allowInsertColumn: true,
            allowInsertRow: true,
            allowInvalid: undefined,
            allowRemoveColumn: true,
            allowRemoveRow: true,
            autoColumnSize: true,
            autoComplete: true,
            autoRowSize: true,
            autoWrapCol: true,
            autoWrapRow: true,
            // cell: undefined,
            // cells: undefined,
            // checkedTemplate: undefined,
            // className: undefined,
            colHeaders: true,
            columnHeaderHeight: '20px',
            // columns: _.range(1, 21),
            // columnSorting: undefined,
            colWidths: 100,
            // commentedCellClassName: undefined,
            // comments: undefined,
            contextMenu: true,
            // copyable: undefined,
            // copyPaste: undefined,
            // correctFormat: undefined,
            // currentColClassName: undefined,
            // currentHeaderClassName: undefined,
            // currentRowClassName: undefined,
            // customBorders: undefined,
            // //dataSchema: undefined,
            // //dateFormat: undefined,
            // //debug: undefined,
            // //defaultDate: undefined,
            // disableVisualSelection: undefined,
            // editor: undefined,
            // enterBeginsEditing: undefined,
            // enterMoves: undefined,
            // fillHandle: undefined,
            // filter: undefined,
            // filteringCaseSensitive: undefined,
            // fixedColumnsLeft: undefined,
            // fixedRowsTop: undefined,
            // format: undefined,
            // fragmentSelection: undefined,
            // height: undefined,
            // invalidCellClassName: undefined,
            // label: undefined,
            // language: undefined,
            // manualColumnFreeze: undefined,
            // manualColumnMove: undefined,
            // manualColumnResize: undefined,
            // manualRowMove: undefined,
            // manualRowResize: undefined,
            // maxCols: undefined,
            // maxRows: undefined,
            // mergeCells: undefined,
            minCols: 26,
            minRows: 500,
            // minSpareCols: undefined,
            // minSpareRows: undefined,
            // multiSelect: undefined,
            // noWordWrapClassName: undefined,
            // observeChanges: undefined,
            // observeDOMVisibility: undefined,
            // outsideClickDeselects: undefined,
            // persistentState: undefined,
            // placeholder: undefined,
            // placeholderCellClassName: undefined,
            // preventOverflow: undefined,
            // readOnly: undefined,
            // readOnlyCellClassName: undefined,
            // renderAllRows: undefined,
            //          renderer: undefined,
            rowHeaders: true,
            // rowHeaderWidth: undefined,
            // rowHeights: undefined,
            // search: undefined,
            // selectOptions: undefined,
            // skipColumnOnPaste: undefined,
            // sortByRelevance: undefined,
            // sortFunction: undefined,
            // sortIndicator: undefined,
            // source: undefined,
            // startCols: undefined,
            // startRows: undefined,
            // stretchH: undefined,
            // strict: undefined,
            // tableClassName: undefined,
            // tabMoves: undefined,
            // title: undefined,
            // trimDropdown: undefined,
            // trimWhitespace: undefined,
            // type: undefined,
            // uncheckedTemplate: undefined,
            // undo: undefined,
            // validator: undefined,
            // viewportColumnRenderingOffset: undefined,
            // viewportRowRenderingOffset: undefined,
            // visibleRows: undefined,
            // width: undefined,
            // wordWrap: undefined,
          },
        },
      };
    },
    methods: {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      toggleRightSidenav() {
        this.$refs.rightSidenav.toggle();
      },
      closeRightSidenav() {
        this.$refs.rightSidenav.close();
      },
      open(ref) {
        console.log(`Opened: ${ref}`);
      },
      close(ref) {
        console.log(`Closed: ${ref}`);
      },
    },
  };
</script>