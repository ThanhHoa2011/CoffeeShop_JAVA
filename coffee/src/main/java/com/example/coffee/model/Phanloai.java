package com.example.coffee.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="phan_loai")
public class Phanloai {
    @Id
    private Integer ma_pl;
    private String ten_pl;

    public Phanloai(){}
    public Phanloai(String ten_pl){
        this.ten_pl=ten_pl;
    }
    public Integer getma_pl(){
        return ma_pl;
    }
    public void setMaPL(Integer ma_pl){
        this.ma_pl = ma_pl;
    }
    public String getten_pl(){
        return ten_pl;
    }
    public void set(String ten_pl){
        this.ten_pl=ten_pl;
    }
}
