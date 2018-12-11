<template>
  <div class='pg zh1'>
    <div class='zh1_body'>
      <div class='zh1_name'>{{name}}</div>
      <div class='zh1_ka'>
        <div class='zh1_zhi'>
          <img src="../assets/images/cs_58.png">
          <div class='zh1_ka_btn'></div>
        </div>
        <div class='zh1_zhi'>
          <img src="../assets/images/cs_88.png">
          <div class='zh1_ka_btn'></div>
        </div>
        <div class='zh1_zhi'>
          <img src="../assets/images/cs_188.png">
          <div class='zh1_ka_btn'></div>
        </div>
      </div>
    </div>
    <img src="../assets/images/cs_zhi1_btn1.png" class='cs_zhi1_btn'>
    <img src="../assets/images/cs_zhi1_btn2.png" class='cs_zhi1_btn' @click='ret("/")'>
  </div>
</template>
<script>

export default {
  name: 'zh1',
  components: {
    userinfo () {
      return this.$store.state.userinfo
    }
  },
  data () {
    return {
      name: '长沙银行桂花坪支行'
    }
  },
  mounted () {
    let that = this
    console.log(that.$store.state.userinfo)
  },
  computed: {
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
