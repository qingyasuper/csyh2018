<template>
  <div class='pg zh1'>
    <div class='zh1_body'>
      <div class='zh1_name'>{{name}}</div>
      <div class='zh1_ka'>
        <div class='zh1_zhi'>
          <img src="../assets/images/cs_18.png">
          <div class='zh1_ka_btn' @click='zh1_ka_btn(18)'></div>
        </div>
        <div class='zh1_zhi'>
          <img src="../assets/images/cs_58.png">
          <div class='zh1_ka_btn' @click='zh1_ka_btn(58)'></div>
        </div>
        <div class='zh1_zhi'>
          <img src="../assets/images/cs_88.png">
          <div class='zh1_ka_btn' @click='zh1_ka_btn(88)'></div>
        </div>
        <div class='zh1_zhi'>
          <img src="../assets/images/cs_188.png">
          <div class='zh1_ka_btn' @click='zh1_ka_btn(188)'></div>
        </div>
      </div>
    </div>
    <img src="../assets/images/cs_zhi1_btn1.png" class='cs_zhi1_btn' @click='tong'>
    <img src="../assets/images/cs_zhi1_btn2.png" class='cs_zhi1_btn' @click='ret("/")'>
    <transition name="fade">
      <mong :msg='alertxt' v-show='isalert'></mong>
    </transition>
    <transition name="fade">
      <er ref='er' v-show='ershow' @hide='erhide'></er>
    </transition>
  </div>
</template>
<script>
import mong from '@/components/mong'
import er from '@/components/er'

export default {
  name: 'zh1',
  components: {
    er,
    mong
  },
  data () {
    return {
      name: '',
      ershow: false,
      isalert: false,
      alertxt: ''
    }
  },
  mounted () {
    let that = this
    that.checkLogin(that.userinfo, function () {
      if (that.userinfo.type !== 1) {
        that.$router.push('/')
      }
    })
    that.name = that.userinfo.ascription
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
    zh1_ka_btn (f) {
      let that = this
      that.$jsonp(that.Url + 'grant', {
        type: f
      }).then(function (res) {
        if (res.detail) {
          that.vuealert(res.detail)
        } else {
          var d = {
            cdkey: res.data.cdkey,
            type: res.data.type
          }
          that.$store.commit('eInfo', d)
          that.$refs.er.init()
          that.ershow = true
        }
      })
    },
    vuealert (txt) {
      let that = this
      that.isalert = true
      that.alertxt = txt
      setTimeout(function () {
        that.isalert = false
      }, 1500)
    },
    erhide () {
      let that = this
      that.ershow = false
    },
    tong () {
      let that = this
      var data = {
        type: 1,
        up: 'cstong1',
        down: 'cstong4',
        tit: '',
        id1: that.userinfo.id,
        s: 1,
        id5: that.userinfo.id
      }
      that.$store.commit('tongInfo', data)
      that.ret('tong')
    }
  }
}
</script>

<style scoped>
</style>
