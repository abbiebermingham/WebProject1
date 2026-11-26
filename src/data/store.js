import { reactive } from 'vue'
import { articles } from './articles.js'


export const store = reactive({
    articles: articles,
    reviews: [],
    watchlist: [1,2,3],
    watchlistDetails: {},
    homepage: []
})



export function toggleWatchlist(id) {


    if (store.watchlist.includes(id)) {

        // Remove the movie
        store.watchlist = store.watchlist.filter(
            movieId => movieId !== id
        )

    } else {


        store.watchlist.push(id)

    }


    localStorage.setItem(
        'watchlist',
        JSON.stringify(store.watchlist)
    )
}

export function updateWatchlist(id, status, notes) {

    store.watchlistDetails[id] = {
        status: status,
        notes: notes
    }

    localStorage.setItem(
        'watchlistDetails',
        JSON.stringify(store.watchlistDetails)
    )

}
