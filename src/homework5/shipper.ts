import {CentsPerOunce, CompanyToZipCodes, ShipCompany} from "./types/types";


export class Shipper {
    
    private static shipper: Shipper;

    constructor() {}

    public static getInstance(): Shipper {
        if (!Shipper.shipper) {
            Shipper.shipper = new Shipper()
        }

        return Shipper.shipper;
    }

    getCost(fromZipCode: string): number {
        const shipCompany: string = this.getShipCompany(fromZipCode);
        return CentsPerOunce[shipCompany as ShipCompany];
    }

    private getShipCompany(fromZipCode: string): string {
        for (const [companyName, zipCodes] of Object.entries(CompanyToZipCodes)) {
            if (zipCodes.includes(fromZipCode.charAt(0))) {
                return companyName;
            }
        }

        return ShipCompany.AIR_EAST;
    }
}
