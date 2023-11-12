import {ShipmentDecorator} from './shipment-decorator';
import {ShipmentCodes} from '../types/types';

class ShipmentFragileDecorator extends ShipmentDecorator {
    ship() {
        return this.wrapee.ship() + `${ShipmentCodes.MARK_FRAGILE}`;
    }
}
