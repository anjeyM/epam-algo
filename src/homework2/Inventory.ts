import { Item } from './Item';
import { ItemComparator } from './ItemComparator';
export class Inventory {
    private items: Item[] = [];
    constructor(item: Item) {}

    addItem(item: Item): void {
        this.items.push(item);
    }

    sort(comparator?: ItemComparator): void {
        const defaultSort = (prevItem: Item, nextItem: Item) => prevItem.value - nextItem.value;
        if (comparator) {
            this.items.sort(comparator.compare)
        }
        this.items.sort(defaultSort)
    }
}