<template>
  <div class='pg zh1 zong1 shang1'>
    <div class='cs_shang1_tit'>{{name}}</div>
    <input placeholder="请输入消费券密码" maxlength="12" v-model='key'>
    <img src="../assets/images/cs_shang1_btn1.png" class='cs_zhi1_btn' @click='shang1Btn'>
    <div class='radio'></div>
    <img src="../assets/images/cs_shang1_btn2.png" class='cs_zhi1_btn cs_shang1_btn2' @click='ret("/tong")'>
    <img src="../assets/images/cs_zhi1_btn2.png" class='cs_zhi1_btn' @click='ret("/")'>
    <transition name="fade">
      <div class='nav' v-show='cs_he1'>
        <div class='cs_he1'>
          <span>{{name}}</span>
          <i>{{yuan}}元代金券</i>
          <img src="../assets/images/cs_er_return.png" @click='cs_he1=false'>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class='nav' v-show='cs_he2'>
        <div class='cs_he2'>
          <span>{{tips}}</span>
          <i v-show='tipstime!==""'>核销时间：{{tipstime}}</i>
          <i v-show='tipsbus!==""'>核销商户：{{tipsbus}}</i>
          <img src="../assets/images/cs_er_return.png" @click='cs_he2=false'>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <mong :msg='alertxt' v-show='isalert'></mong>
    </transition>
  </div>
</template>
<script>
import mong from '@/components/mong'

export default {
  name: 'shang1',
  components: {
    mong
  },
  data () {
    return {
      name: '',
      key: '',
      cs_he1: false,
      yuan: '18',
      cs_he2: false,
      tips: '该代金券已消费',
      tipstime: '',
      tipsbus: '',
      isalert: false,
      alertxt: ''
    }
  },
  mounted () {
    let that = this
    that.checkLogin(that.userinfo, function () {
      if (that.userinfo.type !== 2) {
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
    shang1Btn () {
      let that = this
      if (that.key.length === 0) {
        that.vuealert('请输入消费券密码')
        return
      }
      var data = {
        key: that.key
      }
      if (that.key.length <= 10) {
        data.type = 1
      }
      that.$jsonp(that.Url + 'remove', data).then(function (res) {
        console.log(res)
        if (res.state === 'success') {
          if (res.detail === '此卡已经核销!') {
            that.tips = '此卡已经核销!'
            that.tipstime = res.sy_time
            that.tipsbus = res.sy_shanghu
            that.cs_he2 = true
          } else if (res.detail === '无效卡') {
            that.tips = '查无此卡!'
            that.tipstime = ''
            that.tipsbus = ''
            that.cs_he2 = true
          } else if (res.detail === '核销成功') {
            that.yuan = res.type
            that.cs_he1 = true
          }
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
    }
  }
}
</script>

<style scoped>
</style>
