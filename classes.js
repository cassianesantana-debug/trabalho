// Classe base
class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante";
    this.ativo = ativo;
  }

  exibirInfos() {
    return `Nome: ${this.nome}\nEmail: ${this.email}\nNascimento: ${this.nascimento}\nFunção: ${this.role}\nAtivo: ${this.ativo}`;
  }
}

// Classe Admin herda de User
class Admin extends User {
  constructor(nome, email, nascimento, ativo = true) {
    super(nome, email, nascimento, "admin", ativo);
  }

  criarCurso(nomeCurso) {
    console.log(`Curso "${nomeCurso}" criado com sucesso pelo administrador ${this.nome}.`);
  }
}

// Classe Docente herda de User
class Docente extends User {
  constructor(nome, email, nascimento, ativo = true) {
    super(nome, email, nascimento, "docente", ativo);
  }

  aprovarEstudante(nomeEstudante, curso) {
    console.log(`Estudante ${nomeEstudante} aprovado no curso ${curso} pelo docente ${this.nome}.`);
  }
}

// Testar classes
 const admin1 = new Admin("Maria", "maria@escola.com", "1980-06-10");
console.log(admin1.exibirInfos());
admin1.criarCurso("Programação em JavaScript");

console.log("\n---------------------------\n");

const docente1 = new Docente("João", "joao@escola.com", "1990-02-25");
console.log(docente1.exibirInfos());
docente1.aprovarEstudante("Ana", "Python Básico");
