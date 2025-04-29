import { MatriculasService } from './matriculas.service';
export declare class MatriculasController {
    private readonly matriculasService;
    constructor(matriculasService: MatriculasService);
    create(body: any): Promise<any>;
    findAll(): Promise<any>;
    findOne(fk_disciplinas_id_fk_estudantes_fk_usuarios_id: string): Promise<any>;
    update(fk_disciplinas_id_fk_estudantes_fk_usuarios_id: string, body: any): Promise<any>;
    remove(fk_disciplinas_id: string, fk_estudantes_fk_usuarios_id: string): Promise<any>;
}
