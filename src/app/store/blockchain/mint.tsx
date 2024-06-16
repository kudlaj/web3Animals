import { Animal, Weapon } from "@/types/animal";

const mint = async (animal: Animal, weapon: Weapon) => {
 // for now add a timeout and return a promise
 setTimeout(() => {
  return Promise.resolve({ success: true });
 }, 1000);
};

export default mint;