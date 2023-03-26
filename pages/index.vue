<template>
  <v-container>
    <v-card>
    <v-tabs
      v-model="tab"
      align-tabs="center"
    >
      <v-tab>Open </v-tab>
      <v-tab>Merged</v-tab>
      <v-tab>Closed</v-tab>
      <v-tab>All </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab"> 
      <v-tab-item >
        <OpenRequests />
      </v-tab-item>
      <v-tab-item >
        <MergedRequests />
      </v-tab-item>   
      <v-tab-item >
        <ClosedRequests />
      </v-tab-item>      

      <v-tab-item >
        <AllRequests />
      </v-tab-item>
    
    </v-tabs-items>


  </v-card>
  </v-container>
</template>

<script>
import AllRequests from '../components/AllRequests.vue';
import ClosedRequests from '../components/ClosedRequests.vue';
import MergedRequests from '../components/MergedRequests.vue';
import OpenRequests from '../components/OpenRequests.vue';
export default {
    name: "IndexPage",
    components: { OpenRequests, ClosedRequests, MergedRequests, AllRequests },

    data() {
        return {
            tab: 0,
        };
    },
}
</script>
