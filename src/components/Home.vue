<template>

    <v-container fluid>
      <br>
        <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    margin="10vw"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    </v-carousel>

    <br>
    <v-divider> </v-divider>
    <br>

        <v-layout row wrap>
        <v-row dense>
        <v-col
          v-for="card in displayLists"
          :key="card.index"
          :cols="12"
          :sm="6"
          :md="4"
          :lg="3"
        >
        <v-card :to="card.to" class="pa-2"  color="pink lighten-1">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400px"
            >
            <v-card-title v-text="card.title"></v-card-title>
            </v-img>
        </v-card>
          
        </v-col>
        </v-row>
        </v-layout>
        <br>
        <v-pagination
            v-model="page"
            :length="length"
            @input = "pageChange"
            color="pink lighten-1"
        ></v-pagination>
        

    </v-container>

</template>

    <script>
    export default {
    data: () => ({
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
      slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      page: 1,
      cards: [
        { title: 'Name1', src: '#', to: '/name1'},
        { title: 'Name2', src: '#', to: '/name2'},
        { title: 'Name3', src: '#', to: '/name3'},
        { title: 'Name4', src: '#', to: '/name4'},
        { title: 'Name5', src: '#', to: '/name5'},
        { title: 'Name6', src: '#', to: '/name6'},
        { title: 'Name7', src: '#', to: '/name7'},
        { title: 'Name8', src: '#', to: '/name8'},
        { title: 'Name9', src: '#', to: '/name9'},
        { title: 'Name10', src: '#', to: '/name10'},
        { title: 'Name11', src: '#', to: '/name11'},
        { title: 'Name12', src: '#', to: '/name12'},
      ],
      displayListss:[],
      pageSize: 6,
      length:0,
    }),

    methods: {
      pageChange:function(pageNumber){
      this.displayLists = this.cards.slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber));
        },
    },

    mounted:
        function(){
        this.length = Math.ceil(this.cards.length/this.pageSize);

        this.displayLists = this.cards.slice(this.pageSize*(this.page -1), this.pageSize*(this.page));
      }
  }
    </script>