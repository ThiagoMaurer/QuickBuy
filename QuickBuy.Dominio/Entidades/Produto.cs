namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (string.IsNullOrEmpty(Nome))
                AdicionarMensagemValidacao("ERRO: O nome do produto não foi inserido.");

            if (Preco == 0)
                AdicionarMensagemValidacao("ERRO: O preço do produto não foi inserido.");
            
            if (string.IsNullOrEmpty(Descricao))
                AdicionarMensagemValidacao("Atenção: O produto não tem uma descrição.");

        }
    }
}
