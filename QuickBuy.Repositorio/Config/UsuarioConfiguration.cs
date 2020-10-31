using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Repositorio.Config
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(u => u.Id);

            //Builder utiliza o padrão Fluent (de forma encadeada)
            builder
                .Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(50);

            builder
                .Property(u => u.Senha)
                .IsRequired()
                .HasMaxLength(400); //senha precisa ser grande pois virá criptografada

            builder
                .Property(u => u.Nome)
                .IsRequired()
                .HasMaxLength(30);

            builder
                .Property(u => u.Sobrenome)
                .HasMaxLength(30);

            ///Na classe Pedido já deixamos a referência ao Usuario de uma maneira que o EF Core seria capaz de
            ///realizar o mapeamento sozinho. Mas, ainda podemos reforçar a configuração desse mapeamento aqui dentro
            ///do UsuarioConfiguration. Sempre bom ter certeza que tá tudo certo.

            //O WithOne significa que um pedido, só pode estar ligado à um Usuario por vez
            //Isso não significa que não possa existir vários pedidos do mesmo produto por diferentes usuários (produto != pedido)
            builder
                .HasMany(u => u.Pedidos) //O HasMany configura o Pedido como uma Collection ligada ao Usuario 
                .WithOne(p => p.Usuario); //A partir do WithOne, conseguimos configurar as propriedades Pedido

            //builder.Property(u => u.Pedidos);

        }
    }
}
