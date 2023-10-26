export class Pizza {
    private numberOfEatenSlices = 0;

    constructor(private value: number, private weight: number, private isSpoiled: boolean, private readonly numberOfSlices: number) {
        this.value = value;
        this.weight = weight;
        this.isSpoiled = isSpoiled;
        this.numberOfSlices = numberOfSlices;
    }

    use(): string {
        this.numberOfEatenSlices += 1;
        if (this.numberOfSlices === 0) {
            this.numberOfEatenSlices = 0;
            return 'There\'s nothing left of the pizza to consume.';
        }
        
        return 'You consumed a slice of the pizza.'
    }

    getNumberOfEatenSlices() {
        return this.numberOfEatenSlices;
    }
}