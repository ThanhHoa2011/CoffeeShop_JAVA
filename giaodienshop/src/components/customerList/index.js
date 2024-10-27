import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../productsList/style.css';
import logo from "../../assets/images/logo.png";

const CustomerList = () => {
    const [khachhang, setKhachhang] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/khachhang/getAllCoffee')
        .then(response => {
            console.log(response.data);
            setKhachhang(response.data);
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
        .catch(error => console.error('Error fetching order:', error));
    }, []);

    let message;

    if (loading) {
        message = <tr className='manage'><td>Loading...</td></tr>;
    }

    const Update = (ma_kh) => {
        navigate(`/khachhang/edit/${ma_kh}`);
    };
    const Delete = (ma_kh) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
            axios.delete(`http://localhost:8080/khachhang/delete/${ma_kh}`)
                .then(() => {
                    setKhachhang(khachhang.filter(kh => kh.ma_kh !== ma_kh));
                    toast.success('Xóa thành công!');
                })
                .catch(error => console.error('Lỗi:', error));
        }
    };
    const filteredKhachhang = khachhang.filter(kh =>
        kh.ten_kh.toString().includes(searchQuery.toString()) ||
        kh.dia_chi.toString().includes(searchQuery.toString()) ||
        kh.email.toString().includes(searchQuery.toString())||
        kh.sdt.toString().includes(searchQuery.toString())
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
                        <h2 className='tieude'>Quản Lý Khách Hàng</h2>
                        <p>Chào mừng đến với trang quản lý khách hàng.</p>
                    </section>

                    <section id="manage-products">
                        <button onClick={() => navigate("/khachhang/new")}>Thêm Khách Hàng Mới</button>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên Khách Hàng</th>
                                    <th>Email</th>
                                    <th>Địa Chỉ</th>
                                    <th>SĐT</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {message}
                                {filteredKhachhang.map(kh =>
                                    <tr key={kh.ma_kh}>
                                        <td>{kh.ma_kh}</td>
                                        <td>{kh.ten_kh}</td>
                                        <td>{kh.email}</td>
                                        <td>{kh.dia_chi}</td>
                                        <td>{kh.sdt}</td>
                                        <td>
                                            <button onClick={() => Update(kh.ma_kh)}>Sửa</button>
                                            <button onClick={() => Delete(kh.ma_kh)}>Xóa</button>
                                        </td>
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

export default CustomerList;