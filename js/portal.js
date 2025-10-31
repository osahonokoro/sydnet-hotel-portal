function validateAndConfirm(form, groupName) {
    const selected = form.querySelector(`input[name="${groupName}"]:checked`);
    if (!selected) {
        alert("Please select an option before submitting.");
        return false;
    }

    const choice = selected.value;
    alert(`You selected: ${choice}. Your request has been received.`);
    return false; // Prevent actual submission for now
}
