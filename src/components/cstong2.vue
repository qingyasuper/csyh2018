<template>
  <div class='cs_tong2'>
    <div class='cs_tong1_tit'>商户消费总数：1007张</div>
    <table border="1" cellspacing="0">
      <thead>
        <tr>
          <td>金额</td>
          <td>总数</td>
          <td>已核销</td>
          <td>未核销</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>18元</td>
          <td>1000</td>
          <td>500</td>
          <td>500</td>
        </tr>
        <tr>
          <td>58元</td>
          <td>500</td>
          <td>500</td>
          <td>500</td>
        </tr>
        <tr>
          <td>88元</td>
          <td>500</td>
          <td>500</td>
          <td>500</td>
        </tr>
        <tr>
          <td>188元</td>
          <td>500</td>
          <td>500</td>
          <td>500</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  name: 'cstong2',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    userinfo () {
      return this.$store.state.userinfo
    }
  },
  methods: {
    ret (u) {
      let that = this
      that.$router.push({path: u})
    }
  }
}
</script>

<style scoped>
</style>
