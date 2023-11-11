import {CentsPerOunce, ShipCompany} from './types/types';
export class Shipment {
    private static shipment: Shipment;
    private static nextShipmentID = 1;

    private weight: number;
    private shipmentID: number;
    private fromAddress: string;
    private fromZipCode: string;
    private toAddress: string;
    private toZipCode: string;

    constructor(
        weight: number,
        fromAddress: string,
        fromZipCode: string,
        toAddress: string,
        toZipCode: string,
        shipmentID?: number) {
            this.weight = weight;
            this.shipmentID = shipmentID || Shipment.getShipmentId();
            this.fromAddress = fromAddress;
            this.fromZipCode = fromZipCode;
            this.toAddress = toAddress;
            this.toZipCode = toZipCode;
    }

    public static getInstance(): Shipment {
        if (!Shipment.shipment) {
            Shipment.shipment = new Shipment(1,'Default adress','1','','1')
        }

        return Shipment.shipment;
    }

    public static getShipmentId(): number {
        return Shipment.nextShipmentID++;
    }

    ship(): string {
        const cost = this.weight * CentsPerOunce[ShipCompany.AIR_EAST];
        return `Shipment ID: ${this.shipmentID}, From: ${this.fromAddress} - ${this.fromZipCode}, To: ${this.toAddress} - ${this.toZipCode}, Cost: $${cost.toFixed(2)}`;
    }
}
