<template>

    <footer class="modal-footer">
        <slot name="footer">
            <button type="button" class="btn-save" @click="addTask">
                Сохранить
            </button>
        </slot>
    </footer>

</template>

<script>
export default {
  name: 'FooterModal',
  methods: {
    addTask () {
      this.$emit('addTask')
    }
  }
}

</script>

<style scoped>
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-start;
}

.btn-save {
    color: white;
    background:#794aae;
    border: 1px solid #4AAE9B;
    border-radius: 20px;
    cursor: pointer;
    width: 60pt;
    height: 20pt;
}
</style>
