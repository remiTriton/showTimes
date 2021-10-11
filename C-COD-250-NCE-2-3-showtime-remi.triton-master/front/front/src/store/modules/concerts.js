const concerts = {
  name: "concerts",
  namespaced: true,
  state: {
    concerts: [],
  },

  mutations: {
    setConcertList(state, list) {
      state.concerts = list;
    },
  },

  actions: {
    //ON RECUPERE LES CONCERTS

    async fetchConcert(context) {
      const res = await fetch("https://showtimelespetitsmusclesback.herokuapp.com/concerts", {
        "method": "GET",
      })
      const data = await res.json();
      context.commit("setConcertList", data);
      // console.log(data)
    },
    async findOneConcert(context, id) {
      const res = await fetch("https://showtimelespetitsmusclesback.herokuapp.com/concerts/" + id, {
        "method": "GET",
      })
      const data = await res.json();
      context.commit("setConcertList", [data]);
      // console.log(data)
    },
    // ON RAJOUTE UN CONCERT
    async addConcert(context, posta) {
      const res = await fetch("https://showtimelespetitsmusclesback.herokuapp.com/concerts", {
        method: "POST",
        body: JSON.stringify(posta),
        headers: {
          "Content-type": "application/json",

        },
      });

      const data = await res.json();
      // console.log(data)

      context.commit("setConcertList", [
        ...context.state.concerts,
        {
          id: data.post,

        },
      ]);

    },

    //CRUD UPDATE
    async updateConcertsAdmin(context, concerts) {
      await fetch("https://showtimelespetitsmusclesback.herokuapp.com/concerts" + concerts.id + "/admin", {
        method: "PUT",
        body: JSON.stringify(concerts),
        "headers": {
          "Content-type": "application/json",
        }
      },
      );
      const pos = context.state.concerts.findIndex(
        (p) => p.id === concerts.id
      );
      if (pos > -1) {
        // remove from the store
        context.state.concerts.splice(pos, 1, concerts);
      }
      context.commit("setConcertList", context.state.concerts);

    },

    //user modifie son propre com

    async updateConcerts(context, concerts) {
      await fetch("https://showtimelespetitsmusclesback.herokuapp.com/concerts/" + concerts._id, {
        method: "PUT",
        body: JSON.stringify(concerts),
        "headers": {
          "Content-type": "application/json",
        }
      },
      );
      const pos = context.state.concerts.findIndex(
        (p) => p.id === concerts.id
      );
      if (pos > -1) {
        // remove from the store
        context.state.concerts.splice(pos, 1, concerts);
      }
      context.commit("setConcertList", context.state.concerts);

    },


    //DELETE COMMENT CRUD
    async deleteConcertAdmin(context, id) {
      await fetch("https://showtimelespetitsmusclesback.herokuapp.com/concerts/" + id, {
        method: "DELETE",

      });

      const pos = context.state.concerts.findIndex((p) => p.id === id);
      if (pos > -1) {
        context.state.concerts.splice(pos, 1);
      }
      context.commit("setConcertList", context.state.concerts);
    },

    
    async search(context, query) {
      const res = await fetch("https://showtimelespetitsmusclesback.herokuapp.com/concerts?s=" + query);
      const data = await res.json();
      if (data == null) {
        throw new Error('Nothing found')
      } else {
        context.commit("setConcertList", data);
        // console.log(data)
      }
    },
  }
}
export default concerts;

