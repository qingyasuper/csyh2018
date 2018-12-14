<template>
  <div class='pg zh1 zong1'>
    <img src="../assets/images/cs_zong1_btn1.png" class='cs_zhi1_btn' @click='listInfo(2)'>
    <img src="../assets/images/cs_zong1_btn2.png" class='cs_zhi1_btn' @click='listInfo(1)'>
    <div class='radio'></div>
    <img src="../assets/images/cs_zhi1_btn2.png" class='cs_zhi1_btn' @click='ret("/")'>
  </div>
</template>
<script>

export default {
  name: 'zh1',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    let that = this
    that.checkLogin(that.userinfo, function () {
      if (that.userinfo.type !== 0) {
        that.$router.push('/')
      }
    })
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
    },
    listInfo (t) {
      let that = this
      var data = {}
      if (t === 1) { // 支行
        data = {
          type: 1,
          up: 'cstong1',
          down: 'cstong3',
          tit: ''
        }
      } else if (t === 2) { // 商户
        data = {
          type: 2,
          up: 'cstong2',
          down: 'cstong3',
          tit: ''
        }
      }
      that.$store.commit('tongInfo', data)
      that.ret('tong')
    }
  }
}
</script>

<style scoped>
</style>
