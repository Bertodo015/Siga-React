import './Disciplina.css';

export default function Disciplinas(props: {onClick:() => void}) {
    return (
        <main>
            <h2>Disciplinas</h2>
            <h3>1º Período</h3>
            <table>
                <tr>
                    <th>Disciplina</th>
                    <th>Turno</th>
                    <th>Total Aulas</th>
                    <th>Carga horária</th>
                    <th>Curso</th>
                    <th>Professor</th>
                    <th>Opções</th>
                </tr>

                <tr>
                    <td>Algoritmos 1</td>
                    <td>Noturno</td>
                    <td>80</td>
                    <td>60</td>
                    <td>PROEJA-Informática para Internet</td>
                    <td>Aurelio Junior</td>
                    <td><button onclick="location.href='matricular.php?id_disciplina=11&id_user=11'">Matricular-se</button>
                        <a href="excluirDisciplina.php?id_disciplina=11"><ion-icon name="trash"></ion-icon></a>
                    </td>
                </tr>

                <tr>
                    <td>Projeto e Design</td>
                    <td>Noturno</td>
                    <td>100</td>
                    <td>75</td>
                    <td>PROEJA-Informática para Internet</td>
                    <td>Camila</td>
                    <td><button onclick="location.href='matricular.php?id_disciplina=12&id_user=11'">Matricular-se</button>
                        <a href="excluirDisciplina.php?id_disciplina=12"><ion-icon name="trash"></ion-icon></a>
                    </td>
                </tr>

                <tr>
                    <td>Filosofia 1</td>
                    <td>Noturno</td>
                    <td>40</td>
                    <td>30</td>
                    <td>PROEJA-Informática para Internet</td>
                    <td>Ricardo </td>
                    <td><button onclick="location.href='matricular.php?id_disciplina=13&id_user=11'">Matricular-se</button>
                        <a href="excluirDisciplina.php?id_disciplina=13"><ion-icon name="trash"></ion-icon></a>
                    </td>
                </tr>

                <tr>
                    <td>Redes de Computadores</td>
                    <td>Noturno</td>
                    <td>80</td>
                    <td>60</td>
                    <td>PROEJA-Informática para Internet</td>
                    <td>Leandro Steffen</td>
                    <td><button onclick="location.href='matricular.php?id_disciplina=14&id_user=11'">Matricular-se</button>
                        <a href="excluirDisciplina.php?id_disciplina=14"><ion-icon name="trash"></ion-icon></a>
                    </td>
                </tr>

                <tr>
                    <td>Algoritmos 2</td>
                    <td>Noturno</td>
                    <td>80</td>
                    <td>60</td>
                    <td>Licenciatura em Computação</td>
                    <td>Aurelio Junior</td>
                    <td><button onclick="location.href='matricular.php?id_disciplina=15&id_user=11'">Matricular-se</button>
                        <a href="excluirDisciplina.php?id_disciplina=15"><ion-icon name="trash"></ion-icon></a>
                    </td>
                </tr>

                <tr>
                    <td>Banco de Dados</td>
                    <td>Noturno</td>
                    <td>100</td>
                    <td>75</td>
                    <td>Licenciatura em Computação</td>
                    <td>Aurelio Junior</td>
                    <td><button onclick="location.href='matricular.php?id_disciplina=16&id_user=11'">Matricular-se</button>
                        <a href="excluirDisciplina.php?id_disciplina=16"><ion-icon name="trash"></ion-icon></a>
                    </td>
                </tr>

                <tr>
                    <td>Filosofia 2</td>
                    <td>Noturno</td>
                    <td>40</td>
                    <td>30</td>
                    <td>Licenciatura em Computação</td>
                    <td>Ricardo </td>
                    <td><button onclick="location.href='matricular.php?id_disciplina=17&id_user=11'">Matricular-se</button>
                        <a href="excluirDisciplina.php?id_disciplina=17"><ion-icon name="trash"></ion-icon></a>
                    </td>
                </tr>


            </table>
            <h3>2º Período</h3>
            <table>
                <tr>
                    <th>Disciplina</th>
                    <th>Turno</th>
                    <th>Total Aulas</th>
                    <th>Carga horária</th>
                    <th>Curso</th>
                    <th>Professor</th>
                    <th>Opções</th>
                </tr>

                <tr>
                    <td>Disciplinas período 2</td>
                    <td>Matutino</td>
                    <td>4</td>
                    <td>90</td>
                    <td>Técnico em Informática</td>
                    <td>Joelson</td>
                    <td>
                        <button>Matricular-se</button>
                        <ion-icon name="trash"></ion-icon>
                    </td>
                </tr>
                <tr>
                    <td>Disciplinas período 2</td>
                    <td>Matutino</td>
                    <td>4</td>
                    <td>90</td>
                    <td>Técnico em Informática</td>
                    <td>Joelson</td>
                    <td>
                        <button>Matricular-se</button>
                        <ion-icon name="trash"></ion-icon>
                    </td>
                </tr>
            </table>
            <h3>3º Período</h3>
            <table>
                <tr>
                    <th>Disciplina</th>
                    <th>Turno</th>
                    <th>Total Aulas</th>
                    <th>Carga horária</th>
                    <th>Curso</th>
                    <th>Professor</th>
                    <th>Opções</th>
                </tr>
                <tr>
                    <td>Disciplinas período 3</td>
                    <td>Matutino</td>
                    <td>4</td>
                    <td>90</td>
                    <td>Técnico em Informática</td>
                    <td>Joelson</td>
                    <td>
                        <button>Matricular-se</button>
                        <ion-icon name="trash"></ion-icon>
                    </td>
                </tr>
                <tr>
                    <td>Disciplinas período 3</td>
                    <td>Matutino</td>
                    <td>4</td>
                    <td>90</td>
                    <td>Técnico em Informática</td>
                    <td>Joelson</td>
                    <td>
                        <button>Matricular-se</button>
                        <ion-icon name="trash"></ion-icon>
                    </td>
                </tr>
            </table>

        </main>

    )
}