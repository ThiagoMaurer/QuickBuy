using QuickBuy.Dominio.Contrato;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Context;


namespace QuickBuy.Repositorio.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        /// <summary>
        /// Construtor
        /// </summary>
        public PedidoRepositorio(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {

        }
    }
}
