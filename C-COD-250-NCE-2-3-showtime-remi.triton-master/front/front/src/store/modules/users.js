const users = {
    name: "users",
    namespaced: true,
    state: {
        users: [],
    },

    mutations: {
        setUserList(state, users) {
            state.users = users;
        },
    },

    actions: {
        //Read de la CrUD
        async fetchUser(context) {
            const res = await fetch("https://showtimelespetitsmusclesback.herokuapp.com/users", {
                "method": "GET",

            })
            const data = await res.json();
            context.commit("setUserList", data);
        //    console.log(data)
        },

        // Nouvel utilisateur
        async addUser(context, posta) {
            const res = await fetch("https://showtimelespetitsmusclesback.herokuapp.com/users/register", {
                method: "POST",
                body: JSON.stringify(posta),
                headers: {
                    "Content-type": "application/json"
                },
            });

            const data = await res.json();
        //    console.log(data)
            context.commit("setUserList", [
                ...context.state.users,
                {
                    id: data.post,
                    firstName: posta.content,
                    lastName: posta.content,
                    email: posta.content,
                    password: posta.content,
                },
            ]);
        },

        //CRUD UPDATE
        async updateUsersAdmin(context, users) {
            await fetch("https://showtimelespetitsmusclesback.herokuapp.com/users" + users.id + "/admin", {
                method: "PUT",
                body: JSON.stringify(users),
                "headers": {
                    "Content-type": "application/json",
                }
            },
            );
            const pos = context.state.users.findIndex(
                (p) => p.id === users.id
            );
            if (pos > -1) {
                // remove from the store
                context.state.users.splice(pos, 1, users);
            }
            context.commit("setUserList", context.state.users);

        },

        //user modifie son propre com

        async updateUsers(context, users) {
            await fetch("https://showtimelespetitsmusclesback.herokuapp.com/users/" + users._id, {
                method: "PUT",
                body: JSON.stringify(users),
                "headers": {
                    "Content-type": "application/json",
                },
            });
            const pos = context.state.users.findIndex(
                (p) => p.id === users._id
            );
            if (pos > -1) {
                // remove from the store
                context.state.users.splice(pos, 1, users);
            }
            context.commit("setUserList", context.state.users);

        },

        //DELETE COMMENT CRUD
        async deleteUserAdmin(context, id) {
            await fetch("https://showtimelespetitsmusclesback.herokuapp.com/users/" + id, {
                method: "DELETE",
            });

            const pos = context.state.users.findIndex((p) => p.id === id);
            if (pos > -1) {
                context.state.users.splice(pos, 1);
            }

            context.commit("setUserList", context.state.users);

        },

        //On recupère UN user pour son propre profil

        async fetchUnicUser(context){
           const res= await fetch("https://showtimelespetitsmusclesback.herokuapp.com/profile/", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
           });
           const data= await res.json();
            // console.log(data)
           context.commit('setUserList', data)
        }
    }
}
export default users;