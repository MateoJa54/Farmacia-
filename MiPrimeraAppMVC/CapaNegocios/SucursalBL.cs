using CapaDatos;
using CapaEntidad;

namespace CapaNegocios
{
    public class SucursalBL
    {
        public List<SucursalCLS> listarSucursales()
        {
            SucursalDAL obj = new SucursalDAL();
            return obj.listarSucursales();
        }

        public List<SucursalCLS> filtrarSucursales(SucursalCLS objSucursal)
        {
            SucursalDAL obj = new SucursalDAL();

            return obj.filtrarSucursales(objSucursal);
        }
    }
}
