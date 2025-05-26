import { axiosInstance } from "../lib/axios";
import { create } from "zustand";
import { toast } from "react-hot-toast";

export const useReviewStore = create((set) => ({
  error: null,

  addReview: async (review) => {
    set({ error: null });
    try {
      await axiosInstance.post("/reviews", review);
      toast.success("Review added successfully");
    } catch (error) {
      set({
        error:
          error.response?.data?.message ||
          error.message ||
          "Failed to add review",
      });
      toast.error("Failed to add review");
    }
  },

  deleteReview: async (id) => {
    set({ error: null });
    try {
      await axiosInstance.delete(`/reviews/${id}`);
      toast.success("Review deleted successfully");
    } catch (error) {
      set({
        error:
          error.response?.data?.message ||
          error.message ||
          "Failed to delete review",
      });
      toast.error("Failed to delete review");
    }
  },
}));
