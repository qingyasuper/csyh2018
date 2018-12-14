<template>
  <div class='cs_tong1'>
    <div class='cs_tong1_tit'>发放总数：{{msg.total}}张</div>
    <ul>
      <li>
        <div class='cs_tong1_quan'>18元代金券</div>
        <div class='cs_tong1_num' v-if='msg!==""'>{{msg.data.f18}}张</div>
      </li>
      <li>
        <div class='cs_tong1_quan'>58元代金券</div>
        <div class='cs_tong1_num' v-if='msg!==""'>{{msg.data.f58}}张</div>
      </li>
      <li>
        <div class='cs_tong1_quan'>88元代金券</div>
        <div class='cs_tong1_num' v-if='msg!==""'>{{msg.data.f88}}张</div>
      </li>
      <li>
        <div class='cs_tong1_quan'>188元代金券</div>
        <div class='cs_tong1_num' v-if='msg!==""'>{{msg.data.f188}}张</div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'cstong1',
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
