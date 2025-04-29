"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessoresService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ProfessoresService = class ProfessoresService {
    async create(data) {
        return await prisma.professor.create({ data });
    }
    async findAll() {
        return await prisma.professor.findMany();
    }
    async findOne(siape) {
        return await prisma.professor.findUnique({ where: { siape } });
    }
    async update(siape, data) {
        return await prisma.professor.update({
            where: { siape },
            data,
        });
    }
    async remove(siape) {
        return await prisma.professor.delete({ where: { siape } });
    }
};
exports.ProfessoresService = ProfessoresService;
exports.ProfessoresService = ProfessoresService = __decorate([
    (0, common_1.Injectable)()
], ProfessoresService);
//# sourceMappingURL=professores.service.js.map