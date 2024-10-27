import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../productsList/style.css';
import logo from "../../assets/images/logo.png";

const HoadonList = () => {
    const [hoadon, setHoadon] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/donhang/getAllCoffee')
        .then(response => {
            console.log(response.data);
            setHoadon(response.data);
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

    // const Update = (ma_dh) => {
    //     navigate(`/donhang/edit/${ma_dh}`);
    // };
    // const Delete = (ma_kh) => {
    //     if (window.confirm('Are you sure you want to delete this cart?')) {
    //         axios.delete(`http://localhost:8080/khachhang/delete/${ma_kh}`)
    //             .then(() => {
    //                 setKhachhang(khachhang.filter(kh => kh.ma_kh !== ma_kh));
    //                 toast.success('Deleted successfully!');
    //             })
    //             .catch(error => console.error('Error deleting cart:', error));
    //     }
    // };
    // const filteredKhachhang = khachhang.filter(kh =>
    //     kh.ten_kh.toString().includes(searchQuery.toString()) ||
    //     kh.dia_chi.toString().includes(searchQuery.toString()) ||
    //     kh.email.toString().includes(searchQuery.toString())||
    //     kh.sdt.toString().includes(searchQuery.toString())
    // );

    return(
        <div>
            <header className="header3">
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
                        <li><Link to="/">Đăng Xuất</Link></li>
                    </ul>
                </nav>

                <main className="content">
                    <section id="dashboard">
                        <h2 className='tieude'>Quản Lý Đơn Hàng</h2>
                        <p>Chào mừng đến với trang quản lý đơn hàng.</p>
                    </section>

                    <section id="manage-products">
                        {/* <button onClick={() => navigate("/donhang/new")}>Thêm Khách Hàng Mới</button> */}
                        <table>
                            <thead>
                                <tr>
                                    <th>Mã Đơn Hàng</th>
                                    <th>Ngày đặt</th>
                                    <th>Tổng tiền</th>
                                    <th>Mã Khách Hàng</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {message}
                                {filteredHoadon.map(dh =>
                                    <tr key={dh.ma_dh}>
                                        <td>{dh.ngay_dat}</td>
                                        <td>{dh.tong_tien}</td>
                                        <td>{dh.ma_kh}</td>
                                        <td>
                                            <button onClick={() => Update(dh.ma_dh)}>Sửa</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody> */}
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

export default HoadonList;