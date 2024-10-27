import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../productsList/style.css';
import { useForm } from 'react-hook-form';
import logo from "../../assets/images/logo.png";
const ProductsForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { ma_kh } = useParams();

    useEffect(() => {
        if (ma_kh) {
            axios.get(`http://localhost:8080/khachhang/getById/${ma_kh}`)
                .then(response => {
                    const khachhang = response.data;
                    setValue('ma_kh', khachhang.ma_kh);
                    setValue('ten_kh', khachhang.ten_kh);
                    setValue('dia_chi', khachhang.dia_chi);
                    setValue('email', khachhang.email);
                    setValue('sdt', khachhang.sdt);
                })
                .catch(error => console.error('Lỗi nè:', error));
        }
    }, [ma_kh, setValue]);

    const onSubmit = (data) => {
        const khachhang = {
            ...data
        };

        if (ma_kh) {
            axios.put(`http://localhost:8080/khachhang/update/${ma_kh}`, khachhang)
                .then(() => {
                    toast.success('Cập nhật thành công!');
                    setTimeout(() => navigate('/khachhang'), 2000);
                })
                .catch(error => console.error('Lỗi nè:', error));
        } 
        else {
            console.log(khachhang);
            axios.post('http://localhost:8080/khachhang/create', khachhang)
                .then(() => {
                    toast.success('Tạo thành công !');
                    setTimeout(() => navigate('/khachhang'), 2000);
                })
                .catch(error => console.error('Lỗi tạo mới khách hàng', error));
        }
    };
    return (
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="ma_kh">Mã Khách Hàng</label>
                        <input type="number" id="ma_kh" name="ma_kh" {...register('ma_kh', { required: 'Mã khách hàng không được bỏ trống' })}/>
                        {errors.ma_kh && <span className="text-danger">{errors.ma_kh.message}</span>}

                        <label htmlFor="ten_kh">Tên Khách Hàng</label>
                        <input type="text" id="ten_kh" name="ten_kh"  {...register('ten_kh', { required: 'Tên khách hàng không được bỏ trống' })}/>
                        {errors.ten_kh && <span className="text-danger">{errors.ten_kh.message}</span>}
                        
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email"  {...register('email', { required: 'Email không được bỏ trống' })}/>
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}

                        <label htmlFor="dia_chi">Địa Chỉ</label>
                        <textarea id="dia_chi" name="dia_chi" rows="4"  {...register('dia_chi', { required: 'Product id is required' })}></textarea>
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}

                        <label htmlFor="sdt">SĐT</label>
                        <input type="number" id="sdt" name="sdt"  {...register('sdt', { required: 'Product id is required' })}/>
                        {errors.sdt && <span className="text-danger">{errors.sdt.message}</span>}

                        <button type="submit">Lưu Khách Hàng </button>
                    </form>
                </main>
            </div>
            <footer>
                <p>&copy; 2024 Taka Coffee Shop - Admin Dashboard</p>
            </footer>
            <ToastContainer/>
        </div>
    );
};

export default ProductsForm;