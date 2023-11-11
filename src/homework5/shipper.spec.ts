import {Shipper} from "./shipper";

describe('Shipper', () => {
    let shipper: Shipper;

    beforeEach(() => {
        shipper = new Shipper()
    })

    it("should calculate cost", () => {
        expect(shipper.getCost('135')).toEqual(0.39);
        expect(shipper.getCost('478')).toEqual(0.42);
        expect(shipper.getCost('790')).toEqual(0.51);
    });
})
