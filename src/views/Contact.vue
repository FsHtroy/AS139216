<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            <CCardTitle>联系方式 | Contact Info</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol :md="12">
                为了防止垃圾邮件，邮件地址经Base64转换，<CLink href="https://www.base64decode.org/">解码请到</CLink><br>
                For anti spam,email addresses are Base64 converted,<CLink href="https://www.base64decode.org/">Decode Here</CLink>
              </CCol>
              <CCol :md="12"><hr></CCol>
              <CCol :md="12">
                <CCardText>
                  <CIcon :icon="cilLanguage" size="xl"/> 支持语言 | Language: 简中/繁中/粤语/English
                </CCardText>
                <CCardText>
                  <CIcon :icon="cibTelegram" size="xl"/> Telegram:<CLink href="https://t.me/GCable">@GCable</CLink>
                </CCardText>
              </CCol>
              <CCol :md="12"><hr></CCol>
              <CCol :md="3" :sm="6">
                <h5>Admin:</h5>
                <CCardText>
                  Email:<br>aHRyb3lAaHRyb3kuY29t
                </CCardText>
              </CCol>
              <CCol :md="3" :sm="6">
                <h5>Peer:</h5>
                <CCardText>
                  Email:<br>cGVlckAxMzkyMTYubmV0d29yaw==
                </CCardText>
              </CCol>
              <CCol :md="3" :sm="6">
                <h5>Noc:</h5>
                <CCardText>
                  Email:<br>bm9jQDEzOTIxNi5uZXR3b3Jr
                </CCardText>
              </CCol>
              <CCol :md="3" :sm="6">
                <h5>Abuse:</h5>
                <CCardText>
                  Email:<br>YWJ1c2VAMTM5MjE2Lm5ldHdvcms=
                </CCardText>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import { CIcon } from '@coreui/icons-vue';
import { cilLanguage,cibTelegram } from '@coreui/icons';
export default {
  name: 'Contact',
  components: {
    CIcon
  },
  setup() {
    return {
      cilLanguage,
      cibTelegram
    }
  }
}
</script>
