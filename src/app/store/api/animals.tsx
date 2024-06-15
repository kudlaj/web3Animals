import { Animal } from "@/types/animal";



const animals: Animal[] = [
  { 
    id: 1, 
    image: '/animals/clean/panda.png',  
    name: 'Panda', 
    alias: 'panda',
    description: 'The panda is a lovely animal. Even so some pandas can be fears beasts, this particular baby pandas are totally useless when it comes to battle.',
    properties: { wisdom: 20, strength: 5, speed: 10, stamina: 15, magic: 0, luck: 10, defense: 5 }
  },
  { 
    id: 2, 
    image: '/animals/clean/slow_loris.png', 
    description: 'The Slow Loris is as the name suggests, slow to react to danger and is not very bright. The only thing they are really good at is something nobody can remember.', 
    name: 'Slow Loris',
    alias: 'slow_loris',
    properties: { wisdom: 2, strength: 5, speed: 1, stamina: 5, magic: 5, luck: 5, defense: 5 }
  },
  { 
    id: 3, 
    image: '/animals/clean/lemur.png', 
    description: 'The Lemur is a beautiful animal. Not only is it beautiful but also vain as hell. They are awful cowards and avoid conflicts like the plague.', 
    name: 'Lemur',
    alias: 'lemur',
    properties: { wisdom: 15, strength: 10, speed: 20, stamina: 10, magic: 5, luck: 20, defense: 5 }
  },
  { 
    id: 4, 
    image: '/animals/clean/red_shanked_douc.png', 
    description: 'The Red Shanked Douc is a absolutly stupid animal. It is a natural born killer but it might get confused and hurt itself.', 
    name: 'Red Shanked Douc',
    alias: 'red_shanked_douc',
    properties: { wisdom: 0, strength: 10, speed: 10, stamina: 10, magic: 10, luck: 10, defense: 10 }
  },
];

// for now animals are fetched from jsonplaceholder
export const getAnimals: () => Promise<Animal[]> = async () => {
  return Promise.resolve(animals);
};