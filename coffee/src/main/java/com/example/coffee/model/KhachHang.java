package com.example.coffee.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="khach_hang")
public class KhachHang {
    @Id
    private Integer ma_kh;
    private String ten_kh;
    private String dia_chi;
    private String email;
    private String sdt;

    public KhachHang(){}
    public KhachHang(String ten_kh, String dia_chi, String email, String sdt){
        this.ten_kh = ten_kh;
        this.dia_chi = dia_chi;
        this.email = email;
        this.sdt = sdt;
    }

    public Integer getma_kh(){
        return ma_kh;
    }
    public void setma_kh(Integer ma_kh){
        this.ma_kh=ma_kh;
    }
    public String getten_kh(){
        return ten_kh;
    }
    public void setten_kh(String ten_kh){
        this.ten_kh =ten_kh;
    }
    public String getdia_chi(){
        return dia_chi;
    }
    public void setdia_chi(String dia_chi){
        this.dia_chi= dia_chi;
    }
    public String getemail(){
        return email;
    }
    public void setemail(String email){
        this.email=email;
    }
    public String getsdt(){
        return sdt;
    }
    public void setsdt(String sdt){
        this.sdt=sdt;
    }
}
