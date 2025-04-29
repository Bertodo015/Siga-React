export declare class ProfessoresService {
    create(data: any): Promise<{
        fk_usuarios_id: number;
        siape: number;
    }>;
    findAll(): Promise<{
        fk_usuarios_id: number;
        siape: number;
    }[]>;
    findOne(siape: number): Promise<{
        fk_usuarios_id: number;
        siape: number;
    } | null>;
    update(siape: number, data: any): Promise<{
        fk_usuarios_id: number;
        siape: number;
    }>;
    remove(siape: number): Promise<{
        fk_usuarios_id: number;
        siape: number;
    }>;
}
