"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var discovery_service_1 = require("./discovery.service");
var DiscoveryComponent = (function () {
    function DiscoveryComponent(_dataService) {
        this._dataService = _dataService;
        this.list = [];
    }
    DiscoveryComponent.prototype.ngOnInit = function () {
        this.getArts();
    };
    DiscoveryComponent.prototype.getArts = function () {
        var _this = this;
        this._dataService.getAllWithoutModel()
            .subscribe(function (data) { return _this.list = data.arts; }, function () { return console.log('data load complete'); });
    };
    return DiscoveryComponent;
}());
DiscoveryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'artrium-discovery',
        templateUrl: 'discovery.html',
        providers: [discovery_service_1.DiscoveryService],
        styleUrls: [
            'discovery.css'
        ]
    }),
    __metadata("design:paramtypes", [discovery_service_1.DiscoveryService])
], DiscoveryComponent);
exports.DiscoveryComponent = DiscoveryComponent;
//# sourceMappingURL=discovery.component.js.map