import { Weapon } from "./Weapon";
import { Item } from "./Item";

export class Bow extends Weapon {

    constructor(private item: Item, baseDamage: number, baseDurability: number) {
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