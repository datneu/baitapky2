import { useState } from "react";

function ProductForm({ onProductCreate }) {
    const [name, setName] = useState("");
    const [price1, setPrice1] = useState("");
    const [price2, setPrice2] = useState("");
    const [discount, setDiscount] = useState("");
    const [description, setDescription] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePrice1Change = (event) => {
        setPrice1(event.target.value);
    };
    const handlePrice2Change = (event) => {
        setPrice2(event.target.value);
    };
    const handleDiscountChange = (event) => {
        setDiscount(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Tạo một đối tượng sản phẩm mới
        const newProduct = {
            name: name,
            price1: price1,
            price2: price2,
            discount:discount,
            description: description,
        };

        // Gọi hàm callback để truyền sản phẩm mới về component cha
        onProductCreate(newProduct);

        // Reset các trường nhập liệu
        setName("");
        setPrice1("");
        setPrice2("");
        setDiscount("");
        setDescription("");
    };

    return (
        <div className='producform'>
            <h2 className="m-2">Thêm sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Tên sản phẩm</label>
                        <input type="text" value={name} onChange={handleNameChange} className="form-control" id="exampleFormControlInput1" placeholder="mo hinh sogoku"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3"> Giá niêm yết
                        <input type="number" value={price1} onChange={handlePrice1Change} className="form-control" placeholder="10000" name="GiaNy" />
                    </div>
                    <div className="col-3"> Giá khuyến mại
                        <input type="number" value={price2} onChange={handlePrice2Change} className="form-control" placeholder="80000" name="GiaKM" />
                    </div>
                    <div className="col-3"> Giảm giá
                        <input type="number" value={discount} onChange={handleDiscountChange} className="form-control" placeholder="80000" name="discount" />
                    </div>
                </div>
                <div className="row" >
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Mô tả sản phẩm</label>
                        <textarea value={description} onChange={handleDescriptionChange} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="đồ nhựa dành cho người lớn"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Ảnh</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                </div>
                <button type="sumit" className="btn btn-success m-3">Thêm</button>
            </form>
        </div>
    );
}

export default ProductForm;
