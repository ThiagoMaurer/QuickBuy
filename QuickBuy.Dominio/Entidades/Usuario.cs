using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
    public class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }

        /// <summary>
        ///  Um usuário pode ter nenhum ou muitos pedidos.
        /// </summary>
        public virtual ICollection<Pedido> Pedidos { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (string.IsNullOrEmpty(Email))
                AdicionarMensagemValidacao("ERRO: O email não foi inserido.");

            if (string.IsNullOrEmpty(Senha))
                AdicionarMensagemValidacao("ERRO: A senha não foi inserida.");

            if (string.IsNullOrEmpty(Nome))
                AdicionarMensagemValidacao("ERRO: Um nome deve ser inserido.");
        }
    }
}
