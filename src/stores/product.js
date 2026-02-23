import { handleError } from "@/helpers/errorHelper";
import { axiosInstance } from "@/plugins/axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [],
        meta: {
            current_page: 1,
            last_page: 1,
            per_page: 10,
            total: 0,
        },
        loading: false,
        error: null,
        success: null,
    }),
    actions: {
        async fetchProducts(params) {
            this.loading = true

            try{
                const response = await axiosInstance.get(`product`, { params })

                this.products = response.data.data
            } catch(error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async fetchProductBySlug(slug) {
            this.loading = true

            try {
                const   response = await axiosInstance.get(`product/slug/${slug}`)

                return response.data.data
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        }
    }
});