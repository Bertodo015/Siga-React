import { ProfessoresService } from './professores.service';
export declare class ProfessoresController {
    private readonly professoresService;
    constructor(professoresService: ProfessoresService);
    create(body: any): Promise<{
        fk_usuarios_id: number;
        siape: number;
    }>;
    findAll(): Promise<{
        fk_usuarios_id: number;
        siape: number;
    }[]>;
    findOne(id: string): Promise<{
        fk_usuarios_id: number;
        siape: number;
    } | null>;
    update(id: string, body: any): Promise<{
        fk_usuarios_id: number;
        siape: number;
    }>;
    remove(id: string): Promise<{
        fk_usuarios_id: number;
        siape: number;
    }>;
}
