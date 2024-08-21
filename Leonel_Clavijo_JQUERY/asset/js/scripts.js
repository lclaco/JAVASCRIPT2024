let lists = [];

        function add() {
            let id = $("#itemID").val();
            let name = $("#itemName").val();
            let price = parseInt($("#itemPrice").val());

            let item = {
                id: id,
                name: name,
                price: price,
            };

            lists.push(item);

            $("#itemID").val("");
            $("#itemName").val("");
            $("#itemPrice").val("");

            alert("Producto agregado exitosamente.");

            let itemList = $("#itemList");
            itemList.empty(); // Limpia la tabla antes de agregar nuevos elementos
            $.each(lists, function(index, list) {
                itemList.append(`
                <tr>
                   <td>${list.id}</td>
                   <td>${list.name}</td>
                   <td>$ ${list.price}</td>
                </tr>`);
            });
        }

        function totalPrice(){
            let sumaTotal = $("#sumaTotal");
            let total = 0;
            $.each(lists, function(index, list) {
                total += list.price;
            });
            sumaTotal.text(`$Total: ${total}`);
            console.log(total);
        }