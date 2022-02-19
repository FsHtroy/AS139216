<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
      <CHeaderNav class="d-none d-md-flex me-auto">
        <CNavItem>
          <CCardText>Welcome to Htroy Research Network's HomePage - AS:139216 <CIcon :icon="cifCn" size=""/></CCardText>
        </CNavItem>
      </CHeaderNav>
    </CContainer>
  </CHeader>
</template>

<script>
import { CIcon } from '@coreui/icons-vue';
import { cifCn } from '@coreui/icons';
export default {
  name: 'AppHeader',
  components: {
    CIcon
  },
  setup() {
    return {
      cifCn,
    }
  }
}
</script>
