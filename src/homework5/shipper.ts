import {centsPerOunce, companyToZipCodes, ShipCompany, ShipmentType, companyToShipmentType, ShipmentTypePrice, PriceType} from "./types/types";


export class Shipper {
    
    private static shipper: Shipper;

    constructor() {}

    public static getInstance(): Shipper {
        if (!Shipper.shipper) {
            Shipper.shipper = new Shipper()
        }

        return Shipper.shipper;
    }

    /** Returns shipment price for a concrete shipment company by parcel type. */
    private getPriceByShipmentType(
        basePrice: number, 
        parcelType: ShipmentType,
        shipmentTypePrices: ShipmentTypePrice[],
    ): number {
        let priceByType = 0;
        shipmentTypePrices.forEach((shipmentTypePrice: ShipmentTypePrice) => {
            if (shipmentTypePrice.type === parcelType) {
                priceByType = shipmentTypePrice.price.type === PriceType.PRICE_PER_OUNCE ? 
                        shipmentTypePrice.price.value : 
                        basePrice + shipmentTypePrice.price.value;
            }
        })
        return priceByType;
    }

    /** Calculates shipment cost based on sender zip code and parcel type. */
    getCost(fromZipCode: string, parcelType: ShipmentType): number {
        const shipCompany: string = this.getShipCompany(fromZipCode);
        const basePrice = centsPerOunce[shipCompany as ShipCompany];

        for (const [companyName, shipmentTypePrices] of Object.entries(companyToShipmentType)) {
            if (shipCompany === companyName) {
                return this.getPriceByShipmentType(basePrice, parcelType, shipmentTypePrices);
            }
        }

        return basePrice;
    }

    /** Returns shipment company based on sender zip code. */
    getShipCompany(fromZipCode: string): string {
        for (const [companyName, zipCodes] of Object.entries(companyToZipCodes)) {
            if (zipCodes.includes(fromZipCode.charAt(0))) {
                return companyName;
            }
        }

        return ShipCompany.AIR_EAST;
    }
}
