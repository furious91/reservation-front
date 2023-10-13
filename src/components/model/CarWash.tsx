import {Service} from "./Service";

export class CarWash {
    id: number;
    name: string;
    address: string;
    longitude: number;
    latitude: number;
    services: Array<Service>;

    constructor(id: number, name: string, address: string, longitude: number, latitude: number, services: Array<Service>) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.services = services;
    }


}