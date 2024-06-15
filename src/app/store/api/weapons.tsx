import { Weapon } from "@/types/animal";
const weapons: Weapon[] = [{
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
];

export const getWeapons = async () => {
  return Promise.resolve(weapons);
};