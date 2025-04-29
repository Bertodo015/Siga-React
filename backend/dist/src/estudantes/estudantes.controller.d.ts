import { EstudantesService } from './estudantes.service';
export declare class EstudantesController {
    private readonly estudantesService;
    constructor(estudantesService: EstudantesService);
    create(body: any): Promise<{
        fk_usuarios_id: number;
        ra: number;
    }>;
    findAll(): Promise<{
        fk_usuarios_id: number;
        ra: number;
    }[]>;
    findOne(id: string): Promise<{
        fk_usuarios_id: number;
        ra: number;
    } | null>;
    update(id: string, body: any): Promise<{
        fk_usuarios_id: number;
        ra: number;
    }>;
    remove(id: string): Promise<{
        fk_usuarios_id: number;
        ra: number;
    }>;
}
