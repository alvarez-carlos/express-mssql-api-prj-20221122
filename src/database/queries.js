export const queries = {
    getAllProducts:  "SELECT * FROM Products",
    postNewProduct: "INSERT INTO Products (Name, Description, Quantity) VALUES (@name, @description, @quantity)", 
    getProductById: "SELECT * FROM Products WHERE Id = @Id",
    deleteProductById: "DELETE FROM Products WHERE Id = @Id",
    getTotalProducts: "SELECT COUNT(*) FROM Products",
    putProductsById: "UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id"
}