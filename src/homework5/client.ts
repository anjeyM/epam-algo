import {Shipment} from "./shipment";
import {ShipmentType} from './types/types';
import {Shipper} from './shipper';
export class Client {
    private shipment: Shipment;

    constructor(
        weight: number,
        weight2: ShipmentType,
        fromAddress: string,
        fromZipCode: string,
        toAddress: string,
        toZipCode: string,
        shipper: Shipper,
        shipmentID?: number,) {
            this.shipment = Shipment.instance;
            this.shipment.configure(weight, weight2, fromAddress, fromZipCode, toAddress, toZipCode, shipper, shipmentID);
    }

    shipItem(): void {
        const shipmentInfo = this.shipment.ship();
        console.log('Shipment info: ', shipmentInfo);
      }
}