<template>
    <div class="row row-cols-2 row-cols-md-3 g-1">
        <div v-for="p in posts"
             class="col">
            <div class="card border-dark h-100">
                <div class="card-header">Article:</div>
                <div class="card-body text-dark">
                    <img width="200"
                         :src="$api + p.picture"
                         class="card-img-top"
                         alt="Post image">

                    <h5 class="card-title">
                        <RouterLink :to="`/post/${p.id}`">{{
                            p.title
                            }}</RouterLink>
                    </h5>
                    <p class="card-text">{{ p.text }}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Posted: {{ p.datePosted }}</small>
                </div>
                <button v-if="hasMore"
                        @click="updateOffset"
                        :disabled="loading"
                        class="btn btn-primary mt-4 mx-auto">
                    Load more
                </button>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

//import { getAll } from '@/data/posts.js';

export default {
    name: 'homeView',
    components: {

    },

    data() {
        return {
            posts: [],
            offset: 0,
            limit: 6,
            loading: false,
            hasMore: true,
        }
    },

    mounted() {
        axios.get(`${this.$api}/post?offset=${this.offset}&limit=${this.limit}`).then((res) => {
            console.log(res);
            this.posts = res.data.posts
            this.hasMore = res.data.totalSize > this.offset + this.limit;
        }).catch((e) => {
            console.error(e)
        })
    }
}

</script>