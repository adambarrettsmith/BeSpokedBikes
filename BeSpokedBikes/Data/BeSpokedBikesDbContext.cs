using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace BeSpokedBikes.Data
{
    public partial class BeSpokedBikesDbContext : DbContext
    {
        public BeSpokedBikesDbContext()
        {
            
        }

        public BeSpokedBikesDbContext(DbContextOptions<BeSpokedBikesDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customers> Customers { get; set; }
        public virtual DbSet<Discounts> Discounts { get; set; }
        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<Sales> Sales { get; set; }
        public virtual DbSet<SalesPeople> SalesPeople { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customers>(entity =>
            {
                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.StartDate).HasColumnType("date");
            });

            modelBuilder.Entity<Discounts>(entity =>
            {
                entity.Property(e => e.BeginDate).HasColumnType("date");

                entity.Property(e => e.DiscountPercentage).HasColumnType("decimal(5, 2)");

                entity.Property(e => e.EndDate).HasColumnType("date");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Discounts)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__Discounts__Produ__5441852A");
            });

            modelBuilder.Entity<Products>(entity =>
            {
                entity.Property(e => e.CommissionPercentage).HasColumnType("decimal(5, 2)");

                entity.Property(e => e.Manufacturer)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PurchasePrice).HasColumnType("money");

                entity.Property(e => e.SalePrice).HasColumnType("money");

                entity.Property(e => e.Style)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Sales>(entity =>
            {
                entity.Property(e => e.SalesDate).HasColumnType("date");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK__Sales__CustomerI__5165187F");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__Sales__ProductId__4F7CD00D");

                entity.HasOne(d => d.SalesPerson)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.SalesPersonId)
                    .HasConstraintName("FK__Sales__SalesPers__5070F446");
            });

            modelBuilder.Entity<SalesPeople>(entity =>
            {
                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Manager)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.StartDate).HasColumnType("date");

                entity.Property(e => e.TerminationDate).HasColumnType("date");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
