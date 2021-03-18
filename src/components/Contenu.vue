<template>
    <div class="container mt-5">

    <h1>{{ titre }}</h1>
    
    <liste :myArr="myArr" :txt="txt"></liste>
    </div>
</template>


<script>

    import Liste from './Liste'

    export default {
        name: 'Contenu',
        data() {
            return {
                myArr: [
                    {
                        title: "Bread - Italian Corn Meal Poly",
                        description: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
                        image: "http://dummyimage.com/224x191.bmp/dddddd/000000",
                        price: 20.15,
                    },  
                    {
                        title: "Wine - Periguita Fonseca",
                        description: "Wine - Periguita Fonseca",
                        image: "http://dummyimage.com/246x112.png/cc0000/ffffff",
                        price: 36.58,
                    },
                    {
                        title: "Bread Base - Italian",
                        description: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
                        image: "http://dummyimage.com/242x199.bmp/5fa2dd/ffffff",
                        price: 37.97,
                    },
                    {
                        title: "Bread - Italian Corn Meal Poly",
                        description: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
                        image: "http://dummyimage.com/224x191.bmp/dddddd/000000",
                        price: 14,
                    },
                    {
                        title: "Pear - Asian",
                        description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
                        image: "http://dummyimage.com/224x191.bmp/dddddd/000000",
                        price: 45.63,
                    },
                    {
                        title: "Chicken Breast Wing On",
                        description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
                        image: "http://dummyimage.com/224x191.bmp/dddddd/000000",
                        price: 23.5,
                    },
                    {
                        title: "Canada Dry",
                        description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
                        image: "http://dummyimage.com/224x191.bmp/dddddd/000000",
                        price: 28.17,
                    },
                    {
                        title: "Cookie - Oreo 100x2",
                        description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
                        image: "http://dummyimage.com/224x191.bmp/dddddd/000000",
                        price: 43.01,
                    },
                    {
                        title: "Sambuca - Ramazzotti",
                        description: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
                        image: "http://dummyimage.com/224x191.bmp/dddddd/000000",
                        price: 37.91,
                    },
                    {
                        title: "Rice - Jasmine Sented",
                        description: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
                        image: "http://dummyimage.com/224x191.bmp/dddddd/000000",
                        price: 37.31,
                    },
                ],
                txt: 'Bon produit',
            }
        },
        components: {
            'liste': Liste
        }
    }

</script>


<style></style>