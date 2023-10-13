export class Service {
    id: number;
    serviceName: string;
    price: number;

    constructor(id: number, serviceName: string, price: number) {
        this.id = id;
        this.serviceName = serviceName;
        this.price = price;
    }
}