import { Shipment } from "./shipment";
import {ShipmentType} from './types/types';
export class Client {
    private shipment: Shipment;

    constructor(
        weight: number,
        weight2: ShipmentType,
        fromAddress: string,
        fromZipCode: string,
        toAddress: string,
        toZipCode: string,
        shipmentID?: number,) {
            this.shipment = new Shipment(weight, weight2, fromAddress, fromZipCode, toAddress, toZipCode, shipmentID);
    }

    shipItem(): void {
        const shipmentInfo = this.shipment.ship();
        console.log('Shipment info: ', shipmentInfo);
      }
}