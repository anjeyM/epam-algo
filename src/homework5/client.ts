import { Shipment } from "./shipment";

export class Client {
    private shipment: Shipment;

    constructor(
        weight: number,
        fromAddress: string,
        fromZipCode: string,
        toAddress: string,
        toZipCode: string,
        shipmentID?: number,) {
            this.shipment = new Shipment(weight, fromAddress, fromZipCode, toAddress, toZipCode, shipmentID);
    }

    shipItem(): void {
        const shipmentInfo = this.shipment.ship();
        console.log('Shipment info: ', shipmentInfo);
      }
}