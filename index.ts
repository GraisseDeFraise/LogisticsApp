interface ITransport {

    deliver();
}

class Truck implements ITransport {

    deliver() {

        console.log('transport: truck delivery');
    }
}

class Ship implements ITransport {

    deliver() {

        console.log('transport: ship delivery');
    }
}

abstract class Logistics {

    public abstract createTransport(): ITransport;

    public planDelivery() {

        const transport = this.createTransport();
        transport.deliver();
    }
}

class RoadLogistics extends Logistics {

    public createTransport(): ITransport {

        return new Truck();
    }
}

class SeaLogistics extends Logistics {

    public createTransport(): ITransport {

        return new Ship();
    }
}

function clientCode(logistics: Logistics) {

    console.log('client: some logistics');
    logistics.planDelivery();
}

console.log('');

console.log('app: road logistics')
clientCode(new RoadLogistics());

console.log('');

console.log('app: sea logistics')
clientCode(new SeaLogistics());

console.log('');