<!-- eslint-disable vue/require-v-for-key -->
<template>
      <table>
        <thead>
            <tr>
                <th scope="col" @click="sortBy('name')" class="col-table">Имя</th>
                <th scope="col" @click="sortBy('phone')" class="col-table">Телефон</th>
            </tr>
        </thead>
        <UserRow v-for="user in sortedFormData" :key="user.id" :user="user" />
    </table>
  </template>

<script>
import UserRow from './UserRow.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Table',
  components: {
    UserRow
  },
  data () {
    return {
      sortByColumn: null,
      sortOrder: 1
    }
  },
  methods: {
    sortBy (column) {
      if (this.sortByColumn === column) {
        this.sortOrder *= -1
      } else {
        this.sortByColumn = column
        this.sortOrder = 1
      }

      this.sortFormData()
    },
    sortFormData () {
      const sortedData = [...this.getFormData]

      sortedData.sort((a, b) => {
        const valA = this.getValueByPath(a, this.sortByColumn)
        const valB = this.getValueByPath(b, this.sortByColumn)
        return valA > valB ? this.sortOrder : -this.sortOrder
      })
      console.log(sortedData)
      this.$store.dispatch('saveFormData', sortedData)
    },
    getValueByPath (obj, path) {
      if (!path) return null

      const keys = path.split('.')
      const value = keys.reduce((acc, key) => {
        return acc && acc[key]
      }, obj)
      return value
    }
  },
  computed: {
    ...mapGetters(['getFormData']),
    sortedFormData () {
      const sortedData = [...this.getFormData]

      sortedData.sort((a, b) => {
        const valA = this.getValueByPath(a, this.sortByColumn)
        const valB = this.getValueByPath(b, this.sortByColumn)
        return valA > valB ? this.sortOrder : -this.sortOrder
      })

      return sortedData
    }
  }
}
</script>

<style>
.col-table {
    cursor: pointer;
}

table {
    width: 100%;
    border: none;
    margin-bottom: 20px;
    margin-top: 20px;
    border-collapse: separate;
}

table thead th {
    font-weight: bold;
    text-align: left;
    border: none;
    padding: 10px 15px;
    background: #EDEDED;
    font-size: 14px;
    border-top: 1px solid #210588;
}
</style>
