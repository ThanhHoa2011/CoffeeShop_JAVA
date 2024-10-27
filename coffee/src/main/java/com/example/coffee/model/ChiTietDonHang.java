package com.example.coffee.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="chi_tiet_don_hang")
public class ChiTietDonHang {
    @Id
    private Integer ma_ctdh;
    private Integer ma_dh;
    private Integer ma_sp;
    private Integer so_luong;
    private float don_gia;

    public ChiTietDonHang(){}
    public ChiTietDonHang(Integer ma_dh, Integer ma_sp, Integer so_luong, float don_gia){
        this.ma_dh= ma_dh;
        this.ma_sp =ma_sp;
        this.so_luong=so_luong;
        this.don_gia=don_gia;
    }
    public Integer ma_ctdh(){
        return ma_ctdh;
    }
    public void setma_ctdh(Integer ma_ctdh){
        this.ma_ctdh=ma_ctdh;
    }
    public Integer getma_sp(){
        return ma_sp;
    }
    public void setma_sp(Integer ma_sp){
        this.ma_sp=ma_sp;
    }
    public Integer getma_dh(){
        return ma_dh;
    }
    public void setma_dh(Integer ma_dh){
        this.ma_dh= ma_dh;
    }
    public Integer getso_luong(){
        return so_luong;
    }
    public void setso_luong(Integer so_luong){
        this.so_luong = so_luong;
    }
    public float getdon_gia(){
        return don_gia;
    }
    public void setDonGia(float don_gia){
        this.don_gia =don_gia;
    }

}
