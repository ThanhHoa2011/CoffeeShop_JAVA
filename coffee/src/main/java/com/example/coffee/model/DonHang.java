package com.example.coffee.model;

import java.time.OffsetDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="don_hang")
public class DonHang {
    @Id
    private Integer ma_dh;
    private OffsetDateTime ngay_dat;
    private float tong_tien;
    private Integer ma_kh;

    public DonHang(){}
    public DonHang(OffsetDateTime ngay_dat, float tong_tien, Integer ma_kh){
        this.ngay_dat =ngay_dat;
        this.tong_tien=tong_tien;
        this.ma_kh =ma_kh;
    }
    public Integer ma_dh(){
        return ma_dh;
    }
    public void setma_dh(Integer ma_dh){
        this.ma_dh=ma_dh;
    }
    public OffsetDateTime getngay_dat(){
        return ngay_dat;
    }
    public void setngay_dat(OffsetDateTime ngay_dat){
        this.ngay_dat =ngay_dat;
    }
    public float gettong_tien(){
        return tong_tien;
    }
    public void settong_tien(float tong_tien){
        this.tong_tien = tong_tien;
    }
    public Integer getma_kh(){
        return ma_kh;
    }
    public void setma_kh(Integer ma_kh){
        this.ma_kh =ma_kh;
    }
}

