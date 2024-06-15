import create from 'zustand';
import { Animal, Weapon, AnimalProperties, SelectedAnimal} from '../types/animal';


export type AnimalState = {
  animals: Animal[];
  weapons: Weapon[];
  selectedAnimal: SelectedAnimal | null;
  setAnimals: (animals: Animal[]) => void;
  setSelectedAnimal: (animal: Animal) => void;
  setSelectedAnimalNameAndDescription: (name: string, description: string) => void;
  setSelectedAnimalImage: (image: string) => void;
  resetSelectedAnimal: () => void;
};

export const createAnimalSlice = (set: any, get: any) : AnimalState => ({
  // initial state
  animals: [
    { 
      id: 1, 
      image: '/animals/clean/panda.png',  
      name: 'Panda', 
      description: 'The panda is a lovely animal. Even so some pandas can be fears beasts, this particular baby pandas are totally useless when it comes to battle.',
      properties: { wisdom: 20, strength: 5, speed: 10, stamina: 15, magic: 0, luck: 10, defense: 5 }
    },
    { 
      id: 2, 
      image: '/animals/clean/slow_loris.png', 
      description: 'The Slow Loris is as the name suggests, slow to react to danger and is not very bright. The only thing they are really good at is something nobody can remember.', 
      name: 'Slow Loris',
      properties: { wisdom: 2, strength: 5, speed: 1, stamina: 5, magic: 5, luck: 5, defense: 5 }
    },
    { 
      id: 3, 
      image: '/animals/clean/lemur.png', 
      description: 'The Lemur is a beautiful animal. Not only is it beautiful but also vain as hell. They are awful cowards and avoid conflicts like the plague.', 
      name: 'Lemur',
      properties: { wisdom: 15, strength: 10, speed: 20, stamina: 10, magic: 5, luck: 20, defense: 5 }
    },
    { 
      id: 4, 
      image: '/animals/clean/red_shanked_douc.png', 
      description: 'The Red Shanked Douc is a absolutly stupid animal. It is a natural born killer but it might get confused and hurt itself.', 
      name: 'Red Shanked Douc',
      properties: { wisdom: 0, strength: 10, speed: 10, stamina: 10, magic: 10, luck: 10, defense: 10 }
    },
  ],
  weapons: [{
    id: 1,
    name: 'Yellow Umbrella',
    image: 'umbrella.png'
  },
  {
    id: 2,
    name: 'Compfy Pillow',
    image: 'pillow.png'
  },
  {
    id: 3,
    name: 'Deathly Chainsaw',
    image: 'chainsaw.png'
  }
],
  selectedAnimal: null,
  setAnimals: (animals) => set({ animals }),
  setSelectedAnimal: (animal) => set({ selectedAnimal: { animal } }),
  resetSelectedAnimal: () => set({ selectedAnimal: {
    image: 'placeholder.png',
    description: '...',
    name: 'Select Your Combat Animal'
  } }),
  setSelectedAnimalNameAndDescription: (name, description) => set({ selectedAnimal: { 
    animal: {
      ...get().selectedAnimal?.animal,
      name, 
      description 
    }
  } }),
  setSelectedAnimalImage: (image) => set({ selectedAnimal: {
    animal: {
      ...get().selectedAnimal?.animal,
      image
    }
  } }),
});
