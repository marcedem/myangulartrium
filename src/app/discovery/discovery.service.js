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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var Observable_1 = require("rxjs/Observable");
var DiscoveryService = (function () {
    function DiscoveryService(_http) {
        var _this = this;
        this._http = _http;
        this.GetAll = function () {
            return _this._http.get(_this.actionUrl)
                .map(function (response) { return response.json()[1]; })
                .catch(_this.handleError);
        };
        this.GetSingle = function (id) {
            return _this._http.get(_this.actionUrl + id)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.Add = function (itemName) {
            var toAdd = JSON.stringify({ ItemName: itemName });
            return _this._http.post(_this.actionUrl, toAdd, { headers: _this.headers })
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.Update = function (id, itemToUpdate) {
            return _this._http.put(_this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: _this.headers })
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.Delete = function (id) {
            return _this._http.delete(_this.actionUrl + id)
                .catch(_this.handleError);
        };
        this.actionUrl = 'https://staging.artrium.me/api/top_rated_arts';
        this.headers = new http_1.Headers();
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    DiscoveryService.prototype.getAllWithoutModel = function () {
        return this._http.get(this.actionUrl).map(function (res) { return res.json(); });
    };
    DiscoveryService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return DiscoveryService;
}());
DiscoveryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DiscoveryService);
exports.DiscoveryService = DiscoveryService;
//# sourceMappingURL=discovery.service.js.map