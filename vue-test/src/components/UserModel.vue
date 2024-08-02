<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="$emit('close')">&times;</span>
        <h2>Добавить пользователя</h2>
        <form @submit.prevent="saveUser">
          <div>
            <label>Имя:</label>
            <input v-model="name" required />
          </div>
          <div>
            <label>Телефон:</label>
            <input v-model="phone" required />
          </div>
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    users: Array
  },
  data () {
    return {
      name: '',
      parentId: null
    }
  },
  methods: {
    saveUser () {
      const user = {
        id: Date.now(),
        name: this.name,
        parentId: this.parentId
      }
      this.$emit('save', user)
      this.$emit('close')
    }
  }
}
</script>

  <style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
