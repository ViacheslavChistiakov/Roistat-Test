<!-- eslint-disable vue/require-v-for-key -->
<template>
    <table border="1">
      <thead>
        <tr>
          <th @click="sort('name')">Имя</th>
          <th @click="sort('phone')">Телефон</th>
        </tr>
      </thead>
      <tbody>
        <user-row
          v-for="user in users"
          :key="user.id"
          :user="user"
          :depth="0"
          @sort="sort"
        />

      </tbody>
    </table>
  </template>

<script>
import UserRow from './UserRow.vue'

export default {
  name: 'UserTable',
  components: {
    UserRow
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    sort (key) {
      this.$emit('sort', key)
    }
  }
}
</script>

<style>
  
</style>
