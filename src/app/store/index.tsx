import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createAnimalSlice } from './slices/animals';
import { createSetupSlice } from './slices/setup';
import type { AnimalState } from './slices/animals';
import type { SetupState } from './slices/setup';

type StoreState = AnimalState & SetupState;

export const useBoundStore = create<StoreState>()(
  devtools(
    persist(
      (set, get) => ({
        ...createAnimalSlice(set, get),
        ...createSetupSlice(set, get),
      }),
      {
        name: 'cute-animals-store', 
      }
    )
  )
);
