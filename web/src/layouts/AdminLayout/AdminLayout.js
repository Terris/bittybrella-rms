import AdminHeader from 'src/components/AdminHeader'

const AdminLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <div className="bg-white font-sans px-8">
        <AdminHeader />
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
