package com.example.coffee.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="san_pham")
public class Sanpham {
    @Id
    private Integer ma_sp;

    // @GeneratedValue(strategy=GenerationType.IDENTITY)

    private String ten_sp;
    private float gia;
    private String mo_ta;
    private Integer ma_pl;

    public Sanpham (){}
    public Sanpham(String ten_sp, float gia, String mo_ta, Integer ma_pl){
        this.ten_sp = ten_sp;
        this.gia = gia;
        this.mo_ta = mo_ta;
        this.ma_pl = ma_pl;
    }
    public Integer getma_sp(){
        return ma_sp;
    }
    public void setma_sp(Integer ma_sp){
        this.ma_sp=ma_sp;
    }
    public String getten_sp(){
        return ten_sp;
    }
    public void setten_sp(String ten_sp){
        this.ten_sp = ten_sp;
    }
    public float getgia(){
        return gia;
    }
    public void setgia(float gia){
        this.gia = gia;
    }
    public String getmo_ta(){
        return mo_ta;
    }
    public void setmo_ta (String mo_ta){
        this.mo_ta = mo_ta;
    }
    public Integer getma_pl(){
        return ma_pl;
    }
    public void setma_pl(Integer ma_pl){
        this.ma_pl = ma_pl;
    }
}
