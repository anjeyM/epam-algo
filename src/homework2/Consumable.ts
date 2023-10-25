import { Item } from './Item';
export class Consumable extends Item {
    isConsumed = false;
    private isSpoiled = false;

    constructor(item: Item, isSpoiled: boolean) {
        super(item.name, item.value, item.weight);
        this.isSpoiled = isSpoiled;
    }

    use() {
        if (this.isConsumed) {
            return `There is nothing left of the ${this.name} to consume.`;
        }
        if (this.isSpoiled) {
            return `You consumed the ${this.name}.` + `\n You feel sick.`
        }
        return `You consumed the ${this.name}.`;
    }
}