import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../productsList/style.css';
import { useForm } from 'react-hook-form';
import logo from "../../assets/images/logo.png";
const HoadonForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { ma_dh } = useParams();

    useEffect(() => {
        if (ma_dh) {
            axios.get(`http://localhost:8080/donhang/getById/${ma_dh}`)
                .then(response => {
                    const donhang = response.data;
                    setValue('ma_dh', donhang.ma_dh);
                    setValue('ngay_dat', donhang.ngay_dat);
                    setValue('tong_tien', donhang.tong_tien);
                    setValue('ma_kh', donhang.ma_kh);
                })
                .catch(error => console.error('Lỗi nè:', error));
        }
    }, [ma_dh, setValue]);

    const onSubmit = (data) => {
        const donhang = {
            ...data
        };

        if (ma_dh) {
            axios.put(`http://localhost:8080/donhang/update/${ma_dh}`, donhang)
                .then(() => {
                    toast.success('Cập nhật thành công!');
                    setTimeout(() => navigate('/donhang'), 2000);
                })
                .catch(error => console.error('Lỗi nè:', error));
        } 
        else {
            console.log(donhang);
            axios.post('http://localhost:8080/donhang/create', donhang)
                .then(() => {
                    toast.success('Tạo thành công !');
                    setTimeout(() => navigate('/donhang'), 2000);
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
                        <label for="ma_dh">Mã Đơn Hàng</label>
                        <input type="number" id="ma_dh" name="ma_dh" {...register('ma_dh', { required: 'Product id is required' })}/>
                        {errors.ma_dh && <span className="text-danger">{errors.ma_dh.message}</span>}

                        {/* <label for="ten_kh">Tên Khách Hàng</label>
                        <input type="text" id="ten_kh" name="ten_kh"  {...register('ten_kh', { required: 'Product id is required' })}/>
                        {errors.ten_kh && <span className="text-danger">{errors.ten_kh.message}</span>}

                        <label for="dia_chi">Địa Chỉ</label>
                        <input type="text" id="diachi" name="diachi" {...register('diachi', { required: 'Product id is required' })}/>
                        {errors.dia_chi && <span className="text-danger">{errors.dia_chi.message}</span>}

                        <label for="email">Email</label>
                        <textarea id="text" name="email" rows="4"  {...register('email', { required: 'Product id is required' })}></textarea>
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}

                        <label for="sdt">SĐT</label>
                        <input type="number" id="sdt" name="sdt"  {...register('sdt', { required: 'Product id is required' })}/>
                        {errors.sdt && <span className="text-danger">{errors.sdt.message}</span>} */}

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

export default HoadonForm;