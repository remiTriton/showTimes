const tickets = {
  name: 'tickets',
  namespaced: true,
  state: {
    tickets: [],
  },
  mutations: {
    ticketsList(state, tickets) {
      state.tickets = tickets;
    },
  },
  actions: {
    async fetchTickets(context) {
      const res = await fetch("https://showtimelespetitsmusclesback.herokuapp.com/tickets", {
        "method": "GET",

      })
      const data = await res.json();
      context.commit("ticketsList", data);
      // console.log(data)
    },

    async deleteUserAdmin(context, id) {
      await fetch("https://showtimelespetitsmusclesback.herokuapp.com/tickets/" + id, {
        method: "DELETE",
      });

      const pos = context.state.tickets.findIndex((p) => p.id === id);
      if (pos > -1) {
        context.state.tickets.splice(pos, 1);
      }

      context.commit("ticketsList", context.state.tickets);
    },
    async addTicket(context, posta) {
      const res = await fetch("https://showtimelespetitsmusclesback.herokuapp.com/tickets", {
        method: "POST",
        body: JSON.stringify(posta),
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),

        },
      });
      const data = await res.json();
      context.commit("ticketsList", [
        ...context.state.tickets,
        {
          id: data.post,
        },
      ]);
   
    },
    async getTicket(context, id){
      const res = await fetch("https://showtimelespetitsmusclesback.herokuapp.com/tickets/" + id);
      const data = await res.json();
      context.commit('ticketsList', data)
  },

},}
export default tickets;
