using QuickBuy.Dominio.Contrato;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Context;

namespace QuickBuy.Repositorio.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Produto>, IProdutoRepositorio
    {
        public ProdutoRepositorio(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {

        }
    }
}
