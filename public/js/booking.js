
function calcTotal() {
  const totalDisplay = document.getElementById("totalDisplay");
  const nightText = document.getElementById("nightText");
  const pricePerNight = Number(document.getElementById("pricePerNight").value);
  const checkIn = document.querySelector("#checkIn").value;
  const checkOut = document.querySelector("#checkOut").value;
  const guests = Number(document.getElementById("guestInput").value);

  if (!checkIn || !checkOut) return;
  if (checkIn && checkOut) {
    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const nights = (end - start) / (1000 * 60 * 60 * 24);
    const defaultPrice = 1000;

     if (nights > 0) {
      const total = nights * pricePerNight;

      totalDisplay.innerText = `Total amount = ₹${total}`;
      nightText.innerText = `for ${nights} night${nights > 1 ? "s" : ""}`;
      document.getElementById("totalPrice").value = total;
    } else {
      totalDisplay.innerText = `Total amount = ₹${defaultPrice}`;
      nightText.innerText = "";
      document.getElementById("totalPrice").value = defaultPrice; 
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const checkIn = document.getElementById("checkIn");
  const checkOut = document.getElementById("checkOut");
  let checkOutPicker;

  const checkInPicker = flatpickr(checkIn, {
    minDate: "today",
    dateFormat: "Y-m-d",

    onChange: function (selectedDates) {
      if (selectedDates.length > 0 && checkOutPicker) {
        checkOutPicker.set("minDate", selectedDates[0]);
      }
    }
  });
  checkOutPicker = flatpickr(checkOut, {
    minDate: "today",
    dateFormat: "Y-m-d",
    onChange: function () {
    calcTotal();
    }
  });

  const forms = document.querySelectorAll(".needs-validation-reserve");

  Array.from(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
    const checkInInput = checkIn.value.trim();
    const checkOutInput = checkOut.value.trim();

    checkIn.setCustomValidity("");
    checkOut.setCustomValidity("");

    let isValid = true;

    if (!checkInInput) {
        checkIn.setCustomValidity("Required");
        isValid = false;
    }

    if (!checkOutInput) {
        checkOut.setCustomValidity("Required");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add("was-validated");
    });
  });
  
});

let guests = 1;
function changeGuest(val) {
    guests += val;

    if (guests < 1) guests = 1;
    if (guests > 5) guests = 5;

    document.getElementById("guestCount").innerText = guests;
    document.getElementById("guestInput").value = guests;

}