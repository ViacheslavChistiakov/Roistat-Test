<template>

  <div class="main-body">
    <Button buttonName="Добавить" @show="showModal" />
    <Table />
    <Modal v-show="isModalVisible" @close="closeModal" @dataReceived="saveData" />
  </div>

</template>

<script>
import Button from './Button.vue'
import Table from '../components/Table/UserTable.vue'
import Modal from './SetModal/Modal.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'View',
  components: {
    Button,
    Table,
    Modal
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  computed: {
    ...mapGetters(['getFormData']),
    formData () {
      return this.getFormData
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    saveData (data) {
      this.$store.dispatch('saveFormData', data)
    }
  }
}
</script>

  <style scoped>
  .main-body{
  margin-top: 20px;
}
  </style>
