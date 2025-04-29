"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculasService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let MatriculasService = class MatriculasService {
    async create(data) {
        return await prisma.matricula.create({ data });
    }
    async findAll() {
        return await prisma.matricula.findMany();
    }
    async findOne(fk_disciplinas_id, fk_estudantes_fk_usuarios_id) {
        return await prisma.matricula.findUnique({
            where: {
                fk_disciplinas_id_fk_estudantes_fk_usuarios_id: {
                    fk_disciplinas_id,
                    fk_estudantes_fk_usuarios_id
                }
            }
        });
    }
    async update(fk_disciplinas_id, fk_estudantes_fk_usuarios_id, data) {
        return await prisma.matricula.update({
            where: {
                fk_disciplinas_id_fk_estudantes_fk_usuarios_id: {
                    fk_disciplinas_id,
                    fk_estudantes_fk_usuarios_id
                }
            },
            data,
        });
    }
    async remove(fk_disciplinas_id, fk_estudantes_fk_usuarios_id) {
        return await prisma.matricula.delete({
            where: {
                fk_disciplinas_id_fk_estudantes_fk_usuarios_id: {
                    fk_disciplinas_id,
                    fk_estudantes_fk_usuarios_id
                }
            }
        });
    }
};
exports.MatriculasService = MatriculasService;
exports.MatriculasService = MatriculasService = __decorate([
    (0, common_1.Injectable)()
], MatriculasService);
//# sourceMappingURL=matriculas.service.js.map