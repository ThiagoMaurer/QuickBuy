using QuickBuy.Dominio.Contrato;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Context;
using System.Linq;

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

        public Usuario Obter(string email, string senha)
        {
            return QuickBuyContext.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }

        public Usuario Obter(string email) //mesmo nome, mas parâmetros diferentes, logo, um método diferente
        {
            return QuickBuyContext.Usuarios.FirstOrDefault(u => u.Email == email);
        }
    }
}
