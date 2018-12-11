<template>
  <div class='nav mong'>
    <div class='content'>
      <span>{{msg}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mong',
  props: ['msg'],
  methods: {
  },
  data: function () {
    return {
      counter: this.msg
    }
  }
}
</script>

<style scoped>
</style>
