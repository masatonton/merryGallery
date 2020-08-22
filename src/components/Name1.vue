<template>
    <v-container>

        <div>
        <v-btn color="orange darken-2" to="/">
            <v-icon left >mdi-arrow-left</v-icon>Home
        </v-btn>
        </div>


        <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
        >
    
        <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
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

        <v-card-title>Name1.name</v-card-title>

        <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-rating
            :value="0"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
            ></v-rating>
        
        <div class="grey--text ml-4">0 (0)</div>
        </v-row>
        <br>

        <div>Age:24</div>
        <div>Measures:??cm,B:??,W:??,H:??</div>
        <div>Smoking:NO</div>
        <div>Tattoos:NO</div>
        <div>Drinking:Yes</div>
        <div>English Level:</div>
        <br>

        <div class="title">
          Self-Introdution
        </div>
        <v-divider> </v-divider>
        <div class="body-1">
          Hello,I am Name.1. I am from Tokyo! Now, I am new face in MerryGallery.
          I look fowrerd to playing elos things widh you!
        </div>

        </v-card-text>

         </v-card>


    </v-container>
</template>








<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: true,
          to:'/' ,
        },
        {
          text: 'Name1',
          disabled: false,
          href: '/name1',
        },
      ],
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
        ],
        slides: [
          'pic1',
          'pic2',
          'pic3',
        ],
     }),
  }
</script>


<style>
 .bread{
    padding-left:-24px}

</style>