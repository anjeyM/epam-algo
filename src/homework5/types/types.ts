export enum ShipCompany {
    AIR_EAST = 'air_east',
    CHICAGO_SPRINT = 'chicago_sprint',
    PACIFIC_PARCEL = 'pacific_parcel',
}

export enum ShipmentType {
    LETTER = 'letter',
    PACKAGE = 'package',
    OVERSIZED = 'oversized',
}

export const centsPerOunce = {
    [ShipCompany.AIR_EAST]: 0.39,
    [ShipCompany.CHICAGO_SPRINT]: 0.42,
    [ShipCompany.PACIFIC_PARCEL]: 0.51,
}

const ZipCodeAirEast = ['1','2','3'];
const ZipCodeChicagoSprint = ['4','5','6'];
const ZipCodePacificParcel = ['7','8','9'];

export const companyToZipCodes = {
    [ShipCompany.AIR_EAST]: ZipCodeAirEast,
    [ShipCompany.CHICAGO_SPRINT]: ZipCodeChicagoSprint,
    [ShipCompany.PACIFIC_PARCEL]: ZipCodePacificParcel,
}

export enum PriceType {
    PRICE_PER_OUNCE = 'prive_per_ounce',
    ADDITIONAL = 'additional',
}

export interface Price {
    value: number,
    type: PriceType,
}

type CompanyShippentPrices = {
    [key in ShipCompany]: ShipmentTypePrice[]
}

export interface ShipmentTypePrice {
    type: ShipmentType,
    price: {value: number, type: PriceType}
}

export const companyToShipmentType: CompanyShippentPrices = {
    [ShipCompany.AIR_EAST]: [
        {type: ShipmentType.LETTER, price: {value: 0.39, type: PriceType.PRICE_PER_OUNCE}},
        {type: ShipmentType.PACKAGE, price: {value: 0.25, type: PriceType.PRICE_PER_OUNCE}},
        {type: ShipmentType.OVERSIZED, price: {value: 10, type: PriceType.ADDITIONAL}},
    ],
    [ShipCompany.CHICAGO_SPRINT]: [
        {type: ShipmentType.LETTER, price: {value: 0.42, type: PriceType.PRICE_PER_OUNCE}},
        {type: ShipmentType.PACKAGE, price: {value: 0.2, type: PriceType.PRICE_PER_OUNCE}},
        {type: ShipmentType.OVERSIZED, price: {value: 0, type: PriceType.ADDITIONAL}},
    ],
    [ShipCompany.PACIFIC_PARCEL]: [
        {type: ShipmentType.LETTER, price: {value: 0.51, type: PriceType.PRICE_PER_OUNCE}},
        {type: ShipmentType.PACKAGE, price: {value: 0.19, type: PriceType.PRICE_PER_OUNCE}},
        {type: ShipmentType.OVERSIZED, price: {value: 0.02, type: PriceType.ADDITIONAL}},
    ],
}

export interface ShipmentInterface {
    ship(): string,
}

export enum ShipmentCodes {
    MARK_FRAGILE = '\n**MARK FRAGILE**',
    MARK_DO_NOT_LEAVE = '\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**',
    MARK_RETURN_RECEIPT_REQUESTED = '\n**MARK RETURN RECEIPT REQUESTED**',
}
