<template>
  <div class='cs_tong5'>
    <div class='cs_tong5_scroll'>
      <iscroll-view class='scroll-view' ref='iscroll' :options='scrollOptions'>
        <div class='cs_tong5_tit'>
          <span class='cs_tong5_tit_num1'>18元</span>
          <span class='cs_tong5_tit_num2'>1000张</span>
        </div>
        <ul>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
        </ul>
        <div class='cs_tong5_tit'>
          <span class='cs_tong5_tit_num1'>58元</span>
          <span class='cs_tong5_tit_num2'>1000张</span>
        </div>
        <ul>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
        </ul>
        <div class='cs_tong5_tit'>
          <span class='cs_tong5_tit_num1'>88元</span>
          <span class='cs_tong5_tit_num2'>1000张</span>
        </div>
        <ul>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
        </ul>
        <div class='cs_tong5_tit'>
          <span class='cs_tong5_tit_num1'>188元</span>
          <span class='cs_tong5_tit_num2'>1000张</span>
        </div>
        <ul>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
          <li>123456789012</li>
        </ul>
      </iscroll-view>
    </div>
    <div class='cs_tong5_foot'>
      <i></i>
      <span>全部勾选</span>
      <div class='cs_tong5_btn'>确认核销</div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'cstong4',
  components: {
  },
  data () {
    return {
      scrollOptions: {
        mouseWheel: true,
        click: true,
        tap: true
      }
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
