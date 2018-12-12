<template>
  <div class='cs_tong3'>
    <div class='cs_tong3_scroll'>
      <iscroll-view class='scroll-view' ref='iscroll' :options='scrollOptions'>
        <ul>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
          <li>21克拉烘培</li>
        </ul>
      </iscroll-view>
    </div>
  </div>
</template>
<script>

export default {
  name: 'cstong3',
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
