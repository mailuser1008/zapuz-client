<template>
  <div>
    <div
      style="
        width: 100%;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        display: flex;
        z-index: 1000;
        align-items: center;
        justify-content: center;
      "
    >
      <div
        class="app-bar"
        style="
          width: 1920px;
          height: 123px;
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          background-color: #1534c8;
          color: #fff;
          box-shadow: 0px 0px 18px -13px black;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <div
          style="width: 202px; height: 42px; cursor: pointer"
          @click="goPage(0)"
        >
          <v-img src="../../assets/navbar-items/zapuz_logo.svg" />
        </div>
        <div
          style="
            width: 146px;
            height: 52px;
            border: 2px solid #fff;
            border-radius: 14px;
            margin-left: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 18px;
            cursor: pointer;
            -webkit-user-select: none;
          "
          class="category active"
          @click="navigation_drawer = true"
        >
          <div style="width: 18px; height: 12px; margin-right: 17px">
            <v-img src="../../assets/navbar-items/hamburger.svg"></v-img>
          </div>
          <span style="font-size: 16px; font-weight: 600">BO'LIM</span>
        </div>
        <div>
          <v-text-field
            style="
              background-color: #f4f4f4;
              border-radius: 14px;
              width: 610px;
              height: 52px;
              margin-right: 70px;
            "
            append-icon="mdi-magnify"
            outlined
            placeholder="Qidirish..."
            hide-details
          />
        </div>
        <div
          style="
            margin-right: 27px;
            padding: 5px;
            border-radius: 14px;
            cursor: pointer;
            -webkit-user-select: none;
          "
          class="category active"
          @click="goPage(1)"
        >
          <div
            style="
              width: 20px;
              height: 9px;
              margin-left: 15px;
              margin-bottom: 10px;
            "
          >
            <v-img src="../../assets/navbar-items/account.svg" />
          </div>
          <span style="font-weight: 400; font-size: 14px">Account</span>
        </div>
        <div
          style="
            margin-right: 27px;
            padding: 5px;
            border-radius: 14px;
            cursor: pointer;
            -webkit-user-select: none;
          "
          class="category active"
          @click="goPage(2)"
        >
          <div
            style="
              width: 20px;
              height: 9px;
              margin-left: 18px;
              margin-bottom: 10px;
            "
          >
            <v-img src="../../assets/navbar-items/likesvg.svg" />
          </div>
          <span style="font-weight: 400; font-size: 14px">Sevimlilar</span>
        </div>

        <div
          style="
            margin-right: 27px;
            padding: 5px;
            border-radius: 14px;
            cursor: pointer;
            -webkit-user-select: none;
          "
          class="category active"
          @click="goPage(3)"
        >
          <div
            style="
              width: 20px;
              height: 9px;
              margin-left: 25px;
              margin-bottom: 10px;
            "
          >
            <v-img src="../../assets/navbar-items/statistcs.svg" />
          </div>
          <span style="font-weight: 400; font-size: 14px">Taqqoslash</span>
        </div>

        <div
          style="
            margin-right: 27px;
            padding: 5px;
            border-radius: 14px;
            cursor: pointer;
            -webkit-user-select: none;
          "
          class="category active"
          @click="goPage(4)"
        >
          <div
            style="
              width: 20px;
              height: 9px;
              margin-left: 15px;
              margin-bottom: 10px;
            "
          >
            <v-img src="../../assets/navbar-items/add-to-cart.svg" />
          </div>
          <span style="font-weight: 400; font-size: 14px">Savatcha</span>
        </div>
      </div>
    </div>
    <div>
      <v-navigation-drawer
        v-model="navigation_drawer"
        absolute
        temporary
        width="1125px"
        height="100%"
        style="z-index: 1000"
      >
        <v-card width="1125px" height="100%">
          <div class="float-right ma-3">
            <v-btn
              @click="navigation_drawer = false"
              small
              icon
              style="background-color: red; color: #fff"
            >
              <v-icon x-small> mdi-close </v-icon>
            </v-btn>
          </div>
          <h1>this is nav drawer</h1>
        </v-card>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",

  data() {
    return {
      navigation_drawer: false,
    };
  },
  methods: {
    goPage(id) {
      if (id === 1) {
        this.$router.push("/personal-account");
      } else if (id === 2) {
        this.$router.push("/wishlist");
      } else if (id === 3) {
        this.$router.push("/balance");
      } else if (id === 4) {
        this.$router.push("/add-to-cart");
      } else if (id === 0) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.category:hover {
  background-color: #2947d5;
}
.active:active {
  background-color: #4d68e8;
}
</style>
