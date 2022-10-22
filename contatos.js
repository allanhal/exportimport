let listaDeContatos = [
  {
    id: 1,
    nome: "allan",
    telefone: "123123123123",
  },
  {
    id: 2,
    nome: "lourao da dc",
    telefone: "333333",
  },
];

function lista() {
  return listaDeContatos;
}

function criar(contato) {
  listaDeContatos.push(contato);
}

function deletar(id) {
  listaDeContatos = listaDeContatos.filter((contato) => contato.id !== id);
}

function editar(id, contato) {
  let contatoEncontrado = listaDeContatos.find((contato) => contato.id === id);
  contatoEncontrado.nome = contato.nome
  contatoEncontrado.telefone = contato.telefone
}
