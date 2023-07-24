function showMyDetails() {
    document.getElementById("myDetails").style.display = "block";
    document.getElementById("myOrders").style.display = "none";
    }
    
    function showMyOrders() {
    document.getElementById("myDetails").style.display = "none";
    document.getElementById("myOrders").style.display = "block";
    }
    
    function cancelOrder() {
    // Add code here to handle the order cancellation logic
    alert("Order cancelled!");
    }