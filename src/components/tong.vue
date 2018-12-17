<template>
  <div class='pg tong' ref='tong'>
    <div class='return' @click='reu'>返回</div>
    <div :is='tongdata.up' :msg='up'>
    </div>
    <div :is='tongdata.down' :msg='down' @shang='shanglist' ref='cstong5'>
    </div>
  </div>
</template>
<script>
import cstong1 from '@/components/cstong1'
import cstong2 from '@/components/cstong2'
import cstong3 from '@/components/cstong3'
import cstong4 from '@/components/cstong4'
import cstong5 from '@/components/cstong5'

export default {
  name: 'tong',
  components: {
    cstong1,
    cstong2,
    cstong3,
    cstong4,
    cstong5
  },
  data () {
    return {
      down: '',
      up: ''
    }
  },
  mounted () {
    let that = this
    if (that.tongdata.up === undefined) {
      that.$router.push('/')
    }
    that.init()
  },
  computed: {
    userinfo () {
      return this.$store.state.userinfo
    },
    tongdata () {
      return this.$store.state.tongdata
    }
  },
  methods: {
    ret (u) {
      let that = this
      that.$router.push({path: u})
    },
    init () {
      let that = this
      if (that.tongdata.down === 'cstong3') {
        that.$jsonp(that.Url + 'listInfo?type=' + that.tongdata.type).then(function (res) {
          if (res.state === 'success') {
            that.down = res.data
          }
        })
      }
      if (that.tongdata.down === 'cstong5' || that.tongdata.down === 'cstong4') {
        let u = 'cdKey'
        if (that.tongdata.s) {
          u = 'cdKeyAll'
        }
        that.$jsonp(that.Url + u + '?id=' + that.tongdata.id5).then(function (res) {
          that.$store.commit('tongdatainfo', res.cdkey)
          that.$refs.cstong5.init()
        })
      }
      if (that.tongdata.up === 'cstong1') {
        let data = {}
        if (that.tongdata.id1) {
          data = {
            id: that.tongdata.id1
          }
        }
        that.$jsonp(that.Url + 'total', data).then(function (res) {
          that.up = res
          if (that.tongdata.id1) {
            that.up.total = that.up.data.f18 + that.up.data.f58 + that.up.data.f88 + that.up.data.f188
          }
        })
      }
      if (that.tongdata.up === 'cstong2') {
        let data = {}
        if (that.tongdata.id2) {
          data = {
            id: that.tongdata.id2
          }
        }
        let u = 'totalCar'
        if (that.tongdata.to) {
          u = 'keyTotal'
        }
        that.$jsonp(that.Url + u, data).then(function (res) {
          that.up = res
        })
      }
    },
    shanglist (res) {
      let that = this
      var data = {}
      if (res.type === 1) { // 支行
        data = {
          type: 1,
          up: 'cstong1',
          down: 'cstong4',
          tit: '',
          id1: res.id,
          id5: res.id,
          to: 1,
          s: 1
        }
      } else if (res.type === 2) { // 商户
        data = {
          type: 2,
          up: 'cstong2',
          down: 'cstong4',
          tit: '',
          id2: res.id,
          id5: res.id,
          to: 1
        }
      }
      that.$store.commit('tongInfo', data)
      that.init()
    },
    reu () {
      let that = this
      if (that.userinfo.type === 0) {
        that.$router.push('zong1')
      } else if (that.userinfo.type === 1) {
        that.$router.push('zh1')
      } else if (that.userinfo.type === 2) {
        that.$router.push('shang1')
      }
    }
  }
}
</script>

<style scoped>
</style>
