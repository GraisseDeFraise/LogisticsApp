var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.deliver = function () {
        console.log('transport: truck delivery');
    };
    return Truck;
}());
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.deliver = function () {
        console.log('transport: ship delivery');
    };
    return Ship;
}());
var Logistics = /** @class */ (function () {
    function Logistics() {
    }
    Logistics.prototype.planDelivery = function () {
        var transport = this.createTransport();
        transport.deliver();
    };
    return Logistics;
}());
var RoadLogistics = /** @class */ (function (_super) {
    __extends(RoadLogistics, _super);
    function RoadLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoadLogistics.prototype.createTransport = function () {
        return new Truck();
    };
    return RoadLogistics;
}(Logistics));
var SeaLogistics = /** @class */ (function (_super) {
    __extends(SeaLogistics, _super);
    function SeaLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeaLogistics.prototype.createTransport = function () {
        return new Ship();
    };
    return SeaLogistics;
}(Logistics));
function clientCode(logistics) {
    console.log('client: some logistics');
    logistics.planDelivery();
}
console.log('');
console.log('app: road logistics');
clientCode(new RoadLogistics());
console.log('');
console.log('app: sea logistics');
clientCode(new SeaLogistics());
console.log('');
