<template>
    <section class="modal-body">
        <slot name="body">
            <div class="form-body">
                <div class="inputData">
                    <label for="name">Имя</label>
                    <input type="text" name="name" v-model="formData.name">
                </div>
                <div class="inputData">
                    <label for="phone">Телефон</label>
                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" v-model="formData.phone">
                </div>
                <div class="inputData">
                    <label for="parent">Начальник</label>
                    <select name="parent" v-model="formData.parent">
                        <option v-for="(item) in flattenFormData(formDataProp)" :key="item.id" :value="item.id">
                            {{ item.name }}
                        </option>
                    </select>
                </div>

            </div>
        </slot>
    </section>
</template>

<script>
export default {
  name: 'BodyModal',
  props: ['formDataProp'],
  data () {
    return {
      formData: {
        id: null,
        name: null,
        phone: null,
        parent: null,
        children: []
      }
    }
  },
  methods: {
    flattenFormData (data) {
      let flattened = []
      data.forEach(item => {
        flattened.push(item)
        if (item.children) {
          flattened = flattened.concat(this.flattenFormData(item.children))
        }
      })
      return flattened
    }
  }
}

</script>

<style scoped>
.modal-body {
    position: relative;
    padding: 20px 10px;
}

.form-body {
    padding-inline: 20px;
}

.inputData {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}
</style>
