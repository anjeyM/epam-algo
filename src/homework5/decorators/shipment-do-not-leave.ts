import {ShipmentDecorator} from './shipment-decorator';
import {ShipmentCodes} from '../types/types';

class ShipmentDoNotLeaveDecorator extends ShipmentDecorator {
    ship() {
        return this.wrapee.ship() + `${ShipmentCodes.MARK_DO_NOT_LEAVE}`;
    }
}
