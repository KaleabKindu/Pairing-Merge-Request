<template>
  <v-container>
    <v-col v-for="request in closed" :key="request.id">
      <Request :request="request"/>
    </v-col>
  </v-container>
</template>
  
  <script>
import {mapActions, mapState} from 'vuex';
  import Request from './Request.vue';
  
  export default {
      name:'ClosedRequests',
      components:{ Request },
      async created(){
          await this.fetchRequests({status:'closed',sort:'desc',order_by:'updated_at'})
      },
      computed:{
          ...mapState(['closed'])
      },
      methods:{
      ...mapActions(['fetchRequests'])
    }
  
  }
  </script>
  