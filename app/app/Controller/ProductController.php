<?php

namespace app\Controller;

include 'app/Traits/ApiResponseFormatter.php';
include 'app/Models/Product.php';

use app\Models\Product;
use app\Traits\ApiResponseFormatter;

class ProductController
{
    use ApiResponseFormatter;

    public function index()
    {
        // DEFINISI OBJEK MODEL PRODUCT YANG SUDAH DIBUAT
        $productModel = new Product();
        $response = $productModel->findAll();
        // RETURN $RESPONSE DENGAN MELAKUKAN FORMATTING TERLEBIH DAHULU MENGGUNAKAN TRAIT YANG SUDAH DIPANGGIL
        return $this->ApiResponse(200, "success", $response);
    }

    public function getById($id)
    {
        $productModel = new Product();
        $response = $productModel->findById($id);
        return $this->ApiResponse(200, "success", $response);
    }

    public function insert()
    {
        // tangkap input JSON
        $jsonInput = file_get_contents ('php://input');
        $inputData = json_decode($jsonInput, true);
        // validasi input valid atau tidak
        if (json_last_error()) {
            return $this->ApiResponse(400, "Eror invalid input", null);
        }

        $productModel = new Product();
        $response = $productModel->create([
            "product_name" => $inputData['product_name']
        ]);

        return $this->ApiResponse(200, "success", $response);
    }

    public function update($id)
    {
        $jsonInput = file_get_contents ('php://input');
        $inputData = json_decode($jsonInput, true);
        if (json_last_error()) {
            return $this->ApiResponse(400, "Eror invalid input", null);
        }

        $productModel = new Product();
        $response = $productModel->update([
            "product_name" => $inputData['product_name']
        ], $id);

        return $this->ApiResponse(200, "success", $response);
    }

    public function delete($id)
    {
        $productModel = new Product();
        $response = $productModel->delete($id);

        return $this->ApiResponse(200, "success", $response);
    }

}