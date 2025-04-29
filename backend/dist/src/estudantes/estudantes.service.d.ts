export declare class EstudantesService {
    create(data: any): Promise<{
        fk_usuarios_id: number;
        ra: number;
    }>;
    findAll(): Promise<{
        fk_usuarios_id: number;
        ra: number;
    }[]>;
    findOne(ra: number): Promise<{
        fk_usuarios_id: number;
        ra: number;
    } | null>;
    update(ra: number, data: any): Promise<{
        fk_usuarios_id: number;
        ra: number;
    }>;
    remove(ra: number): Promise<{
        fk_usuarios_id: number;
        ra: number;
    }>;
}
