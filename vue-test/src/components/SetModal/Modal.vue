<template>

  <transition name="modal-fade">

    <div class="modal-backdrop">
      <div class="modal">
        <HeaderModal @close="close" />
        <BodyModal ref="bodyModal" :formDataProp="formData" />
        <FooterModal @addTask="addTask" />
      </div>
    </div>
  </transition>

</template>

<script>
import FooterModal from './FooterModal.vue'
import BodyModal from './BodyModal.vue'
import HeaderModal from './HeaderModal.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Modal',
  components: {
    FooterModal,
    BodyModal,
    HeaderModal
  },
  computed: {
    ...mapGetters(['getFormData']),
    formData () {
      return this.getFormData
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    addTask () {
      const { id, name, phone, parent, children } = this.$refs.bodyModal.formData
      this.$emit('dataReceived', { id, name, phone, parent, children })
      this.$emit('close')
    }
  }

}

</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  min-width: 300pt
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}
</style>
