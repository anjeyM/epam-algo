import { ShipmentInterface } from "../types/types";

export class ShipmentDecorator implements ShipmentInterface {
    protected wrapee: ShipmentInterface

    constructor( shipment: ShipmentInterface) {
        this.wrapee = shipment;
    }

    ship() {
        return this.wrapee.ship();
    }
}