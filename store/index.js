const state =() => ({
    open:[],
    closed: [],
    all:[],
    merged:[],
    personalAccessToken:'glpat-FJ9stcsHfwvTwmThpxTQ',

})
const getters = {

}

const actions = {
    async fetchRequests({commit,state},status){
       try  {
        const headers = { Authorization: `Bearer ${state.personalAccessToken}` };

        const response = await this.$axios.get('https://gitlab.com/api/v4/projects/7764/merge_requests?state='+status+'&with_labels_details=true',{ headers })
        if(status === 'opened'){
            commit('setOpenRequests', response.data)
        }else if (status === 'closed'){
            commit('setClosedRequests', response.data)
        }else if (status === 'merged'){
            commit('setMergedRequests', response.data)
        }else{
            commit('setAllRequests', response.data)
        }
        return response.status === 200
    
        }catch(error){
            return false
        }
    }, 
    

}

const mutations = {
    setAllRequests(state, requests) {state.all = [...requests]},
    setOpenRequests(state, requests) {state.open = [...requests]},
    setClosedRequests(state, requests) {state.closed = [...requests]},
    setMergedRequests(state, requests) {state.merged = [...requests]},
   
}




export default {
    state, 
    mutations, 
    actions, 
    getters,
}