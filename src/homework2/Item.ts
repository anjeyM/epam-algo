import {Comparable} from './Comparable';

export class Item implements Comparable<Item> {
    static idCounter = 1;
    protected readonly id: number;
    name: string;
    
    value: number;
    weight: number;

    constructor(name: string, value: number, weight: number) {
        this.id = ++ Item.idCounter;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    resetIdCounter(): void {
        Item.idCounter = 0;
    }

    use(): void {

    }

    compareTo(other: Item): number {
        if (this.value === other.value && this.weight === other.weight) {
            return this.name.localeCompare(other.name);
        }
        return this.value > other.value && this.weight > other.weight ? 1 : -1;
    }

    toString(): string {
        return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
    }

    getId(): number {
        return this.id;
    }
}