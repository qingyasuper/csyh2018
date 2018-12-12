<template>
  <div class='pg tong'>
    <div is='cstong2'>
    </div>
    <div is='cstong3'>
    </div>
  </div>
</template>
<script>
import cstong1 from '@/components/cstong1'
import cstong2 from '@/components/cstong2'
import cstong3 from '@/components/cstong3'
export default {
  name: 'tong',
  components: {
    cstong1,
    cstong2,
    cstong3
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
