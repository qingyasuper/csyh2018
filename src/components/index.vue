<template>
  <div class='pg index'>
    <img src="../assets/images/cs_index_bg.png" class='cs_index_bg'>
    <ul>
      <li>
        <img src="../assets/images/cs_index_flag1.png">
        <input type="" placeholder="请输入用户账号" maxlength="20" v-model='username'>
      </li>
      <li>
        <img src="../assets/images/cs_index_flag2.png">
        <input type="password" placeholder="请输入密码" maxlength="20" v-model='psd'>
      </li>
    </ul>
    <img src="../assets/images/cs_index_btn.png" class='cs_index_btn' @click='login'>
    <transition name="fade">
      <mong :msg='alertxt' v-show='isalert'></mong>
    </transition>
  </div>
</template>
<script>
import mong from '@/components/mong'

export default {
  name: 'index',
  components: {
    mong
  },
  data () {
    return {
      username: '',
      psd: '',
      isalert: false,
      alertxt: ''
    }
  },
  mounted () {
    let that = this
    that.username = that.getCookie('cs_username')
    that.psd = that.getCookie('cs_psd')
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
    login () {
      let that = this
      if (that.username === '') {
        that.vuealert('请输入您的账号')
        return
      }
      if (that.psd === '') {
        that.vuealert('请输入您的密码')
        return
      }
      that.$jsonp(that.Url + 'login', {
        username: that.username,
        password: that.psd
      }).then(function (res) {
        if (res.state === 'success') {
          if (res.detail === '用户名不存在') {
            that.vuealert(res.detail)
            return
          }
          if (res.detail === '登录成功') {
            that.setCookie('cs_username', that.username, 60)
            that.setCookie('cs_psd', that.psd, 60)
            var data = res.data
            data.psd = that.psd
            that.$store.commit('uInfo', data)
            if (res.data.type === 0) {
              that.$router.push('zong1')
            } else if (res.data.type === 1) {
              that.$router.push('zh1')
            } else if (res.data.type === 2) {
              that.$router.push('shang1')
            }
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
