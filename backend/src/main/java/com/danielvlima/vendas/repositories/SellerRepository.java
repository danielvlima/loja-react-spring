package com.danielvlima.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danielvlima.vendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{

}
