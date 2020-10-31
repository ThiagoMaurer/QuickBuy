using QuickBuy.Dominio.Contrato;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Context;


namespace QuickBuy.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        /// <summary>
        /// Construtor
        /// </summary>
        public UsuarioRepositorio(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {

        }
    }
}
