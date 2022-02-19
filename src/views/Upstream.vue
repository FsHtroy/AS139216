<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            <CCardTitle>上游列表 | Upstream List</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol :md="12">
                <CTable bordered>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Region</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Network Provider</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Pop Device</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Device Provider</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Speed</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row"><CIcon :icon="cifHk" size="xl"/> 香港 HongKong,China</CTableHeaderCell>
                      <CTableDataCell>AS6939 Hurricane Electric LLC</CTableDataCell>
                      <CTableDataCell>HK10</CTableDataCell>
                      <CTableDataCell>TencentCloud</CTableDataCell>
                      <CTableDataCell>Tunnel(SIT)</CTableDataCell>
                      <CTableDataCell>30Mbps</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row"><CIcon :icon="cifHk" size="xl"/> 香港 HongKong,China</CTableHeaderCell>
                      <CTableDataCell>AS139317 Ningbo Dahuamao Information Technology Co Ltd</CTableDataCell>
                      <CTableDataCell>HK10</CTableDataCell>
                      <CTableDataCell>TencentCloud</CTableDataCell>
                      <CTableDataCell>VPN(OpenVPN)</CTableDataCell>
                      <CTableDataCell>30Mbps</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row"><CIcon :icon="cifHk" size="xl"/> 香港 HongKong,China</CTableHeaderCell>
                      <CTableDataCell>AS38008 Aperture Science Limited</CTableDataCell>
                      <CTableDataCell>HK4</CTableDataCell>
                      <CTableDataCell>apernet.io</CTableDataCell>
                      <CTableDataCell>Physical</CTableDataCell>
                      <CTableDataCell>200Mbps</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row"><CIcon :icon="cifDe" size="xl"/> 德国 Germany</CTableHeaderCell>
                      <CTableDataCell>AS9516 Sakura Network LTD</CTableDataCell>
                      <CTableDataCell>DE1</CTableDataCell>
                      <CTableDataCell>OLVPS</CTableDataCell>
                      <CTableDataCell>Physical</CTableDataCell>
                      <CTableDataCell>100Mbps</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row"><CIcon :icon="cifJp" size="xl"/> 日本 Japan</CTableHeaderCell>
                      <CTableDataCell>AS20473 The Constant Company, LLC</CTableDataCell>
                      <CTableDataCell>JP1</CTableDataCell>
                      <CTableDataCell>Vultr</CTableDataCell>
                      <CTableDataCell>Physical</CTableDataCell>
                      <CTableDataCell>1Gbps</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
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
import { cifHk,cifDe,cifJp } from '@coreui/icons';
export default {
  name: 'Contact',
  components: {
    CIcon,
  },
  setup() {
    return {
      cifHk,
      cifDe,
      cifJp,
    }
  }
}
</script>
