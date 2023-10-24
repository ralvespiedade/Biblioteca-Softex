export class LivroModel {
    constructor(public titulo: String,
        public autor : String,
        public outrosAutores: String,
        public edicao: String,
        public publicacao : String,
        public paginas : String,
        public isbn : String,
        public assuntos : String

    ) {}
  
    set setTituloLivro(titulo) {
        this.titulo = titulo;
    }

    set setAutorLivro(autor) {
        this.autor = autor;
    }

    set setOutrosAutoresLivro(outrosAutores) {
        this.outrosAutores = outrosAutores;
    }

    set setEdicaoLivro(edicao) {
        this.edicao = edicao;
    }

    set setPublicacaoLivro(publicacao) {
        this.publicacao = publicacao;
    }

    set setPaginasLivro(paginas) {
        this.paginas = paginas;
    }

    set setIsbnLivro(isbn) {
        this.isbn = isbn;
    }

    set setAssuntosLivro(assuntos) {
        this.assuntos = assuntos;
    }

    //métodos GET
    get getTituloLivro() {
        return this.titulo;
    }

    get getAutorLivro() {
        return this.autor;
    }

    get getOutrosAutoresLivro() {
        return this.outrosAutores;
    }

    get getEdicaoLivro() {
        return this.edicao;
    }

    get getPublicacaoLivro() {
        return this.publicacao;
    }

    get getPaginasLivro() {
        return this.paginas;
    }

    get getIsbnLivro() {
        return this.isbn;
    }

    get getAssuntosLivro() {
        return this.assuntos;
    }
  }