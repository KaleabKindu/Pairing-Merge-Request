<template>
  <v-container>
    <v-col v-for="request in merged" :key="request.id">
      <Request :request="request"/>
    </v-col>
  </v-container>
</template>
  
  <script>
  import {mapActions, mapState} from 'vuex';
  import Request from './Request.vue';
  
  export default {
      name:'OpenRequests',
      components:{ Request },
      async created(){
          await this.fetchRequests({status:'merged',sort:'desc',order_by:'updated_at'})
      },
      computed:{
          ...mapState(['merged'])
      },
      methods:{
      ...mapActions(['fetchRequests'])
    }
  
  }
  </script>
  