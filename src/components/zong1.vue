<template>
  <div class='pg zh1 zong1'>
    <img src="../assets/images/cs_zong1_btn1.png" class='cs_zhi1_btn' @click='ret("/tong")'>
    <img src="../assets/images/cs_zong1_btn2.png" class='cs_zhi1_btn' @click='ret("/tong")'>
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
    }
  }
}
</script>

<style scoped>
</style>
