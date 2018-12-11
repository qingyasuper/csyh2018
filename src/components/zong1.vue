<template>
  <div class='pg zh1 zong1'>
    <img src="../assets/images/cs_zong1_btn1.png" class='cs_zhi1_btn'>
    <img src="../assets/images/cs_zong1_btn2.png" class='cs_zhi1_btn'>
    <div class='radio'></div>
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
