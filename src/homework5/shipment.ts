import {ShipmentType, ShipmentInterface} from './types/types';
import {Shipper} from './shipper';
export class Shipment implements ShipmentInterface {
    private static shipment: Shipment;
    private static nextShipmentID = 1;

    private weight: number = 0;
    private weight2: ShipmentType = ShipmentType.LETTER;
    private shipmentID: number = Shipment.getShipmentId();
    private fromAddress: string = '';
    private fromZipCode: string = '';
    private toAddress: string = '';
    private toZipCode: string = '';

    private shipper: Shipper = new Shipper();

    private constructor() {}

    public static get instance(): Shipment {
        if (!Shipment.shipment) {
            Shipment.shipment = new Shipment()
        }

        return this.shipment || (this.shipment = new this());
    }

    public configure(
            weight: number,
            weight2: ShipmentType,
            fromAddress: string,
            fromZipCode: string,
            toAddress: string,
            toZipCode: string,
            shipper: Shipper,
            shipmentID?: number,
        )
    {
        this.weight = weight;
        this.weight2 = weight2 || ShipmentType.LETTER;
        this.fromAddress = fromAddress;
        this.fromZipCode = fromZipCode;
        this.toAddress = toAddress;
        this.toZipCode = toZipCode;
        this.shipper = shipper || new Shipper();
        this.shipmentID = shipmentID || Shipment.getShipmentId();
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
