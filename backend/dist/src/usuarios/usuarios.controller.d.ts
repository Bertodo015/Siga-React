import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(body: any): Promise<{
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
    findOne(id: string): Promise<{
        id: number;
        cpf: string;
        foto: string | null;
        email: string;
        data_nascimento: Date | null;
        nome: string;
        senha: string;
    } | null>;
    update(id: string, body: any): Promise<{
        id: number;
        cpf: string;
        foto: string | null;
        email: string;
        data_nascimento: Date | null;
        nome: string;
        senha: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        cpf: string;
        foto: string | null;
        email: string;
        data_nascimento: Date | null;
        nome: string;
        senha: string;
    }>;
}
