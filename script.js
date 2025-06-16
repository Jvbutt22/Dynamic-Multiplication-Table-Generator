document.getElementById("multiplicationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const startX = parseInt(document.getElementById("startX").value);
    const endX = parseInt(document.getElementById("endX").value);
    const startY = parseInt(document.getElementById("startY").value);
    const endY = parseInt(document.getElementById("endY").value);
    const errorDiv = document.getElementById("errorMessage");
    const tableContainer = document.getElementById("tableContainer");

    errorDiv.textContent = "";
    tableContainer.innerHTML = "";

    // Validation
    if (isNaN(startX) || isNaN(endX) || isNaN(startY) || isNaN(endY)) {
        errorDiv.textContent = "Please enter valid numbers in all fields.";
        return;
    }

    if (startX < -50 || endX > 50 || startY < -50 || endY > 50) {
        errorDiv.textContent = "Numbers must be between -50 and 50.";
        return;
    }

    if (startX > endX || startY > endY) {
        errorDiv.textContent = "Start values must be less than or equal to end values.";
        return;
    }

    // Generate table
    const table = document.createElement("table");

    // Create header row
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const emptyTopLeftCell = document.createElement("th");
    headerRow.appendChild(emptyTopLeftCell);

    for (let x = startX; x <= endX; x++) {
        const th = document.createElement("th");
        th.textContent = x;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create body rows
    const tbody = document.createElement("tbody");

    for (let y = startY; y <= endY; y++) {
        const row = document.createElement("tr");

        // First column header
        const th = document.createElement("th");
        th.textContent = y;
        row.appendChild(th);

        // Multiplication cells
        for (let x = startX; x <= endX; x++) {
            const td = document.createElement("td");
            td.textContent = x * y;
            row.appendChild(td);
        }

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);
});
