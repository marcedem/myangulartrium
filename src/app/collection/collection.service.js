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
var authentication_service_1 = require("../authentication/authentication.service");
var CollectionService = (function () {
    function CollectionService(_http, authenticationService) {
        this._http = _http;
        this.authenticationService = authenticationService;
        this.user = authenticationService.getLoggedUser();
        this.actionUrl = 'https://staging.artrium.me/api/users/'; /*url should be /arts*/
        this.headers = new http_1.Headers();
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    CollectionService.prototype.getAllWithoutModel = function () {
        var collectionData = {
            'session': {
                'user_token': this.user.authentication_token
            }
        };
        var options = new http_1.RequestOptions({ body: JSON.stringify(collectionData) });
        return this._http.get(this.actionUrl + this.user.id + '/favorite_arts', options).map(function (res) { return res.json(); });
    };
    return CollectionService;
}());
CollectionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, authentication_service_1.AuthenticationService])
], CollectionService);
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map