<template>
  <div class='cs_tong2'>
    <div class='cs_tong1_tit' v-if='msg!==""'>商户消费总数：{{msg.data.total18 + msg.data.total58 + msg.data.total88 + msg.data.total188}}张</div>
    <table border="1" cellspacing="0">
      <thead>
        <tr>
          <td>金额</td>
          <td>总数</td>
          <td>已核销</td>
          <td>未核销</td>
        </tr>
      </thead>
      <tbody v-if='msg!==""'>
        <tr>
          <td>18元</td>
          <td>{{msg.data.total18}}</td>
          <td>{{msg.data.car18}}</td>
          <td>{{msg.data.total18 - msg.data.car18}}</td>
        </tr>
        <tr>
          <td>58元</td>
          <td>{{msg.data.total58}}</td>
          <td>{{msg.data.car58}}</td>
          <td>{{msg.data.total58 - msg.data.car58}}</td>
        </tr>
        <tr>
          <td>88元</td>
          <td>{{msg.data.total88}}</td>
          <td>{{msg.data.car88}}</td>
          <td>{{msg.data.total88 - msg.data.car88}}</td>
        </tr>
        <tr>
          <td>188元</td>
          <td>{{msg.data.total188}}</td>
          <td>{{msg.data.car188}}</td>
          <td>{{msg.data.total188 - msg.data.car188}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  name: 'cstong2',
  props: ['msg'],
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
