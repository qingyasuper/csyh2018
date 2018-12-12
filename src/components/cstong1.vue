<template>
  <div class='cs_tong1'>
    <div class='cs_tong1_tit'>发放总数：3000张</div>
    <ul>
      <li>
        <div class='cs_tong1_quan'>18元代金券</div>
        <div class='cs_tong1_num'>1000张</div>
      </li>
      <li>
        <div class='cs_tong1_quan'>58元代金券</div>
        <div class='cs_tong1_num'>1000张</div>
      </li>
      <li>
        <div class='cs_tong1_quan'>88元代金券</div>
        <div class='cs_tong1_num'>1000张</div>
      </li>
      <li>
        <div class='cs_tong1_quan'>88元代金券</div>
        <div class='cs_tong1_num'>1000张</div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'cstong1',
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
