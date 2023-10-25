export class Pizza {
    readonly numberOfSlices = 0;
    private numberOfEatenSlices = 0;

    constructor(private value: number, weight: number, isSpoiled: boolean, numberOfSlices: number) {}

    use(): string {
        if (this.numberOfEatenSlices === 0) {
            return 'There\'s nothing left of the pizza to consume.';
        }
        return 'You consumed a slice of the pizza.'
    }

    getNumberOfEatenSlices() {
        return this.numberOfEatenSlices;
    }
}