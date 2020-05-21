import AdminHeader from 'src/components/AdminHeader'

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  )
}

export default AdminLayout
