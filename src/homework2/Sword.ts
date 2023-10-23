import { Weapon } from "./Weapon";
import { Item } from "./Item";

export class Sword extends Weapon {

    constructor(private item: Item, baseDamage: number, baseDurability: number) {
        super(item, baseDamage, baseDurability);
        this.name = 'sword';
    }

    polish(): void {
        if (this.damageModifier && this.damageModifier < this.baseDamage/4) {
            this.damageModifier += this.MODIFIER_CHANGE_RATE;
        }
    }
}