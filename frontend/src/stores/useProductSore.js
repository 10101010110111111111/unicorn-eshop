import { axiosInstance } from "../lib/axios";
import { create } from "zustand";
import { toast } from "react-hot-toast";

export const useProductStore = create((set) => ({
  products: [],
  filters: { genders: [], sizes: [], colors: [], brands: [], categories: [] },
  selectedFilters: {
    genders: [],
    sizes: [],
    colors: [],
    brands: [],
    categories: [],
  },
  currentProduct: null,
  isLoading: false,
  error: null,

  fetchProducts: async (filtersParams) => {
    set({ isLoading: true, error: null });
    try {
      const query = filtersParams
        ? `?${new URLSearchParams(
            Object.entries(filtersParams).flatMap(([key, value]) =>
              Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]
            )
          ).toString()}`
        : "";

      const { data } = await axiosInstance.get(`/products${query}`);
      set({ products: data.products });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchProduct: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axiosInstance.get(`/products/${id}`);
      set({ currentProduct: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },

  addProduct: async (formData) => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.post("/admin/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Product added successfully");
    } catch (error) {
      set({ error: error.message });
      toast.error("Failed to add product");
    } finally {
      set({ isLoading: false });
    }
  },

  deleteProduct: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.delete(`/admin/products/${id}`);
      toast.success("Product deleted successfully");
    } catch (error) {
      set({ error: error.message });
      toast.error("Failed to delete product");
    } finally {
      set({ isLoading: false });
    }
  },

  setQuantity: async (id, quantity) => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.patch(`/admin/products/setQuantity`, {
        id,
        quantity,
      });
      toast.success("Quantity updated successfully");
    } catch (error) {
      set({ error: error.message });
      toast.error("Failed to update quantity");
    } finally {
      set({ isLoading: false });
    }
  },

  fetchFilters: async (filtersParams) => {
    try {
      let query = "";

      if (filtersParams) {
        const params = new URLSearchParams();

        for (const [key, value] of Object.entries(filtersParams)) {
          if (Array.isArray(value)) {
            value.forEach((v) => params.append(key, v));
          } else {
            params.append(key, value);
          }
        }
        query = `?${params.toString()}`;
      }

      const { data } = await axiosInstance.get(`/products/filters${query}`);
      set({ filters: data.filters });
    } catch (error) {
      set({ error: error.message });
    }
  },

  setSelectedFilters: (filters) =>
    set((state) => ({
      selectedFilters: {
        ...state.selectedFilters,
        ...filters,
      },
    })),

  resetSelectedFilters: () =>
    set({
      selectedFilters: {
        genders: [],
        sizes: [],
        colors: [],
        brands: [],
        categories: [],
      },
    }),
}));
