<template>
  <v-container class="pa-0">
    <v-col v-for="request in open" :key="request.id">
      <Request :request="request"/>
    </v-col>
  </v-container>

</template>

<script>
import Request from './Request.vue';
import {mapActions, mapState} from 'vuex';

export default {
    name:'OpenRequests',
    components:{ Request },
    async created(){
        await this.fetchRequests({status:'opened',sort:'desc',order_by:'updated_at'})
    },
    computed:{
        ...mapState(['open'])
    },
    methods:{
    ...mapActions(['fetchRequests'])
  }

}
</script>
