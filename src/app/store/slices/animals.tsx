import { Animal, Weapon, AnimalProperties, SelectedAnimal} from '@/types/animal';
import { AppError } from '@/types/error';
import { getAnimals } from '../api/animals';
import { getWeapons } from '../api/weapons';

export type AnimalState = {
  animals: Animal[];
  weapons: Weapon[];
  loading: boolean;
  error: AppError | null;
  selectedAnimal: SelectedAnimal | null;
  setAnimals: (animals: Animal[]) => void;
  setSelectedAnimal: (animal: Animal) => void;
  setSelectedAnimalCustomData: (name: string, description: string) => void;
  setSelectedAnimalImage: (image: string) => void;
  resetSelectedAnimal: () => void;
  fetchAnimals: () => Promise<void>;
  fetchWeapons: () => Promise<void>;
};

export const createAnimalSlice = (set: any, get: any) : AnimalState => {
  const state = {
    // initial state
    animals: [],
    weapons: [],
    selectedAnimal: null,
    loading: false,
    error: null,
    setAnimals: (animals: Animal[]) => set({ animals }),
    setSelectedAnimal: (animal: Animal) => set({ selectedAnimal: { animal } }),
    resetSelectedAnimal: () => set({ selectedAnimal: {
      image: 'placeholder.png',
      alias: 'placeholder',
      description: '...',
      name: 'Select Your Combat Animal'
    } }),
    setSelectedAnimalCustomData: (name: string, description: string) => set({ selectedAnimal: { 
      ...get().selectedAnimal,
      customData: {
        name,
        description
      }
    } }),
    setSelectedAnimalImage: (image: string) => set({ selectedAnimal: {
      ...get().selectedAnimal,
      customData: {
        ...get().selectedAnimal?.customData,
        image
      }
    } }),
    fetchAnimals: () => getAnimals().then((animals) => set({ animals })),
    fetchWeapons: () => getWeapons().then((weapons) => set({ weapons })),
  };

  // Fetch initial data
  state.fetchAnimals();
  state.fetchWeapons();

  return state;
};
