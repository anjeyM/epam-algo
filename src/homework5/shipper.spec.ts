import {Shipper} from "./shipper";
import {ShipmentType} from './types/types';

describe('Shipper', () => {
    let shipper: Shipper;

    beforeEach(() => {
        shipper = new Shipper()
    })

    it("should calculate cost for Air East", () => {
        expect(shipper.getCost('135', ShipmentType.LETTER)).toEqual(0.39);
        expect(shipper.getCost('135', ShipmentType.PACKAGE)).toEqual(0.25);
        expect(shipper.getCost('135', ShipmentType.OVERSIZED)).toEqual(10.39);
    });

    it("should calculate cost for Chicago Sprint", () => {
        expect(shipper.getCost('478', ShipmentType.LETTER)).toEqual(0.42);
        expect(shipper.getCost('478', ShipmentType.PACKAGE)).toEqual(0.2);
        expect(shipper.getCost('478', ShipmentType.OVERSIZED)).toEqual(0.42);
    });

    it("should calculate cost for Pacific Parcel", () => {
        expect(shipper.getCost('790', ShipmentType.LETTER)).toEqual(0.51);
        expect(shipper.getCost('790', ShipmentType.PACKAGE)).toEqual(0.19);
        expect(shipper.getCost('790', ShipmentType.OVERSIZED)).toEqual(0.53);
    });
})
