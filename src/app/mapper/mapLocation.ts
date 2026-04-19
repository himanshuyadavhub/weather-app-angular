import { Location } from '../models/location.model';

export function mapLocation(raw: any): Location {
    return {
        name: raw.name,
        region: raw.region,
        country: raw.country,
        localtime: raw.localtime
    };
}