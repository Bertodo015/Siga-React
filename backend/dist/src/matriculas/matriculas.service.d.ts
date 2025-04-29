export declare class MatriculasService {
    create(data: any): Promise<any>;
    findAll(): Promise<any>;
    findOne(fk_disciplinas_id: number, fk_estudantes_fk_usuarios_id: number): Promise<any>;
    update(fk_disciplinas_id: number, fk_estudantes_fk_usuarios_id: number, data: any): Promise<any>;
    remove(fk_disciplinas_id: number, fk_estudantes_fk_usuarios_id: number): Promise<any>;
}
