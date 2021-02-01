<template>
  <div class="container-cards">
      <div id="logo">
        <img  src="../assets/logo.png" alt="">
      </div>
      <input >
      <v-text-field v-model="Personagem_nome" label="Digite o Nome do Personagem"  hide-details="auto"></v-text-field>
      <v-btn id="button-search" type="button" value=" Search" v-on:click="get_api" block>
      Buscar
      </v-btn>
      
      <div class="v-item-group ">

        <div id="card-place" class="v-card" v-for="(id, status) in Personagem" :key="status">
            <v-expansion-panels>
            <v-expansion-panel >
                      <v-expansion-panel-header>
                        <h3>{{id.name}}</h3> <v-avatar><img :src="id.image" alt=""></v-avatar>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content> 

                        <div class="card">
                        <h1>{{id.name}}</h1>
                        <img :src="id.image" alt="">   
                        <p>Status</p> {{id.status}}
                        <p>Specie</p> {{id.species}}
                        <p>Gender</p> {{id.gender}}
                        <p>First Apparition</p>  {{id.origin[0]}}
                        <p>Last apparition</p>  {{id.location[0]}}                     
                        <p>Number of Episodes Participated</p> {{id.episode.length}}
                        </div> 
                    </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>      
        </div>
      
      </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
    data(){
      return{
        Personagem:[],
        Personagem_nome:""
      };
    },
    
    methods:{
      get_api(){

        let url_padrao="https://rickandmortyapi.com/api/character/?name=";

        axios.get(url_padrao+this.Personagem_nome).then(res=>{
          
          this.Personagem=res.data.results;
          
        })
        
      }
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Suez+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Suez+One&display=swap');
  .container-cards{
    background:#A967DB;
    color: rgb(0, 0, 0);
    margin-top: -5px;
  }
  #button-search{
    font-family: 'Suez One', serif;
    letter-spacing: 10px;
    font-size: 20px;
  }
  #card-place h3{
    font-family: 'Suez One', serif;
  }
  .card{
    margin-top: 50px;
    text-align: center; 
  }
  .card p{
    font-family: 'Suez One', serif;
    background:#5007F6;
    border-radius: 150px;
  }
  .card img{
    border-radius: 150px;
  }
  .card h1{
    font-family: 'Gloria Hallelujah', cursive;
  }
  .v-item-group{
    margin-top: 9px;
  }
  #logo{
    text-align: center;
  }
  
  
</style>