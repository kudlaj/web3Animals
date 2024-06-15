export type AnimalProperties = {
  health?: number;
  wisdom?: number;
  strength: number;
  speed?: number;
  stamina?: number;
  magic?: number;
  luck?: number;
  defense?: number;
};

export type Animal = {
  id?: number;
  name: string;
  description: string;
  image: string;
  properties?: AnimalProperties;
};

export type Weapon = {
  id: number;
  name: string;
  description?: string;
  image: string;
};

export type SelectedAnimal = {
  animal: Animal;
  weapon: Weapon;
};