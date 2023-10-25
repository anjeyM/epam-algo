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

    static resetIdCounter(): void {
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
        return `${this.name} − Value: ${this.addTrailingZeros(this.value, 2)}, 
        Weight: ${this.addTrailingZeros(this.weight, 2)}`;
    }

    getId(): number {
        return this.id;
    }

    private addTrailingZeros(value: number, totalLength: number) {
        return String(value).padEnd(totalLength, '0');
      }
}