import { ref } from 'vue'

export const ViewedP = ref({})

export function view_product(product){
    ViewedP.value = product
}