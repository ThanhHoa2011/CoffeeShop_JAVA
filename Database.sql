-- Bảng khách hàng
CREATE TABLE khach_hang (
    ma_kh INT PRIMARY KEY,
    ten_kh VARCHAR(255),
    dia_chi VARCHAR(255),
    email VARCHAR(255),
    sdt VARCHAR(20)
);

-- Bảng phân loại
CREATE TABLE phan_loai (
    ma_pl INT PRIMARY KEY,
    ten_pl VARCHAR(255)
);

-- Bảng sản phẩm
CREATE TABLE san_pham (
    ma_sp INT PRIMARY KEY,
    ten_sp VARCHAR(255),
    gia float,
    mo_ta TEXT,
    ma_dm INT,
    FOREIGN KEY (ma_pl) REFERENCES phan_loai(ma_pl)
);

-- Bảng đơn hàng
CREATE TABLE don_hang (
    ma_dh INT PRIMARY KEY,
    ngay_dat DATE,
    tong_tien float,
    ma_kh INT,
    FOREIGN KEY (ma_kh) REFERENCES khach_hang(ma_kh)
);

-- Bảng chi tiết đơn hàng
CREATE TABLE chi_tiet_don_hang (
    ma_ctdh INT PRIMARY KEY,
    ma_dh INT,
    ma_sp INT,
    so_luong INT,
    don_gia float,
    FOREIGN KEY (ma_dh) REFERENCES don_hang(ma_dh),
    FOREIGN KEY (ma_sp) REFERENCES san_pham(ma_sp)
);
