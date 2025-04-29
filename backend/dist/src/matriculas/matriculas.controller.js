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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculasController = void 0;
const common_1 = require("@nestjs/common");
const matriculas_service_1 = require("./matriculas.service");
let MatriculasController = class MatriculasController {
    matriculasService;
    constructor(matriculasService) {
        this.matriculasService = matriculasService;
    }
    create(body) {
        return this.matriculasService.create(body);
    }
    findAll() {
        return this.matriculasService.findAll();
    }
    findOne(fk_disciplinas_id_fk_estudantes_fk_usuarios_id) {
        return this.matriculasService.findOne(+fk_disciplinas_id_fk_estudantes_fk_usuarios_id);
    }
    update(fk_disciplinas_id_fk_estudantes_fk_usuarios_id, body) {
        return this.matriculasService.update(+fk_disciplinas_id_fk_estudantes_fk_usuarios_id, body);
    }
    remove(fk_disciplinas_id, fk_estudantes_fk_usuarios_id) {
        return this.matriculasService.remove(+fk_disciplinas_id, +fk_estudantes_fk_usuarios_id);
    }
};
exports.MatriculasController = MatriculasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MatriculasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatriculasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':fk_disciplinas_id_fk_estudantes_fk_usuarios_id'),
    __param(0, (0, common_1.Param)('fk_disciplinas_id_fk_estudantes_fk_usuarios_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatriculasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':fk_disciplinas_id_fk_estudantes_fk_usuarios_id'),
    __param(0, (0, common_1.Param)('fk_disciplinas_id_fk_estudantes_fk_usuarios_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MatriculasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':fk_disciplinas_id_fk_estudantes_fk_usuarios_id'),
    __param(0, (0, common_1.Param)('fk_disciplinas_id')),
    __param(1, (0, common_1.Param)('fk_estudantes_fk_usuarios_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MatriculasController.prototype, "remove", null);
exports.MatriculasController = MatriculasController = __decorate([
    (0, common_1.Controller)('matriculas'),
    __metadata("design:paramtypes", [matriculas_service_1.MatriculasService])
], MatriculasController);
//# sourceMappingURL=matriculas.controller.js.map