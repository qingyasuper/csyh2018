<template>
  <div class='pg zh1 zong1 shang1 change'>
    <div class='return' @click='reu'>返回</div>
    <div class='cs_shang1_tit'>{{userinfo.ascription}}</div>
    <input placeholder="请输入原登录密码" maxlength="12" v-model='key' type='password'>
    <div class='radio'></div>
    <input placeholder="请输入新登录密码" maxlength="12" v-model='key1' type='password'>
    <input placeholder="请再次输入新登录密码" maxlength="12" v-model='key2' type='password'>
    <img src="../assets/images/cs_shang1_btn1.png" class='cs_zhi1_btn' @click='btn'>
    <transition name="fade">
      <mong :msg='alertxt' v-show='isalert'></mong>
    </transition>
  </div>
</template>
<script>
import mong from '@/components/mong'

export default {
  name: 'change',
  components: {
    mong
  },
  data () {
    return {
      key: '',
      key1: '',
      key2: '',
      isalert: false,
      alertxt: ''
    }
  },
  mounted () {
    let that = this
    that.checkLogin(that.userinfo, function () {})
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
    vuealert (txt) {
      let that = this
      that.isalert = true
      that.alertxt = txt
      setTimeout(function () {
        that.isalert = false
      }, 1500)
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
    },
    btn () {
      let that = this
      if (that.key === '') {
        that.vuealert('请输入原登录密码')
        return
      } else if (that.key1 === '') {
        that.vuealert('请输入新登录密码')
        return
      } else if (that.key2 === '') {
        that.vuealert('请再次输入新登录密码')
        return
      } else if (that.key2 !== that.key1) {
        that.vuealert('两次输入的新密码不一致')
        return
      }
      let data = {
        pass: that.key,
        pass2: that.key1
      }
      that.$jsonp(that.Url + 'passEdit', data).then(function (res) {
        if (res.detail === 'fail') {
          that.vuealert('原密码验证错误')
        } else if (res.detail === 'success') {
          that.ret('/')
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
