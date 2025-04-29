"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudantesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let EstudantesService = class EstudantesService {
    async create(data) {
        return await prisma.estudante.create({ data });
    }
    async findAll() {
        return await prisma.estudante.findMany();
    }
    async findOne(ra) {
        return await prisma.estudante.findUnique({ where: { ra } });
    }
    async update(ra, data) {
        return await prisma.estudante.update({
            where: { ra },
            data,
        });
    }
    async remove(ra) {
        return await prisma.estudante.delete({ where: { ra } });
    }
};
exports.EstudantesService = EstudantesService;
exports.EstudantesService = EstudantesService = __decorate([
    (0, common_1.Injectable)()
], EstudantesService);
//# sourceMappingURL=estudantes.service.js.map