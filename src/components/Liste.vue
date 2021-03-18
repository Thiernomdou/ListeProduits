<template>
    <div>
        
        <ul class="liste mt-5" >
            <li v-for="(produit, index) in myArr" :key="index">
                <div class="card">
                    <div class="card-body">
                
                        Title: {{ produit.title }}
                        <br>
                        Description: {{ produit.description }}
                        <br>
                        Image: {{ produit.image }}
                        <br>
                        Price: {{ produit.price }}
                        <br>
                        <router-link to="/detail"><div  class="btn btn-primary mt-2 ml-2 btn-nav">En savoir plus</div></router-link>
                        <br>
                        <p>{{ txt }}</p>
                    </div>
                </div>

            </li>
        </ul>

        

        <div v-on:click="supprprod" class="btn btn-danger mt-2">Supprimer le produit</div>
        <div v-on:click="supprTxt" class="btn btn-danger mt-2 ml-2">Supprimer tous les textes</div>

    </div>
</template>

<script>


export default {
    name: 'Liste',
    data() {
        return {
            fruits: ["Orange", "papaye", "Fraise"]
        }
    },
    methods: {
        supprprod: function() {
            // E,lever le dernier élémént d'un tableau
            this.myArr.pop();
        },
        supprTxt: function() {
            // E,lever le dernier élémént d'un tableau
            this.txt = "";
        }
    },
    // Les props
    props: ['myArr', 'txt']
    
}

</script>


<style scoped src="./Liste.css">

</style>