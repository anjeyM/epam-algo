import { Weapon } from "./Weapon";
import { Item } from "./Item";

export class Bow extends Weapon {

    constructor(baseDamage: number, baseDurability: number, item: Item) {
        super(item, baseDamage, baseDurability);
        this.name = 'bow';
    }

    polish(): void {
        if (!this.durabilityModifier || this.getEffectiveDurability() >= 1) {
            return; 
        }
        this.durabilityModifier += this.MODIFIER_CHANGE_RATE
    }
}