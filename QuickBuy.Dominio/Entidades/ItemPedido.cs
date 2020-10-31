namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            //LimparMensagensValidacao();

            if (ProdutoId == 0)
                AdicionarMensagemValidacao("ERRO: A referência do produto não foi identificada.");

            if (Quantidade == 0)
                AdicionarMensagemValidacao("ERRO: A quantidade não foi informada.");
        }
    }

}
