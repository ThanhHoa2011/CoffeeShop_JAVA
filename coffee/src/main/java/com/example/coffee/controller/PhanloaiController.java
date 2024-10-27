package com.example.coffee.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.coffee.model.Phanloai;
import com.example.coffee.service.PhanloaiService;

@RestController
@RequestMapping("/phanloai")
@CrossOrigin(origins={"http://localhost:4200","http://localhost:3000"})
public class PhanloaiController {
    @Autowired
    private PhanloaiService phanloaiService;

    @GetMapping("/getAllCoffee")
    public List<Phanloai> getAllCoffee(){
        return phanloaiService.findAll();
    }
    @GetMapping("/getById/{ma_pl}")
    public ResponseEntity<Phanloai> getById(@PathVariable Integer ma_pl){
        Optional<Phanloai> product = phanloaiService.findById(ma_pl);
        return product.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
    }
    @PostMapping("/create")
    public Phanloai createRole(@RequestBody Phanloai product){
        return phanloaiService.save(product);
    }
    @PutMapping("/update/{ma_pl}")
    public ResponseEntity<Phanloai> updateRole(@PathVariable Integer ma_pl, @RequestBody Phanloai phanloai){
        if(phanloaiService.findById(ma_pl).isPresent()){
            phanloai.setMaPL(ma_pl);
            return ResponseEntity.ok(phanloaiService.save(phanloai));
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/delete/{ma_pl}")
    public ResponseEntity<Phanloai> deleteRole(@PathVariable Integer ma_pl){
        if(phanloaiService.findById(ma_pl).isPresent()){
            phanloaiService.deleteById(ma_pl);
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
}
