import {ShipmentDecorator} from './shipment-decorator';
import {ShipmentCodes} from '../types/types';

class ShipmentAllMarksDecorator extends ShipmentDecorator {
    ship() {
        return this.wrapee.ship() + `${ShipmentCodes.MARK_DO_NOT_LEAVE}` + `${ShipmentCodes.MARK_FRAGILE}` + `${ShipmentCodes.MARK_RETURN_RECEIPT_REQUESTED}`;
    }
}
