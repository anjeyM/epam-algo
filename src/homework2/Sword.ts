import { Weapon } from "./Weapon";
import { Item } from "./Item";

export class Sword extends Weapon {

    constructor(baseDamage: number, baseDurability: number, private item: Item) {
        super(item, baseDamage, baseDurability);
        this.name = 'sword';
    }

    polish(): void {
        if (this.damageModifier && this.damageModifier < this.baseDamage/4) {
            this.damageModifier += this.MODIFIER_CHANGE_RATE;
        }
    }
}