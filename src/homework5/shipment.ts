import {ShipmentType} from './types/types';
import {Shipper} from './shipper';
export class Shipment {
    private static shipment: Shipment;
    private static nextShipmentID = 1;

    private weight: number;
    private weight2: ShipmentType;
    private shipmentID: number;
    private fromAddress: string;
    private fromZipCode: string;
    private toAddress: string;
    private toZipCode: string;

    private shipper: Shipper;

    constructor(
        weight: number,
        weight2: ShipmentType,
        fromAddress: string,
        fromZipCode: string,
        toAddress: string,
        toZipCode: string,
        shipmentID?: number) {
            this.weight = weight;
            this.weight2 = weight2 || ShipmentType.LETTER;
            this.shipmentID = shipmentID || Shipment.getShipmentId();
            this.fromAddress = fromAddress;
            this.fromZipCode = fromZipCode;
            this.toAddress = toAddress;
            this.toZipCode = toZipCode;
            this.shipper = new Shipper();
    }

    public static getInstance(): Shipment {
        if (!Shipment.shipment) {
            Shipment.shipment = new Shipment(1, ShipmentType.LETTER, 'Default adress','123','Default adress','456')
        }

        return Shipment.shipment;
    }

    public static getShipmentId(): number {
        return Shipment.nextShipmentID++;
    }

    ship(): string {
        const shipperCostByParcelType = this.shipper.getCost(this.fromZipCode, this.weight2);
        const cost = this.weight * shipperCostByParcelType;
        return `Shipment ID: ${this.shipmentID}, From: ${this.fromAddress} - ${this.fromZipCode}, To: ${this.toAddress} - ${this.toZipCode}, Cost: $${cost.toFixed(2)}`;
    }
}
