<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            <CCardTitle>地址分配列表 | IP Address List</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol :md="12">
                <CTable bordered>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Address Block</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Region</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Address Description</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Address Provider</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Address Type</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2a0e:aa07:f0d0::/48</CTableHeaderCell>
                      <CTableDataCell><CIcon :icon="cilGlobeAlt" size="xl"/> Anycast</CTableDataCell>
                      <CTableDataCell>Htroy Anycast Address</CTableDataCell>
                      <CTableDataCell>Kirino LLC</CTableDataCell>
                      <CTableDataCell>IPV6</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2a0e:aa07:f0d1::/48</CTableHeaderCell>
                      <CTableDataCell><CIcon :icon="cifHk" size="xl"/> HongKong,China</CTableDataCell>
                      <CTableDataCell>Htroy Network Backbone HongKong</CTableDataCell>
                      <CTableDataCell>Kirino LLC</CTableDataCell>
                      <CTableDataCell>IPV6</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2a0e:aa07:f0d2::/48</CTableHeaderCell>
                      <CTableDataCell><CIcon :icon="cifJp" size="xl"/> Japan</CTableDataCell>
                      <CTableDataCell>Htroy Network Backbone Japan</CTableDataCell>
                      <CTableDataCell>Kirino LLC</CTableDataCell>
                      <CTableDataCell>IPV6</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2a0e:aa07:f0d3::/48</CTableHeaderCell>
                      <CTableDataCell><CIcon :icon="cifCn" size="xl"/> Mainland,China</CTableDataCell>
                      <CTableDataCell>Htroy Network Backbone China</CTableDataCell>
                      <CTableDataCell>Kirino LLC</CTableDataCell>
                      <CTableDataCell>IPV6</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2a0e:aa07:f0d4::/48</CTableHeaderCell>
                      <CTableDataCell><CIcon :icon="cilEuro" size="xl"/> Europe</CTableDataCell>
                      <CTableDataCell>Htroy Network Backbone Europe</CTableDataCell>
                      <CTableDataCell>Kirino LLC</CTableDataCell>
                      <CTableDataCell>IPV6</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2a0e:aa07:f0d5::/48</CTableHeaderCell>
                      <CTableDataCell><CIcon :icon="cifUs" size="xl"/> UnitedStates</CTableDataCell>
                      <CTableDataCell>Htroy Network Backbone UnitedStates</CTableDataCell>
                      <CTableDataCell>Kirino LLC</CTableDataCell>
                      <CTableDataCell>IPV6</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2a0e:aa07:f0d6::/47</CTableHeaderCell>
                      <CTableDataCell><CIcon :icon="cilLan" size="xl"/> Internal Use</CTableDataCell>
                      <CTableDataCell>Htroy Network Backbone InternalUse</CTableDataCell>
                      <CTableDataCell>Kirino LLC</CTableDataCell>
                      <CTableDataCell>IPV6</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2a0e:aa07:f0d8::/45</CTableHeaderCell>
                      <CTableDataCell><CIcon :icon="cilLan" size="xl"/> User Hosted Network</CTableDataCell>
                      <CTableDataCell>Htroy User Hosted Network</CTableDataCell>
                      <CTableDataCell>Kirino LLC</CTableDataCell>
                      <CTableDataCell>IPV6</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2406:840:eee0::/43</CTableHeaderCell>
                      <CTableDataCell><CIcon :icon="cilBan" size="xl"/> Unused</CTableDataCell>
                      <CTableDataCell>Unused</CTableDataCell>
                      <CTableDataCell>Ningbo Dahuamao</CTableDataCell>
                      <CTableDataCell>IPV6</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2404:7ac0:607::/48</CTableHeaderCell>
                      <CTableDataCell><CIcon :icon="cilBan" size="xl"/> Unused</CTableDataCell>
                      <CTableDataCell>Unused</CTableDataCell>
                      <CTableDataCell>LightCloud</CTableDataCell>
                      <CTableDataCell>IPV6</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2404:f4c0:f100::/43</CTableHeaderCell>
                      <CTableDataCell><CIcon :icon="cilBan" size="xl"/></CTableDataCell>
                      <CTableDataCell>Wait for Return</CTableDataCell>
                      <CTableDataCell>Wuhan LSHIY</CTableDataCell>
                      <CTableDataCell>IPV6</CTableDataCell>
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
import { cifHk,cifDe,cifJp,cifCn,cilEuro,cifUs,cilLan,cilBan,cilGlobeAlt } from '@coreui/icons';
export default {
  name: 'Contact',
  components: {
    CIcon,
  },
  setup() {
    return {
      cifHk,
      cifDe,
      cifCn,
      cifJp,
      cilGlobeAlt,
      cilEuro,
      cifUs,
      cilLan,
      cilBan
    }
  }
}
</script>
