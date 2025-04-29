import { DisciplinasService } from './disciplinas.service';
export declare class DisciplinasController {
    private readonly disciplinasService;
    constructor(disciplinasService: DisciplinasService);
    create(body: any): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, body: any): any;
    remove(id: string): any;
}
