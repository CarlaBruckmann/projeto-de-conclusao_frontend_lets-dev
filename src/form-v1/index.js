// Função em const, estilo arrow function
const cancelar = () => {
  // Evita o redirecionamento padrão para outra tela e manda um alert
  event.preventDefault();
  alert("Cancelando...");
};

function tagPorNome(nomeTag, isRadioButton) {
  const tag = document.getElementsByName(nomeTag);

  if (isRadioButton) {
    for (let pos = 0; pos < tag.length; pos++) {
      if (tag[pos].checked) return tag[pos];
    }
  } else return tag[0];
}

function enviarFormulario() {
  event.preventDefault();

  const nome = tagPorNome("nome")?.value;
  const idade = tagPorNome("idade")?.value;
  const ocupacao = tagPorNome("ocupacao")?.value;
  const areaPreferencia = tagPorNome("area-preferencia", true)?.value;
  const curriculo = tagPorNome("curriculo");
  const descricaoPerfil = tagPorNome("descricao-perfil")?.value;
  const receberEmail = tagPorNome("receber-email")?.value;

  const mensagem = `${nome}, tem ${idade} anos e atualmente é ${ocupacao}. Se ingressar no mundo do desenvolvimento, tem preferência por atuar como ${areaPreferencia}.

        Em sua descrição de perfil consta: "${descricaoPerfil}".

        Deseja receber e-mail: ${receberEmail ? "Sim" : "Não"}
        Currículo: ${curriculo ? curriculo.files[0].name : "Não informado"}
        `;

  alert(mensagem);
}
