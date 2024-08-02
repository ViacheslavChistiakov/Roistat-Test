<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/no-template-key -->
<template>
    <table border="1">
      <thead>
        <tr>
          <th @click="sort('name')">Имя</th>
          <th @click="sort('parentId')">Телефон</th>
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
    users: Array
  },
  methods: {
    sort (key) {
      this.$emit('sort', key)
    }
  }
}
</script>
