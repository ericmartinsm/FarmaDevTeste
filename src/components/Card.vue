<template>
    <v-card elevation="5" >
        <v-img src="../assets/thumb.png"></v-img> 
        <div class="container-cards pl-5 pr-5 pb-10 " > 
            <div class="text-center" id="logo">
                <img class="mt-5 mb-5"  src="../assets/logo.png" alt="">
            </div>
            <div>
                <v-select class="font-weight-black" :items="items" label="Status do Personagem" solo v-model="Personagem_status"></v-select>
            </div>
            <v-text-field class="font-weight-black" v-model="Personagem_nome" label="Digite o Nome do Personagem" placeholder="Nome do Personagem" filled></v-text-field> 
            <v-btn id="button-search" class="mb-15" type="button" value=" Search" v-on:click="get_characters_by_name_status" block>
                Buscar
            </v-btn>
            <div class="v-item-group "> 
                <div id="card-place" class="v-card mb-5" v-for="(personagem) in Personagens" :key="personagem.id">
                    <v-expansion-panels>
                        <v-expansion-panel >
                            <v-expansion-panel-header>
                                <h3>{{personagem.name}}</h3> <v-avatar><img :src="personagem.image" alt=""></v-avatar>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> 
                                <v-card  class="mx-auto my-12 text-center" max-width="400">
                                    <template slot="progress">
                                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                                    </template>
                                    <v-img class="rounded-circle" :src="personagem.image" ></v-img>
                                    <v-card-title class="justify-center card-name">{{personagem.name}}</v-card-title>
                                    <v-card-text>
                                        <v-row align="center" class="mx-0"></v-row>
                                            <div class="my-4 subtitle-1 ">
                                                <v-divider class="mx-4"></v-divider>
                                                <p class="font-weight-black mt-3">Status</p>
                                                <v-divider class="mx-4"></v-divider>  
                                                {{personagem.status}}
                                                <v-divider class="mx-4 "></v-divider>
                                                <p class="font-weight-black mt-3">Specie</p>
                                                <v-divider class="mx-4"></v-divider>
                                                {{personagem.species}} 
                                                <v-divider class="mx-4"></v-divider>
                                                <p class="font-weight-black mt-3">Gender</p> 
                                                <v-divider class="mx-4"></v-divider>
                                                {{personagem.gender}}
                                                <v-divider class="mx-4"></v-divider>
                                                <p class="font-weight-black mt-3">First Apparition</p>
                                                <v-divider class="mx-4"></v-divider>  
                                                {{personagem.origin.name}}
                                                <v-divider class="mx-4"></v-divider>
                                                <p class="font-weight-black mt-3">Last apparition</p>
                                                <v-divider class="mx-4"></v-divider>   
                                                {{personagem.location.name}}
                                                <v-divider class="mx-4"></v-divider>                    
                                                <p class="font-weight-black mt-3">Number of Episodes Participated</p>
                                                <v-divider class="mx-4"></v-divider> 
                                                {{personagem.episode.length}}
                                                <v-divider class="mx-4"></v-divider>
                                            </div>   
                                        </v-card-text>
                                    <v-divider class="mx-4"></v-divider>    
                                </v-card>    
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>      
                </div> 
            </div>
        </div>
    </v-card>
</template>

<script>
    import axios from 'axios'
    
    export default {
        data: () => ({
            items: ['Alive', 'Dead','Unknown'],
            Personagens:[],
            Personagem_nome:"",
            Personagem_status:"",
        }),
        
        methods:{
            get_api(){
                
                let url_padrao="https://rickandmortyapi.com/api/character/?name=";                
                axios.get(url_padrao+this.Personagem_nome).then(res=>{                    
                this.Personagens=res.data.results;

                })
            },
            
            get_characters_by_name_status(){
        
                let url_padrao="https://rickandmortyapi.com/api/character";
                let request_url;
                if(this.Personagem_status === 'Todos' && this.Personagem_nome){
                    request_url=`${url_padrao}/?name=${this.Personagem_nome}`;    
                }
                else if(!this.Personagem_nome && this.Personagem_status !== 'Todos'){
                    request_url=`${url_padrao}/?status=${this.Personagem_status}`;                   
                }
                else if(this.Personagem_nome && this.Personagem_status !== 'Todos'){
                    request_url=`${url_padrao}/?name=${this.Personagem_nome}&status=${this.Personagem_status}`;                   
                }
                else{
                    request_url=url_padrao;     
                }
                axios.get(request_url).then(res=>{                  
                    this.Personagens=res.data.results;
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
    .card p{
        font-family: 'Suez One', serif;
    }
    .card-name{
        font-family: 'Gloria Hallelujah', cursive;
    }
     
</style>