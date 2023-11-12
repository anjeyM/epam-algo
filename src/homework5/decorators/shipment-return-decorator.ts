import {ShipmentDecorator} from './shipment-decorator';
import {ShipmentCodes} from '../types/types';

class ShipmentReturnDecorator extends ShipmentDecorator {
    ship() {
        return this.wrapee.ship() + `${ShipmentCodes.MARK_RETURN_RECEIPT_REQUESTED}`;
    }
}
