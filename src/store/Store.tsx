import { create } from "zustand";

export interface StoreImageType {
  id: string;
  url: string;
}

interface State {
  storedImages: StoreImageType[];
  addImage: (id: string, url: string) => void;
  removeImage: (id: string) => void;
}

/**
 * useStore - This is the Zustand store (global state management).
 *
 */
export const useStore = create<State>((set) => ({
  storedImages: [],
  addImage: (id: string, url: string) => {
    set((state) => ({
      storedImages: [
        ...state.storedImages,
        {
          id,
          url,
        } as StoreImageType,
      ],
    }));
  },
  removeImage: (id) => {
    set((state) => ({
      storedImages: state.storedImages.filter((image) => image.id !== id),
    }));
  },
}));
