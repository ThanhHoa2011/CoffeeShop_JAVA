import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './trangchu.css';
import logo from "../../assets/images/logo.png";
import hinhminhhoa from "../../assets/images/—Pngtree—americano coffee beans transparent white_9097377.png";
import arabica from "../../assets/images/arabrica.jpg";
import meme from "../../assets/images/mememeo.jpg";
import robusta from "../../assets/images/robusta.jpg";
import espresso from "../../assets/images/espresso.jpg";
import netcafe from "../../assets/images/netcafe.jpg";

const TrangchuList = () => {
    const [trangchu, setTrangchu] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/trangchu/getAllCoffee')
        .then(response => {
            console.log(response.data);
            setTrangchu(response.data);
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

    // const Update = (ma_sp) => {
    //     navigate(`/sanpham/edit/${ma_sp}`);
    // };
    // const Delete = (ma_sp) => {
    //     if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
    //         axios.delete(`http://localhost:8080/sanpham/delete/${ma_sp}`)
    //             .then(() => {
    //                 setSanpham(sanpham.filter(sp => sp.ma_sp !== ma_sp));
    //                 toast.success('Xóa thành công!');
    //             })
    //             .catch(error => console.error('Lỗi xóa:', error));
    //     }
    // };
    // const filteredSanpham = sanpham.filter(sp =>
    //     sp.ten_sp.toString().includes(searchQuery.toString()) ||
    //     sp.gia.toString().includes(searchQuery.toString()) ||
    //     sp.mo_ta.toString().includes(searchQuery.toString())
    // );

    return(
        <div>
            <header className='header4'>
                <div class="header2">
                    <div class="logo-and-name">
                        <img src={logo} alt="Taka Coffee Shop Logo" class="logo2"/>
                        <h1 class="shop-name">Lesley Coffee Shop</h1>
                    </div>
                    <nav class="menu">
                        <a href="#">Trang Chủ</a>
                        <a href="#">Sản Phẩm</a>
                        <a href="#">Giới Thiệu</a>
                        <a href="#">Liên Hệ</a>
                    </nav>
                </div>
            </header>
            
            <main>
                <section class="hero">
                    <div class="hero-content">
                        <div class="hero-text">
                            <h2>Chào Mừng Đến Với Cửa Hàng Cà Phê Của Chúng Tôi</h2>
                            <p>Khám phá hương vị cà phê tuyệt vời từ những hạt cà phê nguyên chất!</p>
                            <a href="#" class="btn">Khám Phá Ngay</a>
                        </div>
                        <div class="hero-image">
                            <img src={hinhminhhoa} alt="Hình minh họa" class="image-right"/>
                        </div>
                    </div>
                </section>
                <section class="products">
                    <h2>Sản Phẩm Nổi Bật</h2>
                    <img src={meme} alt="meme" className='img-minhhoa' />
                    <div class="product-card">
                        <img src={arabica} alt="arabica"/>
                        <h3>Cà phê Arabica</h3>
                        <p>Giá: 100,000 VNĐ</p>
                        <a href="#" class="btn">Mua Ngay</a>
                    </div>
                    <div class="product-card">
                        <img src={robusta} alt="robusta"/>
                        <h3>Cà phê Robusta</h3>
                        <p>Giá: 90,000 VNĐ</p>
                        <a href="#" class="btn">Mua Ngay</a>
                    </div>
                    <div class="product-card">
                        <img src={espresso} alt="espresso"/>
                        <h3>Cà phê Espresso</h3>
                        <p>Giá: 120,000 VNĐ</p>
                        <a href="#" class="btn">Mua Ngay</a>
                    </div>
                    <div class="product-card">
                        <img src={netcafe} alt="netcafe"/>
                        <h3>Cà phê Espresso</h3>
                        <p>Giá: 56,000 VNĐ</p>
                        <a href="#" class="btn">Mua Ngay</a>
                    </div>
                </section>
            </main>
            <footer className='footer1'>
                <p>&copy; 2024 Cửa Hàng Cà Phê Nguyên Chất. Hết tiền thì nhập hàng lậu.</p>
            </footer>
            <ToastContainer/>
        </div>
    );
};

export default TrangchuList;