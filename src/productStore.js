import { defineStore } from 'pinia';

export const useStore = defineStore('product', {
    state: () => ({
      purchased: 0,
    }),
  });