<!-- eslint-disable vue/valid-template-root -->

<template>
  <tbody>
    <tr>
      <td :style="{ paddingLeft: `${depth * 20}px` }">{{ user.name }}</td>
      <td >{{ user.phone }}</td>
    </tr>
    <tr v-if="user.children && user.children.length" v-for="child in user.children" :key="child.id">
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
    user: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
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
/* Add your styles here */
</style>
