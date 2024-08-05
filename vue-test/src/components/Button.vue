<style scoped>
.btn {
    color: white;
    background: #794aae;
    border: 1px solid #319582;
    border-radius: 20px;
    cursor: pointer;
    width: 60pt;
    height: 20pt;
}
</style>

<template>

    <button @click="show" class="btn">{{ buttonName }}</button>

</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonName: String,
    role: String
  },
  methods: {
    show () {
      this.$emit('show')
    }
  }
}
</script>
