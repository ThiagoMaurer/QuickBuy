using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Dominio.Contrato
{
    public interface IUsuarioRepositorio : IBaseRepositorio<Usuario>
    {
        Usuario Obter(string email, string senha);
    }
}
