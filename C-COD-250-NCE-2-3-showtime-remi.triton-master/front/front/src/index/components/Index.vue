<template>
  <div class="index">
    <section class="section">
      <div class="container main justify-content-center">
        <div class="row">
          <!-- start carousel -->
          <div class="content">
            <div class="wrapper">
              <div class="carousel">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="@/assets/958-francis-cabrel.jpg"
                        class="d-block w-100"
                        alt="Carrousel slide 1"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="@/assets/958-johnny-hallyday.jpg"
                        class="d-block w-100"
                        alt="Carrousel slide 2"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="@/assets/958-soprano.jpg"
                        class="d-block w-100"
                        alt="Carrousel slide 3"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- end carousel -->
          <!--- start card block--->
          <div class="container justify-content-center">
            <div class="row">
              <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <!--- start card --->
                <div
                  class="card"
                  v-for="concert in concerts.splice(0, 10)"
                  :key="concert.id"
                >
                  <div class="row no-gutters">
                    <div class="col-md-3 card-date">
                      <!-- <img
                      src="https://static.ticketmaster.fr/static/images/vignettes/n_julien-dore.gif"
                      class="card-img hover-overlay"
                      alt=""
                    /> -->

                      <h6 class="card-subtitle mb-2">
                        {{ concert.date }}
                      </h6>
                    </div>
                    <div class="col-md-6">
                      <div class="card-body">
                        <h5 class="card-title">{{ concert.group_name }}</h5>
                        <p class="card-text">{{ concert.place }}</p>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="card-title float-end">
                        {{ concert.price }} €
                      </div>
                      <router-link
                        :to="{
                          name: 'PrintConcert',
                          params: { id: concert._id },
                        }"
                      >
                        <button
                          class="btn btn-primary btn-sm float-end"
                          @click="addTicket(concert._id)"
                        >
                          Réserver
                        </button>
                      </router-link>
                    </div>
                  </div>
                </div>
                <!--- end card --->
                <div class="row">
                  <div class="col-md-12 justify-content-center">
                    <button type="button" class="btn btn-outline-primary">
                      Load More
                    </button>
                  </div>
                </div>
                <!-- end row -->
              </div>

              <!-- end card -->
              <!--- start side-bar pub --->
              <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="sidebar">
                  <div class="banner-spot">
                    <div class="banner-img">
                      <img src="@/assets/banner.jpg" alt="" class="img-fluid" />
                    </div>
                    <!-- end banner-img -->
                    <div class="banner-img">
                      <img
                        src="@/assets/banner02.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: {
    msg: String,
  },

  data() {
    return {
      concert: "",
    };
  },
  created() {
    this.$store.dispatch("concerts/fetchConcert"),
      this.$store.dispatch("users/fetchUser");
  },
  computed: {
    concerts() {
      return this.$store.state.concerts.concerts;
    },
    users() {
      return this.$store.state.users.users;
    },
  },
  methods: {
    async addTicket(id) {
      await this.$store.dispatch("tickets/addTicket", {
        concert: id,
      });
    },
  },
};
</script>

<style scoped>
.main {
  margin-top: 70px;
  width: 1000px;
}
.card {
  /* border:white; */
  border-color: white white lightgrey;
  text-align: left;
  /* flex-direction: row; */
  margin: 0.9375rem;
  padding: 15px;
  /* max-width: 600px; */
  /* box-shadow: 0 0 10px #ccc; */
  /* -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-shadow: 0 5px 6px -6px #777;
  -moz-box-shadow: 0 5px 6px -6px #777;
  box-shadow: 0 5px 6px -6px #777;
}
.card-subtitle {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgb(144, 78, 186);
}
.card-title {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
}
.card-date {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card:hover {
  opacity: 0.7;
  /* box-shadow: 0 0 10px #ccc; */
  background: rgb(231, 238, 249) none repeat scroll 0% 0%;
}
.card img {
  height: 120px;
  width: 120px;
}
.wrapper {
  width: 1000px;
}
.sidebar {
  margin: 0.9375rem;
}
.banner-img {
  margin-bottom: 15px;
}
.carousel {
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
}
.col-md-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
