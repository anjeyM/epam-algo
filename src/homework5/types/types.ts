export const enum ShipCompany {
    AIR_EAST = 'air east',
    CHICAGO_SPRINT = 'chicago sprint',
    PACIFIC_PARCEL = 'pacific parcel',
}

export const CentsPerOunce = {
    [ShipCompany.AIR_EAST]: 0.39,
    [ShipCompany.CHICAGO_SPRINT]: 0.42,
    [ShipCompany.PACIFIC_PARCEL]: 0.51,
}

const ZipCodeAirEast = ['1','2','3'];
const ZipCodeChicagoSprint = ['4','5','6'];
const ZipCodePacificParcel = ['7','8','9'];

export const CompanyToZipCodes = {
    [ShipCompany.AIR_EAST]: ZipCodeAirEast,
    [ShipCompany.CHICAGO_SPRINT]: ZipCodeChicagoSprint,
    [ShipCompany.PACIFIC_PARCEL]: ZipCodePacificParcel,
}