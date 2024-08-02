<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/no-template-key -->
<!-- eslint-disable vue/valid-template-root -->
<template>
    <tbody>
      <tr>
        <td :style="{ paddingLeft: `${depth * 20}px` }">{{ user.name }}</td>
        <td>{{ getParentName(user.parentId) }}</td>
      </tr>
      <tr v-for="child in user.children" :key="child.id">
        <td colspan="2">
          <user-row :user="child" :depth="depth + 1" @sort="sort" />
        </td>
      </tr>
    </tbody>
  </template>

<script>
export default {
  name: 'UserRow',
  components: {
    UserRow: () => import('./UserRow.vue')
  },
  props: {
    user: Object,
    depth: Number
  },
  methods: {
    getParentName (parentId) {
      const parent = this.$root.users.find((user) => user.id === parentId)
      return parent ? parent.name : 'None'
    },
    sort (key) {
      this.$emit('sort', key)
    }
  }
}
</script>
