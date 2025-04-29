export declare class UsuariosService {
    create(data: any): Promise<{
        id: number;
        cpf: string;
        foto: string | null;
        email: string;
        data_nascimento: Date | null;
        nome: string;
        senha: string;
    }>;
    findAll(): Promise<{
        id: number;
        cpf: string;
        foto: string | null;
        email: string;
        data_nascimento: Date | null;
        nome: string;
        senha: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        cpf: string;
        foto: string | null;
        email: string;
        data_nascimento: Date | null;
        nome: string;
        senha: string;
    } | null>;
    update(id: number, data: any): Promise<{
        id: number;
        cpf: string;
        foto: string | null;
        email: string;
        data_nascimento: Date | null;
        nome: string;
        senha: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        cpf: string;
        foto: string | null;
        email: string;
        data_nascimento: Date | null;
        nome: string;
        senha: string;
    }>;
}
