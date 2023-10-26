import { Item } from './Item';
export class Consumable extends Item {
    isConsumed = false;
    isSpoiled: boolean;

    constructor(item: Item, isSpoiled?: boolean) {
        super(item.name, item.value, item.weight);
        this.isSpoiled = isSpoiled || false;
    }

    use() {
        if (this.isConsumed) {
            return `There's nothing left of the ${this.name} to consume.`;
        }
        if (this.isSpoiled) {
            return `You consumed the ${this.name}.` + `\nYou feel sick.`
        }
        return `You consumed the ${this.name}.`;
    }
}