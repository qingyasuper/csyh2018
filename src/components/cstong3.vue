<template>
  <div class='cs_tong3'>
    <div class='cs_tong3_scroll'>
      <iscroll-view class='scroll-view' ref='iscroll' :options='scrollOptions' v-if='msg.length!==0'>
        <ul>
          <li v-for='(item, index) in msg' :key='index' @click='shang(item)'>{{item.ascription}}</li>
          <li v-if='msg.length % 3 !== 0' v-for='n in (3 - msg.length % 3)' :key='"c" + n' class="noborder"></li>
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
  props: ['msg'],
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
    },
    shang (item) {
      let that = this
      that.$emit('shang', item)
    }
  }
}
</script>

<style scoped>
</style>
