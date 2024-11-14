<template>
  <table>
    <thead>
      <tr>
        <td></td>
      </tr>
    </thead>
    <tbody class="pag-table-body">
      <tr v-for="item in data" :key="item.id" class="pag-table-row">
        <td v-for="value in item" class="pag-table-col">
          {{ value }}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>
          <label for="limit-select">choose limit: </label>
          <select id="limit-select" v-model="selectLimit">
            <option v-for="i in selectOptions">
              {{ i }}
            </option>
          </select>
        </td>
        <td>
          <button @click="previous()">prev</button>
        </td>
        <td>
          {{ currentPage + 1 }} of {{ maxPage }}
        </td>
        <td>
          <button @click="next()">next</button>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Object || Array,
      required: true,
      default: []
    },
    limit: {
      type: Number,
      required: true,
      default: 0
    },
    total: {
      type: Number,
      required: true,
      default: 0
    }
  },
  emits: ['fetch-data'],
  data () {
    return {
      currentPage: 0,
      maxPage: 0,
      selectLimit: 0
    }
  },
  computed: {
    selectOptions () {
      let arr = []
      for(let i = 0; i < 6 ; i++) {
        arr.push(i*10)
      }
      return arr
    },
    maxPage () {
      return Math.ceil(this.total / this.limit)
    }
  },
  watch: {
    
    selectLimit: {
      immediate: true,
      handler () {
        this.getData()
      }
    }
  },
  methods: {
    getData () {
      this.$emit('fetch-data', {
        page: this.currentPage,
        limit: this.selectLimit
      })
    },
    next () {
      if (this.currentPage < this.maxPage - 1) {
        ++this.currentPage
        this.getData()
      }
    },
    previous () {
      if (this.currentPage > 0) {
        --this.currentPage
        this.getData()
      }
    }
  }
}
</script>

<style>
.pag-table-body {
  outline: 1px solid green;
}

.pag-table-row {
  outline: 1px solid pink;
}

.pag-table-col {
  outline: 1px solid yellow;
}
</style>