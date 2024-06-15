import { Weapon } from "@/types/animal";
const weapons: Weapon[] = [{
  id: 1,
  name: 'Yellow Umbrella',
  image: 'umbrella.png',
  alias: 'umbrella'
},
{
  id: 2,
  name: 'Compfy Pillow',
  image: 'pillow.png',
  alias: 'pillow'
},
{
  id: 3,
  name: 'Deathly Chainsaw',
  image: 'chainsaw.png',
  alias: 'chainsaw'
},
{
  id: 3,
  name: 'Bubble Blaster',
  image: 'bubble_gun.png',
  alias: 'bubble_gun'
}
];

export const getWeapons = async () => {
  return Promise.resolve(weapons);
};