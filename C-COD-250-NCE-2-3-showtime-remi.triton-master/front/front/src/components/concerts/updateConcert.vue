<template>
  <div class="modal fade" tabindex="-1" :id="'updateConcerts' + concert._id">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modifier {{ concert.group_name }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label :for="'group_name' + concert._id" class="form-label"
                >Concert:
              </label>
              <input
                type="text"
                class="form-control mb-3"
                :id="'group_name' + concert._id"
                v-model="group_name"
              />
              <input
                type="text"
                class="form-control mb-3"
                :id="'date' + concert._id"
                v-model="date"
              />
              <input
                type="text"
                class="form-control mb-3"
                :id="'price'+ concert._id"
                v-model="price"
              />
              <input
                type="text"
                class="form-control mb-3"
                :id="'password'+ concert._id"
                v-model="place"
              />
              
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="reload"
          >
            Close
          </button>
          <button type="submit" class="btn btn-primary" @click="onClick">
            Submit changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "updateConcert",
  props: ["concert"],
  data() {
    return {
      id: this.concert.id,
      group_name: this.concert.group_name,
      date: this.concert.date,
      price: this.concert.price,
      place: this.concert.place,
    };
  },

  methods: {
    async onClick() {
      await this.$store.dispatch("concerts/updateConcerts", {
        _id: this.concert._id,
        group_name: this.group_name,
        date: this.date,
        price: this.price,
        place: this.place,
        
        
      });
    },

    reload() {
      this.$router.go();
    },
  },
};
</script>
