export interface Project {
  id?: string; // gerado automaticamente
  nome: string;
  descricao: string;
  professor: string;
  alunos: string[];
  desenvolvedores: string[];
  status: "A FAZER" | "EM ANDAMENTO" | "CONCLUÍDO" | "PENDENTE";
  dataCriacao: string;
  ultimaAtualizacao: string;
  criadoPor: string;
  aprovado: boolean;
}
