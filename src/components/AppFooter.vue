<template>
  <CFooter>
    <div>
      &copy; {{ new Date().getFullYear() }}
      <a href="https://139216.network">AS139216</a> Htroy Network Research Limited - We are using:Mikrotik | <CIcon :icon="cibDell"/> | <CIcon :icon="cibHuawei"/> | <CIcon :icon="cibCisco"/> | <CIcon :icon="cibIntel"/> | <CIcon :icon="cibCloudflare"/>
    </div>
    <div class="ms-auto">
      <span class="me-1" target="_blank">This web is powered by <CIcon :icon="cibCoreuiC" size=""/></span> | <a href="https://coreui.io/vue"> &copy; {{ new Date().getFullYear() }} creativeLabs.</a>
    </div>
  </CFooter>
</template>

<script>
import { CIcon } from '@coreui/icons-vue';
import { cibDell,cibCisco,cibHuawei,cibCoreuiC,cibCloudflare,cibIntel } from '@coreui/icons';

export default {
  name: 'AppFooter',
  components: {
    CIcon
  },
  setup() {
    return {
      cibDell,
      cibCisco,
      cibHuawei,
      cibCoreuiC,
      cibCloudflare,
      cibIntel
    }
  }
}
</script>
