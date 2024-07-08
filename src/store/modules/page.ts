// src/stores/goodTypeStore.js
import {defineStore} from 'pinia';
import {pageStore} from '@/constans/page';

const usePageStore = defineStore('pageStore', {
    state: () => ({
        pageStore
    })
});

export default usePageStore;