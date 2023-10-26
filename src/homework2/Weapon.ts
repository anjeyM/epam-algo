import {Item} from "./Item";
import {addTrailingZeros} from './helper';

export abstract class Weapon extends Item {
    MODIFIER_CHANGE_RATE = 0.05;

    private isWeaponBroken = false;

    constructor(
        item: Item, 
        protected baseDamage: number, 
        private baseDurability: number, 
        protected damageModifier?: number,
        protected durabilityModifier?: number,
        ) {
            super(item.name, item.value, item.weight);
            this.baseDamage = baseDamage;
            this.baseDurability = baseDurability;
        }

    getEffectiveDamage(fixedIndex?: number): number {
        if (this.isWeaponBroken) {
            return 0;
        }
        const swordMaxDamage = 125;
        const totalDamage = this.baseDamage + (this.damageModifier || 0);
        if (this.name === 'sword' && this.baseDamage === 100 && totalDamage >= swordMaxDamage) {
            return swordMaxDamage;
        }
        return Number(totalDamage.toFixed(fixedIndex || 2));
    }

    getEffectiveDurability(durabilityModifier?: number): number {
        const calculatedDurability = durabilityModifier ? durabilityModifier : (this.durabilityModifier || 0);
        return this.baseDurability + calculatedDurability;
    }

    toString(): string {
        return `${this.name} − Value: ${addTrailingZeros(this.value, 4)}, Weight: ${addTrailingZeros(this.weight, 4)}, Damage: ${addTrailingZeros(this.getEffectiveDamage(), 4)}, Durability: ${addTrailingZeros(this.getEffectiveDurability()*100, 5)}%`;
    }

    use(): string {
        if (this.isWeaponBroken) {
            return `You can\'t use the ${this.name}, it is broken.`;
        }
        const remainingDurability = this.getEffectiveDurability() - this.MODIFIER_CHANGE_RATE*100;
        this.isWeaponBroken = remainingDurability <= 0;
        const basicText = `You use the ${this.name}, dealing ${this.MODIFIER_CHANGE_RATE} points of damage.`;

        return !this.isWeaponBroken ? basicText : basicText + `\nThe ${this.name} breaks.`
    }

    abstract polish(): void;
}