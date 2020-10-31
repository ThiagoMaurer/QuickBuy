using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    /// <summary>
    /// A classe Entidade é a classe pai.
    /// Esse abstract é utilizado em classes que servem de modelo para outras classes.
    /// Uma classe abstract não pode ser instanciada.
    /// </summary>
    public abstract class Entidade
    {
        private List<string> _mensagensValidacao { get; set; }
        private List<string> mensagemValidacao
        {
            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>()); }
        }

        protected void LimparMensagensValidacao()
        {
            mensagemValidacao.Clear();
        }

        protected void AdicionarMensagemValidacao(string mensagem)
        {
            mensagemValidacao.Add(mensagem);
        }

        public abstract void Validate();
        protected bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }
       
    }
}
