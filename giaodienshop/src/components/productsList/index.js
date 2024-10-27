import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import logo from "../../assets/images/logo.png";

const ProductsList = () => {
    const [sanpham, setSanpham] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/sanpham/getAllCoffee')
        .then(response => {
            console.log(response.data);
            setSanpham(response.data);
            setLoading(false);
            // const fetchStatusName = orderData.map(order => {
            //     return axios.get(`http://localhost:8080/status/getById/${order.status_id}`)
            //         .then(status => {
            //             const statusname = status.data.status_name;
            //             return axios.get(`http://localhost:8080/customers/getById/${order.customer_id}`)
            //                 .then(customer => {
            //                     const customername = customer.data.customer_name;
            //                     return { ...order, statusName: statusname, customerName: customername };
            //                 });
            //         });
            // });

            // Promise.all(fetchStatusName)
            //     .then(updatedAcc => {
            //         setOrders(updatedAcc);
            //         setLoading(false);
            //     });
        })
        .catch(error => console.error('Lỗi:', error));
    }, []);

    let message;

    if (loading) {
        message = <tr className='manage'><td>Loading...</td></tr>;
    }

    const Update = (ma_sp) => {
        navigate(`/sanpham/edit/${ma_sp}`);
    };
    const Delete = (ma_sp) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
            axios.delete(`http://localhost:8080/sanpham/delete/${ma_sp}`)
                .then(() => {
                    setSanpham(sanpham.filter(sp => sp.ma_sp !== ma_sp));
                    toast.success('Xóa thành công!');
                })
                .catch(error => console.error('Lỗi xóa:', error));
        }
    };
    const filteredSanpham = sanpham.filter(sp =>
        sp.ten_sp.toString().includes(searchQuery.toString()) ||
        sp.gia.toString().includes(searchQuery.toString()) ||
        sp.mo_ta.toString().includes(searchQuery.toString())
    );

    return(
        <div>
            <header className='header3'>
                <img src={logo} alt="Logo" className="logo1"/>
                <h1>Trang Quản Trị Viên</h1>
            </header>
            <div className="container">
                <nav className="sidebar">
                    <ul>
                        {/* <li><Link href="dashboard.html">Dashboard</Link></li> */}
                        <li><Link to="/sanpham">Quản Lý Sản Phẩm</Link></li>
                        <li><Link to="/donhang">Quản Lý Đơn Hàng</Link></li>
                        <li><Link to="/khachhang">Quản Lý Khách Hàng</Link></li>
                        <li><Link href="resigter.html">Đăng Xuất</Link></li>
                    </ul>
                </nav>

                <main className="content">
                    <section id="dashboard">
                        <h2 className='tieude'>Quản Lý Sản Phẩm</h2>
                        <p>Chào mừng đến với trang quản lý sản phẩm.</p>
                    </section>

                    <section id="manage-products">
                        <button onClick={() => navigate("/sanpham/new")}>Thêm Sản Phẩm Mới</button>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {message}
                                {filteredSanpham.map(sp =>
                                    <tr key={sp.ma_sp}>
                                        <td>{sp.ma_sp}</td>
                                        <td>{sp.ten_sp}</td>
                                        <td>{sp.gia} VNĐ</td>
                                        <td><button onClick={() => Update(sp.ma_sp)}>Sửa</button> <button onClick={() => Delete(sp.ma_sp)}>Xóa</button></td>
                                    </tr>
                                )}
                                {/* <tr>
                                    <td>2</td>
                                    <td>Cà Phê Robusta</td>
                                    <td>100,000 VNĐ</td>
                                    <td><button>Sửa</button> <button>Xóa</button></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
            <footer>
                <p>&copy; 2024 Taka Coffee Shop - Admin Dashboard</p>
            </footer>
            <ToastContainer/>
        </div>
    );
};

export default ProductsList;