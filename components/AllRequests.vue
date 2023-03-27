<template>
  <v-container>
    <v-col v-for="request in all" :key="request.id">
      <Request :request="request"/>
    </v-col>
  </v-container>  
</template>
  
  <script>
  import Request from './Request.vue';
  import { mapActions, mapState } from 'vuex';
  
  export default {
      name:'AllRequests',
      components:{ Request },
      async created(){
          await this.fetchRequests({status:'all',sort:'desc',order_by:'updated_at'})
      },
      computed:{
          ...mapState(['all'])
      },
      methods:{
      ...mapActions(['fetchRequests'])
    }
  
  }
  </script>
  