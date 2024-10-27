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
    const { ma_sp } = useParams();

    useEffect(() => {
        if (ma_sp) {
            axios.get(`http://localhost:8080/sanpham/getById/${ma_sp}`)
                .then(response => {
                    const sanpham = response.data;
                    setValue('ma_sp', sanpham.ma_sp);
                    setValue('ten_sp', sanpham.ten_sp);
                    setValue('gia', sanpham.gia);
                    setValue('mo_ta', sanpham.mo_ta);
                    setValue('ma_pl', sanpham.ma_pl);
                })
                .catch(error => console.error('Lỗi nè:', error));
        }
    }, [ma_sp, setValue]);

    const onSubmit = (data) => {
        const sanpham = {
            ...data
        };

        if (ma_sp) {
            axios.put(`http://localhost:8080/sanpham/update/${ma_sp}`, sanpham)
                .then(() => {
                    toast.success('Cập nhật thành công!');
                    setTimeout(() => navigate('/sanpham'), 2000);
                })
                .catch(error => console.error('Lỗi nè:', error));
        } 
        else {
            console.log(sanpham);
            axios.post('http://localhost:8080/sanpham/create', sanpham)
                .then(() => {
                    toast.success('Tạo thành công !');
                    setTimeout(() => navigate('/sanpham'), 2000);
                })
                .catch(error => console.error('Lỗi tạo mới sản phẩm', error));
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
                        <label for="ma_sp">Mã Sản Phẩm</label>
                        <input type="number" id="ma_sp" name="ma_sp" {...register('ma_sp', { required: 'Product id is required' })}/>
                        {errors.ma_sp && <span className="text-danger">{errors.ma_sp.message}</span>}

                        <label for="ten_sp">Tên Sản Phẩm</label>
                        <input type="text" id="ten_sp" name="ten_sp"  {...register('ten_sp', { required: 'Product id is required' })}/>
                        {errors.ten_sp && <span className="text-danger">{errors.ten_sp.message}</span>}

                        <label for="gia">Giá</label>
                        <input type="number" id="gia" name="gia" step="0.01"  {...register('gia', { required: 'Product id is required' })}/>
                        {errors.gia && <span className="text-danger">{errors.gia.message}</span>}

                        <label for="mo_ta">Mô Tả</label>
                        <textarea id="mo_ta" name="mo_ta" rows="4"  {...register('mo_ta', { required: 'Product id is required' })}></textarea>
                        {errors.mo_ta && <span className="text-danger">{errors.mo_ta.message}</span>}

                        <label for="ma_pl">Mã Phân Loại</label>
                        <input type="number" id="ma_pl" name="ma_pl"  {...register('ma_pl', { required: 'Product id is required' })}/>
                        {errors.ma_pl && <span className="text-danger">{errors.ma_pl.message}</span>}

                        <button type="submit">Lưu Sản Phẩm</button>
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