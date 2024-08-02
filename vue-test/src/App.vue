<template>
  <div id="app">
    <button @click="showModal = true">Добавить</button>
    <UserModal
      v-if="showModal"
      @close="showModal = false"
      @save="addUser"
      :users="users"
    />
    <UserTable :users="nestedUsers" @sort="sortUsers" />
  </div>
</template>

<script>
import UserModal from './components/UserModel.vue'
import UserTable from './components/UserTable.vue'

export default {
  name: 'App',
  components: {
    UserModal,
    UserTable
  },
  data () {
    return {
      showModal: false,
      users: [],
      sortKey: null,
      sortOrder: 1
    }
  },
  computed: {
    nestedUsers () {
      const map = {}
      const roots = []
      this.users.forEach((user) => {
        map[user.id] = { ...user, children: [] }
      })
      this.users.forEach((user) => {
        if (user.parentId) {
          map[user.parentId].children.push(map[user.id])
        } else {
          roots.push(map[user.id])
        }
      })
      return roots
    }
  },
  methods: {
    addUser (user) {
      this.users.push(user)
      this.saveUsers()
    },
    saveUsers () {
      localStorage.setItem('users', JSON.stringify(this.users))
    },
    loadUsers () {
      const savedUsers = localStorage.getItem('users')
      if (savedUsers) {
        this.users = JSON.parse(savedUsers)
      }
    },
    sortUsers (key) {
      this.sortKey = key
      this.sortOrder = this.sortOrder === 1 ? -1 : 1
      this.users.sort((a, b) => {
        if (a[key] < b[key]) return -1 * this.sortOrder
        if (a[key] > b[key]) return 1 * this.sortOrder
        return 0
      })
    }
  },
  created () {
    this.loadUsers()
  }
}
</script>

<style>
  .app {
    background-color: aqua;
  }
</style>
